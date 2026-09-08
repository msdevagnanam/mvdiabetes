'use client';

import { useState, useEffect } from 'react';
import { pageNavSections } from '@/data/prof-viswanathan';

export default function LegacyPageNav() {
    const [activeSection, setActiveSection] = useState('overview');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 600);

            const sections = pageNavSections.map((s) => ({
                id: s.id,
                el: document.getElementById(s.id),
            }));

            for (let i = sections.length - 1; i >= 0; i--) {
                const el = sections[i].el;
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 160) {
                        setActiveSection(sections[i].id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isSticky) return null;

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300"
            aria-label="Page navigation"
        >
            <div className="container-site">
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar py-3">
                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest mr-3 shrink-0 hidden lg:block">
                        Prof. Viswanathan
                    </span>
                    {pageNavSections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                                activeSection === section.id
                                    ? 'bg-primary text-white shadow-sm'
                                    : 'text-text-secondary hover:bg-surface-muted hover:text-primary'
                            }`}
                        >
                            {section.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
