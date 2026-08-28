'use client';

import { motion } from 'framer-motion';
import { Play, TrendingUp, Users, Award, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export function StatsCounter() {
    const stats = [
        { icon: Users, value: '3.5 Lakh+', label: 'Registered Patients' },
        { icon: Award, value: '4+', label: 'Locations across India' },
        { icon: TrendingUp, value: '90,000+', label: 'Amputations Prevented' },
        { icon: HeartPulse, value: '68+', label: 'Years of Excellence' },
    ];

    return (
        <section className="py-12 bg-primary-dark relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <div className="container-site relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors">
                                <stat.icon size={24} className="text-secondary" />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{stat.value}</h3>
                            <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PatientEducation() {
    const articles = [
        { id: 1, title: 'Diabetic Foot Care Guidelines', category: 'Prevention', color: 'bg-accent/10 text-accent' },
        { id: 2, title: 'Understanding Gestational Diabetes', category: 'Women\'s Health', color: 'bg-primary/10 text-primary' },
        { id: 3, title: 'Healthy Diet Planning for Type 2', category: 'Nutrition', color: 'bg-secondary/10 text-secondary' },
    ];

    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Empowering Patients</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary">Patient Education</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {articles.map((article, idx) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-xl shadow-black-[0.03] border border-border/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all group cursor-pointer"
                        >
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${article.color}`}>
                                {article.category}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                                Learn essential tips and guidelines from our experts to manage your diabetes effectively.
                            </p>
                            <span className="text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/30 group-hover:decoration-primary transition-colors">
                                Read Guide &rarr;
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function VideoTestimonials() {
    const videos = [
        { id: 1, name: 'Mr. Subramanian', issue: 'Diabetic Retinopathy Treatment' },
        { id: 2, name: 'Mrs. Lakshmi', issue: 'Advanced Foot Care Recovery' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Real Stories</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary">Hear From Our Patients</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((vid, idx) => (
                        <motion.div
                            key={vid.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg cursor-pointer bg-surface-muted"
                        >
                            {/* Placeholder Video Background */}
                            <div className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply group-hover:bg-primary/20 transition-colors z-10" />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300">
                                    <Play size={24} className="ml-1" />
                                </div>
                            </div>

                            {/* Video Info Gradient */}
                            <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-white font-bold text-lg">{vid.name}</h4>
                                    <p className="text-white/80 text-sm font-medium">{vid.issue}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Accreditations() {
    return (
        <section className="py-12 bg-white border-t border-border">
            <div className="container-site text-center">
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-8">Recognized for Clinical Excellence</p>
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for NABH, NABL seals */}
                    <div className="text-xl font-black text-primary flex items-center gap-2">
                        <Award size={28} /> NABH Accredited
                    </div>
                    <div className="text-xl font-black text-primary flex items-center gap-2">
                        <Award size={28} /> NABL Certified
                    </div>
                    <div className="text-xl font-black text-primary flex items-center gap-2">
                        <Award size={28} /> ISO 9001:2015
                    </div>
                </div>
            </div>
        </section>
    );
}
