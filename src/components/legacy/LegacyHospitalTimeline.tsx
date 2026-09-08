'use client';

import { motion } from 'framer-motion';
import { hospitalTimelineContent } from '@/data/prof-viswanathan';

export default function LegacyHospitalTimeline() {
    return (
        <section id="hospital" className="section-padding bg-surface-muted">
            <div className="container-site max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-primary-dark leading-[1.1] mb-14 text-center"
                >
                    {hospitalTimelineContent.heading}
                </motion.h2>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Central line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-primary/5 md:-translate-x-px" />

                    {hospitalTimelineContent.milestones.map((milestone, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-muted z-10 shadow-sm" />

                            {/* Content card */}
                            <div className={`ml-14 md:ml-0 md:w-[45%] ${
                                i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                            }`}>
                                <div className="bg-white border border-border rounded-2xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <span className="inline-block text-2xl lg:text-3xl font-extrabold text-primary/20 mb-2">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
