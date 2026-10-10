/**
 * Biomedical Waste Management (BMW) data, migrated from the live WordPress pages
 * mvdiabetes.com/bmw-data-2021/ … /bmw-data-2026/ (snapshot taken 10 Oct 2026) and the two
 * workbooks those pages link to. Every figure below is copied as published; nothing is
 * estimated, back-filled or redistributed between locations.
 *
 * How absence is represented — these are deliberately different:
 *   0                 the source printed 0 (a confirmed zero).
 *   null              the source cell was blank (not reported).
 *   no record         the source row was blank in every column, so nothing was reported for that
 *                     month. Placeholder records are never created.
 *   sheet 'not-published'  no visible table exists for that location and year.
 *   month > windowEndMonth the month had not been reported yet when the snapshot was taken.
 *
 * Re-check against fresh snapshots of the source with:
 *   node scripts/validate-bmw-data.mjs <dir-with-bmw-data-YYYY.html>
 */

export const BMW_CATEGORIES = ['yellow', 'red', 'blue', 'white'] as const;
export type BMWCategory = (typeof BMW_CATEGORIES)[number];

/** Column headings as printed in the source tables. */
export const BMW_CATEGORY_LABELS: Record<BMWCategory, string> = {
    yellow: 'Yellow Bin',
    red: 'Red Bin',
    blue: 'Blue Bin',
    white: 'White Bin',
};

export const BMW_LOCATIONS = ['Royapuram', 'Adyar', 'Velachery'] as const;
export type BMWLocation = (typeof BMW_LOCATIONS)[number];

export const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
] as const;

export type BMWRecordStatus = 'verified' | 'pending-verification';

export interface BMWRecord {
    id: string;
    year: number;
    /** 1–12 */
    month: number;
    location: BMWLocation;
    yellowKg: number | null;
    redKg: number | null;
    blueKg: number | null;
    whiteKg: number | null;
    unit: 'kg';
    /** The WordPress page the figures were taken from. */
    sourceUrl: string;
    /** Local copy of a downloadable report that also contains this month, if one exists. */
    reportUrl?: string;
    status: BMWRecordStatus;
    notes?: string;
}

/** One location's table for one year, as laid out on the source page. */
export interface BMWReportSheet {
    year: number;
    location: BMWLocation;
    status: 'published' | 'not-published';
    /** Period line printed under the source table heading. */
    periodLabel?: string;
    sourceUrl: string;
    /** The source table's "Total" row, exactly as printed. Compared against the monthly sum in the UI. */
    publishedTotals?: Record<BMWCategory, number>;
    notes?: string[];
}

export interface BMWYear {
    year: number;
    sourceUrl: string;
    /** Last month of the reporting window: 12 for closed years, fewer for the year in progress. */
    windowEndMonth: number;
    notes?: string[];
}

export interface BMWReportFile {
    year: number;
    label: string;
    /** Byte-identical copy served from /public. */
    href: string;
    /** Where the file lived on the WordPress site (redirected to href in next.config.ts). */
    originalUrl: string;
    format: 'XLS';
    sizeBytes: number;
    /** Months that actually contain figures. */
    coverage: string;
    locations: BMWLocation[];
    notes?: string[];
}

const sourcePage = (year: number) => `https://mvdiabetes.com/bmw-data-${year}/`;

// ─── Downloadable reports ───
// The WordPress media library holds exactly these two BMW files. The 2023–2026 pages reuse the
// 2022 workbook for their "Download here" button, so no report exists for those years.

export const bmwReports: BMWReportFile[] = [
    {
        year: 2021,
        label: '2021 Biomedical Waste Report',
        href: '/reports/bmw/bmw-report2021.xls',
        originalUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/bmw-report2021.xls',
        format: 'XLS',
        sizeBytes: 35840,
        coverage: 'January–December 2021',
        locations: ['Royapuram', 'Adyar', 'Velachery'],
    },
    {
        year: 2022,
        label: '2022 Biomedical Waste Report',
        href: '/reports/bmw/bmw-report2022.xls',
        originalUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/bmw-report2022.xls',
        format: 'XLS',
        sizeBytes: 39424,
        coverage: 'January–March 2022',
        locations: ['Royapuram', 'Adyar', 'Velachery'],
        notes: [
            'The workbook was last saved on 20 April 2022 and its April–December rows are blank. Royapuram’s April–December 2022 figures were published later on the web page only.',
            'Royapuram’s White Bin cells are blank in this workbook; the web page shows 0 for those months.',
        ],
    },
];

