'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Publication } from '@/data/research/publications';
import PublicationDetails from './PublicationDetails';

export default function PublicationList({ items }: { items: Publication[] }) {
    const [open, setOpen] = useState<Publication | null>(null);

    return (
        <>
            <ol className="mt-8">
                {items.map((publication, i) => {
                    const showYear = i === 0 || items[i - 1].year !== publication.year;

                    return (
                        <li key={publication.id}>
                            {showYear && (
                                <p
                                    id={`year-${publication.year}`}
                                    className="mb-4 mt-12 scroll-mt-24 border-b-2 border-primary-dark pb-3 font-mono text-3xl font-bold leading-none text-primary-dark first:mt-0 lg:text-4xl"
                                >
                                    {publication.year}
                                </p>
                            )}

                            <article className="group border-b border-border py-6 lg:py-7">
                                <h3 className="text-base font-bold leading-snug text-primary-dark [overflow-wrap:anywhere] lg:text-lg">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(publication)}
                                        className="text-left transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {publication.title}
                                        <span className="sr-only"> — view publication details</span>
                                    </button>
                                </h3>

                                {publication.citation && (
                                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-text-secondary [overflow-wrap:anywhere]">
                                        {publication.citation}
                                    </p>
                                )}

                                {(publication.doi || publication.pmid || publication.url) && (
                                    <ul className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                        {publication.doi && (
                                            <li>
                                                <a
                                                    href={`https://doi.org/${publication.doi}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-primary hover:text-primary-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                >
                                                    <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide">
                                                        DOI
                                                    </span>
                                                    <span className="break-all">{publication.doi}</span>
                                                    <ExternalLink size={12} aria-hidden="true" className="shrink-0" />
                                                </a>
                                            </li>
                                        )}
                                        {publication.pmid && (
                                            <li>
                                                <a
                                                    href={`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}/`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-primary hover:text-primary-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                >
                                                    <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide">
                                                        PMID
                                                    </span>
                                                    {publication.pmid}
                                                    <ExternalLink size={12} aria-hidden="true" className="shrink-0" />
                                                </a>
                                            </li>
                                        )}
                                        {publication.url && (
                                            <li>
                                                <a
                                                    href={publication.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-primary hover:text-primary-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                >
                                                    Article
                                                    <ExternalLink size={12} aria-hidden="true" className="shrink-0" />
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                )}
                            </article>
                        </li>
                    );
                })}
            </ol>

            {open && <PublicationDetails publication={open} onClose={() => setOpen(null)} />}
        </>
    );
}
