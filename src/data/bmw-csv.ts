/**
 * Year data files for the BMW page: one CSV per reporting year, built from the same verified
 * records the page shows. These are compilations of the published figures, not original hospital
 * report files — the file says so in its header rows. Served by /bmw-data/download/[year].
 */

import {
    BMW_CATEGORIES, BMW_CATEGORY_LABELS, BMW_LOCATIONS, MONTH_NAMES,
    getCategoryValue, getRecords, getSheet, getYear, monthTotal, sumCategories, grandTotal,
} from './bmw-data';

export const bmwCsvHref = (year: number) => `/bmw-data/download/${year}`;
export const bmwCsvFileName = (year: number) => `mv-diabetes-bmw-data-${year}.csv`;

const cell = (value: string | number | null) => {
    if (value === null) return '';
    const s = String(value);
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const row = (...values: (string | number | null)[]) => values.map(cell).join(',');

export function buildBMWYearCsv(year: number): string {
    const info = getYear(year);
    if (!info) throw new Error(`No BMW reporting year ${year}`);
    const end = MONTH_NAMES[info.windowEndMonth - 1];
    const lines: string[] = [
        row(`MV Hospital for Diabetes – Bio Medical Waste Report ${year}`),
        row('Reporting period', `January ${year} – ${end} ${year}${info.windowEndMonth < 12 ? ' (year in progress)' : ''}`),
        row('Source', info.sourceUrl),
        row('About this file', 'Compiled from the figures published on the source page. It is not an original hospital report file.'),
        row('Values', 'Kilograms. 0 = reported as zero. Blank = not reported in the source (not treated as zero).'),
        '',
        row('Location', 'Month', ...BMW_CATEGORIES.map(c => `${BMW_CATEGORY_LABELS[c]} in Kg`), 'Total in Kg', 'Status'),
    ];

    for (const location of BMW_LOCATIONS) {
        const sheet = getSheet(year, location);
        if (sheet?.status !== 'published') {
            lines.push(row(location, null, null, null, null, null, null, `Not published for ${year}`));
            continue;
        }
        const records = getRecords(year, location);
        MONTH_NAMES.forEach((name, i) => {
            const rec = records.find(r => r.month === i + 1);
            if (!rec) {
                lines.push(row(location, name, null, null, null, null, null, i + 1 > info.windowEndMonth ? 'Not yet reported' : 'Not reported in source'));
                return;
            }
            lines.push(row(location, name, ...BMW_CATEGORIES.map(c => getCategoryValue(rec, c)), monthTotal(rec), 'Reported'));
        });
        const calc = sumCategories(records);
        lines.push(row(location, `Total (calculated, ${records.length} months)`, ...BMW_CATEGORIES.map(c => calc[c].value), grandTotal(records), null));
        if (sheet.publishedTotals) {
            const pub = sheet.publishedTotals;
            const differs = BMW_CATEGORIES.some(c => calc[c].value !== pub[c]);
            lines.push(row(location, 'Total (as published in source)', ...BMW_CATEGORIES.map(c => pub[c]), null, differs ? 'Differs from calculated total' : 'Matches calculated total'));
        }
    }

    const notes = [
        ...(info.notes ?? []),
        ...BMW_LOCATIONS.flatMap(l => {
            const s = getSheet(year, l);
            return s?.status === 'published' ? (s.notes ?? []).map(n => `${l}: ${n}`) : [];
        }),
    ];
    if (notes.length) {
        lines.push('', row('Notes'));
        for (const n of notes) lines.push(row(n));
    }
    return lines.join('\r\n') + '\r\n';
}

/** Size of the served file in bytes (UTF-8 with BOM). */
export function bmwCsvSize(year: number): number {
    return new TextEncoder().encode('\uFEFF' + buildBMWYearCsv(year)).length;
}
