'use client';

import NewsCard from './NewsCard';
import type { NewsEvent } from '@/data/news-events';
import { Fragment } from 'react';

interface NewsArchiveProps {
    items: NewsEvent[];
}

export default function NewsArchive({ items }: NewsArchiveProps) {
    if (items.length === 0) {
        return (
            <div className="text-center py-20 px-4 bg-white rounded-2xl border border-border shadow-sm">
                <div className="w-16 h-16 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">No articles found</h3>
                <p className="text-text-secondary">
                    We couldn't find any news or events matching your criteria. Try adjusting your filters.
                </p>
            </div>
        );
    }

    // Group items by year for the timeline view
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.year]) {
            acc[item.year] = [];
        }
        acc[item.year].push(item);
        return acc;
    }, {} as Record<number, NewsEvent[]>);

    const sortedYears = Object.keys(groupedItems)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <div className="space-y-16">
            {sortedYears.map((year, index) => {
                const yearItems = groupedItems[year];
                const firstItem = yearItems[0];
                const restItems = yearItems.slice(1);

                return (
                    <Fragment key={year}>
                        <div className="relative">
                            {/* Year marker */}
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                                    {year}
                                </h2>
                                <div className="h-px bg-gradient-to-r from-primary/20 to-transparent flex-grow" />
                            </div>

                            <div className="space-y-8">
                                {/* Featured item for the year (if it's the very first item or if we want to feature the first of each year) */}
                                {index === 0 ? (
                                    <NewsCard
                                        key={firstItem.id}
                                        {...firstItem}
                                        featured={true}
                                    />
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <NewsCard key={firstItem.id} {...firstItem} />
                                    </div>
                                )}

                                {/* Rest of the items in a grid */}
                                {restItems.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                        {restItems.map((item) => (
                                            <NewsCard key={item.id} {...item} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}
