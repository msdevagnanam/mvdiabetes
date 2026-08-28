'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Microscope, Users, Building2 } from 'lucide-react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as any },
    }),
};

export default function Hero() {
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
                        {/* Placeholder for hero image - large editorial area */}
                        <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                                        <Shield size={36} className="text-white/60" />
                                    </div>
                                    <p className="text-white/40 text-sm">Healthcare Visual</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -left-6 top-8 bg-white rounded-xl p-4 shadow-xl shadow-black/10 max-w-[180px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Microscope size={18} className="text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-text-primary">60+ Years</div>
                                    <div className="text-[0.65rem] text-text-secondary">Research Excellence</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -right-4 bottom-12 bg-white rounded-xl p-4 shadow-xl shadow-black/10 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                    <Users size={18} className="text-accent" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-text-primary">3,50,000+</div>
                                    <div className="text-[0.65rem] text-text-secondary">Patient Registrations</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute left-1/3 -bottom-4 bg-white rounded-xl p-4 shadow-xl shadow-black/10 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                                    <Building2 size={18} className="text-secondary" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-text-primary">4 Locations</div>
                                    <div className="text-[0.65rem] text-text-secondary">Chennai & Bengaluru</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
