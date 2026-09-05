'use client';

import Image from 'next/image';
import { ExternalLink, Package } from 'lucide-react';
import { type Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const card: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ProductsGrid() {
    return (
        <section id="products" className="section-padding bg-white">
            <div className="container-site">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 lg:mb-12">
                    <div>
                        <p className="text-primary-light text-sm font-bold tracking-widest uppercase mb-3">
                            Diabetic Footwear
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight">
                            Featured Diabetic Footwear
                        </h2>
                        <p className="mt-3 text-text-secondary text-base max-w-lg">
                            Therapeutic footwear designed with patented technology, available through Stepwise Health.
                        </p>
                    </div>
                    <a
                        href="https://stepwisehealth.in/shop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        View All Products
                        <ExternalLink size={15} />
                    </a>
                </div>

                {/* Product Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={card}
                            className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-400"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] bg-surface-muted overflow-hidden">
                                {/* Category badge */}
                                <div className="absolute top-3 left-3 z-10">
                                    <span
                                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${product.category === 'women'
                                            ? 'bg-pink-50 text-pink-700 border border-pink-200'
                                            : product.category === 'men'
                                                ? 'bg-primary/8 text-primary border border-primary/15'
                                                : 'bg-surface-muted text-text-secondary border border-border'
                                            }`}
                                    >
                                        {product.category === 'women'
                                            ? 'Women'
                                            : product.category === 'men'
                                                ? 'Men'
                                                : 'Unisex'}
                                    </span>
                                </div>

                                {/* Product image with fallback */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name}${product.code ? ` — ${product.code}` : ''}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            // Hide broken image, show placeholder
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    {/* Placeholder shown behind image */}
                                    <div className="flex flex-col items-center justify-center gap-2 text-border">
                                        <Package size={36} strokeWidth={1.2} />
                                        <span className="text-xs font-medium text-text-secondary">
                                            {product.code || 'Footwear'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">
                                {/* Product code badge */}
                                {product.code && (
                                    <span className="inline-flex text-xs font-mono font-semibold text-primary-light bg-primary/5 border border-primary/12 px-2 py-0.5 rounded-md mb-2.5 self-start">
                                        {product.code}
                                    </span>
                                )}

                                <h3 className="text-sm font-bold text-primary-dark leading-snug mb-3 flex-1">
                                    {product.name}
                                </h3>

                                <a
                                    href={product.shopUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300"
                                    aria-label={`View product: ${product.name}${product.code ? ` ${product.code}` : ''} on Stepwise Health`}
                                >
                                    View Product
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                    <p className="text-text-secondary text-sm mb-4">
                        Explore the full range on Stepwise Health — MV Diabetes&apos; official footwear partner.
                    </p>
                    <a
                        href="https://stepwisehealth.in/shop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300"
                    >
                        View All Products on Stepwise Health
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
