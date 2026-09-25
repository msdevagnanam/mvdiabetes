import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Building2, Camera } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import InfrastructureExplorer from '@/components/infrastructure/InfrastructureExplorer';
import { infrastructureHeroImage, getInfrastructureStats } from '@/data/infrastructure';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/about/infrastructure', { image: { url: infrastructureHeroImage, width: 2560, height: 1707, alt: 'M.V. Hospital for Diabetes building' } });

export default function InfrastructurePage() {
    const stats = getInfrastructureStats();

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mvdiabetes.com/' },
            { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://mvdiabetes.com/about-us' },
            { '@type': 'ListItem', position: 3, name: 'Infrastructure' },
        ],
    };

    return (
        <main className="font-sans min-h-screen bg-surface">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
                    <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.02]" />
                </div>

                <div className="container-site relative z-10 pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28">
                    {/* Breadcrumbs */}
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30 mb-6">
                        <Breadcrumbs items={[
                            { label: 'About Us', href: '/about-us' },
                            { label: 'Infrastructure' },
                        ]} />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                Infrastructure
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5">
                                Infrastructure of{' '}
                                <span className="text-secondary">M.V Hospital for Diabetes</span>
                            </h1>

                            <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
                                60 years of Diabetes Care, Research, Education &amp; Training in Diabetes
                            </p>

                            {/* Dynamic Stats */}
                            <div className="flex flex-wrap gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <MapPin size={18} className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-white leading-none">{stats.locations}</p>
                                        <p className="text-xs text-white/50 font-medium uppercase tracking-wider">Locations</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Building2 size={18} className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-white leading-none">{stats.facilities}</p>
                                        <p className="text-xs text-white/50 font-medium uppercase tracking-wider">Facilities</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                        <Camera size={18} className="text-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-white leading-none">{stats.images}</p>
                                        <p className="text-xs text-white/50 font-medium uppercase tracking-wider">Photos</p>
                                    </div>
                                </div>
                            </div>

                            <a href="#panel-royapuram" className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25">
                                Explore Infrastructure
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* Right Visual — Real infrastructure photo */}
                        <div className="relative hidden lg:block">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={infrastructureHeroImage}
                                    alt="M.V. Hospital for Diabetes, Royapuram — hospital entrance"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 max-w-[200px] z-30">
                                <div className="text-xs font-extrabold text-text-primary">60+ Years</div>
                                <div className="text-[0.65rem] font-medium text-text-secondary">Excellence in Diabetes Care</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Explorer (Client Component) */}
            <InfrastructureExplorer />

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container-site">
                    <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-white/[0.03]" />
                            <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] rounded-full bg-white/[0.02]" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                Want to experience our facilities?
                            </h2>
                            <p className="text-white/70 text-lg">
                                Walk in or schedule an appointment with our specialists today.
                            </p>
                        </div>
                        <Link
                            href="/appointment"
                            className="relative z-10 shrink-0 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg"
                        >
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
