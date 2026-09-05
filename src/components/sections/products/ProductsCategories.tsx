'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WOMEN_CATEGORY_URL, MEN_CATEGORY_URL } from '@/data/products';

const categories = [
    {
        id: 'women',
        label: 'For Women',
        title: 'Elegant Diabetic Footwear',
        subtitle: 'for Women',
        description:
            'Thoughtfully designed to protect and support the feet of women living with diabetes — combining therapeutic construction with refined style.',
        cta: 'Shop Women\'s Footwear',
        url: WOMEN_CATEGORY_URL,
        image: '/images/products/women-category.jpg',
        accent: 'from-primary-dark/90 via-primary-dark/60 to-transparent',
        tag: 'Women\'s Collection',
    },
    {
        id: 'men',
        label: 'For Men',
        title: 'Stylish Diabetic Shoes',
        subtitle: 'for Men',
        description:
            'Built for the demands of daily life — men\'s diabetic footwear combining structured support, therapeutic cushioning, and everyday style.',
        cta: 'Shop Men\'s Footwear',
        url: MEN_CATEGORY_URL,
        image: '/images/products/men-category.jpg',
        accent: 'from-primary-dark/90 via-primary-dark/60 to-transparent',
        tag: 'Men\'s Collection',
    },
];

export default function ProductsCategories() {
    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                {/* Heading */}
                <div className="text-center max-w-xl mx-auto mb-12 lg:mb-14">
                    <p className="text-primary-light text-sm font-bold tracking-widest uppercase mb-3">
                        Shop by Category
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                        Find the Right Fit for You
                    </h2>
                </div>

                {/* Category Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                            className="group relative overflow-hidden rounded-2xl min-h-[420px] lg:min-h-[500px] cursor-pointer"
                        >
                            {/* Background image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.title + ' ' + cat.subtitle}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
                                />
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${cat.accent}`} />
                                <div className="absolute inset-0 bg-primary-dark/40" />
                            </div>

                            {/* Tag */}
                            <div className="absolute top-5 left-5 z-10">
                                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold tracking-wider">
                                    {cat.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 lg:p-9">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1">
                                        {cat.title}
                                        <br />
                                        <span className="text-secondary">{cat.subtitle}</span>
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed mt-3 mb-5 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                        {cat.description}
                                    </p>
                                    <a
                                        href={cat.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-primary-dark transition-all duration-300 shadow-lg"
                                        aria-label={cat.cta}
                                    >
                                        {cat.cta}
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
