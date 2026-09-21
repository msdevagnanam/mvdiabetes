/**
 * Migration tool — extracts the MV Diabetes research publication archive from a
 * saved copy of https://mvdiabetes.com/research-publications/ into JSON.
 *
 * Run against a local snapshot, never the live site:
 *   node scripts/extract-research-publications.mjs <snapshot.html> <out.json>
 *
 * The source is an Elementor accordion: one collapsible section per year, each
 * holding an <li> per publication. Citation formatting is inconsistent across
 * six decades, so every record keeps `sourceRaw` — the complete citation text
 * exactly as published. Structured fields are best-effort on top of that, never
 * a replacement for it.
 */

import { readFileSync, writeFileSync } from 'node:fs';

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
    console.error('usage: node extract-research-publications.mjs <snapshot.html> <out.json>');
    process.exit(1);
}

// ---------------------------------------------------------------- helpers

const ENTITIES = {
    '&#8211;': '–', '&#8212;': '—', '&#8216;': '‘', '&#8217;': '’',
    '&#8220;': '“', '&#8221;': '”', '&#038;': '&', '&amp;': '&', '&nbsp;': ' ',
    '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&ZeroWidthSpace;': '',
    '&#8230;': '…', '&#160;': ' ',
};

function decode(text) {
    let out = text;
    for (const [ent, ch] of Object.entries(ENTITIES)) out = out.split(ent).join(ch);
    return out.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/** <li> innerHTML -> single-line citation text, with links kept as text. */
function toText(html) {
    return decode(
        html
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<[^>]+>/g, ' '),
    )
        .replace(/ /g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// ---------------------------------------------------------------- parse

const html = readFileSync(inPath, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

// Each accordion section: a tab title (the year label) then its content div.
const SECTION_RE =
    /<span class="eael-accordion-tab-title">([\s\S]*?)<\/span>[\s\S]*?<div id="elementor-tab-content-\d+"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;

const sections = [];
let match;
while ((match = SECTION_RE.exec(html)) !== null) {
    const label = toText(match[1]);
    const items = [...match[2].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map(m => m[1]);
    sections.push({ label, html: match[2], items, index: match.index });
}

// ---------------------------------------------------------------- field extraction

/** DOI: bare 10.x identifier, whether written as "doi: 10.x" or inside a URL. */
function extractDoi(text) {
    const m = text.match(/\b(10\.\d{4,9}\/[^\s,;)\]]+)/);
    if (!m) return undefined;
    // Trim trailing punctuation that belongs to the sentence, not the DOI.
    return m[1].replace(/[.,;)\]]+$/, '');
}

function extractPmid(text) {
    const m = text.match(/PMID:?\s*(\d{5,9})/i);
    return m ? m[1] : undefined;
}

/** First explicit article URL, excluding doi.org (captured separately as DOI). */
function extractUrl(text) {
    const urls = text.match(/https?:\/\/[^\s,;)\]]+/gi) || [];
    const external = urls.find(u => !/doi\.org/i.test(u));
    return external ? external.replace(/[.,;)\]]+$/, '') : undefined;
}

/**
 * Years the citation itself states, in order of appearance. DOIs and PMIDs are
 * stripped first so identifiers like "10.1055/a-2019-1111" cannot be mistaken
 * for a publication year.
 */
function embeddedYears(text) {
    const cleaned = text
        .replace(/\b10\.\d{4,9}\/[^\s,;)\]]+/g, ' ')
        .replace(/PMID:?\s*\d+/gi, ' ')
        .replace(/https?:\/\/[^\s,;)\]]+/gi, ' ');
    const found = (cleaned.match(/\b(19[5-9]\d|20[0-2]\d)\b/g) || []).map(Number);
    return [...new Set(found)];
}

/**
 * Year for a whole accordion section.
 *
 * The source's own grouping is authoritative — years appearing inside a
 * citation are frequently part of a book title ("Diabetes care in India today.
 * And by 2025?"), a guideline name ("IWGDF 2019 update") or a meeting date
 * ("Geneva, 15-17 December 2009"), so a per-record override misfiles records.
 *
 * The label is overridden only when every record in the section that cites a
 * year cites the *same* other year. That is decisive evidence of a mislabelled
 * section rather than a stray date, and it is recorded on each affected record.
 */
function resolveSectionYear(labelYear, itemTexts) {
    const dated = itemTexts.map(embeddedYears).filter(ys => ys.length > 0);
    if (dated.length < 3) return { year: labelYear };

    const candidates = [...new Set(dated.flat())];
    const unanimous = candidates.filter(y => dated.every(ys => ys.includes(y)));

    // Agreement on the label itself, or no single year shared by all: keep it.
    if (unanimous.length !== 1 || unanimous[0] === labelYear) return { year: labelYear };

    return { year: unanimous[0], corrected: true, agreement: dated.length };
}

/**
 * Best-effort title split. Older records read
 *   "Title, Authors, Journal, YEAR. volume info"
 * and modern ones read
 *   "Title.Authors.Journal. YEAR ..."
 * Returns the title plus the untouched remainder, so title + rest always
 * reconstructs `sourceRaw` exactly.
 */
