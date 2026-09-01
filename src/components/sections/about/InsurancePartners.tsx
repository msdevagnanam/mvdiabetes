'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { insurancePartners, insuranceContent } from '@/data/insurance';

export default function InsurancePartners() {
    return (
        <section id="partnerships" className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        {insuranceContent.eyebrow}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-4"
                    >
                        {insuranceContent.headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-text-secondary leading-relaxed"
                    >
                        {insuranceContent.description}
                    </motion.p>
                </div>

                {/* Partner grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5 justify-center">
                    {insurancePartners.map((partner, i) => (
                        <motion.div
                            key={partner.image}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: Math.min(i, 9) * 0.04 }}
                            className="group bg-surface-muted rounded-xl border border-border p-5 flex items-center justify-center text-center hover:border-primary/20 hover:shadow-sm transition-all min-h-[100px]"
                        >
                            <img
                                src={partner.image}
                                alt={`Insurance Partner ${i + 1}`}
                                className="w-full h-12 object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
