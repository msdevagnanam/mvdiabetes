import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { podiatryBadge, podiatryHeroImage, podiatryIntro } from '@/data/podiatry';

export default function PodiatryHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
            {/* Ambient shapes — same restrained treatment used across MV Diabetes pages */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full bg-white/[0.035]" />
                <div className="absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-primary-light/[0.07]" />
            </div>

            <div className="container-site relative z-10 pb-14 pt-6 md:pb-20 md:pt-8 lg:pb-24">
                <div className="mb-8 [&_a:hover]:text-white [&_a]:text-white/60 [&_nav]:text-white/60 [&_span]:text-white [&_svg]:text-white/30">
                    <Breadcrumbs items={[{ label: 'Care', href: '/care' }, { label: 'Podiatry' }]} />
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
                    {/* ---------------- Left: statement ---------------- */}
                    <div className="max-w-xl">
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-secondary">
                            Care&nbsp;/&nbsp;Podiatry
                        </p>

                        <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-[3.25rem]">
                            Specialized Podiatry &amp;{' '}
                            <span className="text-secondary">Diabetic Foot Care</span>
                        </h1>

                        <p className="mt-6 text-base leading-relaxed text-white/75 lg:text-lg">
                            {podiatryIntro}
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/appointment?service=podiatry"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-7 font-semibold text-white transition-all hover:bg-white hover:text-secondary hover:shadow-lg hover:shadow-secondary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Book an Appointment
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <a
                                href="#foot-clinic"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-7 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Explore Podiatry Care
                            </a>
                        </div>
                    </div>

                    {/* ---------------- Right: editorial image ---------------- */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl shadow-primary-dark/40">
                            <Image
                                src={podiatryHeroImage.src}
                                alt={podiatryHeroImage.alt}
                                width={podiatryHeroImage.width}
                                height={podiatryHeroImage.height}
                                priority
                                sizes="(max-width: 1024px) 100vw, 620px"
                                className="h-full w-full object-cover"
                            />
                            {/* Legibility scrim for the badge below */}
                            <div
                                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary-dark/85 to-transparent"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Source-derived signage from the photograph above */}
                        <div className="relative z-10 -mt-12 ml-4 mr-4 rounded-2xl border border-white/15 bg-primary-dark/80 p-5 backdrop-blur-md sm:ml-6 sm:mr-auto sm:max-w-xs">
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-secondary">
                                {podiatryBadge.label}
                            </p>
                            <p className="mt-1.5 text-lg font-extrabold leading-tight text-white">
                                {podiatryBadge.value}
                            </p>
                            <p className="mt-2 text-xs leading-snug text-white/70">
                                {podiatryBadge.note}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
