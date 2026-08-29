'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { drVijayProfile } from '@/data/leadership';

export default function LeadershipFeature() {
    return (
        <section id="leadership" className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-primary/5 via-surface-muted to-primary/10 border border-border overflow-hidden relative">
                            <Image
                                src={drVijayProfile.image}
                                alt={drVijayProfile.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-top"
                            />
                            {/* Subtle bottom gradient for readability */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white/90 text-sm font-semibold">{drVijayProfile.name}</p>
                                <p className="text-white/60 text-xs">{drVijayProfile.credentials}</p>
                            </div>
                        </div>
                        {/* Decorative corner */}
                        <div className="absolute -bottom-3 -left-3 w-24 h-24 rounded-2xl bg-secondary/10 -z-10" />
                    </motion.div>

                    {/* Right — Content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            {drVijayProfile.eyebrow}
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-2"
                        >
                            {drVijayProfile.headline}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-lg font-semibold text-text-secondary mb-1"
                        >
                            {drVijayProfile.name}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-sm text-text-secondary mb-6"
                        >
                            {drVijayProfile.credentials} · {drVijayProfile.designation}
                        </motion.p>

                        <div className="space-y-3 mb-8">
                            {drVijayProfile.biography.map((p, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                                    className="text-text-secondary text-[0.95rem] leading-relaxed"
                                >
                                    {p}
                                </motion.p>
                            ))}
                        </div>

                        {/* Impact metrics */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-2 gap-4 mb-8"
                        >
                            {drVijayProfile.impactMetrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="bg-surface-muted rounded-xl p-4"
                                >
                                    <div className="text-xl font-extrabold text-primary">{metric.value}</div>
                                    <div className="text-xs text-text-secondary font-medium mt-0.5">{metric.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            <Link
                                href={drVijayProfile.cta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                            >
                                {drVijayProfile.cta.label}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
