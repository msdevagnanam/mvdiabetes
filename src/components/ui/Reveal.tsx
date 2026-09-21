'use client';

import { useEffect, useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    /** Stagger delay in milliseconds. */
    delay?: number;
    as?: 'div' | 'li' | 'section';
}

/**
 * Minimal scroll reveal — an IntersectionObserver instead of an animation
 * library, so the podiatry page ships almost no client JavaScript.
 * The motion itself lives in the `.reveal` utility in globals.css, which is
 * disabled under `prefers-reduced-motion`.
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof IntersectionObserver === 'undefined') {
            el.dataset.visible = 'true';
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.dataset.visible = 'true';
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Tag ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </Tag>
    );
}
