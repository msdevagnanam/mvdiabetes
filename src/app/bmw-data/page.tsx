import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BMWDashboard from '@/components/bmw/BMWDashboard';
import { ShieldCheck, Leaf, BarChart3, MapPin, Calendar, Layers } from 'lucide-react';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/bmw-data');

export default function BMWDataPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Biomedical Waste Management Data',
        description: 'View MV Diabetes biomedical waste management data for 2021 and 2022, organized by location, month and waste category.',
        url: 'https://mvdiabetes.com/bmw-data',
        publisher: {
            '@type': 'MedicalOrganization',
            name: 'MV Hospital for Diabetes',
            url: 'https://mvdiabetes.com/'
        }
    };

    return (
        <main className="bg-surface font-sans min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-[#014874] pt-8 pb-12 md:pt-12 md:pb-16">
                {/* Subtle pattern */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
                {/* Glow accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

                <div className="container-site relative z-10">
                    <Breadcrumbs items={[{ label: 'BMW Data' }]} variant="dark" />

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-2">
                        {/* Left: Content */}
                        <div>
                            {/* Eyebrow */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                                <ShieldCheck className="w-4 h-4 text-secondary" />
                                <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
                                    Environmental & Safety Data
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                                Biomedical Waste <br className="hidden md:block" />
                                <span className="text-secondary">Management Data</span>
                            </h1>

                            {/* Supporting text */}
                            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
                                Explore MV Diabetes biomedical waste management data by year and location. Transparent reporting across Royapuram, Adyar, and Velachery.
                            </p>

                            {/* CTA */}
                            <a
                                href="#dashboard"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/30 hover:-translate-y-0.5"
                            >
                                <Leaf size={18} />
                                Explore Data
                            </a>
                        </div>

                        {/* Right: Data Summary Visual */}
                        <div className="hidden lg:block">
                            <div className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-[2rem] p-6 shadow-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                    <div>
                                        <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Data Overview</p>
                                        <p className="text-white font-extrabold text-lg sm:text-xl">2021 – 2022</p>
                                    </div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                                    <div className="bg-white/[0.06] rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/30 mx-auto mb-2 sm:mb-3">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                                        </div>
                                        <p className="text-xl sm:text-2xl font-extrabold text-white">3</p>
                                        <p className="text-white/50 text-[10px] sm:text-xs font-bold mt-1">Locations</p>
                                    </div>
                                    <div className="bg-white/[0.06] rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/30 mx-auto mb-2 sm:mb-3">
                                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                                        </div>
                                        <p className="text-xl sm:text-2xl font-extrabold text-white">2</p>
                                        <p className="text-white/50 text-[10px] sm:text-xs font-bold mt-1">Years</p>
                                    </div>
                                    <div className="bg-white/[0.06] rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/30 mx-auto mb-2 sm:mb-3">
                                            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                                        </div>
                                        <p className="text-xl sm:text-2xl font-extrabold text-white">4</p>
                                        <p className="text-white/50 text-[10px] sm:text-xs font-bold mt-1">Categories</p>
                                    </div>
                                </div>

                                {/* Waste Category Bars */}
                                <div className="space-y-3">
                                    <p className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Waste Categories</p>
                                    {[
                                        { label: 'Yellow Bin', color: 'bg-[#EEC642]', width: '75%' },
                                        { label: 'Red Bin', color: 'bg-red-500', width: '62%' },
                                        { label: 'Blue Bin', color: 'bg-blue-500', width: '20%' },
                                        { label: 'White Bin', color: 'bg-gray-400', width: '3%' },
                                    ].map((cat, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-white/70 text-xs sm:text-sm font-medium">{cat.label}</span>
                                                <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${cat.color}`} />
                                            </div>
                                            <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${cat.color} opacity-80`} style={{ width: cat.width }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Locations Footer */}
                                <div className="mt-6 pt-4 sm:pt-6 border-t border-white/10 flex items-center gap-3 sm:gap-4 flex-wrap">
                                    {['Royapuram', 'Adyar', 'Velachery'].map((loc, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            <span className="text-white/60 text-[10px] sm:text-xs font-medium">{loc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section id="dashboard" className="section-padding bg-surface">
                <div className="container-site">
                    <BMWDashboard />
                </div>
            </section>
        </main>
    );
}
