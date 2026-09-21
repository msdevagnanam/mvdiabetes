import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { madhaviammaTrust, trustees } from '@/data/csr';

export default function MadhaviammaTrust() {
    return (
        <section
            className="relative overflow-hidden bg-primary-dark section-padding"
            aria-labelledby="trust-heading"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-primary-light/[0.06]" />
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/[0.05]" />
            </div>

            <div className="container-site relative z-10">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
                    {/* Left — archival portrait, shown at its true size */}
                    <Reveal>
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">
                            <span className="h-px w-6 bg-secondary/60" aria-hidden="true" />
                            Established {madhaviammaTrust.established}
                        </p>

                        <figure className="mt-8 w-fit">
                            <div className="rounded-lg border border-white/15 bg-white/[0.06] p-3">
                                <Image
                                    src={madhaviammaTrust.image.src}
                                    alt={madhaviammaTrust.image.alt}
                                    width={madhaviammaTrust.image.width}
                                    height={madhaviammaTrust.image.height}
                                    sizes="156px"
                                    className="h-auto w-[156px] rounded"
                                />
                            </div>
                            <figcaption className="mt-3 max-w-[200px] text-xs leading-relaxed text-white/60">
                                Late Dr. (Mrs) Madhaviamma
                            </figcaption>
                        </figure>

                        <p className="mt-10 text-5xl font-extrabold leading-none text-white/15 lg:text-7xl">
                            {madhaviammaTrust.established}
                        </p>
                    </Reveal>

                    {/* Right — trust mission + trustees */}
                    <div>
                        <Reveal>
                            <h2
                                id="trust-heading"
                                className="text-3xl font-extrabold leading-[1.1] text-white md:text-4xl lg:text-[2.75rem]"
                            >
                                {madhaviammaTrust.heading}
                            </h2>
                            <div className="mt-6 h-0.5 w-16 bg-primary-light" aria-hidden="true" />
                            <p className="mt-7 text-base leading-relaxed text-white/80 lg:text-lg lg:leading-relaxed">
                                {madhaviammaTrust.body}
                            </p>
                        </Reveal>

                        <Reveal delay={120}>
                            <div className="mt-10 border-t border-white/15 pt-8">
                                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-secondary">
                                    {trustees.heading}
                                </h3>
                                <ul className="mt-5 space-y-3">
                                    {trustees.names.map(name => (
                                        <li
                                            key={name}
                                            className="text-lg font-semibold text-white lg:text-xl"
                                        >
                                            {name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
