'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Info, MapPin } from 'lucide-react';
import type { CSREvent } from '@/data/csr';
import CSRLightbox, { type LightboxItem } from './CSRLightbox';

interface CSRTimelineProps {
    events: CSREvent[];
    years: number[];
}

export default function CSRTimeline({ events, years }: CSRTimelineProps) {
    const [activeYear, setActiveYear] = useState<number | 'all'>('all');
    const [lightbox, setLightbox] = useState<{ items: LightboxItem[]; index: number } | null>(null);

    const visible = useMemo(
        () => (activeYear === 'all' ? events : events.filter(e => e.year === activeYear)),
        [events, activeYear],
    );

    const openLightbox = (event: CSREvent, index: number) => {
        setLightbox({
            items: event.images.map(image => ({
                ...image,
                eventTitle: event.title,
                date: event.date,
            })),
            index,
        });
    };

    const filters: (number | 'all')[] = ['all', ...years];

    return (
        <>
            {/* ---------------- Year filter ---------------- */}
            <div
                role="group"
                aria-label="Filter CSR activities by year"
                className="flex flex-wrap gap-2.5"
            >
                {filters.map(year => {
                    const isActive = activeYear === year;
                    return (
                        <button
                            key={year}
                            type="button"
                            onClick={() => setActiveYear(year)}
                            aria-pressed={isActive}
                            className={`inline-flex min-h-11 items-center rounded-xl border px-5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                isActive
                                    ? 'border-primary-dark bg-primary-dark text-white'
                                    : 'border-border bg-white text-primary-dark hover:border-primary/30 hover:bg-primary/[0.04]'
                            }`}
                        >
                            {year === 'all' ? 'All' : year}
                        </button>
                    );
                })}
            </div>

            <p aria-live="polite" className="sr-only">
                Showing {visible.length} of {events.length} activities.
            </p>

            {/* ---------------- Timeline ---------------- */}
            <ol className="mt-10 lg:mt-14">
                {visible.map((event, i) => {
                    const showYear = i === 0 || visible[i - 1].year !== event.year;

                    return (
                        <li key={event.id}>
                            {showYear && (
                                <p className="mb-6 mt-10 text-4xl font-extrabold leading-none text-primary-dark first:mt-0 lg:text-5xl">
                                    {event.year}
                                </p>
                            )}

                            {/* Rail + marker; the rail is decorative and hidden from AT */}
                            <article
                                id={event.id}
                                className="relative scroll-mt-24 border-l-2 border-border pb-10 pl-6 last:pb-0 sm:pl-8"
                            >
                                <span
                                    className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-secondary"
                                    aria-hidden="true"
                                />

                                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                                    {event.date}
                                </p>

                                <h3 className="mt-2.5 text-xl font-extrabold leading-snug text-primary-dark lg:text-2xl">
                                    {event.title}
                                </h3>

                                {event.location && (
                                    <p className="mt-2.5 flex items-start gap-2 text-sm font-semibold text-text-secondary">
                                        <MapPin
                                            size={15}
                                            className="mt-0.5 shrink-0 text-primary-light"
                                            aria-hidden="true"
                                        />
                                        <span>{event.location}</span>
                                    </p>
                                )}

                                {event.paragraphs.map((p, pi) => (
                                    <p
                                        key={pi}
                                        className="mt-4 text-base leading-relaxed text-text-secondary"
                                    >
                                        {p}
                                    </p>
                                ))}

                                {event.activities && (
                                    <ol className="mt-5 space-y-3">
                                        {event.activities.map((activity, ai) => (
                                            <li key={ai} className="flex gap-3.5">
                                                <span
                                                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-bold text-primary"
                                                    aria-hidden="true"
                                                >
                                                    {ai + 1}
                                                </span>
                                                <span className="text-base leading-relaxed text-text-secondary">
                                                    {activity}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                )}

                                {event.images.length > 0 && (
                                    <ul className={`mt-6 grid gap-4 ${event.images.length === 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'}`}>
                                        {event.images.map((image, ii) => (
                                            <li key={image.src}>
                                                <button
                                                    type="button"
                                                    onClick={() => openLightbox(event, ii)}
                                                    className="group block w-full overflow-hidden rounded-xl border border-border bg-surface-muted transition-all hover:border-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                                >
                                                    <span className={`relative block overflow-hidden ${event.images.length === 1 ? '' : 'aspect-[4/3]'}`}>
                                                        <Image
                                                            src={image.src}
                                                            alt={image.alt}
                                                            width={image.width}
                                                            height={image.height}
                                                            sizes={event.images.length === 1 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"}
                                                            className={`w-full transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transform-none motion-reduce:transition-none ${event.images.length === 1 ? 'h-auto' : 'h-full object-cover'}`}
                                                        />
                                                    </span>
                                                    <span className="sr-only">
                                                        View image {ii + 1} of{' '}
                                                        {event.images.length}: {image.alt}
                                                    </span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {event.note && (
                                    <p className="mt-5 flex gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-4 py-3 text-[0.8125rem] leading-relaxed text-text-secondary">
                                        <Info
                                            size={15}
                                            className="mt-0.5 shrink-0 text-primary"
                                            aria-hidden="true"
                                        />
                                        <span>{event.note}</span>
                                    </p>
                                )}
                            </article>
                        </li>
                    );
                })}
            </ol>

            {lightbox && (
                <CSRLightbox
                    items={lightbox.items}
                    index={lightbox.index}
                    onClose={() => setLightbox(null)}
                    onNavigate={i => setLightbox(prev => (prev ? { ...prev, index: i } : prev))}
                />
            )}
        </>
    );
}
