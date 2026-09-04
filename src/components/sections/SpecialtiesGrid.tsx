'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Footprints, Baby, HeartPulse, Activity,
    Stethoscope, Users2, Apple, Wind,
    Brain, Pill, Leaf, Eye, ArrowUpRight
} from 'lucide-react';

const specialtiesList = [
    { name: "Diabetic Foot Care (Podiatry)", icon: Footprints, slug: "diabetic-foot-care" },
    { name: "Pediatric Diabetes Care", icon: Baby, slug: "diabetes-care" },
    { name: "Gestational Diabetes", icon: HeartPulse, slug: "diabetes-care" },
    { name: "Pre-Diabetes Management", icon: Activity, slug: "diabetes-care" },
    { name: "Diabetes Neuropathy & Kidney Disease", icon: Stethoscope, slug: "kidney-care" },
    { name: "Men's & Women's Wellness", icon: Users2, slug: "diabetes-care" },
    { name: "Nutrition & Lifestyle Counseling", icon: Apple, slug: "nutrition" },
    { name: "Hyperbaric Oxygen Therapy", icon: Wind, slug: "diabetic-foot-care" },
    { name: "Psychology", icon: Brain, slug: "diabetes-care" },
    { name: "Other Types of DM", icon: Pill, slug: "diabetes-care" },
    { name: "Yoga", icon: Leaf, slug: "yoga" },
    { name: "Dept. of Ophthalmology for DM", icon: Eye, slug: "diabetic-eye-care" },
];

export default function SpecialtiesGrid() {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-[#f8fafc] relative overflow-hidden border-t md:border-t-0 border-border">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl opacity-50" />
            </div>

            <div className="container-site relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-primary-dark mb-4 leading-tight tracking-tight"
                    >
                        Simplifying Your Diabetes Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-text-secondary text-base sm:text-lg leading-relaxed px-4"
                    >
                        MV Diabetes offers individualized treatment plans blending modern medicine with holistic therapies. From diagnosis to lifestyle management, our expert team ensures your wellness journey is simple, accessible, and effective.
                    </motion.p>

                    <motion.h3
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl font-bold text-primary mt-8 inline-block border-b-2 border-primary/20 pb-2"
                    >
                        Our Specialties Include
                    </motion.h3>
                </div>

                {/* 12-Item Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 px-2 md:px-0">
                    {specialtiesList.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <Link href={`/care/${item.slug}`} className="group block">
                                <div className="flex items-center justify-between p-5 lg:p-6 bg-white rounded-2xl border border-black/[0.04] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group-hover:border-primary/20">

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent flex translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                                    <div className="flex items-center gap-4 relative z-10 flex-1 pr-4">
                                        <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300 shadow-inner">
                                            <item.icon size={24} className="text-primary-dark group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                                        </div>
                                        <h4 className="text-[0.95rem] lg:text-base font-bold text-text-primary leading-snug group-hover:text-primary transition-colors duration-300">
                                            {item.name}
                                        </h4>
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center shrink-0 text-text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 relative z-10">
                                        <ArrowUpRight size={16} strokeWidth={2.5} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
