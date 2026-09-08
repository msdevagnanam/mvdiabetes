'use client';

import { motion } from 'framer-motion';
import { Award, Quote } from 'lucide-react';
import { recognitionContent } from '@/data/prof-viswanathan';

export default function LegacyRecognition() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-12 text-center"
                >
                    {recognitionContent.heading}
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* BC Roy Award */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-[#f9f5ef] to-[#f4f1ea] border border-[#e1d5c2] rounded-2xl p-7 lg:p-8"
                    >
                        <div className="w-14 h-14 rounded-xl bg-[#c9a87c]/20 flex items-center justify-center mb-5">
                            <Award size={28} className="text-[#8c6b41]" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">
                            {recognitionContent.bcRoyAward.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            {recognitionContent.bcRoyAward.description}
                        </p>
                    </motion.div>

                    {/* Father of Diabetology */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-7 lg:p-8 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                            &ldquo;The Father of Diabetology in India&rdquo;
                        </h3>
                        <p className="text-white/70 leading-relaxed text-sm">
                            {recognitionContent.fatherTitle}
                        </p>
                    </motion.div>
                </div>

                {/* Paul Zimmet Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border-l-4 border-[#c9a87c] p-6 sm:p-8 rounded-r-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative"
                >
                    <Quote size={24} className="text-[#c9a87c] absolute top-6 right-6 opacity-40" />
                    <p className="text-primary-dark font-medium leading-relaxed italic text-lg mb-6">
                        &quot;{recognitionContent.paulZimmetQuote.text}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f4f1ea] flex items-center justify-center">
                            <span className="text-[#c9a87c] font-bold text-sm">PZ</span>
                        </div>
                        <div>
                            <p className="font-bold text-text-primary text-sm">
                                {recognitionContent.paulZimmetQuote.author}
                            </p>
                            <p className="text-xs text-text-secondary">
                                {recognitionContent.paulZimmetQuote.role}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
