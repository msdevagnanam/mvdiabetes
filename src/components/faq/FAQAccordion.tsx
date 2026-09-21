'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Minus, Plus, Search, X } from 'lucide-react';
import LegalBlocks from '@/components/legal/LegalBlocks';
import type { FaqEntry } from '@/data/legal';

interface FAQAccordionProps {
    items: FaqEntry[];
    categories: string[];
}

export default function FAQAccordion({ items, categories }: FAQAccordionProps) {
    const [term, setTerm] = useState('');
    const [category, setCategory] = useState<string | null>(null);
    const [openIds, setOpenIds] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const visible = useMemo(() => {
        const q = term.trim().toLowerCase();
        return items.filter(item => {
            if (category && item.category !== category) return false;
            if (!q) return true;
            return item.searchText.toLowerCase().includes(q);
        });
    }, [items, term, category]);

    // Subscribe to the URL hash so FAQ answers are deep-linkable, on first
    // load and whenever the hash changes afterwards.
    useEffect(() => {
        const openFromHash = () => {
            const id = window.location.hash.replace('#', '');
            if (!id || !items.some(item => item.id === id)) return;
            setOpenIds(open => (open.includes(id) ? open : [...open, id]));
            // Let the panel expand before scrolling to it.
            requestAnimationFrame(() => {
                document.getElementById(`faq-${id}`)?.scrollIntoView({ block: 'start' });
            });
        };

        openFromHash();
        window.addEventListener('hashchange', openFromHash);
        return () => window.removeEventListener('hashchange', openFromHash);
    }, [items]);

    const toggle = (id: string) =>
        setOpenIds(open => (open.includes(id) ? open.filter(x => x !== id) : [...open, id]));

    const hasFilters = Boolean(term || category);

    return (
        <div>
            {/* ---------------- Search ---------------- */}
            <div className="relative">
                <label htmlFor="faq-search" className="sr-only">
                    Search questions
                </label>
                <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                    aria-hidden="true"
                />
                <input
                    ref={inputRef}
                    id="faq-search"
                    type="search"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    placeholder="Search questions..."
                    className="h-12 w-full rounded-xl border border-border bg-white pl-11 pr-11 text-base text-text-primary placeholder:text-text-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                />
                {term && (
                    <button
                        type="button"
                        onClick={() => {
                            setTerm('');
                            inputRef.current?.focus();
                        }}
                        className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-muted hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <X size={16} aria-hidden="true" />
                        <span className="sr-only">Clear search</span>
                    </button>
                )}
            </div>

            {/* ---------------- Category filter ---------------- */}
            <div role="group" aria-label="Filter questions by topic" className="mt-4 flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => setCategory(null)}
                    aria-pressed={category === null}
                    className={`inline-flex min-h-10 items-center rounded-lg border px-4 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                        category === null
                            ? 'border-primary-dark bg-primary-dark text-white'
                            : 'border-border bg-white text-primary-dark hover:border-primary/30 hover:bg-primary/[0.04]'
                    }`}
                >
                    All
                </button>
                {categories.map(name => (
                    <button
                        key={name}
                        type="button"
                        onClick={() => setCategory(c => (c === name ? null : name))}
                        aria-pressed={category === name}
                        className={`inline-flex min-h-10 items-center rounded-lg border px-4 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                            category === name
                                ? 'border-primary-dark bg-primary-dark text-white'
                                : 'border-border bg-white text-primary-dark hover:border-primary/30 hover:bg-primary/[0.04]'
                        }`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            {/* ---------------- Result count ---------------- */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <p aria-live="polite" className="text-sm text-text-secondary">
                    {visible.length === 0
                        ? 'No questions found.'
                        : `${visible.length} ${visible.length === 1 ? 'question' : 'questions'} found`}
                </p>
                {hasFilters && (
                    <button
                        type="button"
                        onClick={() => {
                            setTerm('');
                            setCategory(null);
                        }}
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-bold text-primary transition-colors hover:bg-primary/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <X size={14} aria-hidden="true" />
                        Clear filters
                    </button>
                )}
            </div>

            {/* ---------------- Questions ---------------- */}
            {visible.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-border bg-surface-muted/40 px-6 py-12 text-center">
                    <p className="text-lg font-extrabold text-primary-dark">No questions found.</p>
                    <p className="mt-2 text-sm text-text-secondary">Try another search term.</p>
                </div>
            ) : (
                <ol className="mt-8 space-y-3">
                    {visible.map((item, i) => {
                        const isOpen = openIds.includes(item.id);
                        return (
                            <li
                                key={item.id}
                                id={`faq-${item.id}`}
                                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white"
                            >
                                <h3>
                                    <button
                                        type="button"
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${item.id}`}
                                        id={`faq-button-${item.id}`}
                                        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-primary/[0.03] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary md:px-6"
                                    >
                                        <span
                                            className="mt-0.5 shrink-0 font-mono text-sm font-bold tabular-nums text-secondary"
                                            aria-hidden="true"
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="flex-1 text-base font-bold leading-snug text-primary-dark md:text-lg">
                                            {item.question}
                                        </span>
                                        <span
                                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                                            aria-hidden="true"
                                        >
                                            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                                        </span>
                                    </button>
                                </h3>

                                {/*
                                  Always in the DOM and hidden with the `hidden`
                                  attribute, so answers remain available to
                                  find-in-page, crawlers and readers without JS.
                                */}
                                <div
                                    id={`faq-panel-${item.id}`}
                                    role="region"
                                    aria-labelledby={`faq-button-${item.id}`}
                                    hidden={!isOpen}
                                    className="border-t border-border px-5 py-5 md:px-6"
                                >
                                    <div className="md:pl-9">
                                        <LegalBlocks blocks={item.blocks} />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
}
