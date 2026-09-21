'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { departments } from '@/data/facilities';
import FacilityLightbox from './FacilityLightbox';

export default function DepartmentsSection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <section id="departments" className="scroll-mt-24 bg-primary-dark py-16 md:py-20 lg:py-24">
            <div className="container-site">
                {/* Section header */}
                <div className="flex flex-col gap-5 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Our Departments
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
                            Departments at MV Hospital for Diabetes
                        </h2>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-white/50">
                        {departments.length} departments
                    </p>
                </div>

                {/* Editorial numbered list */}
                <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {departments.map((department, i) => (
                        <li key={department.id} className="group">
                            <div className="flex items-baseline gap-3">
                                <span className="font-mono text-sm font-bold tracking-tight text-secondary">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="h-px flex-1 bg-white/15" />
                            </div>

                            <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                                {department.title}
                            </h3>

                            <button
                                type="button"
                                onClick={() => setLightboxIndex(i)}
                                className="relative mt-4 block aspect-[5/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                aria-label={`View larger image of ${department.title}`}
                            >
                                {department.image && (
                                    <Image
                                        src={department.image.src}
                                        alt={department.image.alt}
                                        width={department.image.width}
                                        height={department.image.height}
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    />
                                )}
                                <span className="absolute inset-0 bg-primary-dark/0 transition-colors duration-300 group-hover:bg-primary-dark/25" />
                                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                    <Maximize2 size={15} />
                                </span>
                            </button>

                            {department.relatedHref && (
                                <Link
                                    href={department.relatedHref}
                                    className="mt-3 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-secondary transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                >
                                    {department.relatedLabel}
                                    <ArrowUpRight size={15} />
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>

            {lightboxIndex !== null && (
                <FacilityLightbox
                    items={departments}
                    index={lightboxIndex}
                    eyebrow="Department"
                    onClose={() => setLightboxIndex(null)}
                    onIndexChange={setLightboxIndex}
                />
            )}
        </section>
    );
}
