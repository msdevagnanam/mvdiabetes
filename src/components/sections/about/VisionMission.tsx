'use client';

import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { visionContent, missionContent } from '@/data/values';

export default function VisionMission() {
    return (
        <section id="vision-mission" className="section-padding bg-surface-muted relative overflow-hidden">
            {/* Elegant Background Grid */}
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-site max-w-6xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark tracking-tight">
                        Our Core Purpose
                    </h2>
                    <div className="hidden sm:block w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Vision Premium Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#c9a87c] to-transparent rounded-[2rem] opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-60" />

                        <div className="relative h-full bg-white rounded-[2rem] p-10 sm:p-14 border border-black/5 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 overflow-hidden">
                            {/* Watermark Icon */}
                            <Eye size={160} className="absolute -top-10 -right-10 text-primary/[0.03] rotate-12 transition-transform duration-700 group-hover:rotate-0" />

                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                                <Eye size={28} className="text-[#c9a87c]" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-primary-dark mb-6 tracking-tight">
                                {visionContent.label}
                            </h3>

                            <p className="text-text-primary text-[1.1rem] leading-relaxed font-medium relative z-10">
                                {visionContent.statement}
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Premium Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        className="group relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-[2rem] opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-30" />

                        <div className="relative h-full bg-primary-dark rounded-[2rem] p-10 sm:p-14 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 overflow-hidden">
                            {/* Inner ambient glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                            {/* Watermark Icon */}
                            <Target size={160} className="absolute -bottom-10 -left-10 text-white/[0.03] -rotate-12 transition-transform duration-700 group-hover:rotate-0" />

                            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center mb-8 shadow-lg">
                                <Target size={28} className="text-[#c9a87c]" />
                            </div>

                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                                {missionContent.label}
                            </h3>

                            <p className="text-white/90 text-[1.1rem] leading-relaxed font-medium relative z-10">
                                {missionContent.statement}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
