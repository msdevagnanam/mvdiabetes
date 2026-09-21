import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { integration } from '@/data/yoga';

export default function YogaIntegration() {
    return (
        <section
            className="relative overflow-hidden bg-primary-dark section-padding"
            aria-labelledby="integration-heading"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-primary-light/[0.06]" />
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/[0.05]" />
            </div>

            <div className="container-site relative z-10">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">
                            <span className="h-px w-6 bg-secondary/60" aria-hidden="true" />
                            Integration
                        </p>
                        <h2
                            id="integration-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.1] text-white md:text-4xl lg:text-[2.75rem]"
                        >
                            {integration.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-primary-light" aria-hidden="true" />
                    </Reveal>

                    <div>
                        {integration.paragraphs.map((p, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <p className="mb-6 text-base leading-relaxed text-white/80 lg:text-lg lg:leading-relaxed">
                                    {p}
                                </p>
                            </Reveal>
                        ))}

                        <Reveal delay={220}>
                            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                                {integration.highlights.map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span
                                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary/15 text-secondary"
                                            aria-hidden="true"
                                        >
                                            <Check size={14} strokeWidth={3} />
                                        </span>
                                        <span className="text-[0.9375rem] font-semibold text-white/90">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
