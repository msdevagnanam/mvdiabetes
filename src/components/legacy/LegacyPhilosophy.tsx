'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Shield, Clock, HeartHandshake } from 'lucide-react';
import { philosophyContent } from '@/data/prof-viswanathan';

const iconMap: Record<string, React.ElementType> = {
    Users,
    Heart,
    Shield,
    Clock,
    UserHeart: HeartHandshake,
};

export default function LegacyPhilosophy() {
    return (
        <section id="philosophy" className="section-padding bg-white">
            <div className="container-site max-w-6xl mx-auto">
                <div className="max-w-3xl mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-4"
                    >
                        {philosophyContent.heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-text-secondary text-lg leading-relaxed"
                    >
                        {philosophyContent.description}
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {philosophyContent.pillars.map((pillar, i) => {
                        const Icon = iconMap[pillar.icon] || Heart;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className={`group bg-surface-muted border border-border rounded-2xl p-6 lg:p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                                    i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                                }`}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-primary-dark mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
