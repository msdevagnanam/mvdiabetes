import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
    yogaAppointmentHref,
    yogaHeroImage,
    yogaSourceTagline,
    yogaSourceTitle,
} from '@/data/yoga';

export default function YogaHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FA] to-white">
            {/* Calm geometry — the hero art is a cut-out, so it sits on light ground */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-primary-light/[0.07]" />
                <div className="absolute right-1/4 top-24 h-72 w-72 rounded-full border border-primary/[0.08]" />
                <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-accent/[0.12]" />
            </div>

            <div className="container-site relative z-10 pb-14 pt-4 md:pb-20 md:pt-6 lg:pb-24">
                <Breadcrumbs items={[{ label: 'Care', href: '/care' }, { label: 'Yoga' }]} />

                <div className="mt-4 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                    {/* ---------------- Left ---------------- */}
                    <div className="max-w-xl">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Care&nbsp;/&nbsp;Yoga
                        </p>

                        <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-primary-dark sm:text-4xl lg:text-[3.25rem]">
                            Yoga for Diabetes
                        </h1>

                        <p className="mt-5 text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                            Movement, breath and mindful practice as part of a holistic approach to
                            diabetes care.
                        </p>

                        {/* Source page title + tagline, preserved */}
                        <div className="mt-7 flex flex-col gap-3 border-l-2 border-secondary pl-5">
                            <p className="text-base font-bold text-primary-dark">{yogaSourceTitle}</p>
                            <p className="text-sm leading-relaxed text-text-secondary">
                                {yogaSourceTagline}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href={yogaAppointmentHref}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary-dark px-7 font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Book an Appointment
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                            <a
                                href="#class-levels"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 font-semibold text-primary-dark transition-colors hover:border-primary/30 hover:bg-primary/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Explore Yoga Classes
                            </a>
                        </div>
                    </div>

                    {/* ---------------- Right: cut-out over a soft disc ---------------- */}
                    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
                        <div
                            className="absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-light/15 to-secondary/15"
                            aria-hidden="true"
                        />
                        <Image
                            src={yogaHeroImage.src}
                            alt={yogaHeroImage.alt}
                            width={yogaHeroImage.width}
                            height={yogaHeroImage.height}
                            priority
                            sizes="(max-width: 1024px) 90vw, 560px"
                            className="relative h-auto w-full object-contain"
                        />

                        <p className="relative mx-auto -mt-2 w-fit rounded-full border border-border bg-white/90 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-dark shadow-sm backdrop-blur-sm">
                            Yoga&nbsp;+&nbsp;Diabetes Care
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