const reportFor = (year: number, month: number) =>
    year === 2021 || (year === 2022 && month <= 3)
        ? bmwReports.find(r => r.year === year)?.href
        : undefined;

function r(
    year: number,
    month: number,
    location: BMWLocation,
    yellowKg: number | null,
    redKg: number | null,
    blueKg: number | null,
    whiteKg: number | null,
): BMWRecord {
    return {
        id: `${year}-${String(month).padStart(2, '0')}-${location.toLowerCase()}`,
        year,
        month,
        location,
        yellowKg,
        redKg,
        blueKg,
        whiteKg,
        unit: 'kg',
        sourceUrl: sourcePage(year),
        reportUrl: reportFor(year, month),
        status: 'verified',
    };
}

// ─── Monthly records ───
// Generated from the visible source tables; months whose source row is entirely blank are absent.

const records: BMWRecord[] = [
    // Royapuram 2021 — "January 2021 to December 2021"
    r(2021,  1, 'Royapuram',   84.5,  79.7,   23, 0),
    r(2021,  2, 'Royapuram',    177,   171, 45.7, 0),
    r(2021,  3, 'Royapuram',  167.5, 156.2,   38, 0),
    r(2021,  4, 'Royapuram',    175,   134,   34, 0),
    r(2021,  5, 'Royapuram',    160,   115,   39, 0),
    r(2021,  6, 'Royapuram',    156,   115,   25, 0),
    r(2021,  7, 'Royapuram',    117,   110,   35, 0),
    r(2021,  8, 'Royapuram',    155,   117,   38, 0),
    r(2021,  9, 'Royapuram',    131,   133,   41, 0),
    r(2021, 10, 'Royapuram',    169,   139,   37, 0),
    r(2021, 11, 'Royapuram',    145,   111,   38, 0),
    r(2021, 12, 'Royapuram',    244,   206,   75, 0),
    // Adyar 2021 — "January 2021 to December 2021"
    r(2021,  1, 'Adyar',          4,    11,    0, 0),
    r(2021,  2, 'Adyar',          0,     9,    0, 0),
    r(2021,  3, 'Adyar',          0,    13,    0, 0),
    r(2021,  4, 'Adyar',          0,     8,    0, 0),
    r(2021,  5, 'Adyar',          0,     3,    0, 0),
    r(2021,  6, 'Adyar',          1,     9,    0, 0),
    r(2021,  7, 'Adyar',          4,     8,    0, 0),
    r(2021,  8, 'Adyar',          4,     8,    0, 0),
    r(2021,  9, 'Adyar',          7,    10,    0, 0),
    r(2021, 10, 'Adyar',          7,     6,    0, 0),
    r(2021, 11, 'Adyar',          4,     8,    0, 0),
    r(2021, 12, 'Adyar',          7,    10,    0, 0),
    // Velachery 2021 — "January 2021 to December 2021"
    r(2021,  1, 'Velachery',      0,     9,    0, 0),
    r(2021,  2, 'Velachery',      0,     9,    2, 0),
    r(2021,  3, 'Velachery',    1.5,   4.5,    2, 0),
    r(2021,  4, 'Velachery',      2,     5,    3, 0),
    r(2021,  5, 'Velachery',      0,     1,    0, 0),
    r(2021,  6, 'Velachery',      0,     6,    1, 0),
    r(2021,  7, 'Velachery',      0,     3,    3, 0),
    r(2021,  8, 'Velachery',      0,     7,    0, 0),
    r(2021,  9, 'Velachery',      0,     6,    0, 0),
    r(2021, 10, 'Velachery',      0,    10,    0, 0),
    r(2021, 11, 'Velachery',      6,     3,    0, 0),
    r(2021, 12, 'Velachery',      4,     4,    0, 0),
    // Royapuram 2022 — "January 2022 to December 2022"
    r(2022,  1, 'Royapuram',    154,   125,   43, 0),
    r(2022,  2, 'Royapuram',    145,   104,   35, 0),
    r(2022,  3, 'Royapuram',    187,   157,   64, 0),
    r(2022,  4, 'Royapuram',    172,   153,   40, 0),
    r(2022,  5, 'Royapuram',    157,   176,   34, 0),
    r(2022,  6, 'Royapuram',    169,   150,   33, 0),
    r(2022,  7, 'Royapuram',    174,   142,   50, 0),
    r(2022,  8, 'Royapuram',    171,   131,   34, 0),
    r(2022,  9, 'Royapuram',    143,   128,   34, 0),
    r(2022, 10, 'Royapuram',    160,   156,   52, 0),
    r(2022, 11, 'Royapuram',    108,   103,   26, 0),
    r(2022, 12, 'Royapuram',    162,   156,   47, 0),
    // Adyar 2022 — "January 2022 to December 2022"
    r(2022,  1, 'Adyar',          4,     7,    0, 0),
    r(2022,  2, 'Adyar',          3,     8,    0, 0),
    r(2022,  3, 'Adyar',          5,    10,    0, 0),
    // Velachery 2022 — "January 2022 to December 2022"
    r(2022,  1, 'Velachery',      3,     6,    0, 0),
    r(2022,  2, 'Velachery',      7,     3,    0, 0),
    r(2022,  3, 'Velachery',    3.5,     3,    0, 0),
    // Royapuram 2023 — "January 2023 to December 2023"
    r(2023,  1, 'Royapuram',    153,   153,   45, 0),
    r(2023,  2, 'Royapuram',    130,   134,   32, 0),
    r(2023,  3, 'Royapuram',    178,   134,   23, 0),
    r(2023,  4, 'Royapuram',    190,   157,   44, 0),
    r(2023,  5, 'Royapuram',    152,   124,   29, 0),
    r(2023,  6, 'Royapuram',    185,   156,   34, 0),
    r(2023,  7, 'Royapuram',    140,   122,   40, 0),
    r(2023,  8, 'Royapuram',    164,   165,   45, 0),
    r(2023,  9, 'Royapuram',    135,   111,   33, 0),
    r(2023, 10, 'Royapuram',    166,   139,   36, 0),
    r(2023, 11, 'Royapuram',     93,    96,   18, 0),
    r(2023, 12, 'Royapuram',    167,   154,   43, 0),
    // Royapuram 2024 — "January 2024 to December 2024"
    r(2024,  1, 'Royapuram',    115,   102,   22, 0),
    r(2024,  2, 'Royapuram',    200,   166,   12, 0),
    r(2024,  3, 'Royapuram',    179,   136,   31, 0),
    r(2024,  4, 'Royapuram',    170,   136,   31, 0),
    r(2024,  5, 'Royapuram',    185,   185,   31, 0),
    r(2024,  6, 'Royapuram',    188,   152,   24, 0),
    r(2024,  7, 'Royapuram',    293,   259,   44, 0),
    r(2024,  8, 'Royapuram',    223,   167,   32, 0),
    r(2024,  9, 'Royapuram',    138,   113,   21, 0),
    r(2024, 10, 'Royapuram',    110,   129,   24, 0),
    r(2024, 11, 'Royapuram',    189,   189,   32, 0),
    r(2024, 12, 'Royapuram',    184,   226,   46, 0),
    // Royapuram 2025 — "January 2025 to December 2025"
    r(2025,  1, 'Royapuram',    228,   186,   40, 0),
    r(2025,  2, 'Royapuram',    194,   303,   51, 0),
    r(2025,  3, 'Royapuram',    230,   197,   50, 0),
    r(2025,  4, 'Royapuram',    166,   146,   38, 0),
    r(2025,  5, 'Royapuram',    251,   229,   49, 0),
    r(2025,  6, 'Royapuram',    171,   163,   37, 0),
    r(2025,  7, 'Royapuram',    233,   202,   51, 0),
    r(2025,  8, 'Royapuram',    212,   185,   39, 0),
    r(2025,  9, 'Royapuram',    164,   122,   23, 0),
    r(2025, 10, 'Royapuram',    194,   157,   34, 0),
    r(2025, 11, 'Royapuram',    199,   167,   40, 0),
    r(2025, 12, 'Royapuram',    252,   215,   29, 0),
    // Royapuram 2026 — "January 2026 to December 2026"
    r(2026,  1, 'Royapuram',    213,   167,   27, 0),
    r(2026,  2, 'Royapuram',    199,   162,   24, 0),
    r(2026,  3, 'Royapuram',    268,   238,   51, 0),
    r(2026,  4, 'Royapuram',    213,   176,   36, 0),
    r(2026,  5, 'Royapuram',    195,   192,   30, 0),
    r(2026,  6, 'Royapuram',    187,   170,   32, 0),
    r(2026,  7, 'Royapuram',    226,   196,   38, 0),
    r(2026,  8, 'Royapuram',    197,   171,   40, 0),
    r(2026,  9, 'Royapuram',    221,   162,   34, 0),
];

