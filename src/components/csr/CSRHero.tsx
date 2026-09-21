import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { csrSourceTitle, csrYears } from '@/data/csr';

/**
 * The source page has no hero photograph, so the hero is typographic and the
 * two images beside it are real dated CSR photographs, each carrying its own
 * event label so nothing reads as generic stock imagery.
 */
const heroImages = [
    {
        src: '/images/csr/2019/karunalaya-support.jpg',
        alt: 'Financial support handed over to Karunalaya, an organisation working for street and working children',
        width: 1600,
        height: 1067,
        label: '27 August 2019',
        caption: 'Support for Karunalaya',
    },
    {
        src: '/images/csr/2021/flu-vaccination-04.jpg',
        alt: 'Patients enrolled with the Madhaviamma Trust attending the flu vaccination camp',
        width: 1600,
        height: 900,
        label: '15 November 2021',
        caption: 'Flu Vaccination Camp',
    },
];

export default function CSRHero() {
    const earliest = csrYears[csrYears.length - 1];
    const latest = csrYears[0];

    return (
        <section className="relative overflow-hidden bg-[#FAF7F2]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-40 -top-48 h-[620px] w-[620px] rounded-full bg-secondary/[0.07]" />
                <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary-light/[0.06]" />
            </div>

            <div className="container-site relative z-10 pb-14 pt-4 md:pb-20 md:pt-6 lg:pb-24">
                <Breadcrumbs items={[{ label: 'CSR' }]} />

                <div className="mt-4 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                    {/* ---------------- Left ---------------- */}
                    <div className="max-w-xl">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            MV Diabetes&nbsp;/&nbsp;CSR
                        </p>

                        <h1 className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.06] text-primary-dark sm:text-4xl lg:text-[3.25rem]">
                            Making a Difference Beyond Healthcare
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                            {csrSourceTitle} — social initiatives supporting patients, families and
                            the communities around our hospitals.
                        </p>

                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-primary-light">
                            Care • Community • Support
                        </p>

                        <div className="mt-8">
                            <a
                                href="#timeline"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-dark px-7 font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
                            >
                                Explore Our CSR Activities
                                <ArrowDown size={18} aria-hidden="true" />
                            </a>
                        </div>

                        {/* Source-derived context only: trust year and archive range */}
                        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-7">
                            <div>
                                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-text-secondary">
                                    Trust established
                                </dt>
                                <dd className="mt-1 text-2xl font-extrabold text-primary-dark">1989</dd>
                            </div>
                            <div>
                                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-text-secondary">
                                    Activities recorded
                                </dt>
                                <dd className="mt-1 text-2xl font-extrabold text-primary-dark">
                                    {earliest}–{latest}
                                </dd>
                            </div>
                        </dl>
                    </div>

                    {/* ---------------- Right: dated documentary images ---------------- */}
                    <div className="flex flex-col gap-5 sm:flex-row">
                        {heroImages.map((image, i) => (
                            <figure
                                key={image.src}
                                className={`flex-1 overflow-hidden rounded-2xl border border-border bg-white ${
                                    i === 1 ? 'sm:mt-10' : ''
                                }`}
                            >
                                <div className="relative aspect-[3/2] overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        priority
                                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 480px"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <figcaption className="px-5 py-4">
                                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-light">
                                        {image.label}
                                    </span>
                                    <span className="mt-1 block text-sm font-semibold text-primary-dark">
                                        {image.caption}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
