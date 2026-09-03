'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Activity, ShieldCheck, HeartPulse, ArrowUpRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "360° Diabetes Footcare",
        description: "Comprehensive footcare from prevention and wound management to custom protective footwear.",
        image: "/images/legacy/legacy-img1.png",
        icon: Activity,
    },
    {
        id: 2,
        title: "Legacy of Excellence",
        description: "Pioneering diabetes care since 1954 in India’s first dedicated diabetes hospital facility.",
        image: "/images/legacy/legacy-img2.png",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Holistic Diabetes Care",
        description: "Integrated care combining advanced medical technology and therapeutic yoga for total control.",
        image: "/images/legacy/legacy-img3.png",
        icon: HeartPulse,
    }
];

export default function LegacyFeatureCards() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-cycle through the cards every 4 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
        <section className="py-16 lg:py-24 bg-surface-muted border-b border-border relative z-10 w-full">
            <div className="container-site">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div 
                                key={feature.id}
                                onMouseEnter={() => {
                                    setActiveIndex(index);
                                    setIsAutoPlaying(false);
                                }}
                                onMouseLeave={() => {
                                    setIsAutoPlaying(true);
                                }}
                                className={`relative h-[380px] rounded-3xl overflow-hidden bg-white border border-border shadow-sm transition-all duration-700 ease-[0.25,1,0.5,1] ${
                                    isActive ? 'shadow-2xl scale-[1.02]' : 'hover:shadow-lg'
                                }`}
                            >
                                {/* Default Clean State */}
                                <div className={`absolute inset-0 p-8 lg:p-10 flex flex-col z-10 bg-white transition-opacity duration-500 ease-in-out pointer-events-none ${
                                    isActive ? 'opacity-0' : 'opacity-100 delay-75'
                                }`}>
                                    <div className="w-16 h-16 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-auto border border-primary/10">
                                        <feature.icon size={32} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary-dark mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Reveal State */}
                                <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out z-20 flex flex-col justify-end p-8 lg:p-10 ${
                                    isActive ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    {/* Image Background */}
                                    <div className="absolute inset-0 z-0 bg-primary-dark">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className={`object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] mix-blend-overlay ${
                                                isActive ? 'scale-100 opacity-40' : 'scale-110 opacity-0'
                                            }`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/60 to-transparent" />
                                    </div>

                                    {/* Reveal Content */}
                                    <div className={`relative z-10 transition-transform duration-700 ease-[0.25,1,0.5,1] flex flex-col gap-3 ${
                                        isActive ? 'translate-y-0' : 'translate-y-8'
                                    }`}>
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-2xl font-bold text-white">
                                                {feature.title}
                                            </h3>
                                            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>
                                        <p className="text-white/80 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
