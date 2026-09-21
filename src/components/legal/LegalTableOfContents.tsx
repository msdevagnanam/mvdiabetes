'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TocEntry {
    id: string;
    title: string;
    level: number;
}

export default function LegalTableOfContents({ entries }: { entries: TocEntry[] }) {
    const [activeId, setActiveId] = useState<string>(entries[0]?.id ?? '');
    const [mobileOpen, setMobileOpen] = useState(false);

    // Highlight whichever section is currently nearest the top of the viewport.
    useEffect(() => {
        if (typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            observed => {
                const visible = observed
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
        );

        entries.forEach(entry => {
            const el = document.getElementById(entry.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [entries]);

    const minLevel = Math.min(...entries.map(e => e.level));

    const list = (onNavigate?: () => void) => (
        <ul className="space-y-0.5">
            {entries.map(entry => {
                const indent = Math.min(entry.level - minLevel, 2);
                const isActive = activeId === entry.id;
                return (
                    <li key={entry.id}>
                        <a
                            href={`#${entry.id}`}
                            onClick={onNavigate}
                            aria-current={isActive ? 'true' : undefined}
                            className={`block border-l-2 py-1.5 text-sm leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                                isActive
                                    ? 'border-primary font-bold text-primary-dark'
                                    : 'border-border text-text-secondary hover:border-primary/40 hover:text-primary-dark'
                            }`}
                            style={{ paddingLeft: `${0.875 + indent * 0.75}rem` }}
                        >
                            {entry.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            {/* ---------------- Mobile ---------------- */}
            <div className="lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileOpen(o => !o)}
                    aria-expanded={mobileOpen}
                    aria-controls="legal-toc-mobile"
                    className="flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-border bg-white px-5 font-bold text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    On this page
                    <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform motion-reduce:transition-none ${
                            mobileOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>
                {mobileOpen && (
                    <nav
                        id="legal-toc-mobile"
                        aria-label="On this page"
                        className="mt-3 rounded-xl border border-border bg-white p-4"
                    >
                        {list(() => setMobileOpen(false))}
                    </nav>
                )}
            </div>

            {/* ---------------- Desktop ---------------- */}
            <nav aria-label="On this page" className="hidden lg:block">
                <div className="sticky top-24">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-text-secondary">
                        On this page
                    </p>
                    <div className="mt-4 max-h-[70vh] overflow-y-auto pr-1">{list()}</div>
                </div>
            </nav>
        </>
    );
}
