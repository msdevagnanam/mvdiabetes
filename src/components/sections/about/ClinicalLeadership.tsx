'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { clinicalDoctors } from '@/data/clinical-leadership';

export default function ClinicalLeadership() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Clinical Leadership
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Our Expert Team
                        </motion.h2>
                    </div>
                    <Link
                        href="/doctors"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                        Meet All Doctors <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Doctor grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {clinicalDoctors.map((doctor, i) => (
                        <motion.div
                            key={doctor.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.08 }}
                            className="group"
                        >
                            <Link
                                href={`/doctors/${doctor.slug}`}
                                className="block bg-surface-muted rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-lg transition-all"
                            >
                                {/* Photo */}
                                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                                    {doctor.image && (
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5 lg:p-6">
                                    <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors mb-0.5">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-xs text-text-secondary font-medium mb-2">{doctor.designation}</p>
                                    <p className="text-xs text-primary font-semibold mb-3">{doctor.experience} experience</p>

                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {doctor.expertise.slice(0, 2).map((e) => (
                                            <span
                                                key={e}
                                                className="text-[0.65rem] font-medium text-text-secondary bg-white px-2 py-0.5 rounded-full border border-border"
                                            >
                                                {e}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                                        View Profile <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
