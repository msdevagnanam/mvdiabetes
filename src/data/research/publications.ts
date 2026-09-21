import raw from './publications.json';

/**
 * MV Diabetes research publication archive.
 *
 * Extracted from https://mvdiabetes.com/research-publications/ by
 * scripts/extract-research-publications.mjs. Every record keeps `sourceRaw` —
 * the complete citation exactly as published — because six decades of source
 * formatting is inconsistent and `title` is only a best-effort split of it.
 * `title` is always an exact prefix of `sourceRaw`, so the two together
 * reproduce the source verbatim. Source spellings are preserved as published.
 */
export interface Publication {
    id: string;
    /** Position in the source page, so original order stays recoverable. */
    order: number;
    year: number;
    title: string;
    /** The citation remainder following the title. */
    citation?: string;
    doi?: string;
    pmid?: string;
    url?: string;
    sourceRaw: string;
    /** Year label of the source accordion, where it differs from `year`. */
    sourceYearLabel?: string;
    sourceNote?: string;
    /** Set when this exact citation already appeared earlier on the source page. */
    duplicateOf?: string;
}

export const allPublications = raw as Publication[];

/** Repeated source citations are kept in the data but shown once. */
export const publications = allPublications.filter(p => !p.duplicateOf);

export const duplicatePublications = allPublications.filter(p => p.duplicateOf);

export const researchYears = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);

export const researchStats = {
    total: publications.length,
    totalIncludingDuplicates: allPublications.length,
    years: researchYears.length,
    earliestYear: Math.min(...researchYears),
    latestYear: Math.max(...researchYears),
    withDoi: publications.filter(p => p.doi).length,
    withPmid: publications.filter(p => p.pmid).length,
};

export const PAGE_SIZE = 25;

export type SortOrder = 'newest' | 'oldest' | 'source';

export interface PublicationQuery {
    q?: string;
    year?: number;
    sort?: SortOrder;
    page?: number;
}

/** Lowercased haystack per record, built once per process. */
const haystack = new Map<string, string>(
    publications.map(p => [
        p.id,
        [p.sourceRaw, p.doi, p.pmid, String(p.year)].filter(Boolean).join(' ').toLowerCase(),
    ]),
);

export interface PublicationResult {
    items: Publication[];
    total: number;
    page: number;
    pageCount: number;
    from: number;
    to: number;
}

/**
 * Filters, sorts and paginates on the server so the 896-record archive never
 * ships to the browser.
 */
export function queryPublications({
    q,
    year,
    sort = 'newest',
    page = 1,
}: PublicationQuery): PublicationResult {
    let items = publications;

    if (year !== undefined) items = items.filter(p => p.year === year);

    const terms = (q ?? '').toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length > 0) {
        items = items.filter(p => {
            const text = haystack.get(p.id) ?? '';
            return terms.every(t => text.includes(t));
        });
    }

    const sorted = [...items];
    if (sort === 'newest') sorted.sort((a, b) => b.year - a.year || a.order - b.order);
    else if (sort === 'oldest') sorted.sort((a, b) => a.year - b.year || a.order - b.order);
    else sorted.sort((a, b) => a.order - b.order);

    const total = sorted.length;
    const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
    const current = Math.min(Math.max(1, page), pageCount);
    const start = (current - 1) * PAGE_SIZE;

    return {
        items: sorted.slice(start, start + PAGE_SIZE),
        total,
        page: current,
        pageCount,
        from: total === 0 ? 0 : start + 1,
        to: Math.min(start + PAGE_SIZE, total),
    };
}

/** Counts per year, for the year navigation. */
export const publicationsPerYear = researchYears.map(year => ({
    year,
    count: publications.filter(p => p.year === year).length,
}));
