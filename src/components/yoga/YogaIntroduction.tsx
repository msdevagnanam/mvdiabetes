import Reveal from '@/components/ui/Reveal';
import { whyYoga } from '@/data/yoga';

export default function YogaIntroduction() {
    return (
        <section className="bg-white section-padding" aria-labelledby="why-yoga-heading">
            <div className="container-site">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
                    {/* Left — heading */}
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Why Yoga
                        </p>
                        <h2
                            id="why-yoga-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                        >
                            {whyYoga.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-primary-light">
                            {whyYoga.marker}
                        </p>
                    </Reveal>

                    {/* Right — source content */}
                    <div className="space-y-6">
                        <Reveal>
                            <p className="text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                                {whyYoga.intro}
                            </p>
                        </Reveal>

                        <Reveal delay={90}>
                            <blockquote className="rounded-2xl border-l-[3px] border-primary-light bg-[#F4F8FA] px-6 py-6 md:px-8 md:py-7">
                                <p className="text-base leading-relaxed text-primary-dark lg:text-lg lg:leading-relaxed">
                                    “{whyYoga.quote}”
                                </p>
                            </blockquote>
                        </Reveal>

                        <Reveal delay={150}>
                            <p className="text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                                {whyYoga.bloodPressure}
                            </p>
                        </Reveal>

                        <Reveal delay={210}>
                            <p className="text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                                {whyYoga.stressHormones}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
