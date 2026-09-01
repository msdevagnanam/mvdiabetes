'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { checkups } from '@/data/checkups';

export default function CheckupsSection() {
    // Show top 3 or popular checkups. In this case we slice first 3 from the active ones.
    const featuredCheckups = checkups.filter(c => c.available).slice(0, 3);

    return (
        <section className="section-padding bg-white relative">
            <div className="container-site z-10 relative">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Preventive Care
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight text-primary-dark"
                        >
                            Recommended Checkups
                        </motion.h2>
                    </div>
                    <Link href="/checkups" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0">
                        View all checkups <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featuredCheckups.map((checkup, i) => (
                        <motion.div
                            key={checkup.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link href={`/checkups/${checkup.slug}`}
                                className="group flex flex-col h-full rounded-2xl border border-border hover:shadow-xl overflow-hidden hover:border-primary/20 transition-all duration-300 bg-white">

                                {checkup.image ? (
                                    <div className="w-full h-52 relative bg-surface overflow-hidden">
                                        <Image
                                            src={checkup.image}
                                            alt={checkup.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                                            <span className="w-fit text-xs font-bold text-white bg-primary px-2.5 py-1 rounded-full mb-3 shadow-sm">{checkup.category}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-primary/5 flex items-center justify-center">
                                        <FlaskConical size={48} className="text-primary/20" />
                                    </div>
                                )}

                                <div className="p-6 flex flex-col flex-1">
                                    {!checkup.image && (
                                        <span className="w-fit text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10 mb-3">{checkup.category}</span>
                                    )}
                                    <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors">{checkup.name}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1 line-clamp-3">{checkup.description}</p>

                                    <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                                        {checkup.tests.length > 0 ? (
                                            <p className="text-xs font-medium text-text-secondary">{checkup.tests.length} tests included</p>
                                        ) : (
                                            <div />
                                        )}
                                        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-bold group-hover:gap-2.5 group-hover:text-primary-dark transition-all">
                                            Details <ArrowRight size={16} />
                                        </span>
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
