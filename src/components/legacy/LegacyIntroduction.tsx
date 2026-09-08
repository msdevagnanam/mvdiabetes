'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { introductionContent } from '@/data/prof-viswanathan';

export default function LegacyIntroduction() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

            <div className="container-site max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark leading-[1.1] mb-10 text-balance"
                >
                    {introductionContent.heading}
                </motion.h2>

                <div className="space-y-6 text-text-secondary text-base lg:text-lg leading-relaxed relative">
                    <Quote size={100} className="absolute -top-4 -left-6 text-black/[0.03] -z-10 rotate-12" />

                    {introductionContent.paragraphs.map((p, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {i === 0 && (
                                <span className="float-left text-5xl font-serif text-[#c9a87c] leading-[40px] pr-3 pt-2">
                                    {p.charAt(0)}
                                </span>
                            )}
                            {i === 0 ? p.slice(1) : p}
                        </motion.p>
                    ))}
                </div>

                {/* Philosophy Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 sm:p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <Quote size={32} className="text-white/20 mb-4" />
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug mb-4 italic">
                        &ldquo;{introductionContent.philosophyHighlight}&rdquo;
                    </p>
                    <p className="text-sm text-white/50 font-medium uppercase tracking-widest">
                        {introductionContent.philosophyNote}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
