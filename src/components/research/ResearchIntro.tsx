import Reveal from '@/components/ui/Reveal';
import { researchStats } from '@/data/research/publications';

export default function ResearchIntro() {
    return (
        <section className="bg-[#FAFBFC] section-padding" aria-labelledby="research-intro-heading">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            The Archive
                        </p>
                        <h2
                            id="research-intro-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.1] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                        >
                            A Legacy of Scientific Contribution
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                                M.V. Diabetes Hospital is committed to advancing knowledge and
                                research in diabetes and related conditions. This page collects the
                                scholarly articles, research papers, case studies and other
                                publications authored or co-authored by our healthcare professionals
                                and researchers.
                            </p>
                        </Reveal>

                        <Reveal delay={90}>
                            <p className="mt-6 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                                The publications span diagnosis, treatment approaches, preventive
                                strategies and advancements in diabetes research, beginning with
                                M V Publications ({researchStats.earliestYear} onwards).
                            </p>
                        </Reveal>

                        <Reveal delay={150}>
                            <p className="mt-8 border-l-2 border-border pl-5 text-[0.875rem] leading-relaxed text-text-secondary">
                                Publication information reflects the archive available on the
                                original MV Diabetes research publications page, which runs through{' '}
                                {researchStats.latestYear}. Citations are reproduced as published,
                                including their original spelling and formatting.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
