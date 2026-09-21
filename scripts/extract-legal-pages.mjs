/**
 * Migration tool — converts saved WordPress REST payloads for the FAQ and
 * legal pages into structured JSON.
 *
 *   node scripts/extract-legal-pages.mjs <dir-with-*.api.json> <out-dir>
 *
 * The rendered WordPress pages wrap their content in Elementor chrome, and the
 * Terms page does not render its content publicly at all, so the REST
 * `content.rendered` field is used as the source. Wording is never altered —
 * only presentational markup is normalised and source links are remapped onto
 * the routes this site actually serves.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const [, , inDir, outDir] = process.argv;
if (!inDir || !outDir) {
    console.error('usage: node scripts/extract-legal-pages.mjs <in-dir> <out-dir>');
    process.exit(1);
}
mkdirSync(outDir, { recursive: true });

// ---------------------------------------------------------------- text

const ENTITIES = {
    '&#8217;': '’', '&#8216;': '‘', '&#8220;': '“', '&#8221;': '”',
    '&#8211;': '–', '&#8212;': '—', '&#8230;': '…', '&nbsp;': ' ',
    '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&#39;': "'",
};

function decode(text) {
    let out = text;
    for (const [e, c] of Object.entries(ENTITIES)) out = out.split(e).join(c);
    return out.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/** Source links remapped to the routes this site serves. */
const LINK_MAP = [
    [/^https?:\/\/(www\.)?mvdiabetes\.com\/appointment\/?$/i, '/appointment'],
    [/^https?:\/\/(www\.)?mvdiabetes\.com\/contact(-us)?(\.html)?\/?$/i, '/contact'],
    [/^https?:\/\/(www\.)?mvdiabetes\.com\.?\/?$/i, '/'],
];

const rewritten = [];
function rewriteHref(href) {
    const clean = href.trim();
    for (const [pattern, target] of LINK_MAP) {
        if (pattern.test(clean)) {
            if (clean !== target) rewritten.push({ from: clean, to: target });
            return target;
        }
    }
    return clean;
}

/**
 * Keeps only inline markup that carries meaning (links and emphasis) and drops
 * WordPress styling wrappers. Attributes are dropped except a rewritten href.
 */
function inlineHtml(html) {
    let out = html
        .replace(/<(span|div)[^>]*>/gi, '')
        .replace(/<\/(span|div)>/gi, '')
        .replace(/<br\s*\/?>/gi, '<br />')
        .replace(/<(strong|b)[^>]*>/gi, '<strong>')
        .replace(/<\/(strong|b)>/gi, '</strong>')
        .replace(/<(em|i)[^>]*>/gi, '<em>')
        .replace(/<\/(em|i)>/gi, '</em>')
        .replace(/<a[^>]*href=("|')([^"']*)\1[^>]*>/gi, (_, q, href) => {
            const target = rewriteHref(decode(href));
            const external = /^https?:\/\//i.test(target);
            return external
                ? `<a href="${target}" target="_blank" rel="noopener noreferrer">`
                : `<a href="${target}">`;
        })
        // Anything still tagged is presentational; drop the tag, keep the text.
        .replace(/<(?!\/?(a|strong|em|br)\b)[^>]+>/gi, '');

    out = decode(out).replace(/\s+/g, ' ').trim();
    return out;
}

const plain = html => inlineHtml(html).replace(/<[^>]+>/g, '').trim();

function slug(text) {
    return decode(text)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .split('-')
        .slice(0, 8)
        .join('-');
}

// ---------------------------------------------------------------- blocks

/**
 * Top-level content blocks in document order.
 *
 * The three legal documents are authored differently: Privacy uses proper
 * <h*>/<p>/<ul>, Disclaimer uses <p> inside Elementor text widgets, and Terms
 * is bare text separated by blank lines. Elementor wrappers are unwrapped first
 * so all three reduce to the same walk, and bare runs between block tags are
 * split on blank lines into paragraphs.
 */
function parseBlocks(html) {
    const source = html
        .replace(/<(div|section|figure)[^>]*>/gi, '\n')
        .replace(/<\/(div|section|figure)>/gi, '\n');

    const blocks = [];

    const pushBare = chunk => {
        // Strip leftover inline wrappers before testing for real text.
        const cleaned = chunk.replace(/<(?!\/?(a|strong|em|b|i|br)\b)[^>]+>/gi, '');
        cleaned
            .split(/\n\s*\n/)
            .map(part => inlineHtml(part))
            .filter(Boolean)
            .forEach(text => blocks.push({ type: 'paragraph', html: text }));
    };

    const re = /<(h[1-6]|p|ul|ol)([^>]*)>([\s\S]*?)<\/\1>/gi;
    let last = 0;
    let m;
    while ((m = re.exec(source)) !== null) {
        pushBare(source.slice(last, m.index));
        last = re.lastIndex;

        const tag = m[1].toLowerCase();
        const inner = m[3];

        if (tag === 'ul' || tag === 'ol') {
            const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
                .map(li => inlineHtml(li[1]))
                .filter(Boolean);
            if (items.length) blocks.push({ type: 'list', ordered: tag === 'ol', items });
            continue;
        }

        const text = inlineHtml(inner);
        if (!text) continue;

        if (tag === 'p') blocks.push({ type: 'paragraph', html: text });
        else blocks.push({ type: 'heading', level: Number(tag[1]), html: text });
    }
    pushBare(source.slice(last));

    return blocks;
}

