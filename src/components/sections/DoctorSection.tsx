'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { doctors } from '@/data/doctors';

export default function DoctorSection() {
    const featuredDocs = doctors.slice(0, 7);

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
                            Our Specialists
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Meet Our Doctors
                        </motion.h2>
                    </div>
                    <Link href="/doctors" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                        View all doctors <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {featuredDocs.map((doc, i) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="group bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                        >
                            {/* Photo placeholder */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary/40">
                                        {doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 lg:p-6">
                                <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                                    {doc.name}
                                </h3>
                                <p className="text-sm text-primary/80 font-medium mt-0.5">{doc.designation}</p>
                                <p className="text-xs text-text-secondary mt-1">{doc.qualifications}</p>

                                <div className="flex items-center gap-1.5 mt-3 text-xs text-text-secondary">
                                    <MapPin size={12} />
                                    {doc.location.join(' • ')}
                                </div>

                                <div className="flex gap-2 mt-4">
                                    <Link
                                        href={`/doctors/${doc.slug}`}
                                        className="flex-1 text-center py-2 text-xs font-semibold text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                                    >
                                        View Profile
                                    </Link>
                                    <Link
                                        href="/appointment"
                                        className="flex items-center justify-center gap-1.5 flex-1 py-2 text-xs font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                                    >
                                        <Calendar size={12} />
                                        Book
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
