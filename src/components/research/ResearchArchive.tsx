import Link from 'next/link';
import { FileSearch } from 'lucide-react';
import {
    publicationsPerYear,
    queryPublications,
    researchStats,
    researchYears,
    type SortOrder,
} from '@/data/research/publications';
import ResearchFilters from './ResearchFilters';
import PublicationList from './PublicationList';
import ResearchPagination from './ResearchPagination';

interface ResearchArchiveProps {
    q?: string;
    year?: number;
    sort?: SortOrder;
    page?: number;
}

export default function ResearchArchive({ q, year, sort, page }: ResearchArchiveProps) {
    const result = queryPublications({ q, year, sort, page });

    // Query string for pagination links, minus the page number itself.
    const baseQuery = new URLSearchParams(
        Object.entries({ q, year: year?.toString(), sort }).filter(([, v]) => Boolean(v)) as [
            string,
            string,
        ][],
    ).toString();

    return (
        <section id="archive" className="scroll-mt-20 bg-white section-padding" aria-labelledby="archive-heading">
            <div className="container-site">
                <div className="max-w-3xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Publication Database
                    </p>
                    <h2
                        id="archive-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.1] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        M V Publications ({researchStats.earliestYear} Onwards)
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-14">
                    {/* ---------------- Results ---------------- */}
                    <div className="min-w-0">
                        <ResearchFilters
                            years={researchYears}
                            total={researchStats.total}
                            from={result.from}
                            to={result.to}
                            matched={result.total}
                        />

                        {result.total === 0 ? (
                            <div className="mt-12 rounded-2xl border border-border bg-surface-muted/40 px-6 py-14 text-center">
                                <FileSearch
                                    size={30}
                                    className="mx-auto text-text-secondary/60"
                                    aria-hidden="true"
                                />
                                <p className="mt-4 text-lg font-extrabold text-primary-dark">
                                    No publications found
                                </p>
                                <p className="mt-2 text-sm text-text-secondary">
                                    Try another title, author, journal or year.
                                </p>
                                <Link
                                    href="/research#archive"
                                    className="mt-6 inline-flex min-h-11 items-center rounded-xl border border-border bg-white px-5 text-sm font-bold text-primary-dark transition-colors hover:border-primary/30 hover:bg-primary/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Clear filters
                                </Link>
                            </div>
                        ) : (
                            <>
                                <PublicationList items={result.items} />
                                <ResearchPagination
                                    page={result.page}
                                    pageCount={result.pageCount}
                                    baseQuery={baseQuery}
                                />
                            </>
                        )}
                    </div>

                    {/* ---------------- Year navigation ---------------- */}
                    <nav aria-label="Browse by year" className="hidden lg:block">
                        <div className="sticky top-24">
                            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-text-secondary">
                                Browse by year
                            </p>
                            <ul className="mt-4 max-h-[60vh] overflow-y-auto pr-1">
                                <li>
                                    <Link
                                        href="/research#archive"
                                        aria-current={year === undefined ? 'true' : undefined}
                                        className={`flex items-baseline justify-between gap-3 rounded-lg px-2.5 py-1.5 font-mono text-sm transition-colors hover:bg-primary/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                            year === undefined
                                                ? 'bg-primary/[0.08] font-bold text-primary-dark'
                                                : 'text-text-secondary'
                                        }`}
                                    >
                                        All
                                        <span className="tabular-nums">{researchStats.total}</span>
                                    </Link>
                                </li>
                                {publicationsPerYear.map(({ year: y, count }) => (
                                    <li key={y}>
                                        <Link
                                            href={`/research?year=${y}#archive`}
                                            aria-current={year === y ? 'true' : undefined}
                                            className={`flex items-baseline justify-between gap-3 rounded-lg px-2.5 py-1.5 font-mono text-sm transition-colors hover:bg-primary/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                                year === y
                                                    ? 'bg-primary/[0.08] font-bold text-primary-dark'
                                                    : 'text-text-secondary'
                                            }`}
                                        >
                                            {y}
                                            <span className="tabular-nums">{count}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}