/** The page's own call to action, rendered separately from the document body. */
const CTA_HEADING = /we are available|interested in collaboration/i;

/**
 * Groups blocks into sections, starting a new one at each heading.
 *
 * Heading levels are kept so the document's own hierarchy survives — Privacy
 * nests h3 subsections such as "Business Transactions" under h2 parents like
 * "Disclosure of Your Personal Data". Parent headings carry no paragraphs of
 * their own and must not be discarded as empty.
 */
function toSections(blocks, { titleLevels = [2, 3] } = {}) {
    const sections = [];
    let current = null;
    const usedIds = new Set();

    blocks.forEach(block => {
        if (block.type === 'heading' && titleLevels.includes(block.level)) {
            const title = block.html.replace(/<[^>]+>/g, '').trim();
            let id = slug(title) || `section-${sections.length + 1}`;
            let n = 2;
            while (usedIds.has(id)) id = `${slug(title)}-${n++}`;
            usedIds.add(id);
            current = { id, title, level: block.level, blocks: [] };
            sections.push(current);
            return;
        }
        if (!current) {
            current = { id: 'introduction', title: 'Introduction', level: 2, blocks: [] };
            usedIds.add('introduction');
            sections.push(current);
        }
        current.blocks.push(block);
    });

    return sections.filter(s => !CTA_HEADING.test(s.title));
}

function load(slugName) {
    const json = JSON.parse(readFileSync(join(inDir, `${slugName}.api.json`), 'utf8'));
    if (!json.length) throw new Error(`no REST payload for ${slugName}`);
    return json[0];
}

// ---------------------------------------------------------------- FAQ

/** Question topics, assigned from each question's own subject. */
const FAQ_CATEGORIES = [
    [/located|what is m\.v/i, 'Hospital'],
    [/appointment|referral/i, 'Appointments'],
    [/services/i, 'Services'],
    [/insurance/i, 'Insurance'],
    [/support groups|educational/i, 'Support & Education'],
    [/career/i, 'Careers'],
    [/feedback|experience/i, 'Feedback'],
    [/information about/i, 'Hospital'],
];

function extractFaq() {
    const page = load('faq');
    const html = page.content.rendered;

    const titles = [...html.matchAll(/<a class="elementor-accordion-title"[^>]*>([\s\S]*?)<\/a>/gi)];
    const bodies = [...html.matchAll(
        /<div id="elementor-tab-content-\d+"[^>]*class="elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
    )];

    if (titles.length !== bodies.length) {
        console.warn(`  ! FAQ: ${titles.length} questions vs ${bodies.length} answers`);
    }

    const items = titles.map((t, i) => {
        const question = plain(t[1]);
        const answerBlocks = parseBlocks(bodies[i] ? bodies[i][1] : '');
        const answerText = answerBlocks
            .map(b => (b.type === 'list' ? b.items.join(' ') : b.html))
            .join(' ')
            .replace(/<[^>]+>/g, '');
        const category =
            (FAQ_CATEGORIES.find(([re]) => re.test(question)) || [null, 'General'])[1];

        return {
            id: slug(question),
            question,
            category,
            blocks: answerBlocks,
            /** Plain text of question + answer, for client-side search. */
            searchText: `${question} ${answerText}`.replace(/\s+/g, ' ').trim(),
        };
    });

    return { title: plain(page.title.rendered), items };
}

// ---------------------------------------------------------------- legal

function extractLegal(slugName) {
    const page = load(slugName);
    const blocks = parseBlocks(page.content.rendered);

    // The first h1/h2 repeats the page title; drop it from the body.
    const firstHeading = blocks.findIndex(b => b.type === 'heading');
    if (firstHeading === 0 && blocks[0].level <= 2) blocks.shift();

    const sections = toSections(blocks, { titleLevels: [1, 2, 3] });
    return {
        title: plain(page.title.rendered),
        sections,
        counts: {
            sections: sections.length,
            paragraphs: sections.reduce(
                (n, s) => n + s.blocks.filter(b => b.type === 'paragraph').length,
                0,
            ),
            lists: sections.reduce((n, s) => n + s.blocks.filter(b => b.type === 'list').length, 0),
            listItems: sections.reduce(
                (n, s) => n + s.blocks.filter(b => b.type === 'list').reduce((t, b) => t + b.items.length, 0),
                0,
            ),
        },
    };
}

// ---------------------------------------------------------------- run

const faq = extractFaq();
writeFileSync(join(outDir, 'faq.json'), JSON.stringify(faq, null, 1));
console.log(`faq                 ${faq.items.length} questions`);

const report = { faq: { questions: faq.items.length } };

for (const name of ['terms-and-condition', 'privacy-policy', 'disclaimer']) {
    const doc = extractLegal(name);
    writeFileSync(join(outDir, `${name}.json`), JSON.stringify(doc, null, 1));
    report[name] = doc.counts;
    console.log(
        `${name.padEnd(20)}${doc.counts.sections} sections, ${doc.counts.paragraphs} paragraphs, ` +
            `${doc.counts.lists} lists (${doc.counts.listItems} items)`,
    );
}

report.rewrittenLinks = rewritten;
writeFileSync(join(outDir, 'extraction-report.json'), JSON.stringify(report, null, 2));
console.log(`\nlinks rewritten     ${rewritten.length}`);
rewritten.forEach(r => console.log(`  ${r.from}  ->  ${r.to}`));
