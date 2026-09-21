'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { Publication } from '@/data/research/publications';

interface PublicationDetailsProps {
    publication: Publication;
    onClose: () => void;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="border-t border-border py-4 first:border-t-0 sm:grid sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
            <dt className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-text-secondary">
                {label}
            </dt>
            <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-text-primary [overflow-wrap:anywhere] sm:mt-0">
                {children}
            </dd>
        </div>
    );
}

export default function PublicationDetails({ publication, onClose }: PublicationDetailsProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        previouslyFocused.current = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();

        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
            previouslyFocused.current?.focus?.();
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }
            if (e.key !== 'Tab') return;

            const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
            );
            if (!focusables || focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-primary-dark/60 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={e => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="publication-details-title"
                className="flex max-h-[92vh] w-full max-w-3xl flex-col rounded-t-2xl bg-white sm:max-h-[85vh] sm:rounded-2xl"
            >
                <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border p-5 md:p-6">
                    <div className="min-w-0">
                        <p className="font-mono text-sm font-bold text-primary">{publication.year}</p>
                        <h2
                            id="publication-details-title"
                            className="mt-1.5 text-lg font-extrabold leading-snug text-primary-dark [overflow-wrap:anywhere] md:text-xl"
                        >
                            {publication.title}
                        </h2>
                    </div>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-text-secondary transition-colors hover:bg-surface-muted hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <X size={18} aria-hidden="true" />
                        <span className="sr-only">Close publication details</span>
                    </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-6">
                    <dl>
                        <Field label="Year">{publication.year}</Field>

                        {publication.sourceYearLabel && (
                            <Field label="Source year label">{publication.sourceYearLabel}</Field>
                        )}

                        {publication.citation && (
                            <Field label="Citation">{publication.citation}</Field>
                        )}

                        {publication.doi && (
                            <Field label="DOI">
                                <a
                                    href={`https://doi.org/${publication.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 break-all font-medium text-primary underline underline-offset-2 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    {publication.doi}
                                    <ExternalLink size={13} aria-hidden="true" className="shrink-0" />
                                </a>
                            </Field>
                        )}

                        {publication.pmid && (
                            <Field label="PMID">
                                <a
                                    href={`https://pubmed.ncbi.nlm.nih.gov/${publication.pmid}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-2 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    {publication.pmid}
                                    <ExternalLink size={13} aria-hidden="true" className="shrink-0" />
                                </a>
                            </Field>
                        )}

                        {publication.url && (
                            <Field label="Article link">
                                <a
                                    href={publication.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 break-all font-medium text-primary underline underline-offset-2 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    {publication.url}
                                    <ExternalLink size={13} aria-hidden="true" className="shrink-0" />
                                </a>
                            </Field>
                        )}

                        {/* The complete citation exactly as published */}
                        <Field label="Source citation">
                            <span className="block rounded-xl border border-border bg-surface-muted/50 p-4 text-[0.875rem] leading-relaxed text-text-secondary">
                                {publication.sourceRaw}
                            </span>
                        </Field>

                        {publication.sourceNote && (
                            <Field label="Migration note">
                                <span className="text-text-secondary">{publication.sourceNote}</span>
                            </Field>
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
