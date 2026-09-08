'use client';

import { motion } from 'framer-motion';
import { passingContent } from '@/data/prof-viswanathan';

export default function LegacyPassing1996() {
    return (
        <section className="py-20 lg:py-28 bg-primary-dark relative overflow-hidden">
            {/* Dark, respectful gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-primary-dark to-[#012a45] opacity-50 mix-blend-multiply" />
            
            {/* Subtle glow behind year */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-light/10 rounded-full blur-[100px]" />

            <div className="container-site relative z-10 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <span className="text-5xl lg:text-7xl font-extrabold text-white/90 tracking-widest drop-shadow-lg">
                        {passingContent.year}
                    </span>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto mt-4" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6"
                >
                    {passingContent.date}
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8 text-balance"
                >
                    {passingContent.heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
                >
                    {passingContent.description}
                </motion.p>
            </div>
        </section>
    );
}
