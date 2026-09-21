import { Info } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { supportFund } from '@/data/csr';

export default function SupportFundSection() {
    return (
        <section className="bg-[#FAF7F2] section-padding" aria-labelledby="support-fund-heading">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            The Fund
                        </p>
                        <h2
                            id="support-fund-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.1] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                        >
                            {supportFund.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                                {supportFund.intro}
                            </p>
                        </Reveal>

                        {/* Source-described purposes of the fund — not guaranteed benefits */}
                        <Reveal delay={90}>
                            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                                {supportFund.purposes.map(purpose => (
                                    <li
                                        key={purpose.title}
                                        className="rounded-2xl border border-border bg-white p-6"
                                    >
                                        <h3 className="text-base font-extrabold text-primary-dark lg:text-lg">
                                            {purpose.title}
                                        </h3>
                                        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-text-secondary">
                                            {purpose.body}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {/* This qualification governs everything above it — kept prominent */}
                        <Reveal delay={150}>
                            <p className="mt-6 flex gap-2.5 rounded-xl border-l-[3px] border-primary-light bg-primary/[0.05] px-5 py-4 text-[0.9375rem] font-medium leading-relaxed text-primary-dark">
                                <Info
                                    size={17}
                                    className="mt-0.5 shrink-0 text-primary"
                                    aria-hidden="true"
                                />
                                <span>{supportFund.qualification}</span>
                            </p>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="mt-8 space-y-4 border-t border-border pt-8">
                                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                                    {supportFund.section80G}
                                </p>
                                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                                    {supportFund.contribution}
                                </p>
                                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                                    {supportFund.closing}
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
