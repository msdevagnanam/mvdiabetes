'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, Footprints, HeartPulse, Stethoscope, Scale, Shield, Apple, Leaf, Eye, Heart, Smile, Pill, type LucideIcon } from 'lucide-react';
import { specialties } from '@/data/specialties';

const iconMap: Record<string, LucideIcon> = {
    Activity, Footprints, HeartPulse, Stethoscope, Scale, Shield, Apple, Leaf, Eye, Heart, Smile, Pill,
};

export default function SpecialtyExplorer() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-14">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Our Specialties
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Navigate Your Health with Ease
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/care"
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                        >
                            View all specialties
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                    {specialties.slice(0, 8).map((spec, i) => {
                        const IconComponent = iconMap[spec.icon] || Activity;
                        return (
                            <motion.div
                                key={spec.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30px' }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <Link
                                    href={`/care/${spec.slug}`}
                                    className="group block p-5 lg:p-6 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                                        <IconComponent size={20} className="text-primary" />
                                    </div>
                                    <h3 className="text-sm font-bold text-text-primary mb-1.5 group-hover:text-primary transition-colors">
                                        {spec.name}
                                    </h3>
                                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                                        {spec.shortDescription}
                                    </p>
                                    <div className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowRight size={12} />
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
