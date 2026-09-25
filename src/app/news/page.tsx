import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NewsHero from '@/components/news/NewsHero';
import NewsFilters from '@/components/news/NewsFilters';
import NewsArchive from '@/components/news/NewsArchive';
import { newsEvents } from '@/data/news-events';

export const metadata: Metadata = {
    title: 'News & Events | Latest Updates & Research — MV Diabetes',
    description: 'Explore the latest developments, medical events, research milestones, community initiatives and institutional moments from MV Diabetes.',
    alternates: { canonical: '/news' },
};

export default async function NewsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const yearParam = params.year as string | undefined;
    const categoryParam = params.category as string | undefined;
    const searchParam = params.q as string | undefined;
    
    // Pagination (simplified for server component)
    const page = params.page ? parseInt(params.page as string) : 1;
    const itemsPerPage = 12;

    // Filter items based on query params. Newest year first, then newest date — year leads because a few
    // archive posts are filed under a different year than their event date (matching mvdiabetes.com).
    let filteredItems = [...newsEvents].sort((a, b) => b.year - a.year || b.date.localeCompare(a.date));

    if (yearParam && yearParam !== 'all') {
        filteredItems = filteredItems.filter((e) => e.year === parseInt(yearParam));
    }

    if (categoryParam && categoryParam !== 'all') {
        filteredItems = filteredItems.filter((e) => e.category === categoryParam);
    }

    if (searchParam) {
        const query = searchParam.toLowerCase();
        filteredItems = filteredItems.filter(
            (e) =>
                e.title.toLowerCase().includes(query) ||
                e.excerpt.toLowerCase().includes(query) ||
                (e.category && e.category.toLowerCase().includes(query))
        );
    }

    // Calculate pagination
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    // Extract available filters from ALL items (not filtered)
    const availableYears = Array.from(new Set(newsEvents.map((e) => e.year))).sort(
        (a, b) => b - a
    );
    const availableCategories = Array.from(
        new Set(newsEvents.map((e) => e.category).filter(Boolean))
    ).sort();

    return (
        <main className="bg-surface font-sans min-h-screen">
            <NewsHero />

            <section className="section-padding bg-surface -mt-8 relative z-20">
                <div className="container-site">
                    <Suspense fallback={<div className="h-20 bg-white rounded-2xl animate-pulse mb-10" />}>
                        <NewsFilters
                            years={availableYears}
                            categories={availableCategories}
                            currentYear={yearParam}
                            currentCategory={categoryParam}
                            searchQuery={searchParam}
                        />
                    </Suspense>

                    <div className="mb-6 flex justify-between items-center text-sm font-medium text-text-secondary px-2">
                        <span>
                            Showing {totalItems === 0 ? 0 : startIndex + 1}–
                            {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} articles
                        </span>
                    </div>

                    <NewsArchive items={paginatedItems} />

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex justify-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => {
                                const pageNum = i + 1;
                                const isCurrent = pageNum === page;
                                
                                // Build query string for pagination preserving other filters
                                const queryParams = new URLSearchParams();
                                if (yearParam) queryParams.set('year', yearParam);
                                if (categoryParam) queryParams.set('category', categoryParam);
                                if (searchParam) queryParams.set('q', searchParam);
                                if (pageNum > 1) queryParams.set('page', pageNum.toString());
                                
                                const href = `/news${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;

                                return (
                                    <Link
                                        key={pageNum}
                                        href={href}
                                        scroll={false}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                                            isCurrent
                                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                                : 'bg-white border border-border text-text-secondary hover:border-primary/50 hover:text-primary'
                                        }`}
                                    >
                                        {pageNum}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-white pb-16 md:pb-20 lg:pb-24">
                <div className="container-site">
                    <div className="bg-primary text-white rounded-3xl p-8 md:p-16 text-center shadow-xl shadow-primary/10">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                Your Health Journey Starts Here
                            </h2>
                            <p className="text-lg text-white/80 mb-10">
                                Join thousands of patients who trust MV Diabetes for their comprehensive diabetes care and management.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link 
                                    href="/appointment" 
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Book Appointment
                                    <ArrowRight size={18} />
                                </Link>
                                <Link 
                                    href="/care/comprehensive" 
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all"
                                >
                                    Explore Diabetes Care
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
