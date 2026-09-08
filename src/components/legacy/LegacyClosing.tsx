'use client';

import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Heart, Landmark } from 'lucide-react';
import { closingContent } from '@/data/prof-viswanathan';

const iconMap = [Eye, ShieldAlert, Heart, Landmark];

export default function LegacyClosing() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-tl-full -z-10 blur-3xl" />

            <div className="container-site max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-12 text-center"
                >
                    {closingContent.heading}
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {closingContent.values.map((value, i) => {
                        const Icon = iconMap[i] || Eye;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-primary mb-5">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-primary-dark mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed px-2">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final profound statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-primary-light leading-tight">
                        {closingContent.finalStatement}
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
