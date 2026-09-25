import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/data/site';
import { isSheetsConfigured, appendRow } from './google-sheets';

/**
 * Delivery for form submissions (appointments, contact enquiries).
 *
 * Production (Vercel) has a read-only filesystem, so submissions are stored as rows in a Google
 * Sheet (see google-sheets.ts) and emailed to the hospital team over SMTP. Either channel alone is
 * enough; both are recommended. SMTP settings (Vercel → Project → Settings → Environment Variables):
 *   SMTP_HOST, SMTP_PORT (465 or 587), SMTP_USER, SMTP_PASS  — required
 *   MAIL_FROM          — sender address (defaults to SMTP_USER)
 *   APPOINTMENTS_TO    — recipients for appointment requests (defaults to siteConfig.email)
 *   CONTACT_TO         — recipients for contact enquiries (defaults to siteConfig.email)
 * Multiple recipients can be comma-separated.
 *
 * During local development, submissions are also written to src/data/submissions/*.json
 * (git-ignored) so the forms can be tested without SMTP.
 */

export function isMailConfigured(): boolean {
    return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;
function getTransporter() {
    if (!transporter) {
        const port = Number(process.env.SMTP_PORT || 465);
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port,
            secure: port === 465,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        });
    }
    return transporter;
}

/** Strips line breaks so user input can't inject extra mail headers. */
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

const escapeHtml = (v: string) =>
    v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export interface Notification {
    kind: 'appointment' | 'contact';
    subject: string;
    /** Ordered label → value rows; empty values are skipped. */
    fields: [string, string | undefined][];
    replyTo?: string;
}

export async function sendNotification({ kind, subject, fields, replyTo }: Notification) {
    const to = (kind === 'appointment' ? process.env.APPOINTMENTS_TO : process.env.CONTACT_TO) || siteConfig.email;
    const rows = fields.filter((f): f is [string, string] => Boolean(f[1]));
    const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
    const html = `
        <h2 style="font-family:Arial,sans-serif;color:#03427f;margin:0 0 12px">${escapeHtml(subject)}</h2>
        <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
            ${rows.map(([k, v]) => `
            <tr>
                <td style="padding:6px 16px 6px 0;color:#5a6474;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td>
                <td style="padding:6px 0;color:#1a1a1a">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
            </tr>`).join('')}
        </table>`;

    await getTransporter().sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to,
        subject: oneLine(subject),
        text,
        html,
        ...(replyTo && { replyTo: oneLine(replyTo) }),
    });
}

export interface Submission {
    /** Local JSON file (development only). */
    localFile: string;
    record: object;
    /** Row for the Google Sheet tab. */
    sheet: { tab: string; headers: string[]; row: (string | undefined)[] };
    email: Notification;
}

/**
 * Stores/sends a submission through every configured channel (Google Sheet, email, local file in
 * development). Resolves 'delivered' if at least one channel succeeded, 'unconfigured' if no channel
 * is set up, and throws if every configured channel failed — so a request is never reported as
 * received when nobody will see it.
 */
export async function deliverSubmission(s: Submission): Promise<'delivered' | 'unconfigured'> {
    const savedLocally = saveLocalCopy(s.localFile, s.record);

    const attempts: { name: string; run: () => Promise<unknown> }[] = [];
    if (isSheetsConfigured()) attempts.push({ name: 'google-sheet', run: () => appendRow(s.sheet.tab, s.sheet.headers, s.sheet.row) });
    if (isMailConfigured()) attempts.push({ name: 'email', run: () => sendNotification(s.email) });

    const results = await Promise.allSettled(attempts.map((a) => a.run()));
    results.forEach((r, i) => {
        if (r.status === 'rejected') console.error(`[${s.email.kind}] ${attempts[i].name} delivery failed:`, r.reason);
    });
    const succeeded = results.filter((r) => r.status === 'fulfilled').length + (savedLocally ? 1 : 0);

    if (succeeded > 0) return 'delivered';
    if (attempts.length === 0) {
        console.error(`[${s.email.kind}] no delivery channel configured (Google Sheet / SMTP).`);
        return 'unconfigured';
    }
    throw new Error(`[${s.email.kind}] every delivery channel failed`);
}

/** Local development only: keeps a JSON copy so forms can be tested without SMTP. */
export function saveLocalCopy(fileName: string, record: object): boolean {
    if (process.env.NODE_ENV !== 'development') return false;
    const dir = path.join(process.cwd(), 'src', 'data', 'submissions');
    const file = path.join(dir, fileName);
    fs.mkdirSync(dir, { recursive: true });
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : [];
    existing.push(record);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
    return true;
}
