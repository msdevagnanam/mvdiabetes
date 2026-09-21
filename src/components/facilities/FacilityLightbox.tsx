'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FacilityItem } from '@/data/facilities';

type Props = {
    /** Ordered list the lightbox can page through. */
    items: FacilityItem[];
    index: number;
    eyebrow: string;
    onClose: () => void;
    onIndexChange: (index: number) => void;
};

const FOCUSABLE = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export default function FacilityLightbox({ items, index, eyebrow, onClose, onIndexChange }: Props) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const previousFocus = useRef<HTMLElement | null>(null);
    const touchStart = useRef(0);

    const total = items.length;
    const item = items[index];

    const goPrev = useCallback(() => {
        onIndexChange((index - 1 + total) % total);
    }, [index, total, onIndexChange]);

    const goNext = useCallback(() => {
        onIndexChange((index + 1) % total);
    }, [index, total, onIndexChange]);

    // Focus management + body scroll lock
    useEffect(() => {
        previousFocus.current = document.activeElement as HTMLElement;
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        dialogRef.current?.focus();

        return () => {
            document.body.style.overflow = overflow;
            previousFocus.current?.focus();
        };
    }, []);

    // Keyboard: ESC, arrows, focus trap
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }
            if (e.key === 'ArrowLeft' && total > 1) {
                e.preventDefault();
                goPrev();
                return;
            }
            if (e.key === 'ArrowRight' && total > 1) {
                e.preventDefault();
                goNext();
                return;
            }
            if (e.key !== 'Tab') return;

            const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
            if (!nodes || nodes.length === 0) return;
            const first = nodes[0];
            const last = nodes[nodes.length - 1];
            const active = document.activeElement;

            if (e.shiftKey && (active === first || active === dialogRef.current)) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose, goPrev, goNext, total]);

    if (!item) return null;

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (total < 2) return;
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext();
            else goPrev();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-label={`${item.title} — ${eyebrow}`}
                className="relative flex h-full w-full flex-col items-center justify-center p-4 outline-none md:p-8"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Header */}
                <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 p-4 md:p-6">
                    <div className="min-w-0">
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-secondary">
                            {eyebrow}
                        </p>
                        <h2 className="mt-1 truncate text-lg font-bold text-white md:text-xl">
                            {item.title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        aria-label="Close image viewer"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Image */}
                <div className="flex max-h-[68vh] w-full max-w-4xl items-center justify-center">
                    {item.image ? (
                        <Image
                            key={item.image.src}
                            src={item.image.src}
                            alt={item.image.alt}
                            width={item.image.width}
                            height={item.image.height}
                            sizes="(max-width: 768px) 92vw, 850px"
                            className="max-h-[68vh] w-auto animate-lightboxIn object-contain"
                            priority
                        />
                    ) : (
                        <div className="flex aspect-square w-full max-w-sm flex-col items-center justify-center gap-2 rounded-2xl border border-white/15 bg-primary-dark/60 p-8 text-center">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                MV Diabetes
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                Facilities
                            </span>
                            <span className="mt-3 text-base font-bold text-white">{item.title}</span>
                            <span className="mt-1 text-xs text-white/50">Source image unavailable</span>
                        </div>
                    )}
                </div>

                {/* Counter */}
                <p className="mt-5 text-sm font-medium text-white/70" aria-live="polite">
                    {index + 1} / {total}
                </p>

                {/* Navigation */}
                {total > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:left-6"
                            aria-label="Previous item"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:right-6"
                            aria-label="Next item"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}
            </div>

            <style jsx global>{`
                @keyframes lightboxIn {
                    from {
                        opacity: 0;
                        transform: scale(0.97);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-lightboxIn {
                    animation: lightboxIn 0.25s ease-out;
                }
            `}</style>
        </div>
    );
}
