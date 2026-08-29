'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { aboutHero } from '@/data/about';

export default function AboutHero() {
    return (
        <section id="overview" className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
            {/* Decorative shapes — same treatment as homepage hero */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
                <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.02]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5" />
            </div>

            <div className="container-site relative z-10 py-16 md:py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            {aboutHero.eyebrow}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5"
                        >
                            A Legacy Built Around{' '}
                            <span className="text-secondary">Better Diabetes Care</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-md"
                        >
                            {aboutHero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href={aboutHero.primaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25"
                            >
                                {aboutHero.primaryCta.label}
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href={aboutHero.secondaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                            >
                                {aboutHero.secondaryCta.label}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visual — Elegant placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            {/* Gradient institutional visual */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    </div>
                                    <p className="text-white/40 text-sm font-medium">MV Diabetes</p>
                                    <p className="text-white/25 text-xs mt-1">Since 1954</p>
                                </div>
                            </div>

                            {/* Floating stats cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                                transition={{
                                    opacity: { delay: 0.8, duration: 0.5 },
                                    x: { delay: 0.8, duration: 0.5 },
                                    y: { delay: 1.3, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                                }}
                                className="absolute -left-4 top-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[180px] z-30"
                            >
                                <div className="text-xs font-extrabold text-text-primary">60+ Years</div>
                                <div className="text-[0.65rem] font-medium text-text-secondary">Excellence in Care</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                                transition={{
                                    opacity: { delay: 1.0, duration: 0.5 },
                                    x: { delay: 1.0, duration: 0.5 },
                                    y: { delay: 1.5, duration: 5, repeat: Infinity, ease: 'easeInOut' },
                                }}
                                className="absolute -right-4 bottom-16 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[200px] z-30"
                            >
                                <div className="text-xs font-extrabold text-text-primary">NABH Recognised</div>
                                <div className="text-[0.65rem] font-medium text-text-secondary">All Under One Roof</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
