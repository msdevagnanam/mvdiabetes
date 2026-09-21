'use client';

import { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { CSRImage } from '@/data/csr';

export interface LightboxItem extends CSRImage {
    eventTitle: string;
    date: string;
}

interface CSRLightboxProps {
    items: LightboxItem[];
    index: number;
    onClose: () => void;
    onNavigate: (nextIndex: number) => void;
}

export default function CSRLightbox({ items, index, onClose, onNavigate }: CSRLightboxProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    /** Element that had focus before opening, so it can be restored on close. */
    const previouslyFocused = useRef<HTMLElement | null>(null);

    const item = items[index];
    const hasMultiple = items.length > 1;

    const goPrev = useCallback(
        () => onNavigate((index - 1 + items.length) % items.length),
        [index, items.length, onNavigate],
    );
    const goNext = useCallback(
        () => onNavigate((index + 1) % items.length),
        [index, items.length, onNavigate],
    );

    // Capture and restore focus, and lock background scroll while open.
    useEffect(() => {
        previouslyFocused.current = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();

        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = overflow;
            previouslyFocused.current?.focus?.();
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }
            if (hasMultiple && e.key === 'ArrowLeft') {
                e.preventDefault();
                goPrev();
                return;
            }
            if (hasMultiple && e.key === 'ArrowRight') {
                e.preventDefault();
                goNext();
                return;
            }
            if (e.key !== 'Tab') return;

            // Keep Tab cycling inside the dialog.
            const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
                'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
            );
            if (!focusables || focusables.length === 0) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [goNext, goPrev, hasMultiple, onClose]);

    if (!item) return null;

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${item.eventTitle}, ${item.date}. Image ${index + 1} of ${items.length}`}
            className="fixed inset-0 z-[100] flex flex-col bg-primary-dark/95 backdrop-blur-sm"
            onClick={e => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* Toolbar */}
            <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 md:px-6">
                <p className="min-w-0 text-sm text-white/70">
                    <span className="font-semibold text-white">{item.eventTitle}</span>
                    <span className="mx-2 text-white/40">•</span>
                    {item.date}
                </p>
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <X size={20} aria-hidden="true" />
                    <span className="sr-only">Close image viewer</span>
                </button>
            </div>

            {/* Image stage */}
            <div className="flex min-h-0 flex-1 items-center justify-center gap-2 px-2 pb-2 md:gap-4 md:px-6">
                {hasMultiple && (
                    <button
                        type="button"
                        onClick={goPrev}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <ChevronLeft size={22} aria-hidden="true" />
                        <span className="sr-only">Previous image</span>
                    </button>
                )}

                <div className="relative flex h-full min-w-0 flex-1 items-center justify-center">
                    <Image
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 768px) 92vw, 80vw"
                        className="max-h-full w-auto max-w-full rounded-lg object-contain"
                    />
                </div>

                {hasMultiple && (
                    <button
                        type="button"
                        onClick={goNext}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <ChevronRight size={22} aria-hidden="true" />
                        <span className="sr-only">Next image</span>
                    </button>
                )}
            </div>

            {/* Caption */}
            <div className="shrink-0 px-4 pb-5 pt-2 text-center md:px-6">
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white/75">
                    {item.caption ?? item.alt}
                </p>
                {hasMultiple && (
                    <p className="mt-2 text-xs text-white/50" aria-hidden="true">
                        {index + 1} / {items.length}
                    </p>
                )}
            </div>
        </div>
    );
}
