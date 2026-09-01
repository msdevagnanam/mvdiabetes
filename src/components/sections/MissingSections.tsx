'use client';

import { motion, useInView, animate } from 'framer-motion';
import { Play, TrendingUp, Users, Award, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [count, setCount] = useState(0);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: 'easeOut',
                onUpdate: (v) => setCount(v)
            });
            return () => controls.stop();
        }
    }, [inView, value]);

    const displayValue = value >= 1000
        ? Math.round(count).toLocaleString('en-IN')
        : count.toFixed(decimals);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

export function StatsCounter() {
    const stats = [
        { icon: Users, numeric: 3.5, suffix: ' Lakh+', label: 'Registered Patients', decimals: 1 },
        { icon: Award, numeric: 4, suffix: '+', label: 'Locations across India', decimals: 0 },
        { icon: TrendingUp, numeric: 90000, suffix: '+', label: 'Amputations Prevented', decimals: 0 },
        { icon: HeartPulse, numeric: 68, suffix: '+', label: 'Years of Excellence', decimals: 0 },
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
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
                                <AnimatedNumber value={stat.numeric} suffix={stat.suffix} decimals={stat.decimals} />
                            </h3>
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
            youtubeId: '_uJsoPkGa1M',
            patient: 'Mr. Subramanian',
            issue: 'Diabetic Retinopathy',
            thumbnail: 'https://img.youtube.com/vi/_uJsoPkGa1M/maxresdefault.jpg'
        },
        {
            id: 2,
            youtubeId: 'aYXfpmniT-s',
            patient: 'Mrs. Lakshmi',
            issue: 'Advanced Foot Care',
            thumbnail: 'https://img.youtube.com/vi/aYXfpmniT-s/maxresdefault.jpg'
        },
        {
            id: 3,
            youtubeId: '_uJsoPkGa1M',
            patient: 'Mrs. Geetha',
            issue: 'Gestational Diabetes Wellness',
            thumbnail: 'https://img.youtube.com/vi/_uJsoPkGa1M/hqdefault.jpg'
        },
        {
            id: 4,
            youtubeId: 'aYXfpmniT-s',
            patient: 'Mr. Ravi',
            issue: 'Type 2 Diabetes Reversal',
            thumbnail: 'https://img.youtube.com/vi/aYXfpmniT-s/maxresdefault.jpg'
        }
    ];

    const [activeVideo, setActiveVideo] = useState(videos[0]);

    return (
        <section className="py-20 lg:py-28 bg-[#fafafa] overflow-hidden">
            <div className="container-site">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-primary/10"
                        >
                            Real Stories
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight tracking-tight mb-4"
                        >
                            Hear From Our Patients
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-text-secondary text-base lg:text-lg leading-relaxed"
                        >
                            Discover how personalized diabetes care and advanced treatments at MV Diabetes have transformed lives.
                        </motion.p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Featured Video Player */}
                    <motion.div
                        key={activeVideo.id} // Re-animate on change
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-2/3 bg-white border border-border shadow-2xl shadow-black/5 rounded-[2rem] overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full bg-black aspect-[16/9]">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&mute=0&rel=0&modestbranding=1`}
                                title={`Patient Story: ${activeVideo.patient}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full border-0"
                            ></iframe>
                        </div>
                        <div className="p-6 sm:p-8 bg-white">
                            <h3 className="text-2xl font-extrabold text-primary-dark mb-2">{activeVideo.patient}</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-muted rounded-md border border-border/50 text-sm font-semibold text-text-secondary">
                                <HeartPulse size={16} className="text-primary" />
                                {activeVideo.issue}
                            </div>
                        </div>
                    </motion.div>

                    {/* Playlist Queue */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        <h4 className="font-bold text-text-primary text-lg px-2 hidden lg:block mb-2">More Testimonials</h4>

                        <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                            {videos.map((vid) => {
                                const isActive = activeVideo.id === vid.id;
                                return (
                                    <button
                                        key={vid.id}
                                        onClick={() => setActiveVideo(vid)}
                                        className={`group flex items-center gap-4 p-3 pr-5 rounded-2xl transition-all duration-300 text-left min-w-[280px] lg:min-w-0 shrink-0
                                            ${isActive
                                                ? 'bg-white border-primary shadow-lg shadow-primary/10'
                                                : 'bg-surface-muted/50 border-transparent hover:bg-white hover:border-border hover:shadow-md'
                                            }`}
                                        style={{ borderWidth: '1px' }}
                                    >
                                        <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-black/5">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={vid.thumbnail}
                                                alt={vid.patient}
                                                className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}
                                            />
                                            <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary/20' : 'bg-black/30 group-hover:bg-primary/20'}`}>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm transition-all duration-300 ${isActive ? 'bg-primary text-white scale-110' : 'bg-white/90 text-primary'}`}>
                                                    <Play size={14} className="ml-0.5" fill="currentColor" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h4 className={`text-sm sm:text-base font-bold mb-1 line-clamp-1 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary-dark group-hover:text-primary'}`}>
                                                {vid.patient}
                                            </h4>
                                            <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                                                {vid.issue}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

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

import { insurancePartners, insuranceContent } from '@/data/insurance';

export function TPAPartnerships() {
    // Duplicate the array multiple times to create a seamless infinite scrolling effect for 4 images
    const marqueePartners = [...insurancePartners, ...insurancePartners, ...insurancePartners, ...insurancePartners, ...insurancePartners];

    return (
        <section className="py-20 lg:py-24 bg-white border-y border-border overflow-hidden">
            <div className="container-site mb-12">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-sm font-bold text-accent uppercase tracking-wider mb-3">
                        {insuranceContent.eyebrow}
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary mb-5">
                        {insuranceContent.headline}
                    </h2>
                    <p className="text-text-secondary md:text-lg">
                        {insuranceContent.description}
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full">
                {/* Left/Right fading gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap gap-6"
                    initial={{ x: '0%' }}
                    animate={{ x: '-50%' }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 35, // Adjust duration to control speed
                    }}
                >
                    {marqueePartners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white border border-border/60 hover:border-primary/30 transition-colors 
                                       px-8 py-5 rounded-3xl flex items-center justify-center shadow-sm hover:shadow-lg min-w-[280px]"
                        >
                            <Image
                                src={partner.image}
                                alt={`TP Partner ${index}`}
                                width={180}
                                height={60}
                                className="object-contain h-12 w-auto mix-blend-multiply"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
