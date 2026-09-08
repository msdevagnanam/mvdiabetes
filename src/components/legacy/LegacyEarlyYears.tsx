'use client';

import { motion } from 'framer-motion';
import { earlyYearsContent } from '@/data/prof-viswanathan';

export default function LegacyEarlyYears() {
    return (
        <section id="early-years" className="section-padding bg-surface-muted relative">
            <div className="container-site max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-12"
                >
                    {earlyYearsContent.heading}
                </motion.h2>

                <div className="space-y-0">
                    {earlyYearsContent.milestones.map((milestone, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 relative pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            {i < earlyYearsContent.milestones.length - 1 && (
                                <div className="hidden md:block absolute left-[70px] top-16 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent" />
                            )}

                            {/* Year */}
                            <div className="flex md:flex-col items-center md:items-start gap-3">
                                <div className="w-3 h-3 rounded-full bg-primary border-4 border-primary/20 shrink-0 hidden md:block relative z-10" />
                                <span className="text-3xl lg:text-4xl font-extrabold text-primary/20 tracking-tight">
                                    {milestone.year}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-primary-dark mb-3">
                                    {milestone.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {milestone.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
