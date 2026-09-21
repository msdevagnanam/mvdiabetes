import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { yogaClassLevels } from '@/data/yoga';

export default function YogaClassLevels() {
    return (
        <section
            id="class-levels"
            className="scroll-mt-24 bg-[#F4F8FA] section-padding"
            aria-labelledby="class-levels-heading"
        >
            <div className="container-site">
                <Reveal className="max-w-2xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Class Levels
                    </p>
                    <h2
                        id="class-levels-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        Basic &amp; Advanced Classes
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                </Reveal>

                <div className="mt-10 grid gap-6 md:gap-8 lg:mt-14 lg:grid-cols-2">
                    {yogaClassLevels.map((level, i) => (
                        <Reveal key={level.id} delay={i * 100}>
                            <article
                                id={level.id}
                                className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary-dark/[0.07]"
                            >
                                <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                                    <Image
                                        src={level.image.src}
                                        alt={level.image.alt}
                                        width={level.image.width}
                                        height={level.image.height}
                                        sizes="(max-width: 1024px) 92vw, 620px"
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                                    />
                                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-dark backdrop-blur-sm">
                                        {level.label}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-6 md:p-7 lg:p-8">
                                    <h3 className="text-xl font-extrabold text-primary-dark lg:text-2xl">
                                        {level.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                        {level.body}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
