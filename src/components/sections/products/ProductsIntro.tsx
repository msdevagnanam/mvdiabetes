'use client';

import { motion, type Variants } from 'framer-motion';
import { Award, FlaskConical, Heart, Footprints } from 'lucide-react';

const features = [
    {
        number: '01',
        icon: Award,
        title: 'Patented Design',
        description:
            'Developed using patented technology that addresses the unique foot care needs of people living with diabetes.',
    },
    {
        number: '02',
        icon: FlaskConical,
        title: 'Clinically Tested',
        description:
            'Crafted based on extensive clinical testing to ensure each pair meets the highest therapeutic standards.',
    },
    {
        number: '03',
        icon: Heart,
        title: 'Comfort & Support',
        description:
            'Designed for optimal comfort and support throughout daily movement — reducing pressure on vulnerable areas of the foot.',
    },
    {
        number: '04',
        icon: Footprints,
        title: 'Foot Health',
        description:
            'Created with foot health as the primary focus — helping protect against complications associated with diabetic neuropathy.',
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function ProductsIntro() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                {/* Heading */}
                <div className="max-w-2xl mb-14 lg:mb-16">
                    <p className="text-primary-light text-sm font-bold tracking-widest uppercase mb-4">
                        Our Therapeutic Footwear
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-dark leading-[1.1] tracking-tight">
                        More Than Footwear.{' '}
                        <span className="block">Designed Around Foot Health.</span>
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
                        MV Diabetes therapeutic footwear goes beyond ordinary shoes. Every pair is built on a
                        foundation of clinical insight and patented engineering — putting foot health first.
                    </p>
                </div>

                {/* Features grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
                >
                    {features.map((feat) => (
                        <motion.div
                            key={feat.number}
                            variants={item}
                            className="group relative flex flex-col gap-5 p-6 lg:p-7 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Number + Icon */}
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <feat.icon size={22} strokeWidth={1.8} />
                                </div>
                                <span className="text-4xl font-black text-border/80 select-none">
                                    {feat.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-primary-dark mb-2">{feat.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{feat.description}</p>
                            </div>

                            {/* Hover accent bar */}
                            <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-primary-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
