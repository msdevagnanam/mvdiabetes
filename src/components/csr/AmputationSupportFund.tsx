import { Archive } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { amputationFund, historicalContext, legAmputations } from '@/data/csr';

export default function AmputationSupportFund() {
    return (
        <section className="bg-white section-padding" aria-labelledby="amputation-fund-heading">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            The Need
                        </p>
                        <h2
                            id="amputation-fund-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.1] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                        >
                            {amputationFund.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                                {amputationFund.opening}
                            </p>
                        </Reveal>

                        {/* Leg amputations — source section */}
                        <Reveal delay={90}>
                            <h3 className="mt-10 text-xl font-extrabold text-primary-dark lg:text-2xl">
                                {legAmputations.heading}
                            </h3>
                            {legAmputations.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="mt-4 text-base leading-relaxed text-text-secondary"
                                >
                                    {p}
                                </p>
                            ))}
                        </Reveal>

                        {/*
                          Historical statistics are fenced off behind an explicit label so
                          they are never mistaken for current data.
                        */}
                        <Reveal delay={150}>
                            <div className="mt-10 rounded-2xl border border-border bg-surface-muted/50 p-6 md:p-8">
                                <p className="flex items-start gap-2.5 text-[0.8125rem] font-semibold leading-relaxed text-primary-dark">
                                    <Archive
                                        size={16}
                                        className="mt-0.5 shrink-0 text-primary"
                                        aria-hidden="true"
                                    />
                                    <span>{historicalContext.label}</span>
                                </p>
                                <div className="mt-5 space-y-4 border-t border-border pt-5">
                                    {historicalContext.paragraphs.map((p, i) => (
                                        <p
                                            key={i}
                                            className="text-[0.9375rem] leading-relaxed text-text-secondary"
                                        >
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
