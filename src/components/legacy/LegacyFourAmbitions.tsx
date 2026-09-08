'use client';

import { motion } from 'framer-motion';
import { fourAmbitionsContent } from '@/data/prof-viswanathan';

export default function LegacyFourAmbitions() {
    return (
        <section id="four-ambitions" className="section-padding bg-gradient-to-b from-surface-muted to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container-site max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-14 text-center text-balance"
                >
                    {fourAmbitionsContent.heading}
                </motion.h2>

                {/* Ambitions grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-12 relative">
                    {/* Connecting lines (desktop) */}
                    <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-y-1/2" />
                    <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-x-1/2" />

                    {fourAmbitionsContent.ambitions.map((ambition, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative bg-white border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <span className="text-5xl lg:text-6xl font-extrabold text-primary/10 block mb-4 group-hover:text-primary/20 transition-colors duration-300">
                                {ambition.number}
                            </span>
                            <p className="text-lg lg:text-xl font-medium text-primary-dark leading-relaxed">
                                {ambition.text}
                            </p>

                            {/* Progress indicator */}
                            {i < 3 ? (
                                <div className="mt-5 flex items-center gap-2">
                                    <div className="h-1.5 flex-1 rounded-full bg-success/20">
                                        <div className="h-full rounded-full bg-success" style={{ width: i === 0 ? '85%' : i === 1 ? '95%' : '75%' }} />
                                    </div>
                                    <span className="text-xs text-success font-semibold">Achieved</span>
                                </div>
                            ) : (
                                <div className="mt-5 flex items-center gap-2">
                                    <div className="h-1.5 flex-1 rounded-full bg-secondary/20">
                                        <div className="h-full rounded-full bg-secondary animate-pulse" style={{ width: '30%' }} />
                                    </div>
                                    <span className="text-xs text-secondary font-semibold">Ongoing</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-text-secondary leading-relaxed max-w-3xl mx-auto text-lg"
                >
                    {fourAmbitionsContent.closing}
                </motion.p>
            </div>
        </section>
    );
}
