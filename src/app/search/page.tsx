'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search as SearchIcon, ArrowRight, User, Stethoscope, FileText, Calendar, Building, BookOpen } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

// Note: For a production app, search should run on the server or via a search index (Algolia, etc).
// This is a client-side implementation for the demo combining data sources.
import { doctors } from '@/data/doctors';
import { specialties } from '@/data/specialties';
import { packages } from '@/data/packages';
import { blogPosts } from '@/data/blogs';
import { newsEvents } from '@/data/events';
import { checkups } from '@/data/checkups';

type SearchResult = {
    id: string;
    title: string;
    type: 'doctor' | 'specialty' | 'package' | 'blog' | 'event' | 'checkup';
    url: string;
    description: string;
    icon: any;
};

function SearchContent() {
    const params = useSearchParams();
    const query = params.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(query);
    const [results, setResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const q = query.toLowerCase();
        const found: SearchResult[] = [];

        // Search Doctors
        doctors.forEach(d => {
            if (d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.expertise?.some(e => e.toLowerCase().includes(q))) {
                found.push({ id: `doc-${d.id}`, title: d.name, type: 'doctor', url: `/doctors/${d.slug}`, description: `${d.designation} • ${d.specialty}`, icon: User });
            }
        });

        // Search Specialties
        specialties.forEach(s => {
            if (s.name.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)) {
                found.push({ id: `spec-${s.id}`, title: s.name, type: 'specialty', url: `/care/${s.slug}`, description: s.shortDescription, icon: Stethoscope });
            }
        });

        // Search Packages
        packages.forEach(p => {
            if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
                found.push({ id: `pkg-${p.id}`, title: p.name, type: 'package', url: `/packages/${p.slug}`, description: p.description, icon: FileText });
            }
        });

        // Search Checkups
        checkups.forEach(c => {
            if (c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)) {
                found.push({ id: `chk-${c.id}`, title: c.name, type: 'checkup', url: `/checkups/${c.slug}`, description: c.description, icon: SearchIcon });
            }
        });

        // Search Blogs
        blogPosts.forEach(b => {
            if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)) {
                found.push({ id: `blog-${b.id}`, title: b.title, type: 'blog', url: `/blog/${b.slug}`, description: b.excerpt, icon: BookOpen });
            }
        });

        // Search Events
        newsEvents.forEach(e => {
            if (e.title.toLowerCase().includes(q) || e.excerpt.toLowerCase().includes(q)) {
                found.push({ id: `evt-${e.id}`, title: e.title, type: 'event', url: `/news/${e.slug}`, description: e.excerpt, icon: Calendar });
            }
        });

        setResults(found);
    }, [query]);

    return (
        <section className="section-padding bg-white min-h-[50vh]">
            <div className="container-site max-w-4xl">
                <form action="/search" method="GET" className="relative mb-12">
                    <input
                        type="text"
                        name="q"
                        defaultValue={query}
                        onChange={e => setSearchTerm(e.target.value)}
                        placeholder="Search doctors, specialties, packages, articles..."
                        className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg font-medium text-text-primary shadow-sm"
                    />
                    <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-text-secondary" size={24} />
                    <button type="submit" className="hidden">Search</button>
                </form>

                {query && (
                    <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                        <h2 className="text-xl font-bold text-text-primary">
                            {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
                        </h2>
                    </div>
                )}

                {!query && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center mx-auto mb-4 text-text-secondary">
                            <SearchIcon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">What are you looking for?</h3>
                        <p className="text-text-secondary">Enter a keyword above to search our entire platform.</p>
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-lg text-text-secondary">No results found for your search. Try different keywords.</p>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="space-y-4">
                        {results.map(res => {
                            const Icon = res.icon;
                            return (
                                <Link href={res.url} key={res.id}
                                    className="group flex gap-4 p-5 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-primary px-2 py-0.5 bg-primary/5 rounded border border-primary/10">
                                                {res.type}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors truncate">{res.title}</h3>
                                        <p className="text-sm text-text-secondary truncate mt-1">{res.description}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ArrowRight className="text-text-secondary/30 group-hover:text-primary transition-colors" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default function SearchPage() {
    return (
        <>
            <PageHero title="Global Search" description="Find exactly what you need across our entire platform." breadcrumbs={[{ label: 'Search' }]} />
            <Suspense fallback={
                <div className="min-h-[50vh] bg-white flex items-center justify-center">
                    <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
            }>
                <SearchContent />
            </Suspense>
        </>
    );
}
