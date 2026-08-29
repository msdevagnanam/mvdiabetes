'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { legacyContent } from '@/data/history';

export default function LegacySection() {
    return (
        <section id="legacy" className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left — Portrait & title */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="lg:sticky lg:top-32"
                    >
                        {/* Archival portrait placeholder */}
                        <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-primary-dark/90 via-primary/80 to-primary-dark overflow-hidden relative mb-6">
                            <div className="absolute inset-0 flex items-end justify-center pb-12">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                        <span className="text-3xl font-bold text-white/60">MV</span>
                                    </div>
                                    <p className="text-white/50 text-xs font-medium uppercase tracking-widest">Archival Portrait</p>
                                </div>
                            </div>
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {legacyContent.eyebrow}
                            </p>
                            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight">
                                {legacyContent.headline}
                            </h2>
                            <p className="text-lg font-semibold text-text-secondary">{legacyContent.name}</p>
                        </div>
                    </motion.div>

                    {/* Right — Narrative */}
                    <div className="space-y-8">
                        {legacyContent.narrative.map((paragraph, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-text-secondary text-[0.95rem] lg:text-base leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        {/* Paul Zimmet Testimonial */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative bg-white rounded-2xl p-6 lg:p-8 border border-border shadow-sm"
                        >
                            <Quote size={32} className="text-secondary/40 mb-4" />
                            <p className="text-text-primary font-medium leading-relaxed text-[0.95rem] lg:text-base italic mb-6">
                                &ldquo;{legacyContent.paulZimmetQuote.text}&rdquo;
                            </p>
                            <footer className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary text-sm font-bold">PZ</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-text-primary">
                                        {legacyContent.paulZimmetQuote.author}
                                    </div>
                                    <div className="text-xs text-text-secondary">
                                        {legacyContent.paulZimmetQuote.role}
                                    </div>
                                </div>
                            </footer>
                        </motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
