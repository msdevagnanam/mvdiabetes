'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fullTimeline } from '@/data/prof-viswanathan';

export default function LegacyFullTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container-site max-w-4xl mx-auto" ref={containerRef}>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-bold text-primary/40 uppercase tracking-[0.2em]"
                    >
                        Timeline
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Animated central line */}
                    <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-surface-muted sm:-translate-x-px" />
                    <motion.div
                        className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-light to-secondary origin-top sm:-translate-x-px"
                        style={{ scaleY }}
                    />

                    {fullTimeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`relative flex items-center gap-8 mb-12 sm:mb-20 last:mb-0 ${
                                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                            }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-sm" />

                            {/* Content */}
                            <div className={`ml-14 sm:ml-0 sm:w-[45%] ${
                                i % 2 === 0 ? 'sm:mr-auto sm:text-right sm:pr-10' : 'sm:ml-auto sm:text-left sm:pl-10'
                            }`}>
                                <span className="text-4xl lg:text-5xl font-extrabold text-primary/10 block mb-2 tracking-tighter">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold text-primary-dark mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
