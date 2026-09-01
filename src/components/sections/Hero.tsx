'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        eyebrow: "India's First Exclusive Diabetes Hospital",
        headline: (
            <>
                Diabetes Care.<br />
                <span className="text-secondary">Reimagined</span> Around You.
            </>
        ),
        description: "With personalized treatments and a holistic approach, we're dedicated to empowering your health at India's leading diabetes super specialty institution.",
        imagePrimary: '/images/hero/mv-hero-img1.png',
        primaryCta: { text: "Book an Appointment", link: "/appointment" },
        secondaryCta: { text: "Explore Diabetes Care", link: "/care" },
        theme: "primary"
    },
    {
        id: 2,
        eyebrow: "Over 90,000+ Limbs Saved from Amputation",
        headline: (
            <>
                Expert Foot Care.<br />
                <span className="text-secondary">Focused</span> on Saving Limbs.
            </>
        ),
        description: "Specialized in advanced diabetic foot care and complex limb salvage. Our expert podiatry and surgical team puts your mobility first.",
        imagePrimary: '/images/hero/mv-hero-img2.png',
        primaryCta: { text: "Explore Foot Care", link: "/care/podiatry" },
        secondaryCta: { text: "Book an Appointment", link: "/appointment" },
        theme: "dark"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 6000); // 6 seconds per slide

        return () => clearInterval(interval);
    }, [currentSlide, isHovered]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section
            className="relative w-full h-[600px] lg:h-[700px] bg-primary-dark overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1, zIndex: 10 }}
                    exit={{ opacity: 0, scale: 0.95, zIndex: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[currentSlide].imagePrimary}
                            alt="Background"
                            fill
                            priority
                            className="object-cover object-center opacity-60 mix-blend-overlay"
                        />
                        {/* Gradients for readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="container-site h-full relative z-20 flex items-center pt-24 lg:pt-32 pb-16">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs sm:text-sm font-semibold tracking-wide mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                {slides[currentSlide].eyebrow}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
                            >
                                {slides[currentSlide].headline}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-10"
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link
                                    href={slides[currentSlide].primaryCta.link}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white hover:text-secondary transition-all duration-300 shadow-xl shadow-secondary/20"
                                >
                                    {slides[currentSlide].primaryCta.text}
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href={slides[currentSlide].secondaryCta.link}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md text-white text-sm sm:text-base font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
                                >
                                    {slides[currentSlide].secondaryCta.text}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute right-4 bottom-8 lg:right-10 lg:bottom-12 z-30 flex items-center gap-4">
                {/* Dots indicator */}
                <div className="hidden lg:flex items-center gap-2 mr-4">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`transition-all duration-300 rounded-full ${i === currentSlide
                                    ? 'w-8 h-2 bg-secondary'
                                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex lg:hidden items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`transition-all duration-300 rounded-full ${i === currentSlide
                                ? 'w-6 h-1.5 bg-secondary'
                                : 'w-1.5 h-1.5 bg-white/30'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
