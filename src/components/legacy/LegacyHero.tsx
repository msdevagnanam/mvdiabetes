'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { heroContent, images } from '@/data/prof-viswanathan';

export default function LegacyHero() {
    return (
        <section id="overview" className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
                <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.02]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary-light/5" />
            </div>

            <div className="container-site relative z-10 py-16 md:py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-bold uppercase tracking-[0.15em] mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            {heroContent.eyebrow}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-4"
                        >
                            {heroContent.heading}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-xl lg:text-2xl text-secondary font-semibold mb-4 leading-snug"
                        >
                            {heroContent.subheading}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-md"
                        >
                            {heroContent.supportingText}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            <a
                                href={heroContent.primaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-primary-dark font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25"
                            >
                                {heroContent.primaryCta.label}
                            </a>
                            <a
                                href={heroContent.secondaryCta.href}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                            >
                                {heroContent.secondaryCta.label}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right — Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="relative w-full max-w-[380px] mx-auto lg:mx-0 lg:ml-auto"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a87c] to-[#8c6b41] rounded-[2rem] opacity-15 blur-2xl" />

                        {/* Frame */}
                        <div className="relative rounded-[2rem] bg-white p-3 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10">
                            <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden border border-[#e1d5c2]">
                                <Image
                                    src={images.portrait.src}
                                    alt={images.portrait.alt}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 380px"
                                    className="object-cover sepia-[0.15] brightness-[1.05] contrast-[1.05]"
                                />
                                {/* Vintage overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-0 left-0 w-full p-5 text-white text-center">
                                    <h2 className="text-lg font-bold mb-0.5 tracking-tight drop-shadow-md">
                                        {images.portrait.caption}
                                    </h2>
                                    <p className="text-xs font-medium text-white/70 uppercase tracking-[0.2em] drop-shadow-sm">
                                        {heroContent.lifespan}
                                    </p>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -right-4 top-14 bg-white border border-[#c9a87c]/30 rounded-full px-5 py-2.5 shadow-xl transform rotate-3 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#8c6b41]" />
                                <span className="text-[#8c6b41] font-bold text-xs tracking-[0.15em] uppercase">
                                    Founder
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
