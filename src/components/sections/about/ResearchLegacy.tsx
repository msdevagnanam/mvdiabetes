'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { researchLegacy } from '@/data/leadership';
import { FlaskConical, Globe, BookOpen } from 'lucide-react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 1500;
        const start = performance.now();
        function animate(time: number) {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function ResearchLegacy() {
    return (
        <section id="research" className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        {researchLegacy.eyebrow}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                    >
                        {researchLegacy.headline}
                    </motion.h2>
                </div>

                {/* Stats row */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto mb-14">
                    {researchLegacy.stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-border p-8 text-center"
                        >
                            <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                                <CountUp target={parseInt(stat.value)} suffix="+" />
                            </div>
                            <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Collaborations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl border border-border p-8 lg:p-10 mb-10"
                >
                    <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                        <Globe size={20} className="text-primary" />
                        National & International Collaboration
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {researchLegacy.collaborations.map((collab, i) => (
                            <div
                                key={collab}
                                className="flex items-center gap-3 px-4 py-3 bg-surface-muted rounded-xl"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                <span className="text-sm text-text-secondary font-medium">{collab}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Prevention Research */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 lg:p-10 text-white"
                >
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        {researchLegacy.preventionResearch.eyebrow}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-extrabold mb-4 text-white">
                        {researchLegacy.preventionResearch.headline}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-[0.95rem] max-w-3xl">
                        {researchLegacy.preventionResearch.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {researchLegacy.pillars.map((pillar) => {
                            const iconMap: Record<string, React.ReactNode> = {
                                'Diabetes Research': <FlaskConical size={14} />,
                                'Prevention Research': <BookOpen size={14} />,
                                'Education & Training': <Globe size={14} />,
                            };
                            return (
                                <span
                                    key={pillar}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-lg text-sm font-medium text-white"
                                >
                                    {iconMap[pillar]}
                                    {pillar}
                                </span>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
