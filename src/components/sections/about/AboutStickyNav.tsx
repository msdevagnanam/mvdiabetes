'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { stickyNavItems } from '@/data/about';

export default function AboutStickyNav() {
    const [activeId, setActiveId] = useState('overview');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 400);

            // Find active section
            const sections = stickyNavItems.map((item) => ({
                id: item.id,
                el: document.getElementById(item.id),
            }));

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.el) {
                    const rect = section.el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100; // Account for sticky nav + header
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (!isSticky) return null;

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
            aria-label="About page sections"
        >
            <div className="container-site">
                <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar py-2.5">
                    {stickyNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`shrink-0 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${activeId === item.id
                                    ? 'bg-primary text-white'
                                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
