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
                            className="bg-white rounded-2xl p-6 shadow-xl shadow-black/[0.03] border border-border/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all group cursor-pointer"
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
        {
            id: 1,
            name: 'Mr. Subramanian',
            issue: 'Diabetic Retinopathy Treatment',
            embedUrl: 'https://www.youtube.com/embed/_uJsoPkGa1M?si=yaPT7b9Tuqf1XrPP'
        },
        {
            id: 2,
            name: 'Mrs. Lakshmi',
            issue: 'Advanced Foot Care Recovery',
            embedUrl: 'https://www.youtube.com/embed/aYXfpmniT-s?si=lqWuY0IUowI2OxQM'
        },
    ];

    return (
        <section className="section-padding bg-surface-muted/30">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-bold text-secondary uppercase tracking-widest mb-3"
                    >
                        Real Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-text-primary"
                    >
                        Hear From Our Patients
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {videos.map((vid, idx) => (
                        <motion.div
                            key={vid.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-black-[0.04] border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
                        >
                            <div className="aspect-[16/9] relative z-20">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={vid.embedUrl}
                                    title={`Patient Story: ${vid.name}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>

                            <div className="p-6 bg-white relative z-10 border-t border-border/30 group-hover:bg-primary/[0.02] transition-colors">
                                <h4 className="text-text-primary font-extrabold text-xl mb-1">{vid.name}</h4>
                                <p className="text-text-secondary text-sm font-medium">{vid.issue}</p>
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

export function AwardsAndAchievements() {
    const awards = [
        {
            image: '/images/Recognized/recognized-img1.png',
            title: 'Best Doctor Award',
            subtitle: 'Conferred by Tamil Nadu MGR Medical University',
        },
        {
            image: '/images/Recognized/recognized-img2.png',
            title: 'Certificate of Recognition',
            subtitle: 'The Times of India — Excellence in Diabetology & Foot Care',
        },
        {
            image: '/images/Recognized/recognized-img3.png',
            title: 'MV Hospital for Diabetes',
            subtitle: 'Diabetes & Research Centre — National Recognition',
        },
    ];

    return (
        <section className="py-16 lg:py-24 relative overflow-hidden bg-primary-dark">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

            <div className="container-site relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-secondary text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6 border border-white/10"
                    >
                        <Award size={14} /> Our Legacy
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
                    >
                        Awards &amp; Achievements
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/60 text-sm lg:text-base leading-relaxed max-w-2xl mx-auto"
                    >
                        Celebrating decades of excellence in diabetes care, groundbreaking research, and transformative contributions to global healthcare.
                    </motion.p>
                </div>

                {/* Awards Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={award.image}
                                    alt={award.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Caption */}
                            <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h4 className="text-white font-bold text-base lg:text-lg leading-snug mb-1">{award.title}</h4>
                                <p className="text-white/70 text-xs lg:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{award.subtitle}</p>
                            </div>

                            {/* Decorative border glow on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-secondary/40 transition-colors duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
