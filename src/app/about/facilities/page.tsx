import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Stethoscope, Building2, Camera, Quote } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FacilitiesExplorer from '@/components/facilities/FacilitiesExplorer';
import DepartmentsSection from '@/components/facilities/DepartmentsSection';
import { buildPageMetadata } from '@/data/seo';
import {
    heroCollage,
    featuredFacility,
    facilitiesOgImage,
    getFacilitiesStats,
} from '@/data/facilities';

export const metadata: Metadata = buildPageMetadata('/about/facilities', { image: { url: facilitiesOgImage.src, width: facilitiesOgImage.width, height: facilitiesOgImage.height, alt: facilitiesOgImage.alt } });

export default function FacilitiesPage() {
    const stats = getFacilitiesStats();

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mvdiabetes.com/' },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://mvdiabetes.com/about-us' },
            { '@type': 'ListItem', position: 3, name: 'Facilities' },
        ],
    };

    const overview = [
        { icon: Stethoscope, value: stats.patientFacilities, label: 'Patient Facilities' },
        { icon: Building2, value: stats.departments, label: 'Departments' },
        { icon: Camera, value: stats.sourceImages, label: 'Source Images' },
    ];

    return (
        <main className="min-h-screen bg-surface font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* ============================ HERO ============================ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-white/[0.03]" />
                    <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-white/[0.02]" />
                </div>

                <div className="container-site relative z-10 pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-12 lg:pt-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        {/* Left */}
                        <div className="max-w-xl">
                            <div className="mb-8 [&_a:hover]:text-white [&_a]:text-white/60 [&_nav]:text-white/60 [&_span]:text-white [&_svg]:text-white/30">
                                <Breadcrumbs
                                    items={[{ label: 'About Us', href: '/about-us' }, { label: 'Facilities' }]}
                                />
                            </div>

                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80">
                                <span className="h-2 w-2 rounded-full bg-secondary" />
                                Facilities
                            </div>

                            <h1 className="mb-5 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[3.25rem]">
                                Our <span className="text-secondary">Facilities</span>
                            </h1>

                            <p className="mb-4 text-base leading-relaxed text-white/75 lg:text-lg">
                                60 years of Diabetes Care, Research, Education &amp; Training in Diabetes
                            </p>

                            <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
                                Explore the {stats.patientFacilities} patient facilities and{' '}
                                {stats.departments} departments listed by MV Hospital for Diabetes.
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <a
                                    href="#patient-facilities"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-7 font-semibold text-primary-dark transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Explore Facilities
                                    <ArrowRight size={18} />
                                </a>
                                <Link
                                    href="/appointment"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-7 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>

                        {/* Right — collage built only from real source facility images */}
                        <div className="relative hidden lg:block" aria-hidden="true">
                            <div className="grid grid-cols-2 gap-5">
                                {heroCollage.map((image, i) => (
                                    <div
                                        key={image.src}
                                        className={
                                            i % 2 === 1
                                                ? 'translate-y-8 rounded-2xl bg-white/[0.06] p-4 backdrop-blur-[2px]'
                                                : 'rounded-2xl bg-white/[0.06] p-4 backdrop-blur-[2px]'
                                        }
                                    >
                                        <Image
                                            src={image.src}
                                            alt=""
                                            width={image.width}
                                            height={image.height}
                                            sizes="(max-width: 1024px) 0px, 260px"
                                            priority={i === 0}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================ OVERVIEW ============================ */}
            <section className="border-b border-border bg-white" aria-label="Facilities overview">
                <div className="container-site">
                    <dl className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {overview.map(({ icon: Icon, value, label }) => (
                            <div key={label} className="flex items-center gap-4 py-7 sm:justify-center">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <dd className="text-2xl font-black leading-none text-primary-dark">
                                        {value}
                                    </dd>
                                    <dt className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                        {label}
                                    </dt>
                                </div>
                            </div>
                        ))}
                    </dl>
                    {stats.needsReview > 0 && (
                        <p className="pb-6 text-center text-xs text-text-secondary/70 sm:pb-5">
                            Counts are taken from the content on this page.{' '}
                            {stats.needsReview === 1
                                ? '1 source image is currently unavailable on mvdiabetes.com.'
                                : `${stats.needsReview} source images are currently unavailable on mvdiabetes.com.`}
                        </p>
                    )}
                </div>
            </section>

            {/* ============================ FEATURED FACILITY ============================ */}
            {featuredFacility?.image && (
                <section className="bg-white pt-16 md:pt-20 lg:pt-24">
                    <div className="container-site">
                        <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-muted/70 to-white p-6 md:grid-cols-[minmax(0,320px)_1fr] md:gap-12 md:p-10 lg:p-12">
                            <div className="relative mx-auto aspect-square w-full max-w-[320px]">
                                <Image
                                    src={featuredFacility.image.src}
                                    alt={featuredFacility.image.alt}
                                    width={featuredFacility.image.width}
                                    height={featuredFacility.image.height}
                                    sizes="(max-width: 768px) 80vw, 320px"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                    Featured Facility
                                </p>
                                <h2 className="mt-3 text-2xl font-extrabold text-primary-dark md:text-3xl">
                                    {featuredFacility.title}
                                </h2>
                                <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
                                    Listed first among the patient facilities on the MV Hospital for
                                    Diabetes facilities page.
                                </p>

                                <blockquote className="mt-6 max-w-lg border-l-2 border-primary/30 pl-4">
                                    <p className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                                        <Quote size={14} className="mt-1 shrink-0 text-primary/50" />
                                        <span>
                                            MV Hospital for Diabetes at Royapuram has saved the legs of
                                            more than 90,000 patients by its Comprehensive Diabetic Foot
                                            centre using the most advanced Foot salvage treatment.
                                        </span>
                                    </p>
                                    <cite className="mt-2 block pl-6 text-xs not-italic text-text-secondary/60">
                                        Announcement published on mvdiabetes.com
                                    </cite>
                                </blockquote>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link
                                        href="/care/diabetic-foot-care"
                                        className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary-dark px-6 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Diabetic Foot Care
                                        <ArrowRight size={17} />
                                    </Link>
                                    <Link
                                        href="/our-products"
                                        className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-border bg-white px-6 font-semibold text-text-primary transition-colors hover:border-primary/30 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        View Footwear
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ============================ PATIENT FACILITIES ============================ */}
            <FacilitiesExplorer />

            {/* ============================ DEPARTMENTS ============================ */}
            <DepartmentsSection />

            {/* ============================ CTA ============================ */}
            <section className="bg-white py-16 md:py-20">
                <div className="container-site">
                    <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark to-primary p-8 text-center md:flex-row md:p-12 md:text-left lg:p-16">
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/[0.03]" />
                            <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-white/[0.02]" />
                        </div>
                        <div className="relative z-10">
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Ready to experience our services?
                            </p>
                            <h2 className="mb-3 text-2xl font-extrabold text-white md:text-3xl">
                                Book an appointment with MV Diabetes
                            </h2>
                            <p className="text-lg text-white/70">
                                Walk in or schedule a visit with our specialists today.
                            </p>
                        </div>
                        <Link
                            href="/appointment"
                            className="relative z-10 inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-secondary px-8 font-bold text-primary-dark shadow-lg transition-all hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
