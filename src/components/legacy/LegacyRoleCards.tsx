'use client';

import { motion } from 'framer-motion';
import { roleCardsContent } from '@/data/prof-viswanathan';

export default function LegacyRoleCards() {
    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-12 text-center text-balance"
                >
                    {roleCardsContent.heading}
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {roleCardsContent.roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Background number */}
                            <span className="absolute -top-2 -right-2 text-7xl font-extrabold text-primary/[0.04] leading-none select-none">
                                {role.number}
                            </span>

                            <span className="text-sm font-bold text-primary-light mb-3 block">
                                {role.number}
                            </span>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">
                                {role.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                {role.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
