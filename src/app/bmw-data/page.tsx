import { Suspense } from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BMWDashboard, { BMWDashboardFallback } from '@/components/bmw/BMWDashboard';
import { ShieldCheck, Leaf, BarChart3, MapPin, Calendar, Layers } from 'lucide-react';
import { buildPageMetadata } from '@/data/seo';
import {
    BMW_CATEGORIES, BMW_CATEGORY_LABELS, BMW_LOCATIONS, MONTH_NAMES,
    bmwRecords, bmwYears, formatKg, getLatestReportedMonth, getLocationCoverage, sumCategories,
} from '@/data/bmw-data';

export const metadata: Metadata = buildPageMetadata('/bmw-data');

const firstYear = bmwYears[0].year;
const latest = getLatestReportedMonth();
const latestLabel = `${MONTH_NAMES[latest.month - 1]} ${latest.year}`;
const monthYear = ({ year, month }: { year: number; month: number }) => `${MONTH_NAMES[month - 1].slice(0, 3)} ${year}`;
const locationCoverage = BMW_LOCATIONS.map(location => {
    const coverage = getLocationCoverage(location);
    const current = !!coverage && coverage.to.year === latest.year && coverage.to.month === latest.month;
    return { location, coverage, current };
});
const allTotals = sumCategories(bmwRecords);
const largestCategory = Math.max(...BMW_CATEGORIES.map(c => allTotals[c].value ?? 0));

const HERO_BAR: Record<(typeof BMW_CATEGORIES)[number], string> = {
    yellow: 'bg-[#EEC642]',
    red: 'bg-[#E25A69]',
    blue: 'bg-[#5B8FE0]',
    white: 'bg-white',
};

export default function BMWDataPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Biomedical Waste Management Data',
        description: `Monthly biomedical waste quantities published by MV Hospital for Diabetes from January ${firstYear} to ${latestLabel}, by location and bin category.`,
        url: 'https://mvdiabetes.com/bmw-data',
        temporalCoverage: `${firstYear}-01/${latest.year}-${String(latest.month).padStart(2, '0')}`,
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
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
                                <ShieldCheck className="w-4 h-4 text-secondary" aria-hidden />
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
                            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4 max-w-2xl">
                                Monthly biomedical waste quantities by bin category, published from January {firstYear} to {latestLabel}.
                            </p>
                            <ul className="mb-8 max-w-2xl grid sm:grid-cols-3 gap-2.5" aria-label="Reporting coverage by location">
                                {locationCoverage.map(({ location, coverage, current }) => (
                                    <li key={location} className="rounded-xl bg-white/[0.07] border border-white/15 px-4 py-3">
                                        <span className="flex items-center gap-2 text-sm font-bold text-white">
                                            <MapPin className="w-3.5 h-3.5 text-secondary" aria-hidden />
                                            {location}
                                        </span>
                                        {coverage && (
                                            <>
                                                <span className="block mt-1 text-xs font-semibold text-white/85 tabular-nums">
                                                    {monthYear(coverage.from)} – {monthYear(coverage.to)}
                                                </span>
                                                <span className="block text-[11px] text-white/65">
                                                    {coverage.months} months{current ? ' · reporting' : ' · no later figures published'}
                                                </span>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#dashboard"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl bg-secondary text-text-primary font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                            >
                                <Leaf size={18} aria-hidden />
                                Explore Data
                            </a>
                        </div>

                        {/* Right: Data Summary Visual */}
                        <div className="hidden lg:block">
                            <div className="bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-[2rem] p-6 shadow-2xl">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                    <div>
                                        <p className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">Data Overview</p>
                                        <p className="text-white font-extrabold text-lg sm:text-xl">{firstYear} – {latest.year}</p>
                                    </div>
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" aria-hidden />
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                                    {[
                                        { Icon: MapPin, value: BMW_LOCATIONS.length, label: 'Locations' },
                                        { Icon: Calendar, value: bmwYears.length, label: 'Years' },
                                        { Icon: Layers, value: BMW_CATEGORIES.length, label: 'Categories' },
                                    ].map(({ Icon, value, label }) => (
                                        <div key={label} className="bg-white/[0.06] rounded-xl p-3 sm:p-4 border border-white/10 text-center">
                                            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/30 mx-auto mb-2 sm:mb-3">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" aria-hidden />
                                            </div>
                                            <p className="text-xl sm:text-2xl font-extrabold text-white">{value}</p>
                                            <p className="text-white/60 text-[10px] sm:text-xs font-bold mt-1">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Waste Category Bars — all published figures, January 2021 to the latest month */}
                                <div className="space-y-3">
                                    <p className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                        Reported to {latestLabel}, all locations
                                    </p>
                                    {BMW_CATEGORIES.map(cat => {
                                        const value = allTotals[cat].value ?? 0;
                                        return (
                                            <div key={cat}>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-white/80 text-xs sm:text-sm font-medium">{BMW_CATEGORY_LABELS[cat]}</span>
                                                    <span className="text-white/80 text-xs sm:text-sm font-bold tabular-nums">{formatKg(value)} kg</span>
                                                </div>
                                                <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${HERO_BAR[cat]} opacity-85`} style={{ width: `${largestCategory ? (value / largestCategory) * 100 : 0}%` }} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Locations Footer */}
                                <div className="mt-6 pt-4 sm:pt-6 border-t border-white/10 flex items-center gap-3 sm:gap-4 flex-wrap">
                                    {BMW_LOCATIONS.map(loc => (
                                        <div key={loc} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                            <span className="text-white/70 text-[10px] sm:text-xs font-medium">{loc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section id="dashboard" aria-label="Biomedical waste reports" className="section-padding bg-surface">
                <div className="container-site">
                    <Suspense fallback={<BMWDashboardFallback />}>
                        <BMWDashboard />
                    </Suspense>
                </div>
            </section>
        </main>
    );
}
