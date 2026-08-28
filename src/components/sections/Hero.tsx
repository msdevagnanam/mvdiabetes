'use client';

import { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Microscope, Users, Building2 } from 'lucide-react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as any },
    }),
};

const heroImages = [
    '/images/hero/mv-hero-img1.png',
    '/images/hero/mv-hero-img2.png'
];

export default function Hero() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Swap every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
                <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-white/[0.02]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5" />
            </div>

            <div className="container-site relative z-10 py-16 md:py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-sm mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            India&apos;s First Exclusive Diabetes Hospital
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] mb-5"
                        >
                            Diabetes Care.
                            <br />
                            <span className="text-secondary">Reimagined</span> Around You.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="text-base lg:text-lg text-white/70 leading-relaxed mb-8 max-w-md"
                        >
                            With personalized treatments and a holistic approach, we&apos;re dedicated to empowering your health. Experience the difference with our innovative care at India&apos;s leading diabetes super specialty institution.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href="/appointment"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all hover:shadow-lg hover:shadow-secondary/25"
                            >
                                Book an Appointment
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/care"
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                            >
                                Explore Diabetes Care
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="relative hidden lg:block"
                    >
                        {/* Auto-playing Image Carousel */}
                        <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                            <AnimatePresence>
                                <motion.div
                                    key={currentImgIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={heroImages[currentImgIndex]}
                                        alt="Diabetes Care hero visual"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center mix-blend-overlay opacity-90"
                                    />
                                    {/* A secondary transparent image without mix-blend if needed, but primary-dark background makes overlay look good. Using normal render here for maximum image clarity since it's the hero. */}
                                    <Image
                                        src={heroImages[currentImgIndex]}
                                        alt="Diabetes Care hero visual"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-center"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            {/* Inner gradient overlay for text and floating cards legibility */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 via-transparent to-primary-dark/40 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent z-10" />
                        </div>

                        {/* Floating Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 0 }}
                            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                            transition={{ 
                                opacity: { delay: 0.8, duration: 0.5 },
                                x: { delay: 0.8, duration: 0.5 },
                                y: { delay: 1.3, duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute -left-6 top-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[180px] z-30 group hover:scale-105 transition-transform cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                    <Microscope size={18} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-extrabold text-text-primary">60+ Years</div>
                                    <div className="text-[0.65rem] font-medium text-text-secondary">Research Excellence</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20, y: 0 }}
                            animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                            transition={{ 
                                opacity: { delay: 1.0, duration: 0.5 },
                                x: { delay: 1.0, duration: 0.5 },
                                y: { delay: 1.5, duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute -right-4 bottom-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[200px] z-30 group hover:scale-105 transition-transform cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                                    <Users size={18} className="text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-extrabold text-text-primary">3,50,000+</div>
                                    <div className="text-[0.65rem] font-medium text-text-secondary">Patient Registrations</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: [0, -6, 0] }}
                            transition={{ 
                                opacity: { delay: 1.2, duration: 0.5 },
                                y: { delay: 1.7, duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute left-1/3 -bottom-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[200px] z-30 group hover:scale-105 transition-transform cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                                    <Building2 size={18} className="text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-xs font-extrabold text-text-primary">3 Locations</div>
                                    <div className="text-[0.65rem] font-medium text-text-secondary">Chennai & Bengaluru</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