const recordNotes: Record<string, string> = {
    '2022-01-royapuram': 'White Bin is blank in bmw-report2022.xls; the web page publishes 0.',
    '2022-02-royapuram': 'White Bin is blank in bmw-report2022.xls; the web page publishes 0.',
    '2022-03-royapuram': 'White Bin is blank in bmw-report2022.xls; the web page publishes 0.',
};

export const bmwRecords: BMWRecord[] = records.map(rec =>
    recordNotes[rec.id] ? { ...rec, notes: recordNotes[rec.id] } : rec,
);

// ─── Reporting years ───

const hiddenCopyNote = (year: number, location: BMWLocation) =>
    `The ${year} source page still contains the 2022 ${location} table (headed “January 2022 to December 2022”), hidden from visitors on every device. It is not ${year} data and has not been migrated.`;

export const bmwYears: BMWYear[] = [
    { year: 2021, sourceUrl: sourcePage(2021), windowEndMonth: 12 },
    {
        year: 2022,
        sourceUrl: sourcePage(2022),
        windowEndMonth: 12,
        notes: ['Adyar and Velachery published January–March 2022 only; April–December are blank in the source.'],
    },
    ...[2023, 2024, 2025].map(year => ({
        year,
        sourceUrl: sourcePage(year),
        windowEndMonth: 12,
        notes: [`Only Royapuram figures are published for ${year}. No original report file was issued for this year (the source page’s download button links to the 2022 workbook); the published figures can be downloaded as a CSV.`],
    })),
    {
        year: 2026,
        sourceUrl: sourcePage(2026),
        windowEndMonth: 9,
        notes: [
            '2026 is the current reporting year. Figures are published to September 2026; October–December have not been reported yet.',
            'Only Royapuram figures are published for 2026. No original report file was issued for this year (the source page’s download button links to the 2022 workbook); the published figures can be downloaded as a CSV.',
        ],
    },
];

