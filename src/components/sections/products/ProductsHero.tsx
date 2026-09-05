'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SHOP_URL } from '@/data/products';

export default function ProductsHero() {
    return (
        <section className="relative w-full min-h-[620px] lg:min-h-[700px] bg-primary-dark overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/products-hero.jpg"
                    alt="MV Diabetes therapeutic diabetic footwear"
                    fill
                    priority
                    className="object-cover object-center opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
            </div>

            {/* Cyan accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary-light to-transparent z-10" />

            <div className="container-site relative z-20 py-24 lg:py-32">
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-primary-light text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                        Therapeutic Footwear
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
                    >
                        Designed for Comfort.{' '}
                        <br className="hidden sm:block" />
                        <span className="text-secondary">Built for Safer Steps.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-10"
                    >
                        MV Diabetes therapeutic footwear is crafted using patented technology and extensive
                        clinical testing — designed to deliver comfort, optimal support, and lasting foot health
                        for people living with diabetes.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href={SHOP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-secondary text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-secondary-light hover:text-primary-dark transition-all duration-300 shadow-lg shadow-secondary/25"
                        >
                            Shop Diabetic Footwear
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="#products"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
                        >
                            Explore Footwear
                            <ArrowDown size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* Feature pills — bottom right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-10 right-6 lg:right-10 flex flex-col gap-2 items-end"
                >
                    {['Patented Technology', 'Clinically Tested', 'Therapeutic Design'].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/8 border border-white/12 text-white/60 text-xs font-medium backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
