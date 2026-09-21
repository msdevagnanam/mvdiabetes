'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';

interface ResearchFiltersProps {
    years: number[];
    total: number;
    from: number;
    to: number;
    matched: number;
}

export default function ResearchFilters({ years, total, from, to, matched }: ResearchFiltersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const currentQ = params.get('q') ?? '';
    const [term, setTerm] = useState(currentQ);
    const inputRef = useRef<HTMLInputElement>(null);

    // Adjust the field during render when the URL changes from elsewhere
    // (Clear filters, back/forward) — React's pattern for syncing to a prop.
    const [urlQ, setUrlQ] = useState(currentQ);
    if (currentQ !== urlQ) {
        setUrlQ(currentQ);
        setTerm(currentQ);
    }

    const push = (next: URLSearchParams) => {
        next.delete('page');
        const qs = next.toString();
        startTransition(() => {
            router.replace(qs ? `${pathname}?${qs}#archive` : `${pathname}#archive`, {
                scroll: false,
            });
        });
    };

    // Debounced search — the URL is the single source of truth for results.
    useEffect(() => {
        if (term === currentQ) return;
        const id = setTimeout(() => {
            const next = new URLSearchParams(params.toString());
            if (term) next.set('q', term);
            else next.delete('q');
            push(next);
        }, 300);
        return () => clearTimeout(id);
        // `push` and `params` are stable for a given URL; re-running on them
        // would cancel the timer on every render.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term, currentQ]);

    const setParam = (key: string, value: string) => {
        const next = new URLSearchParams(params.toString());
        if (value) next.set(key, value);
        else next.delete(key);
        push(next);
    };

    // "/" focuses the search field, unless the user is already typing somewhere.
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
            const el = document.activeElement;
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement ||
                (el instanceof HTMLElement && el.isContentEditable)) return;
            e.preventDefault();
            inputRef.current?.focus();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    const activeYear = params.get('year') ?? '';
    const activeSort = params.get('sort') ?? 'newest';
    const hasFilters = Boolean(currentQ || activeYear || params.get('sort'));

    return (
        <div>
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto]">
                {/* ---------------- Search ---------------- */}
                <div className="relative">
                    <label htmlFor="publication-search" className="sr-only">
                        Search publications by title, author, journal, DOI or PMID
                    </label>
                    <Search
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                        aria-hidden="true"
                    />
                    <input
                        ref={inputRef}
                        id="publication-search"
                        type="search"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        placeholder="Search publications, authors, journals, DOI or PMID…"
                        className="h-12 w-full rounded-xl border border-border bg-white pl-11 pr-11 text-base text-text-primary placeholder:text-text-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    />
                    {term && (
                        <button
                            type="button"
                            onClick={() => setTerm('')}
                            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-muted hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <X size={16} aria-hidden="true" />
                            <span className="sr-only">Clear search</span>
                        </button>
                    )}
                </div>

                {/* ---------------- Year ---------------- */}
                <div>
                    <label htmlFor="publication-year" className="sr-only">
                        Filter by year
                    </label>
                    <select
                        id="publication-year"
                        value={activeYear}
                        onChange={e => setParam('year', e.target.value)}
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-base font-semibold text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-44"
                    >
                        <option value="">All years</option>
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* ---------------- Sort ---------------- */}
                <div>
                    <label htmlFor="publication-sort" className="sr-only">
                        Sort publications
                    </label>
                    <select
                        id="publication-sort"
                        value={activeSort}
                        onChange={e => setParam('sort', e.target.value)}
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 text-base font-semibold text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-48"
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                        <option value="source">Source order</option>
                    </select>
                </div>
            </div>

            {/* ---------------- Result count ---------------- */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p
                    aria-live="polite"
                    className={`text-sm text-text-secondary transition-opacity ${
                        isPending ? 'opacity-50' : 'opacity-100'
                    }`}
                >
                    {matched === 0 ? (
                        'No publications found'
                    ) : (
                        <>
                            Showing <span className="font-bold text-primary-dark">{from}–{to}</span>{' '}
                            of <span className="font-bold text-primary-dark">{matched}</span>{' '}
                            {matched === total ? 'publications' : `matching publications`}
                        </>
                    )}
                </p>

                {hasFilters && (
                    <button
                        type="button"
                        // Navigate only — the render-time sync resets the field from
                        // the new URL, so the debounce cannot re-add stale params.
                        onClick={() =>
                            startTransition(() =>
                                router.replace(`${pathname}#archive`, { scroll: false }),
                            )
                        }
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-bold text-primary transition-colors hover:bg-primary/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <X size={14} aria-hidden="true" />
                        Clear filters
                    </button>
                )}
            </div>
        </div>
    );
}