function splitTitle(text) {
    const candidates = [];

    const comma = text.indexOf(', ');
    if (comma > 0) candidates.push(comma);

    // A period that ends a sentence rather than an abbreviation/initial.
    const periodRe = /\.(?=\s*[A-Z])/g;
    let pm;
    while ((pm = periodRe.exec(text)) !== null) {
        const before = text.slice(Math.max(0, pm.index - 3), pm.index);
        // Skip initials ("V.", "S.R.") and common abbreviations.
        if (/(^|[\s.])[A-Z]$/.test(before)) continue;
        candidates.push(pm.index);
        break;
    }

    const valid = candidates.filter(i => i >= 15 && i <= 320).sort((a, b) => a - b);
    if (valid.length === 0) return { title: text, rest: '' };

    const cut = valid[0];
    return { title: text.slice(0, cut).trim(), rest: text.slice(cut).replace(/^[,.]\s*/, '').trim() };
}

function slug(text, year, i) {
    const base = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .split('-')
        .slice(0, 9)
        .join('-');
    return `${year}-${base || 'publication'}-${i}`;
}

// ---------------------------------------------------------------- build records

const publications = [];
const anomalies = [];
let order = 0;

sections.forEach((section, sectionIndex) => {
    const labelYear = Number(section.label);
    if (!Number.isFinite(labelYear)) {
        anomalies.push({ type: 'non-numeric-section-label', label: section.label });
        return;
    }

    const itemTexts = section.items.map(toText).filter(t => t.length > 0);
    const { year, corrected, agreement } = resolveSectionYear(labelYear, itemTexts);

    if (corrected) {
        anomalies.push({
            type: 'mislabelled-section',
            sectionLabel: section.label,
            resolvedYear: year,
            sectionIndex,
            records: itemTexts.length,
            datedRecordsInAgreement: agreement,
        });
    }

    // Sections whose records cite more than one year — reported, never split,
    // because the source's own grouping is what the archive publishes.
    const spread = [...new Set(itemTexts.flatMap(embeddedYears))].sort();
    if (!corrected && spread.length > 1 && spread.some(y => y !== labelYear)) {
        anomalies.push({
            type: 'mixed-years-in-section',
            sectionLabel: section.label,
            sectionIndex,
            yearsCited: spread,
            records: itemTexts.length,
        });
    }

    itemTexts.forEach(raw => {
        const { title, rest } = splitTitle(raw);
        const doi = extractDoi(raw);
        const pmid = extractPmid(raw);
        const url = extractUrl(raw);

        publications.push({
            id: slug(title, year, order),
            order: order++,
            year,
            title,
            ...(rest ? { citation: rest } : {}),
            ...(doi ? { doi } : {}),
            ...(pmid ? { pmid } : {}),
            ...(url ? { url } : {}),
            sourceRaw: raw,
            ...(corrected
                ? {
                      sourceYearLabel: section.label,
                      sourceNote:
                          `Grouped under "${section.label}" on the source page. Every dated citation ` +
                          `in that group is ${year}, so it is filed under ${year}; the source label is kept here.`,
                  }
                : {}),
        });
    });
});

// ---------------------------------------------------------------- duplicates

// Repeated records are kept in the dataset and flagged, never deleted. The UI
// shows the first occurrence and hides the rest.
const seen = new Map();
const duplicates = [];
publications.forEach(p => {
    const key = p.sourceRaw.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) {
        p.duplicateOf = seen.get(key);
        p.sourceNote = [
            p.sourceNote,
            'This exact citation appears more than once on the source page; the earlier occurrence is shown.',
        ]
            .filter(Boolean)
            .join(' ');
        duplicates.push({ id: p.id, year: p.year, duplicateOf: seen.get(key), title: p.title });
    } else {
        seen.set(key, p.id);
    }
});

// ---------------------------------------------------------------- report

const years = [...new Set(publications.map(p => p.year))].sort((a, b) => a - b);
const report = {
    sourceFile: inPath,
    extractedAt: new Date().toISOString().slice(0, 10),
    sections: sections.length,
    sourceListItems: sections.reduce((n, s) => n + s.items.length, 0),
    records: publications.length,
    years: years.length,
    earliestYear: years[0],
    latestYear: years[years.length - 1],
    yearList: years,
    withDoi: publications.filter(p => p.doi).length,
    withPmid: publications.filter(p => p.pmid).length,
    withUrl: publications.filter(p => p.url).length,
    exactDuplicates: duplicates.length,
    duplicates,
    anomalies,
    perYear: Object.fromEntries(years.map(y => [y, publications.filter(p => p.year === y).length])),
};

writeFileSync(outPath, JSON.stringify(publications, null, 1), 'utf8');
writeFileSync(outPath.replace(/\.json$/, '.report.json'), JSON.stringify(report, null, 2), 'utf8');

console.log(`sections            ${report.sections}`);
console.log(`source <li> items   ${report.sourceListItems}`);
console.log(`records extracted   ${report.records}`);
console.log(`years               ${report.years} (${report.earliestYear}–${report.latestYear})`);
console.log(`with DOI            ${report.withDoi}`);
console.log(`with PMID           ${report.withPmid}`);
console.log(`with URL            ${report.withUrl}`);
console.log(`exact duplicates    ${report.exactDuplicates}`);
console.log(`anomalies           ${report.anomalies.length}`);
console.log(`\nwrote ${outPath}`);
