'use client';

import { Search, X, ChevronDown, Calendar, Filter } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface NewsFiltersProps {
    years: number[];
    categories: string[];
    currentYear?: string;
    currentCategory?: string;
    searchQuery?: string;
}

export default function NewsFilters({
    years,
    categories,
    currentYear,
    currentCategory,
    searchQuery = '',
}: NewsFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [inputValue, setInputValue] = useState(searchQuery);
    const yearRef = useRef<HTMLDivElement>(null);

    // Update query params function
    const updateFilters = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        
        if (value === null || value === 'all') {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        
        // Reset to page 1 on filter change
        params.delete('page');
        
        router.push(`/news?${params.toString()}`, { scroll: false });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        updateFilters('q', inputValue.trim() || null);
    };

    // Click outside to close year dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
                setIsYearOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white rounded-2xl border border-border p-4 md:p-5 shadow-sm mb-10 sticky top-24 z-30 transition-all">
            <div className="flex flex-col lg:flex-row gap-5 items-stretch lg:items-center justify-between">
                
                {/* Categories */}
                <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar mask-gradient-right">
                        <button
                            onClick={() => updateFilters('category', null)}
                            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                                !currentCategory || currentCategory === 'all'
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-surface-muted text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                            }`}
                        >
                            All Categories
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => updateFilters('category', cat)}
                                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                                    currentCategory === cat
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-surface-muted text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-stretch lg:items-center">
                    {/* Year Filter Dropdown */}
                    <div className="relative" ref={yearRef}>
                        <button
                            onClick={() => setIsYearOpen(!isYearOpen)}
                            className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border font-semibold text-sm transition-all min-w-[140px] ${
                                currentYear && currentYear !== 'all'
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-border bg-white text-text-primary hover:border-text-secondary/30'
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <Calendar size={16} className={currentYear && currentYear !== 'all' ? 'text-primary' : 'text-text-secondary'} />
                                {currentYear && currentYear !== 'all' ? currentYear : 'All Years'}
                            </span>
                            <ChevronDown size={16} className={`transition-transform duration-200 ${isYearOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isYearOpen && (
                            <div className="absolute top-full right-0 mt-2 w-full sm:w-48 bg-white rounded-xl shadow-xl border border-border py-2 z-40 max-h-64 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                                <button
                                    onClick={() => {
                                        updateFilters('year', null);
                                        setIsYearOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-muted ${
                                        !currentYear || currentYear === 'all' ? 'text-primary bg-primary/5' : 'text-text-primary'
                                    }`}
                                >
                                    All Years
                                </button>
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            updateFilters('year', year.toString());
                                            setIsYearOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-muted ${
                                            currentYear === year.toString() ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-text-primary'
                                        }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Search */}
                    <form onSubmit={handleSearch} className="relative group">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full sm:w-64 pl-10 pr-10 py-2.5 rounded-xl border border-border bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-text-secondary/50 group-hover:border-text-secondary/30"
                        />
                        <Search
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary"
                        />
                        {inputValue && (
                            <button
                                type="button"
                                onClick={() => {
                                    setInputValue('');
                                    updateFilters('q', null);
                                }}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