// ─── Source tables per location ───

const sheet = (
    year: number,
    location: BMWLocation,
    publishedTotals: [number, number, number, number],
    notes?: string[],
): BMWReportSheet => ({
    year,
    location,
    status: 'published',
    periodLabel: `January ${year} to December ${year}`,
    sourceUrl: sourcePage(year),
    publishedTotals: { yellow: publishedTotals[0], red: publishedTotals[1], blue: publishedTotals[2], white: publishedTotals[3] },
    notes,
});

const notPublished = (year: number, location: BMWLocation): BMWReportSheet => ({
    year,
    location,
    status: 'not-published',
    sourceUrl: sourcePage(year),
    notes: [hiddenCopyNote(year, location)],
});

export const bmwSheets: BMWReportSheet[] = [
    sheet(2021, 'Royapuram', [1881, 1586.9, 468.7, 0]),
    sheet(2021, 'Adyar', [38, 103, 0, 0]),
    sheet(2021, 'Velachery', [13.5, 67.5, 11, 0]),

    sheet(2022, 'Royapuram', [1416, 1295, 349, 0], [
        'The published Total row does not equal the January–December sum. Its Yellow (1416) and Red (1295) figures equal the April–December sum; April–December Blue sums to 350, not 349. The monthly figures are shown as published and the difference is unresolved.',
    ]),
    sheet(2022, 'Adyar', [12, 25, 0, 0], ['April–December 2022 are blank in the source.']),
    sheet(2022, 'Velachery', [13.5, 12, 0, 0], ['April–December 2022 are blank in the source.']),

    sheet(2023, 'Royapuram', [1853, 1645, 422, 0]),
    notPublished(2023, 'Adyar'),
    notPublished(2023, 'Velachery'),

    sheet(2024, 'Royapuram', [2174, 1980, 341, 0], [
        'The published Red (1980) and Blue (341) totals differ from the sums of the published monthly figures (1960 and 350). The monthly figures are shown as published and the difference is unresolved.',
    ]),
    notPublished(2024, 'Adyar'),
    notPublished(2024, 'Velachery'),

    sheet(2025, 'Royapuram', [2494, 2272, 481, 0]),
    notPublished(2025, 'Adyar'),
    notPublished(2025, 'Velachery'),

    sheet(2026, 'Royapuram', [1919, 1634, 312, 0]),
    notPublished(2026, 'Adyar'),
    notPublished(2026, 'Velachery'),
];

