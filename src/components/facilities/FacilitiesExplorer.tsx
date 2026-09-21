'use client';

import { useMemo, useState, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowUpRight, Quote, ImageOff, Maximize2 } from 'lucide-react';
import {
    patientFacilities,
    getFacilityCategoryCounts,
    type FacilityCategory,
    type FacilityItem,
} from '@/data/facilities';
import FacilityLightbox from './FacilityLightbox';

function FacilityCard({
    facility,
    categoryLabel,
    onOpen,
}: {
    facility: FacilityItem;
    categoryLabel: string;
    onOpen: (facility: FacilityItem) => void;
}) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/25 hover:shadow-[0_18px_40px_-24px_rgba(3,66,127,0.45)]">
            {/* Medallion — source images are circular PNGs on a transparent background */}
            <button
                type="button"
                onClick={() => onOpen(facility)}
                className="relative flex aspect-square w-full items-center justify-center bg-gradient-to-b from-surface-muted/60 to-white p-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary sm:p-8"
                aria-label={`View larger image of ${facility.title}`}
            >
                {facility.image ? (
                    <>
                        <Image
                            src={facility.image.src}
                            alt={facility.image.alt}
                            width={facility.image.width}
                            height={facility.image.height}
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                            loading="lazy"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-dark/85 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                            <Maximize2 size={15} />
                        </span>
                    </>
                ) : (
                    <span className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-full border border-dashed border-primary/25 bg-primary/[0.04] px-5 text-center">
                        <ImageOff size={22} className="text-primary/40" strokeWidth={1.5} />
                        <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary/60">
                            MV Diabetes
                        </span>
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-text-secondary/60">
                            Facilities
                        </span>
                        <span className="mt-1 text-sm font-bold leading-snug text-text-primary">
                            {facility.title}
                        </span>
                    </span>
                )}
            </button>

            {/* Body */}
            <div className="flex flex-1 flex-col border-t border-border/70 p-5">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-primary/55">
                    {categoryLabel}
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-text-primary">
                    {facility.title}
                </h3>

                {facility.sourceNote && (
                    <blockquote className="mt-3 flex gap-2 border-l-2 border-secondary/60 pl-3 text-sm leading-relaxed text-text-secondary">
                        <Quote size={13} className="mt-1 shrink-0 text-secondary" />
                        <span>{facility.sourceNote}</span>
                    </blockquote>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
                    <button
                        type="button"
                        onClick={() => onOpen(facility)}
                        className="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Explore
                        <ArrowUpRight size={15} />
                    </button>
                    {facility.relatedHref && (
                        <Link
                            href={facility.relatedHref}
                            className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            {facility.relatedLabel}
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function FacilitiesExplorer() {
    const [category, setCategory] = useState<FacilityCategory>('all');
    const [query, setQuery] = useState('');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const searchId = useId();
    const categories = useMemo(() => getFacilityCategoryCounts(), []);

    const labelFor = useMemo(() => {
        const map = new Map(categories.map((c) => [c.id, c.label]));
        return (facility: FacilityItem) =>
            (facility.category && map.get(facility.category)) || 'Patient Facility';
    }, [categories]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return patientFacilities.filter((f) => {
            const matchesCategory = category === 'all' || f.category === category;
            if (!matchesCategory) return false;
            if (!q) return true;
            return (
                f.title.toLowerCase().includes(q) || labelFor(f).toLowerCase().includes(q)
            );
        });
    }, [category, query, labelFor]);

    // The visible list backs the lightbox, so close it whenever that list changes.
    const changeCategory = (next: FacilityCategory) => {
        setCategory(next);
        setLightboxIndex(null);
    };

    const changeQuery = (next: string) => {
        setQuery(next);
        setLightboxIndex(null);
    };

    const reset = () => {
        changeCategory('all');
        setQuery('');
    };

    return (
        <section id="patient-facilities" className="scroll-mt-24 bg-surface py-16 md:py-20 lg:py-24">
            <div className="container-site">
                {/* Section header */}
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                        Patient Facilities
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold text-primary-dark md:text-4xl">
                        MV Hospital for Diabetes facilities
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                        The facilities and services listed on the MV Hospital for Diabetes facilities
                        page, presented here in full.
                    </p>
                </div>

                {/* Controls */}
                <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Filters */}
                    <div
                        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 hide-scrollbar lg:mx-0 lg:flex-wrap lg:px-0 lg:pb-0"
                        role="group"
                        aria-label="Filter facilities by group"
                    >
                        {categories.map((cat) => {
                            const isActive = category === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => changeCategory(cat.id)}
                                    aria-pressed={isActive}
                                    className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                        isActive
                                            ? 'border-primary-dark bg-primary-dark text-white shadow-sm'
                                            : 'border-border bg-white text-text-secondary hover:border-primary/30 hover:text-primary-dark'
                                    }`}
                                >
                                    {cat.label}
                                    <span className="ml-1.5 opacity-60">{cat.count}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-72">
                        <label htmlFor={searchId} className="sr-only">
                            Search facilities
                        </label>
                        <Search
                            size={16}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/60"
                            aria-hidden="true"
                        />
                        <input
                            id={searchId}
                            type="search"
                            value={query}
                            onChange={(e) => changeQuery(e.target.value)}
                            placeholder="Search facilities..."
                            className="h-11 w-full rounded-full border border-border bg-white pl-10 pr-10 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-primary/40 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => changeQuery('')}
                                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                                aria-label="Clear search"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>
                </div>

                <p className="mt-3 text-xs text-text-secondary/70">
                    Groups above are navigation aids for this page, not official MV Diabetes
                    classifications.
                </p>

                <p className="sr-only" aria-live="polite">
                    {filtered.length} of {patientFacilities.length} facilities shown.
                </p>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((facility) => (
                            <FacilityCard
                                key={facility.id}
                                facility={facility}
                                categoryLabel={labelFor(facility)}
                                onOpen={(f) => setLightboxIndex(filtered.findIndex((x) => x.id === f.id))}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="mt-8 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
                        <p className="text-lg font-semibold text-text-primary">
                            No facilities match “{query}”.
                        </p>
                        <button
                            type="button"
                            onClick={reset}
                            className="mt-4 min-h-11 rounded-full bg-primary-dark px-6 text-sm font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Show all {patientFacilities.length} facilities
                        </button>
                    </div>
                )}
            </div>

            {lightboxIndex !== null && filtered[lightboxIndex] && (
                <FacilityLightbox
                    items={filtered}
                    index={lightboxIndex}
                    eyebrow="Patient Facility"
                    onClose={() => setLightboxIndex(null)}
                    onIndexChange={setLightboxIndex}
                />
            )}
        </section>
    );
}
