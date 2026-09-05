'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Award, FlaskConical, Footprints, ShieldCheck } from 'lucide-react';
import { SHOP_URL } from '@/data/products';

const pillars = [
    { icon: Award, label: 'Patented Technology' },
    { icon: FlaskConical, label: 'Clinically Tested' },
    { icon: Footprints, label: 'Therapeutic Comfort' },
    { icon: ShieldCheck, label: 'Foot Health Focused' },
];

export default function AboutProducts() {
    return (
        <section className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-bold text-primary-light uppercase tracking-widest mb-4"
                >
                    Our Products
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left — Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.05 }}
                            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-primary-dark leading-tight tracking-tight mb-5"
                        >
                            Therapeutic Footwear,{' '}
                            <span className="text-primary-light">Clinically Designed.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.12 }}
                            className="text-text-secondary leading-relaxed text-base mb-4"
                        >
                            At MV Diabetes, we recognise that foot health is inseparable from diabetes management.
                            Our patented therapeutic footwear collection — available through our partner Stepwise Health —
                            is built on a foundation of clinical insight and advanced engineering.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.18 }}
                            className="text-text-secondary leading-relaxed text-base mb-8"
                        >
                            Designed using patented technology and crafted based on extensive clinical testing,
                            each pair prioritises comfort, adequate support, and lasting foot health — helping
                            patients walk safely and confidently every day.
                        </motion.p>

                        {/* Feature pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.24 }}
                            className="flex flex-wrap gap-2.5 mb-9"
                        >
                            {pillars.map(({ icon: Icon, label }) => (
                                <span
                                    key={label}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-border rounded-xl text-sm font-medium text-primary-dark shadow-sm"
                                >
                                    <Icon size={15} className="text-primary-light shrink-0" />
                                    {label}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href="/our-products"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                            >
                                Explore Our Products
                                <ArrowRight size={16} />
                            </Link>
                            <a
                                href={SHOP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-secondary text-secondary text-sm font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300"
                            >
                                Shop on Stepwise Health
                                <ExternalLink size={15} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right — Visual card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.65 }}
                        className="relative"
                    >
                        {/* Main card */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border bg-primary-dark aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                            <Image
                                src="/images/products-hero.jpg"
                                alt="MV Diabetes therapeutic diabetic footwear collection"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />

                            {/* Overlay content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-7">
                                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                                    Available via
                                </p>
                                <h3 className="text-white text-xl font-bold mb-3">Stepwise Health</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {['Women\'s Collection', 'Men\'s Collection'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-border px-5 py-4 flex items-center gap-4 z-10">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                                <Footprints size={22} className="text-secondary" />
                            </div>
                            <div>
                                <p className="text-xl font-black text-primary-dark leading-none">Patented</p>
                                <p className="text-xs text-text-secondary mt-0.5">Therapeutic Technology</p>
                            </div>
                        </div>

                        {/* Decorative dot grid */}
                        <div className="absolute -top-5 -right-5 w-28 h-28 rounded-2xl bg-primary-light/10 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
