import { podiatryPillars } from '@/data/podiatry';
import Reveal from '@/components/ui/Reveal';
import Image from 'next/image';

export default function PodiatryOverview() {
    return (
        <section className="bg-white section-padding" aria-labelledby="podiatry-glance">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
                    {/* Left — heading */}
                    <div className="flex flex-col h-full">
                        <Reveal>
                            <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                                <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                                Podiatry at a Glance
                            </p>
                            <h2
                                id="podiatry-glance"
                                className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                            >
                                Specialized Care for Foot Health
                            </h2>
                            <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                        </Reveal>
                        
                        <Reveal delay={150} className="mt-12 relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-xl border border-border lg:mt-16">
                            <Image 
                                src="/images/care/podiatry/podiatry-foot-education.jpg"
                                alt="Podiatry foot education"
                                fill
                                sizes="(max-width: 1024px) 100vw, 500px"
                                className="object-cover"
                            />
                        </Reveal>
                    </div>

                    {/* Right — the three source-supported pillars */}
                    <ol className="space-y-px">
                        {podiatryPillars.map((pillar, i) => (
                            <Reveal
                                as="li"
                                key={pillar.id}
                                delay={i * 90}
                                className="border-t border-border first:border-t-0"
                            >
                                <div className="group flex gap-5 py-7 sm:gap-8 lg:py-8">
                                    <span
                                        className="mt-1 shrink-0 font-mono text-sm font-bold tabular-nums text-secondary"
                                        aria-hidden="true"
                                    >
                                        {pillar.number}
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-extrabold text-primary-dark lg:text-2xl">
                                            {pillar.title}
                                        </h3>
                                        <p className="mt-2.5 max-w-xl text-base leading-relaxed text-text-secondary">
                                            {pillar.statement}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
