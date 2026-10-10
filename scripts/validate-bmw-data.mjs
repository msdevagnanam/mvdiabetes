/**
 * Migration validator — re-parses the WordPress BMW data pages and diffs every visible table
 * against src/data/bmw-data.ts: monthly values, blank cells, the published Total row, which
 * locations are published, and where the page's download button points.
 *
 *   node scripts/validate-bmw-data.mjs <dir>    reads <dir>/bmw-data-YYYY.html snapshots
 *   node scripts/validate-bmw-data.mjs --live   fetches https://mvdiabetes.com/bmw-data-YYYY/
 *
 * Tables Elementor hides on desktop, tablet and mobile are treated as not published: the
 * 2023–2026 pages carry hidden copies of the 2022 Adyar and Velachery tables.
 *
 * Exits non-zero on any mismatch.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as cheerio from 'cheerio';
import * as bmw from '../src/data/bmw-data.ts';

const arg = process.argv[2];
if (!arg) {
    console.error('usage: node scripts/validate-bmw-data.mjs <snapshot-dir> | --live');
    process.exit(1);
}

const HIDDEN_EVERYWHERE = ['elementor-hidden-desktop', 'elementor-hidden-tablet', 'elementor-hidden-mobile'];
const errors = [];
const fail = msg => errors.push(msg);

async function loadPage(year) {
    if (arg === '--live') {
        const res = await fetch(`https://mvdiabetes.com/bmw-data-${year}/`, { headers: { 'user-agent': 'Mozilla/5.0' } });
        if (!res.ok) throw new Error(`bmw-data-${year}: HTTP ${res.status}`);
        return res.text();
    }
    return readFileSync(join(arg, `bmw-data-${year}.html`), 'utf8');
}

const parseCell = text => {
    const t = text.replace(/\s+/g, ' ').trim();
    if (t === '') return null;
    const n = Number(t);
    if (Number.isNaN(n)) throw new Error(`non-numeric cell "${t}"`);
    return n;
};

function visibleTables($) {
    const out = [];
    $('table').each((_, table) => {
        const $t = $(table);
        const hidden = HIDDEN_EVERYWHERE.every(cls => $t.closest(`.${cls}`).length > 0);
        const section = $t.parents('section, .e-con').last();
        const headings = section.find('.elementor-heading-title').map((_, h) => $(h).text().trim()).get();
        const location = headings.map(h => h.match(/Bio Medical Waste Report\s*-\s*(\w+)/)?.[1]).find(Boolean);
        const periodLabel = headings.find(h => /^January \d{4} to December \d{4}$/.test(h));
        const rows = $t.find('tr').map((_, tr) => [$(tr).find('th,td').map((_, c) => $(c).text()).get()]).get();
        out.push({ hidden, location, periodLabel, rows });
    });
    return out;
}

let checkedCells = 0;
let checkedRecords = 0;

for (const { year } of bmw.bmwYears) {
    const $ = cheerio.load(await loadPage(year));
    const tables = visibleTables($);
    const visible = tables.filter(t => !t.hidden);

    for (const loc of bmw.BMW_LOCATIONS) {
        const sheet = bmw.getSheet(year, loc);
        const table = visible.find(t => t.location === loc);
        const label = `${year} ${loc}`;

        if (!sheet) { fail(`${label}: no sheet entry in dataset`); continue; }
        if (!table) {
            if (sheet.status === 'published') fail(`${label}: dataset says published, source has no visible table`);
            if (bmw.getRecords(year, loc).length) fail(`${label}: dataset has records but source has no visible table`);
            continue;
        }
        if (sheet.status !== 'published') { fail(`${label}: source has a visible table, dataset says not published`); continue; }
        if (table.periodLabel !== sheet.periodLabel) fail(`${label}: period "${table.periodLabel}" ≠ "${sheet.periodLabel}"`);

        const header = table.rows[0].map(c => c.trim());
        const expectedHeader = ['Month', 'Yellow Bin in Kg', 'Red Bin in Kg', 'Blue Bin in Kg', 'White Bin in Kg'];
        if (header.join('|') !== expectedHeader.join('|')) fail(`${label}: unexpected header ${JSON.stringify(header)}`);

        const records = bmw.getRecords(year, loc);
        const seen = new Set();
        for (const row of table.rows.slice(1)) {
            const name = row[0].trim();
            const values = row.slice(1, 5).map(parseCell);
            if (name === 'Total') {
                bmw.BMW_CATEGORIES.forEach((c, i) => {
                    checkedCells++;
                    if (sheet.publishedTotals?.[c] !== values[i]) fail(`${label} Total ${c}: source ${values[i]} ≠ dataset ${sheet.publishedTotals?.[c]}`);
                });
                continue;
            }
            const month = bmw.MONTH_NAMES.indexOf(name) + 1;
            if (!month) { fail(`${label}: unrecognised row "${name}"`); continue; }
            const rec = records.find(r => r.month === month);
            if (values.every(v => v === null)) {
                if (rec) fail(`${label} ${name}: source row is blank but dataset has a record`);
                continue;
            }
            if (!rec) { fail(`${label} ${name}: missing from dataset`); continue; }
            seen.add(month);
            checkedRecords++;
            bmw.BMW_CATEGORIES.forEach((c, i) => {
                checkedCells++;
                const got = bmw.getCategoryValue(rec, c);
                if (got !== values[i]) fail(`${label} ${name} ${c}: source ${values[i]} ≠ dataset ${got}`);
            });
            if (rec.sourceUrl !== `https://mvdiabetes.com/bmw-data-${year}/`) fail(`${label} ${name}: wrong sourceUrl`);
        }
        for (const rec of records) if (!seen.has(rec.month)) fail(`${rec.id}: in dataset but not in source`);
    }

    for (const t of visible) if (!bmw.BMW_LOCATIONS.includes(t.location)) fail(`${year}: visible table for unknown location "${t.location}"`);

    const downloads = $('a').map((_, a) => $(a).attr('href')).get().filter(h => /\.(xlsx?|pdf|csv)$/i.test(h));
    for (const href of new Set(downloads)) {
        const report = bmw.bmwReports.find(r => r.originalUrl === href);
        if (!report) fail(`${year}: download ${href} is not in bmwReports`);
        else if (report.year !== year) console.log(`note  ${year}: page download links to the ${report.year} report (${href})`);
    }
}

const ids = bmw.bmwRecords.map(r => r.id);
if (new Set(ids).size !== ids.length) fail('duplicate record ids in dataset');

console.log(`years checked            ${bmw.bmwYears.length}`);
console.log(`monthly records matched  ${checkedRecords} / ${bmw.bmwRecords.length}`);
console.log(`cells compared           ${checkedCells}`);
console.log(`mismatches               ${errors.length}`);
if (errors.length) {
    console.log('\nMISMATCHES');
    for (const e of errors) console.log('  ' + e);
    process.exit(1);
}
