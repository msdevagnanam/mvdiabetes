'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blogs';
import { newsEvents } from '@/data/events';

function TestimonialSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const shift = window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 380 : 420;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -shift : shift, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                if (scrollRef.current.scrollLeft >= maxScrollLeft - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="section-padding bg-primary-dark overflow-hidden">
            <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3"
                        >
                            Patient Stories
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-white leading-tight"
                        >
                            Trusted by Thousands
                        </motion.h2>
                    </div>
                    {/* Carousel Navigation */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-sm"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-sm"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-5 lg:gap-6 hide-scrollbar pb-8 pt-2"
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.1 }}
                                className="snap-start shrink-0 w-[85vw] sm:w-[320px] lg:w-[380px] bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-7 backdrop-blur-sm flex flex-col"
                            >
                                <Quote size={24} className="text-secondary/60 mb-4" />
                                <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-6">{t.content}</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <span className="text-white text-xs font-bold">{t.name[0]}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">{t.name}</div>
                                            <div className="flex items-center gap-[2px] mt-1">
                                                {[...Array(5)].map((_, idx) => (
                                                    <svg key={idx} className="w-3.5 h-3.5 text-secondary fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function BlogPreview() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            Insights
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Blogs & Articles
                        </motion.h2>
                    </div>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                        Explore more <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {blogPosts.slice(0, 3).map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-surface-muted to-border mb-4 overflow-hidden relative">
                                    <Image
                                        src={`/images/blogs/blog-img${i + 1}.png`}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </div>
                                <span className="text-xs font-medium text-primary">{post.category}</span>
                                <h3 className="text-base font-bold text-text-primary mt-1.5 mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">{post.excerpt}</p>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function NewsEventsPreview() {
    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                        >
                            News & Events
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                        >
                            Latest Updates
                        </motion.h2>
                    </div>
                    <Link href="/news" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                        More events <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {newsEvents.slice(0, 4).map((event, i) => (
                        <motion.article
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            className="group"
                        >
                            <Link href={`/news/${event.slug}`} className="block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className="aspect-[16/10] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                                    <Image
                                        src={`/images/new-and-events/nande-img${i + 1}.png`}
                                        alt={event.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </div>
                                <div className="p-4 lg:p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[0.65rem] font-medium text-primary bg-primary/5 px-2 py-0.5 rounded-full">{event.category}</span>
                                        <span className="text-[0.65rem] text-text-secondary">{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                        {event.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BranchSection() {
    const branchData = [
        { name: 'Royapuram (Main)', city: 'Chennai', address: 'No.4, West Madha Church St' },
        { name: 'Adyar', city: 'Chennai', address: 'Gandhi Nagar, Adyar' },
        { name: 'Koramangala', city: 'Bengaluru', address: '80 Feet Road, 4th Block' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        Our Locations
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight"
                    >
                        Your Gateway to Quality Healthcare
                    </motion.h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
                    {branchData.map((branch, i) => (
                        <motion.div
                            key={branch.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <Link
                                href="/about/branches"
                                className="block bg-surface-muted rounded-2xl p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-white/10 flex items-center justify-center mb-4 transition-colors">
                                    <MapPin size={18} className="text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-base font-bold text-text-primary group-hover:text-white mb-1 transition-colors">
                                    {branch.name}
                                </h3>
                                <p className="text-sm text-text-secondary group-hover:text-white/70 mb-1 transition-colors">{branch.city}</p>
                                <p className="text-xs text-text-secondary/70 group-hover:text-white/50 transition-colors">{branch.address}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AppointmentCTASection() {
    return (
        <section className="bg-gradient-to-r from-primary to-primary-light">
            <div className="container-site py-14 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                            Ready to Take Control of Your Health?
                        </h2>
                        <p className="text-white/70 max-w-lg">
                            Book an appointment with our specialists today. We&apos;re here to help you on your diabetes care journey.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/appointment"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-black/10"
                        >
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                        <a
                            href="tel:+919380814247"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { TestimonialSlider, BlogPreview, NewsEventsPreview, BranchSection, AppointmentCTASection };
