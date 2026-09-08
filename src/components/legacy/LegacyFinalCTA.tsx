'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { finalCtaContent } from '@/data/prof-viswanathan';

export default function LegacyFinalCTA() {
    return (
        <section className="py-20 lg:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                </svg>
            </div>

            <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
                >
                    {finalCtaContent.heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                    {finalCtaContent.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href={finalCtaContent.primaryCta.href}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-primary-dark font-bold rounded-xl hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/20 group"
                    >
                        {finalCtaContent.primaryCta.label}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={finalCtaContent.secondaryCta.href}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                        {finalCtaContent.secondaryCta.label}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
