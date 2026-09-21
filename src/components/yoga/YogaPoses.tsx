import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { posesClass } from '@/data/yoga';

export default function YogaPoses() {
    return (
        <section className="bg-white section-padding" aria-labelledby="poses-heading">
            <div className="container-site">
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
                    {/* The mandala is a square illustration — shown whole, never cropped */}
                    <Reveal className="order-2 lg:order-1">
                        <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-full bg-gradient-to-br from-[#F4F8FA] to-white">
                            <Image
                                src={posesClass.image.src}
                                alt={posesClass.image.alt}
                                width={posesClass.image.width}
                                height={posesClass.image.height}
                                sizes="(max-width: 1024px) 88vw, 520px"
                                className="h-full w-full object-contain p-3"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={100} className="order-1 lg:order-2">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Poses
                        </p>
                        <h2
                            id="poses-heading"
                            className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                        >
                            {posesClass.heading}
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                        <p className="mt-7 max-w-lg text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                            {posesClass.body}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
