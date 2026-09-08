'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { researchContent } from '@/data/prof-viswanathan';

export default function LegacyResearch() {
    return (
        <section id="research" className="section-padding bg-white">
            <div className="container-site max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left — Text */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-6"
                        >
                            {researchContent.heading}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-text-secondary text-lg leading-relaxed mb-8"
                        >
                            {researchContent.description}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-text-secondary leading-relaxed"
                        >
                            {researchContent.preventionResearch}
                        </motion.p>
                    </div>

                    {/* Right — Stats + Collaborations */}
                    <div className="space-y-6">
                        {/* Big stat */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-center"
                        >
                            <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white/90 block mb-3">
                                {researchContent.stats.papers}
                            </span>
                            <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto">
                                {researchContent.stats.papersLabel}
                            </p>
                        </motion.div>

                        {/* Collaborations */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-surface-muted border border-border rounded-2xl p-6"
                        >
                            <h3 className="text-sm font-bold text-primary-dark uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Globe size={16} className="text-primary-light" />
                                International Collaborations
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {researchContent.collaborations.map((collab, i) => (
                                    <div key={i} className="bg-white rounded-xl p-3 border border-border">
                                        <p className="text-xs font-bold text-primary-dark">{collab.country}</p>
                                        <p className="text-xs text-text-secondary mt-0.5">{collab.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
