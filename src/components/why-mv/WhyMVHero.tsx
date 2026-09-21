'use client';

import LegacyImagePlaceholder from '@/components/ui/LegacyImagePlaceholder';
import { whyMVContent } from '@/data/why-mv-diabetes';
import { ArrowDown } from 'lucide-react';

export default function WhyMVHero() {
    const { hero } = whyMVContent;

    return (
        <section className="relative overflow-hidden bg-surface pt-32 pb-24 md:pt-40 md:pb-32">
            {/* Background elements */}
            <div className="absolute inset-0 font-sans pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="container-site relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">
                                {hero.eyebrow}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-primary leading-[1.1] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            More Than <span className="text-primary">Diabetes Care.</span><br />
                            A Legacy Built <br className="hidden md:block" />
                            <span className="relative inline-block">
                                Around You.
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 border-l-4 border-secondary/40 pl-6">
                            {hero.supportingText}
                        </p>

                        {/* CTA / Scroll Indicator */}
                        <div className="flex items-center gap-4 animate-in fade-in duration-700 delay-300">
                            <a 
                                href="#mission" 
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-muted border border-border text-text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                                aria-label="Scroll down to mission"
                            >
                                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <span className="text-sm font-semibold text-text-secondary uppercase tracking-widest">
                                Discover Our Story
                            </span>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
                        {/* Decorative background framing */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[40px] transform rotate-3 scale-105 pointer-events-none" />
                        
                        {/* Placeholder for Institutional Image */}
                        <div className="relative z-10">
                            <LegacyImagePlaceholder 
                                title="MV Diabetes"
                                subtitle="Institutional Excellence"
                                aspectRatio="auto"
                                className="aspect-[4/5] rounded-[32px]"
                            />
                        </div>
                        
                        {/* Floating trust badge */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white p-5 rounded-2xl shadow-xl shadow-black/5 border border-border flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Established</p>
                                <p className="text-xl font-extrabold text-primary leading-none">1954</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
