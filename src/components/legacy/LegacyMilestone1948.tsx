'use client';

import { motion } from 'framer-motion';
import { milestone1948Content } from '@/data/prof-viswanathan';

export default function LegacyMilestone1948() {
    return (
        <section id="milestone-1948" className="relative bg-gradient-to-br from-primary-dark to-primary overflow-hidden py-20 lg:py-28">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/[0.03]" />
                <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] rounded-full bg-primary-light/5" />
            </div>

            <div className="container-site relative z-10 max-w-5xl mx-auto text-center">
                {/* Large year */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <span className="text-[8rem] sm:text-[10rem] lg:text-[12rem] font-extrabold text-white/[0.08] leading-none block">
                        {milestone1948Content.year}
                    </span>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center gap-3 -mt-16 mb-8"
                >
                    <div className="w-px h-12 bg-gradient-to-b from-transparent to-secondary" />
                    <div className="w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/30" />
                    <div className="w-px h-6 bg-gradient-to-b from-secondary to-transparent" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-6 text-balance"
                >
                    {milestone1948Content.heading}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8"
                >
                    {milestone1948Content.description}
                </motion.p>

                {/* Significance card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto text-left"
                >
                    <p className="text-white/70 leading-relaxed">
                        {milestone1948Content.significance}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
