'use client';

import NewsCard from './NewsCard';
import type { NewsEvent } from '@/data/news-events';

interface RelatedNewsProps {
    currentSlug: string;
    currentYear: number;
    currentCategory: string;
    allItems: NewsEvent[];
}

export default function RelatedNews({
    currentSlug,
    currentYear,
    currentCategory,
    allItems,
}: RelatedNewsProps) {
    // Find related: same category first, then same year, excluding current
    const candidates = allItems.filter((item) => item.slug !== currentSlug);

    const sameCategory = candidates.filter((item) => item.category === currentCategory);
    const sameYear = candidates.filter((item) => item.year === currentYear && item.category !== currentCategory);

    // Combine: prioritize same category, then same year, limit to 3
    const related = [...sameCategory, ...sameYear].slice(0, 3);

    // If not enough, fill with recent items
    if (related.length < 3) {
        const remaining = candidates
            .filter((item) => !related.includes(item))
            .slice(0, 3 - related.length);
        related.push(...remaining);
    }

    if (related.length === 0) return null;

    return (
        <section className="section-padding bg-surface-muted border-t border-border">
            <div className="container-site font-sans">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
                        Related News & Events
                    </h2>
                    <p className="text-text-secondary text-sm max-w-lg mx-auto">
                        Explore more stories, milestones, and moments from MV Diabetes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((item) => (
                        <NewsCard
                            key={item.id}
                            slug={item.slug}
                            title={item.title}
                            excerpt={item.excerpt}
                            year={item.year}
                            date={item.date}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
