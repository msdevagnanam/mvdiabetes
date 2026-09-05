'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SHOP_URL } from '@/data/products';

export default function ProductsEditorial() {
    return (
        <section className="section-padding bg-primary-dark relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '48px 48px',
                    }}
                />
            </div>

            {/* Accent lines */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-transparent via-primary-light/40 to-transparent" />

            <div className="container-site relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary-light text-xs font-bold tracking-widest uppercase mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                        Stepwise Health Partnership
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
                    >
                        Every Step{' '}
                        <span className="text-secondary">Matters.</span>
                    </motion.h2>

                    {/* Body copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
                    >
                        <p>
                            Walking is one of the most effective ways to support a healthy lifestyle — but for
                            people living with diabetes, every step carries additional importance. Footwear that
                            fits poorly or provides inadequate support can lead to preventable complications.
                        </p>
                        <p>
                            MV Diabetes has partnered with Stepwise Health to bring clinically informed, comfortable,
                            and therapeutic footwear directly to patients. Designed to support safe walking and
                            consistent movement, each pair is built around the unique needs of diabetic feet.
                        </p>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-10 mb-12"
                    >
                        {[
                            { stat: '60+', label: 'Years of Diabetes Care' },
                            { stat: '90K+', label: 'Limbs Saved from Amputation' },
                            { stat: '100%', label: 'Focused on Foot Health' },
                        ].map((item) => (
                            <div key={item.label} className="text-center">
                                <div className="text-3xl font-black text-secondary">{item.stat}</div>
                                <div className="text-xs text-white/50 mt-1 font-medium tracking-wide">{item.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href={SHOP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-secondary text-white text-base font-semibold rounded-xl hover:bg-secondary-light hover:text-primary-dark transition-all duration-300 shadow-xl shadow-secondary/20"
                        >
                            Shop Now on Stepwise Health
                            <ArrowRight size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
