import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { allRanges } from '@/data/yoga';

export default function YogaAllRanges() {
    return (
        <section className="bg-white section-padding" aria-labelledby="all-ranges-heading">
            <div className="container-site">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Classes
                        </p>
                        <h2
                            id="all-ranges-heading"
                            className="mt-4 text-4xl font-extrabold leading-[1.05] text-primary-dark md:text-5xl lg:text-[3.5rem]"
                        >
                            {allRanges.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                        <p className="mt-7 max-w-lg text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                            {allRanges.body}
                        </p>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted">
                            <Image
                                src={allRanges.image.src}
                                alt={allRanges.image.alt}
                                width={allRanges.image.width}
                                height={allRanges.image.height}
                                sizes="(max-width: 1024px) 92vw, 620px"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
