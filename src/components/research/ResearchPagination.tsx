import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ResearchPaginationProps {
    page: number;
    pageCount: number;
    /** Current query string without `page`, e.g. "q=tuberculosis&sort=oldest". */
    baseQuery: string;
}

/** Page numbers around the current page, with gaps marked by null. */
function pageWindow(page: number, pageCount: number): (number | null)[] {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);

    const pages = new Set([1, pageCount, page, page - 1, page + 1]);
    const sorted = [...pages].filter(p => p >= 1 && p <= pageCount).sort((a, b) => a - b);

    const out: (number | null)[] = [];
    sorted.forEach((p, i) => {
        if (i > 0 && p - sorted[i - 1] > 1) out.push(null);
        out.push(p);
    });
    return out;
}

export default function ResearchPagination({ page, pageCount, baseQuery }: ResearchPaginationProps) {
    if (pageCount <= 1) return null;

    const href = (p: number) => {
        const parts = [baseQuery, p > 1 ? `page=${p}` : ''].filter(Boolean);
        return `/research${parts.length ? `?${parts.join('&')}` : ''}#archive`;
    };

    const base =
        'inline-flex h-11 min-w-11 items-center justify-center rounded-xl border px-3.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';
    const inactive = 'border-border bg-white text-primary-dark hover:border-primary/30 hover:bg-primary/[0.04]';

    return (
        <nav aria-label="Publication pages" className="mt-10 flex flex-wrap items-center gap-2">
            {page > 1 ? (
                <Link href={href(page - 1)} className={`${base} ${inactive}`} rel="prev">
                    <ChevronLeft size={16} aria-hidden="true" />
                    <span className="sr-only">Previous page</span>
                </Link>
            ) : (
                <span className={`${base} border-border bg-surface-muted text-text-secondary/50`} aria-disabled="true">
                    <ChevronLeft size={16} aria-hidden="true" />
                    <span className="sr-only">Previous page, unavailable</span>
                </span>
            )}

            {pageWindow(page, pageCount).map((p, i) =>
                p === null ? (
                    <span key={`gap-${i}`} className="px-1 text-text-secondary" aria-hidden="true">
                        …
                    </span>
                ) : p === page ? (
                    <span
                        key={p}
                        aria-current="page"
                        className={`${base} border-primary-dark bg-primary-dark text-white`}
                    >
                        {p}
                    </span>
                ) : (
                    <Link key={p} href={href(p)} className={`${base} ${inactive}`}>
                        <span className="sr-only">Page </span>
                        {p}
                    </Link>
                ),
            )}

            {page < pageCount ? (
                <Link href={href(page + 1)} className={`${base} ${inactive}`} rel="next">
                    <ChevronRight size={16} aria-hidden="true" />
                    <span className="sr-only">Next page</span>
                </Link>
            ) : (
                <span className={`${base} border-border bg-surface-muted text-text-secondary/50`} aria-disabled="true">
                    <ChevronRight size={16} aria-hidden="true" />
                    <span className="sr-only">Next page, unavailable</span>
                </span>
            )}
        </nav>
    );
}
