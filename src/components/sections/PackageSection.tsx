'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Tag } from 'lucide-react';
import { packages } from '@/data/packages';

const locations = ['Royapuram', 'Adyar', 'BDC'] as const;
const locationLabels: Record<string, string> = {
    Royapuram: 'Royapuram (Main)',
    Adyar: 'Adyar',
    BDC: 'BDC (Koramangala)',
};

function formatPrice(price: number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

export default function PackageSection() {
    const [activeLocation, setActiveLocation] = useState<string>('Royapuram');
    const filteredPackages = packages.filter((p) => p.location === activeLocation);

    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div className="max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Health Packages
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Our Popular Packages
                        </motion.h2>
                    </div>
                    <Link href="/packages" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                        View all packages <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Location Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {locations.map((loc) => (
                        <button
                            key={loc}
                            onClick={() => setActiveLocation(loc)}
                            className={`
                flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${activeLocation === loc
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white text-text-secondary border border-border hover:border-primary/30 hover:text-primary'
                                }
              `}
                        >
                            <MapPin size={14} />
                            {locationLabels[loc]}
                        </button>
                    ))}
                </div>

                {/* Package Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredPackages.slice(0, 6).map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full">{pkg.category}</span>
                                    {pkg.discount > 0 && (
                                        <span className="flex items-center gap-1 text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                                            <Tag size={11} />
                                            {pkg.discount}% off
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-base font-bold text-text-primary mb-4 group-hover:text-primary transition-colors leading-snug">
                                    {pkg.name}
                                </h3>
                                <div className="flex items-baseline gap-2 mb-5">
                                    <span className="text-2xl font-extrabold text-text-primary">{formatPrice(pkg.price)}</span>
                                    {pkg.discount > 0 && (
                                        <span className="text-sm text-text-secondary line-through">{formatPrice(pkg.originalPrice)}</span>
                                    )}
                                </div>
                                <Link
                                    href="/appointment"
                                    className="block w-full text-center py-2.5 bg-primary/5 text-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors"
                                >
                                    Book Package
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
