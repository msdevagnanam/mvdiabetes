'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { legacyTodayContent } from '@/data/prof-viswanathan';

export default function LegacyToday() {
    return (
        <section id="legacy" className="section-padding bg-surface-muted">
            <div className="container-site max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-6 text-balance"
                    >
                        {legacyTodayContent.heading}
                    </motion.h2>
                    <div className="space-y-4">
                        {legacyTodayContent.paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                className="text-text-secondary text-lg leading-relaxed"
                            >
                                {p}
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* Then vs Now comparison */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting line on desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border items-center justify-center shadow-sm z-10 text-primary/40">
                        <ArrowRight size={20} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-16">
                        {/* Then */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white border border-border rounded-2xl p-8 relative shadow-sm"
                        >
                            <span className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-2 block">
                                {legacyTodayContent.thenAndNow.then.year}
                            </span>
                            <h3 className="text-2xl font-bold text-primary-dark mb-4">
                                {legacyTodayContent.thenAndNow.then.label}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {legacyTodayContent.thenAndNow.then.description}
                            </p>
                        </motion.div>

                        {/* Now */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-primary-dark to-primary border border-primary-light/20 rounded-2xl p-8 relative shadow-lg"
                        >
                            <span className="text-sm font-bold text-secondary uppercase tracking-widest mb-2 block">
                                {legacyTodayContent.thenAndNow.now.year}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {legacyTodayContent.thenAndNow.now.label}
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                {legacyTodayContent.thenAndNow.now.description}
                            </p>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 bg-[#f9f5ef] border border-[#e1d5c2] rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto text-center"
                >
                    <p className="text-primary-dark text-lg font-medium italic leading-relaxed">
                        &quot;{legacyTodayContent.centralPhilosophy}&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
