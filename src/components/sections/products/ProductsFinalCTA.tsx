'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SHOP_URL } from '@/data/products';

export default function ProductsFinalCTA() {
    return (
        <section className="section-padding bg-primary">
            <div className="container-site">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative text-center max-w-3xl mx-auto"
                >
                    {/* Accent circle decoration */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />

                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase mb-7">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Stepwise Health
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                        Take the Next Step Toward{' '}
                        <span className="text-secondary">Better Footwear</span>
                    </h2>

                    <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10">
                        Explore the Stepwise Health collection of diabetic and therapeutic footwear —
                        crafted in collaboration with MV Diabetes to support comfort, protection, and
                        daily foot health.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={SHOP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-secondary text-white text-base font-bold rounded-xl hover:bg-secondary-light hover:text-primary-dark transition-all duration-300 shadow-2xl shadow-secondary/30 w-full sm:w-auto justify-center"
                        >
                            Explore Stepwise Health Shop
                            <ExternalLink size={18} />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-4 bg-white/12 border border-white/25 text-white text-base font-semibold rounded-xl hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto justify-center"
                        >
                            Contact MV Diabetes
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Trust note */}
                    <p className="mt-8 text-white/40 text-xs">
                        Shopping takes place on Stepwise Health — MV Diabetes&apos; official therapeutic footwear partner.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
