'use client';

import { motion } from 'framer-motion';
import { Award, FlaskConical, Heart, Building } from 'lucide-react';

const items = [
    { icon: Award, label: 'Diabetes Super Specialty', description: 'Since 1954' },
    { icon: FlaskConical, label: 'Research Centre', description: '60+ Years' },
    { icon: Heart, label: 'Multidisciplinary Care', description: 'Holistic Approach' },
    { icon: Building, label: 'Multiple Locations', description: 'Chennai & Bengaluru' },
];

export default function TrustStrip() {
    return (
        <section className="bg-white border-b border-border">
            <div className="container-site py-8 lg:py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center gap-3 lg:gap-4"
                        >
                            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                                <item.icon size={20} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-text-primary leading-tight">{item.label}</div>
                                <div className="text-xs text-text-secondary mt-0.5">{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
