'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { insurancePartners, insuranceContent } from '@/data/insurance';

export default function InsurancePartners() {
    return (
        <section id="partnerships" className="section-padding bg-white overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        {insuranceContent.eyebrow}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-4"
                    >
                        {insuranceContent.headline}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-text-secondary leading-relaxed"
                    >
                        {insuranceContent.description}
                    </motion.p>
                </div>

                {/* Partner Marquee */}
                <div className="relative flex overflow-hidden w-full py-4 group fade-edges">
                    <style>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-100%); }
                        }
                        .animate-scroll {
                            animation: scroll 40s linear infinite;
                        }
                        .group:hover .animate-scroll {
                            animation-play-state: paused;
                        }
                        .fade-edges {
                            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                        }
                    `}</style>

                    {/* First Track */}
                    <div className="flex shrink-0 gap-6 items-center animate-scroll pr-6">
                        {insurancePartners.map((partner, i) => (
                            <div
                                key={`set1-${i}`}
                                className="group bg-surface-muted rounded-2xl border border-border p-5 flex items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all h-[100px] sm:h-[110px] lg:h-[120px] min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]"
                            >
                                <img
                                    src={partner.image}
                                    alt={`Insurance Partner ${i + 1}`}
                                    className="w-[85%] h-[85%] object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Track (Seamless loop) */}
                    <div className="flex shrink-0 gap-6 items-center animate-scroll pr-6" aria-hidden="true">
                        {insurancePartners.map((partner, i) => (
                            <div
                                key={`set2-${i}`}
                                className="group bg-surface-muted rounded-2xl border border-border p-5 flex items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all h-[100px] sm:h-[110px] lg:h-[120px] min-w-[180px] sm:min-w-[200px] lg:min-w-[220px]"
                            >
                                <img
                                    src={partner.image}
                                    alt={`Insurance Partner ${i + 1}`}
                                    className="w-[85%] h-[85%] object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
