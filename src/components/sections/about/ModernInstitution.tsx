'use client';

import { motion } from 'framer-motion';
import { Heart, GraduationCap, FlaskConical, Shield } from 'lucide-react';
import { modernInstitution } from '@/data/about';

const iconMap: Record<string, React.ElementType> = {
    Heart,
    GraduationCap,
    FlaskConical,
    Shield,
};

export default function ModernInstitution() {
    return (
        <section className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        The Institution
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-4"
                    >
                        {modernInstitution.headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-text-secondary leading-relaxed"
                    >
                        {modernInstitution.description}
                    </motion.p>
                </div>

                {/* Four pillars */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    {modernInstitution.pillars.map((pillar, i) => {
                        const Icon = iconMap[pillar.icon] || Heart;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="group bg-white rounded-2xl border border-border p-6 lg:p-7 hover:border-primary/20 hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center mb-5 transition-colors">
                                    <Icon size={22} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
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
