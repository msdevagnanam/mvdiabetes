import crypto from 'crypto';

/**
 * Appends form submissions to a Google Sheet using a Google Cloud service account.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   GOOGLE_SHEET_ID                — the ID from the sheet URL: docs.google.com/spreadsheets/d/<ID>/edit
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL   — e.g. mv-forms@my-project.iam.gserviceaccount.com
 *   GOOGLE_PRIVATE_KEY             — the "private_key" value from the service account JSON key
 * The sheet must be shared with the service account email as an Editor.
 * Tabs ("Appointments", "Contacts") and their header rows are created automatically.
 */

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export function isSheetsConfigured(): boolean {
    return Boolean(process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY);
}

/** Vercel stores multi-line keys with literal "\n"; restore the real line breaks. */
function privateKey(): string {
    return (process.env.GOOGLE_PRIVATE_KEY ?? '').replace(/\\n/g, '\n');
}

const base64url = (input: Buffer | string) => Buffer.from(input).toString('base64url');

let cachedToken: { value: string; expiresAt: number } | null = null;

/** Exchanges a signed service-account JWT for an OAuth access token (cached until near expiry). */
async function getAccessToken(): Promise<string> {
    if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

    const now = Math.floor(Date.now() / 1000);
    const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const claims = base64url(JSON.stringify({
        iss: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        scope: SCOPE,
        aud: TOKEN_URL,
        iat: now,
        exp: now + 3600,
    }));
    const signature = crypto.createSign('RSA-SHA256').update(`${header}.${claims}`).sign(privateKey());
    const assertion = `${header}.${claims}.${base64url(signature)}`;

    const res = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    });
    if (!res.ok) throw new Error(`Google auth failed (${res.status}): ${await res.text()}`);
    const data = (await res.json()) as { access_token: string; expires_in: number };
    cachedToken = { value: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
    return cachedToken.value;
}

async function sheetsFetch(path: string, init: RequestInit = {}) {
    const token = await getAccessToken();
    const res = await fetch(`${SHEETS_API}/${process.env.GOOGLE_SHEET_ID}${path}`, {
        ...init,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...init.headers },
    });
    if (!res.ok) throw new Error(`Google Sheets request failed (${res.status}): ${await res.text()}`);
    return res.json();
}

/** Tabs already confirmed to exist during this server instance's lifetime. */
const readyTabs = new Set<string>();

/** Creates the tab with a header row the first time it's used. */
async function ensureTab(tab: string, headers: string[]) {
    if (readyTabs.has(tab)) return;
    const meta = (await sheetsFetch('?fields=sheets.properties.title')) as { sheets: { properties: { title: string } }[] };
    const exists = meta.sheets.some((s) => s.properties.title === tab);
    if (!exists) {
        await sheetsFetch(':batchUpdate', {
            method: 'POST',
            body: JSON.stringify({ requests: [{ addSheet: { properties: { title: tab, gridProperties: { frozenRowCount: 1 } } } }] }),
        });
        await sheetsFetch(`/values/${encodeURIComponent(`${tab}!A1`)}?valueInputOption=RAW`, {
            method: 'PUT',
            body: JSON.stringify({ values: [headers] }),
        });
    }
    readyTabs.add(tab);
}

/**
 * Appends one row. Values are written RAW so user input is stored as plain text and can never be
 * interpreted as a spreadsheet formula (e.g. a name starting with "=").
 */
export async function appendRow(tab: string, headers: string[], row: (string | undefined)[]) {
    await ensureTab(tab, headers);
    await sheetsFetch(`/values/${encodeURIComponent(`${tab}!A1`)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
        method: 'POST',
        body: JSON.stringify({ values: [row.map((v) => v ?? '')] }),
    });
}
