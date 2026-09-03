'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { specialties } from '@/data/specialties';

const featuredNavigators = [
    {
        slug: 'kidney-care', image: '/images/navigate/navigate-img1.png', label: 'Kidney Care',
        desc: 'Comprehensive nephropathy management and proactive monitoring to protect your renal health over the long term.',
        className: 'md:col-span-2 md:row-span-2 min-h-[400px]',
        color: 'from-[#deeff5]/60 to-[#deeff5]/10',
        imgWrap: 'absolute -bottom-4 -right-8 w-64 h-64 sm:w-80 sm:h-80 opacity-90 group-hover:opacity-100',
    },
    {
        slug: 'diabetes-care', image: '/images/navigate/navigate-img2.png', label: 'Diabetes Management',
        desc: 'Advanced, personalized protocols for Type 1, Type 2, and Gestational Diabetes.',
        className: 'md:col-span-2 md:row-span-1 min-h-[220px]',
        color: 'from-[#ebf7d4]/80 to-[#ebf7d4]/20',
        imgWrap: 'absolute bottom-0 right-0 sm:right-0 w-36 h-36 sm:w-48 sm:h-48 opacity-90 group-hover:opacity-100',
    },
    {
        slug: 'diabetic-foot-care', image: '/images/navigate/navigate-img3.png', label: 'Diabetic Foot',
        desc: 'Pioneering limb salvage and expert wound care.',
        className: 'md:col-span-1 md:row-span-1 min-h-[220px]',
        color: 'from-[#f2d6d3]/60 to-[#f2d6d3]/10',
        imgWrap: 'absolute -bottom-4 -right-4 w-32 h-32 opacity-90 group-hover:opacity-100',
    },
    {
        slug: 'urology', image: '/images/navigate/navigate-img4.png', label: 'Urology',
        desc: 'Specialized care for urinary complications.',
        className: 'md:col-span-1 md:row-span-1 min-h-[220px]',
        color: 'from-[#d3f2e9]/60 to-[#d3f2e9]/10',
        imgWrap: 'absolute -bottom-4 -right-4 w-32 h-32 opacity-90 group-hover:opacity-100',
    },
    {
        slug: 'obesity-management', image: '/images/navigate/navigate-img5.png', label: 'Obesity Control',
        desc: 'Sustainable weight management.',
        className: 'md:col-span-1 md:row-span-1 min-h-[240px]',
        color: 'from-[#f2e5d3]/60 to-[#f2e5d3]/10',
        imgWrap: 'absolute -bottom-2 -right-4 w-36 h-36 opacity-90 group-hover:opacity-100',
    },
    {
        slug: 'gastrointestinal', image: '/images/navigate/navigate-img6.png', label: 'Gastrointestinal',
        desc: 'Holistic care for diabetes-related digestive, gut, and hepatic conditions ensuring metabolic balance.',
        className: 'md:col-span-3 md:row-span-1 min-h-[240px]',
        color: 'from-[#ead3f2]/60 to-[#ead3f2]/10',
        imgWrap: 'absolute bottom-0 right-0 sm:right-8 w-40 h-40 sm:w-56 sm:h-56 opacity-90 group-hover:opacity-100',
    },
];

export default function SpecialtyExplorer() {
    return (
        <section className="section-padding bg-[#fafafa] relative overflow-hidden">
            <div className="container-site relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-primary/10"
                        >
                            Specialized Care Areas
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text-primary mb-5 leading-tight tracking-tight"
                        >
                            Navigate Your Health with Ease.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-3xl"
                        >
                            We offer individualized treatment plans blending modern medicine with holistic therapies. From rapid diagnosis to continuous lifestyle management.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="shrink-0"
                    >
                        <Link
                            href="/care"
                            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group"
                        >
                            View all specialties
                            <ArrowUpRight size={18} className="group-hover:text-accent transition-colors" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-auto">
                    {featuredNavigators.map((nav, i) => {
                        return (
                            <motion.div
                                key={nav.slug}
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative group ${nav.className}`}
                            >
                                <Link
                                    href={`/care/${nav.slug}`}
                                    className={`
                                        block h-full w-full rounded-[2rem] overflow-hidden 
                                        bg-gradient-to-br ${nav.color} bg-white
                                        border border-black/[0.04] p-8 lg:p-10
                                        hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 
                                        transition-all duration-500 relative
                                    `}
                                >
                                    <div className="relative z-20 flex flex-col h-full pointer-events-none">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <ArrowUpRight size={22} className="text-primary group-hover:text-white transition-colors" />
                                        </div>

                                        <div className="max-w-[70%] lg:max-w-[60%]">
                                            <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-dark mb-3 tracking-tight group-hover:text-primary transition-colors">
                                                {nav.label}
                                            </h3>
                                            <p className="text-text-secondary text-sm md:text-base font-medium leading-relaxed drop-shadow-sm line-clamp-3">
                                                {nav.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image placement with frosted shadow effect */}
                                    <div className={`${nav.imgWrap} mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out z-10 pointer-events-none`}>
                                        <div className="w-full h-full relative flex items-center justify-center">
                                            {/* Back glow so image pops */}
                                            <div className="absolute w-[60%] h-[60%] bg-white blur-xl rounded-full scale-100 transform-gpu z-0 opacity-80" />
                                            <Image
                                                src={nav.image}
                                                alt={nav.label}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-contain relative z-10 drop-shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
