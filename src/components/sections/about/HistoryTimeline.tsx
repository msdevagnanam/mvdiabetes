'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineMilestones } from '@/data/history';

export default function HistoryTimeline() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const children = scrollRef.current.children;
            if (children[index]) {
                (children[index] as HTMLElement).scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest',
                });
            }
        }
        setActiveIndex(index);
    };

    const scroll = (dir: 'left' | 'right') => {
        const next = dir === 'left' ? Math.max(0, activeIndex - 1) : Math.min(timelineMilestones.length - 1, activeIndex + 1);
        scrollToIndex(next);
    };

    // Update active index on scroll
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = Number((entry.target as HTMLElement).dataset.index);
                        if (!isNaN(idx)) setActiveIndex(idx);
                    }
                });
            },
            { root: el, threshold: 0.6 }
        );
        Array.from(el.children).forEach((child) => observer.observe(child));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Our History
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            A Journey of Purpose
                        </motion.h2>
                    </div>
                    {/* Desktop nav */}
                    <div className="hidden sm:flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            disabled={activeIndex === 0}
                            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-surface-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Previous milestone"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={activeIndex === timelineMilestones.length - 1}
                            className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-surface-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Next milestone"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="hidden lg:block relative h-0.5 bg-border rounded-full mb-10">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary rounded-full"
                        animate={{ width: `${((activeIndex + 1) / timelineMilestones.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    <div className="absolute -top-2 left-0 right-0 flex justify-between">
                        {timelineMilestones.map((m, i) => (
                            <button
                                key={m.year}
                                onClick={() => scrollToIndex(i)}
                                className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${i <= activeIndex
                                        ? 'bg-primary border-primary scale-110'
                                        : 'bg-white border-border hover:border-primary/50'
                                    }`}
                                aria-label={`Go to ${m.year}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Horizontal scroll container — Desktop */}
                <div className="hidden lg:block">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scrollbar pb-4"
                    >
                        {timelineMilestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.year}
                                data-index={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.1 }}
                                className="snap-center shrink-0 w-[340px]"
                            >
                                <div
                                    className={`rounded-2xl border p-6 h-full transition-all duration-300 cursor-pointer ${i === activeIndex
                                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/15'
                                            : 'bg-surface-muted border-border hover:border-primary/20 hover:shadow-md'
                                        }`}
                                    onClick={() => scrollToIndex(i)}
                                >
                                    <div
                                        className={`text-3xl font-extrabold mb-3 ${i === activeIndex ? 'text-secondary' : 'text-primary'
                                            }`}
                                    >
                                        {milestone.year}
                                    </div>
                                    <h3
                                        className={`text-lg font-bold mb-2 ${i === activeIndex ? 'text-white' : 'text-text-primary'
                                            }`}
                                    >
                                        {milestone.title}
                                    </h3>
                                    <p
                                        className={`text-sm leading-relaxed ${i === activeIndex ? 'text-white/75' : 'text-text-secondary'
                                            }`}
                                    >
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vertical timeline — Mobile/Tablet */}
                <div className="lg:hidden space-y-0">
                    {timelineMilestones.map((milestone, i) => (
                        <motion.div
                            key={milestone.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="relative pl-8 pb-8 last:pb-0"
                        >
                            {/* Timeline line */}
                            {i < timelineMilestones.length - 1 && (
                                <div className="absolute left-[9px] top-6 bottom-0 w-0.5 bg-border" />
                            )}
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-1.5 w-[20px] h-[20px] rounded-full border-2 border-primary bg-white flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <div className="text-xl font-extrabold text-primary mb-1">{milestone.year}</div>
                            <h3 className="text-base font-bold text-text-primary mb-1">{milestone.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{milestone.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