// ─── Helpers ───

export function getCategoryValue(record: BMWRecord, category: BMWCategory): number | null {
    return record[`${category}Kg`];
}

export function getYear(year: number): BMWYear | undefined {
    return bmwYears.find(y => y.year === year);
}

export function getSheet(year: number, location: BMWLocation): BMWReportSheet | undefined {
    return bmwSheets.find(s => s.year === year && s.location === location);
}

export function getRecords(year: number, location?: BMWLocation): BMWRecord[] {
    return bmwRecords
        .filter(rec => rec.year === year && (!location || rec.location === location))
        .sort((a, b) => a.month - b.month);
}

/** Locations with a visible source table for the year, in source order. */
export function getPublishedLocations(year: number): BMWLocation[] {
    return BMW_LOCATIONS.filter(loc => getSheet(year, loc)?.status === 'published');
}

/** Source values have at most one decimal place; rounding keeps float noise out of the sums. */
const round = (n: number) => Math.round(n * 100) / 100;

export interface BMWCategorySum {
    /** null when no record reports this category at all. */
    value: number | null;
    /** Number of monthly records that contributed. */
    months: number;
}

export function sumCategory(records: BMWRecord[], category: BMWCategory): BMWCategorySum {
    const values = records.map(rec => getCategoryValue(rec, category)).filter((v): v is number => v !== null);
    return { value: values.length ? round(values.reduce((a, b) => a + b, 0)) : null, months: values.length };
}

export function sumCategories(records: BMWRecord[]): Record<BMWCategory, BMWCategorySum> {
    return Object.fromEntries(BMW_CATEGORIES.map(c => [c, sumCategory(records, c)])) as Record<BMWCategory, BMWCategorySum>;
}

/** Total of all categories for one month, or null if any category is unreported. */
export function monthTotal(record: BMWRecord): number | null {
    const values = BMW_CATEGORIES.map(c => getCategoryValue(record, c));
    return values.some(v => v === null) ? null : round((values as number[]).reduce((a, b) => a + b, 0));
}

/** Sum of the monthly totals, or null if any month has an unreported category. */
export function grandTotal(records: BMWRecord[]): number | null {
    const totals = records.map(monthTotal);
    if (!totals.length || totals.some(t => t === null)) return null;
    return round((totals as number[]).reduce((a, b) => a + b, 0));
}

/** First and last month a location published figures for, and how many months in total. */
export function getLocationCoverage(location: BMWLocation) {
    const recs = bmwRecords
        .filter(rec => rec.location === location)
        .sort((a, b) => a.year * 12 + a.month - (b.year * 12 + b.month));
    if (!recs.length) return null;
    const first = recs[0];
    const last = recs[recs.length - 1];
    return { from: { year: first.year, month: first.month }, to: { year: last.year, month: last.month }, months: recs.length };
}

/** Most recent month with a published record. */
export function getLatestReportedMonth(): { year: number; month: number } {
    const latest = bmwRecords.reduce((a, b) => (b.year * 12 + b.month > a.year * 12 + a.month ? b : a));
    return { year: latest.year, month: latest.month };
}

const kgFormat = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 });

export function formatKg(value: number): string {
    return kgFormat.format(value);
}
