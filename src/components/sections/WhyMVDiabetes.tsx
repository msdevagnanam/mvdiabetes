'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Stethoscope, BookOpen, FlaskConical, HeartHandshake } from 'lucide-react';

const pillars = [
    {
        icon: Stethoscope,
        title: 'Expert Diabetes Care',
        description: 'NABH-recognized all-under-one-roof facility with a 65-bed tertiary care unit for diabetes and its advanced complications.',
        color: 'bg-primary/5 text-primary',
    },
    {
        icon: HeartHandshake,
        title: 'Comprehensive Approach',
        description: 'Personalized treatments blending modern medicine with holistic therapies — from diagnosis to lifestyle management.',
        color: 'bg-accent/5 text-accent',
    },
    {
        icon: FlaskConical,
        title: 'Pioneering Research',
        description: 'Prof. M. Viswanathan Diabetes Research Centre — pursuing the next big breakthrough in diabetes care since 1971.',
        color: 'bg-secondary/5 text-secondary',
    },
    {
        icon: BookOpen,
        title: 'Education & Training',
        description: 'Fellowship and certificate courses in diabetology, training doctors from across India in advanced diabetes care.',
        color: 'bg-primary-light/5 text-primary-light',
    },
];

export default function WhyMVDiabetes() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="max-w-2xl mb-12 lg:mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        Why MV Diabetes
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-text-primary leading-tight mb-4"
                    >
                        More Than Diabetes Care
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base lg:text-lg text-text-secondary leading-relaxed"
                    >
                        With personalized treatments and a holistic approach, we&apos;re dedicated to empowering your health. Experience the difference and join the thousands who trust us with their wellness.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative p-6 lg:p-7 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-white"
                        >
                            <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center mb-5`}>
                                <pillar.icon size={22} />
                            </div>
                            <h3 className="text-base font-bold text-text-primary mb-2">{pillar.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{pillar.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mt-10"
                >
                    <Link
                        href="/about-us"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                        Learn about our story
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
