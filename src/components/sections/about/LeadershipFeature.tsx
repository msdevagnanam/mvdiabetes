'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { drVijayProfile } from '@/data/leadership';

export default function LeadershipFeature() {
    return (
        <section id="leadership" className="section-padding bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container-site max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left — Portrait with Premium Theme Frame */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-5/12 relative shrink-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            {/* Decorative Block Offset */}
                            <div className="absolute top-6 -left-6 w-full h-full bg-secondary/20 rounded-2xl -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
                            <div className="absolute bottom-6 -right-6 w-full h-full bg-primary-dark rounded-2xl -z-20 shadow-xl" />

                            <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                <Image
                                    // Make sure you replace drVijayProfile.image with the newly requested path if different
                                    src="/images/our-doctors/Dr. Vijay Viswanathan.png"
                                    alt="Dr. Vijay Viswanathan"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Bottom overlay gradient to anchor the photo */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-80" />

                                <div className="absolute bottom-6 left-6 right-6 text-white text-shadow-sm">
                                    <p className="text-xl font-bold tracking-tight mb-0.5">{drVijayProfile.name}</p>
                                    <p className="text-sm text-white/80 font-medium tracking-wide uppercase">{drVijayProfile.designation}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Content (Matching Screenshot Elements) */}
                    <div className="flex-1 w-full space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
                                {drVijayProfile.name}
                            </h2>
                            <div className="w-16 h-1.5 bg-secondary mb-8 rounded-full" />

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary uppercase tracking-tight leading-snug">
                                {drVijayProfile.headline}
                            </h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="space-y-4 text-text-secondary text-[0.95rem] lg:text-base leading-relaxed font-medium"
                        >
                            <p>
                                <strong className="text-primary-dark font-semibold">Dr. Vijay Viswanathan, M.D., Ph.D. FRCP</strong> is the Head and Chief Diabetologist at the MV Hospital for Diabetes. Known as the doyen of Diabetic foot care in India, he did his Ph.D. in Diabetic Nephropathy, the country&apos;s first Ph.D. in Diabetes.
                            </p>
                            <p>
                                He is also the recipient of the prestigious Vivian Fonseca Award. He has saved nearly 90,000 patients from amputation, trained over 3000 doctors, and credited with around 270 research papers and articles in pioneering national and international journals.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="pt-6"
                        >
                            <Link
                                href={drVijayProfile.cta.href}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
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
