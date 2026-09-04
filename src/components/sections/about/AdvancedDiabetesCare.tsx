'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
                        <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-md border border-border">
                            <Image
                                src="/images/about/abc.png"
                                alt="Advanced Diabetes Care Facility"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
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
