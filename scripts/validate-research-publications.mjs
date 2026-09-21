/**
 * Migration validator — re-parses a saved copy of the source page and diffs it
 * against the shipped dataset, so a re-extraction can be checked without
 * touching the live site.
 *
 *   node scripts/validate-research-publications.mjs <snapshot.html>
 *
 * Exits non-zero if any source record is missing from the dataset.
 */

import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

const here = dirname(fileURLToPath(import.meta.url));
const snapshot = process.argv[2];
if (!snapshot) {
    console.error('usage: node scripts/validate-research-publications.mjs <snapshot.html>');
    process.exit(1);
}

// Re-extract into a temp file using the same parser the dataset was built with.
const tmp = join(tmpdir(), `mv-research-validate-${Date.now()}.json`);
execFileSync(
    process.execPath,
    [join(here, 'extract-research-publications.mjs'), snapshot, tmp],
    { stdio: 'pipe' },
);

const fresh = JSON.parse(readFileSync(tmp, 'utf8'));
const shipped = JSON.parse(
    readFileSync(join(here, '..', 'src', 'data', 'research', 'publications.json'), 'utf8'),
);

const norm = r => r.sourceRaw.replace(/\s+/g, ' ').trim();
const shippedSet = new Set(shipped.map(norm));
const freshSet = new Set(fresh.map(norm));

const missing = fresh.filter(r => !shippedSet.has(norm(r)));
const extra = shipped.filter(r => !freshSet.has(norm(r)));

const yearsOf = rs => [...new Set(rs.map(r => r.year))].sort((a, b) => a - b);
const freshYears = yearsOf(fresh);
const shippedYears = yearsOf(shipped);
const missingYears = freshYears.filter(y => !shippedYears.includes(y));

const line = (label, value) => console.log(`${label.padEnd(34)}${value}`);

line('source records (re-parsed)', fresh.length);
line('shipped records', shipped.length);
line('source years', `${freshYears.length} (${freshYears[0]}–${freshYears[freshYears.length - 1]})`);
line('shipped years', `${shippedYears.length} (${shippedYears[0]}–${shippedYears[shippedYears.length - 1]})`);
line('records missing from dataset', missing.length);
line('records not present in source', extra.length);
line('years missing from dataset', missingYears.length ? missingYears.join(', ') : '0');

if (missing.length > 0) {
    console.log('\nMISSING RECORDS');
    missing.slice(0, 20).forEach(r => console.log(`  ${r.year}  ${r.title.slice(0, 90)}`));
    if (missing.length > 20) console.log(`  …and ${missing.length - 20} more`);
}
if (extra.length > 0) {
    console.log('\nRECORDS IN DATASET BUT NOT IN SOURCE');
    extra.slice(0, 20).forEach(r => console.log(`  ${r.year}  ${r.title.slice(0, 90)}`));
}

const failed = missing.length > 0 || extra.length > 0 || missingYears.length > 0;
console.log(`\n${failed ? 'FAIL' : 'PASS'} — source parity`);
process.exit(failed ? 1 : 0);
