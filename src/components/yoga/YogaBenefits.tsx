import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { rolesIntro, yogaRoles } from '@/data/yoga';

export default function YogaBenefits() {
    return (
        <section className="bg-white section-padding" aria-labelledby="roles-heading">
            <div className="container-site">
                <Reveal className="max-w-3xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Benefits
                    </p>
                    <h2
                        id="roles-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        {rolesIntro.heading}
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    <p className="mt-6 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                        {rolesIntro.body}
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Cut-out figure on a soft disc — sticky alongside the list on desktop */}
                    <Reveal className="hidden lg:block">
                        <div className="sticky top-28">
                            <div className="relative mx-auto w-full max-w-[380px]">
                                <div
                                    className="absolute bottom-0 left-1/2 aspect-square w-full -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/20 to-primary-light/15"
                                    aria-hidden="true"
                                />
                                <Image
                                    src={rolesIntro.image.src}
                                    alt={rolesIntro.image.alt}
                                    width={rolesIntro.image.width}
                                    height={rolesIntro.image.height}
                                    sizes="(max-width: 1024px) 0px, 380px"
                                    className="relative h-auto w-full object-contain"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <ol className="space-y-px">
                        {yogaRoles.map((role, i) => (
                            <Reveal
                                as="li"
                                key={role.id}
                                delay={(i % 3) * 70}
                                className="border-t border-border first:border-t-0"
                            >
                                <div
                                    id={role.id}
                                    className="flex scroll-mt-24 gap-5 py-7 sm:gap-7 lg:py-8"
                                >
                                    <Image
                                        src={role.icon}
                                        alt=""
                                        width={209}
                                        height={209}
                                        sizes="56px"
                                        aria-hidden="true"
                                        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
                                    />
                                    <div>
                                        <div className="flex items-baseline gap-3">
                                            <span
                                                className="font-mono text-sm font-bold tabular-nums text-secondary"
                                                aria-hidden="true"
                                            >
                                                {role.number}
                                            </span>
                                            <h3 className="text-xl font-extrabold text-primary-dark lg:text-[1.375rem]">
                                                {role.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-text-secondary">
                                            {role.body}
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
