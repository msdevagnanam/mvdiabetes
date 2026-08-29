'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { advancedCareContent } from '@/data/about';

export default function AdvancedDiabetesCare() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Visual placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/10 border border-border overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center px-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    </div>
                                    <p className="text-text-secondary text-sm font-medium">Advanced Diabetes Care</p>
                                    <p className="text-text-secondary/60 text-xs mt-1">All Under One Roof</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-secondary/10 -z-10" />
                    </motion.div>

                    {/* Right — Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            {advancedCareContent.eyebrow}
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-6"
                        >
                            {advancedCareContent.headline}
                        </motion.h2>

                        <div className="space-y-4 mb-8">
                            {advancedCareContent.paragraphs.map((p, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                                    className="text-text-secondary leading-relaxed text-[0.95rem]"
                                >
                                    {p}
                                </motion.p>
                            ))}
                        </div>

                        {/* Credibility indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {advancedCareContent.pillars.map((pillar) => (
                                <span
                                    key={pillar}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-lg text-sm font-medium text-primary"
                                >
                                    <CheckCircle size={14} />
                                    {pillar}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <Link
                                href={advancedCareContent.cta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                            >
                                {advancedCareContent.cta.label}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
