'use client';

import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { visionContent, missionContent } from '@/data/values';

export default function VisionMission() {
    return (
        <section id="vision-mission" className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-2xl p-8 lg:p-10 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white/[0.03]" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                                <Eye size={22} className="text-secondary" />
                            </div>
                            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                                {visionContent.label}
                            </p>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-4">
                                &ldquo;{visionContent.statement}&rdquo;
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {visionContent.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative bg-surface-muted rounded-2xl p-8 lg:p-10 border border-border overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-primary/[0.03]" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Target size={22} className="text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                                {missionContent.label}
                            </p>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-text-primary leading-tight mb-4">
                                &ldquo;{missionContent.statement}&rdquo;
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {missionContent.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
