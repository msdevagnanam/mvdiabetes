import { Check } from 'lucide-react';
import { podiatryIntro, podiatryScope } from '@/data/podiatry';
import Reveal from '@/components/ui/Reveal';

export default function WhyFootCareSection() {
    return (
        <section className="bg-white section-padding" aria-labelledby="why-foot-care-heading">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Why Specialized Foot Care Matters
                        </p>
                        <h2
                            id="why-foot-care-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl"
                        >
                            Foot, Ankle &amp; Lower Extremity Care
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary lg:text-lg">
                            {podiatryIntro}
                        </p>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="rounded-2xl border border-border bg-surface-muted/60 p-6 md:p-8 lg:p-10">
                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-primary-dark">
                                What podiatrists diagnose, treat and prevent
                            </h3>
                            <ul className="mt-6 space-y-px">
                                {podiatryScope.map(item => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3.5 border-t border-border/80 py-4 first:border-t-0"
                                    >
                                        <span
                                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                                            aria-hidden="true"
                                        >
                                            <Check size={15} strokeWidth={3} />
                                        </span>
                                        <span className="text-base font-semibold text-text-primary">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
