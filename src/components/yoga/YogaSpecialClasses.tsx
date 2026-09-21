import Reveal from '@/components/ui/Reveal';
import { specialClassesHeading, yogaSpecialClasses } from '@/data/yoga';

export default function YogaSpecialClasses() {
    return (
        <section
            className="bg-primary-dark section-padding"
            aria-labelledby="special-classes-heading"
        >
            <div className="container-site">
                <Reveal className="max-w-2xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">
                        <span className="h-px w-6 bg-secondary/60" aria-hidden="true" />
                        Special Classes
                    </p>
                    <h2
                        id="special-classes-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.12] text-white md:text-4xl lg:text-[2.6rem]"
                    >
                        {specialClassesHeading}
                    </h2>
                </Reveal>

                <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                    {yogaSpecialClasses.map((item, i) => (
                        <Reveal
                            as="li"
                            key={item.id}
                            delay={i * 80}
                            className="group bg-primary-dark"
                        >
                            <div className="flex h-full flex-col justify-between gap-8 p-7 transition-colors group-hover:bg-white/[0.04] lg:p-8">
                                <span
                                    className="font-mono text-sm font-bold tabular-nums text-secondary"
                                    aria-hidden="true"
                                >
                                    {item.number}
                                </span>
                                <h3 className="text-xl font-extrabold leading-snug text-white lg:text-[1.375rem]">
                                    {item.title}
                                </h3>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
