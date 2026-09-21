import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { legalCta, tocEntries, type LegalDocument } from '@/data/legal';
import LegalBlocks from './LegalBlocks';
import LegalTableOfContents from './LegalTableOfContents';

interface LegalPageProps {
    document: LegalDocument;
    /** Breadcrumb label and hero title. */
    title: string;
    eyebrow: string;
    intro: string;
    /** Optional standing notice shown above the document body. */
    notice?: string;
}

export default function LegalPage({ document, title, eyebrow, intro, notice }: LegalPageProps) {
    const entries = tocEntries(document);
    const minLevel = Math.min(...document.sections.map(s => s.level));

    return (
        <>
            {/* ---------------- Hero ---------------- */}
            <section className="border-b border-border bg-[#FAFBFC]">
                <div className="container-site pb-12 pt-4 md:pb-16 md:pt-6">
                    <Breadcrumbs items={[{ label: title }]} />
                    <div className="mt-4 max-w-3xl">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            {eyebrow}
                        </p>
                        <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-primary-dark sm:text-4xl lg:text-[3rem]">
                            {title}
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-text-secondary">{intro}</p>
                    </div>
                </div>
            </section>

            {/* ---------------- Document ---------------- */}
            <section className="bg-white section-padding">
                <div className="container-site">
                    <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
                        <LegalTableOfContents entries={entries} />

                        <div className="min-w-0 max-w-[820px]">
                            {notice && (
                                <p className="mb-10 rounded-xl border-l-[3px] border-primary-light bg-primary/[0.05] px-5 py-4 text-[0.9375rem] font-medium leading-relaxed text-primary-dark">
                                    {notice}
                                </p>
                            )}

                            {document.sections.map(section => {
                                const isTop = section.level === minLevel;
                                const isIntro = section.id === 'introduction';

                                return (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        aria-labelledby={`${section.id}-heading`}
                                        className="scroll-mt-24 border-t border-border pt-10 first:border-t-0 first:pt-0 [&+section]:mt-10"
                                    >
                                        <h2
                                            id={`${section.id}-heading`}
                                            className={
                                                isIntro
                                                    ? 'sr-only'
                                                    : isTop
                                                      ? 'text-2xl font-extrabold leading-tight text-primary-dark md:text-3xl'
                                                      : 'text-xl font-extrabold leading-tight text-primary-dark md:text-2xl'
                                            }
                                        >
                                            {section.title}
                                        </h2>

                                        <div className={isIntro ? '' : 'mt-5'}>
                                            <LegalBlocks blocks={section.blocks} />
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- CTA ---------------- */}
            <section className="bg-white pb-16 md:pb-20 lg:pb-24">
                <div className="container-site">
                    <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface-muted/40 p-7 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
                        <div>
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary">
                                {legalCta.eyebrow}
                            </p>
                            <h2 className="mt-2.5 text-xl font-extrabold leading-tight text-primary-dark md:text-2xl">
                                {legalCta.heading}
                            </h2>
                        </div>
                        <Link
                            href={legalCta.href}
                            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-primary-dark px-7 font-bold text-primary-dark transition-colors hover:bg-primary-dark hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
                        >
                            {legalCta.buttonLabel}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
