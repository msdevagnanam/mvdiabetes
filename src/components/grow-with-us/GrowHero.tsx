'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GrowHero() {
    const { hero } = growWithUsContent;

    return (
        <section className="relative overflow-hidden bg-surface pt-32 pb-24 md:pt-40 md:pb-32">
            {/* Background elements */}
            <div className="absolute inset-0 font-sans pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="container-site relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Content */}
                    <div className="max-w-2xl">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-secondary text-xs font-bold uppercase tracking-widest">
                                {hero.eyebrow}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                            <span className="text-primary">{hero.title.split(' ')[0]}</span> <br className="hidden md:block" />
                            {hero.title.split(' ').slice(1).join(' ')}
                            <span className="text-secondary">.</span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 border-l-4 border-primary/40 pl-6">
                            {hero.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-in fade-in duration-700 delay-300">
                            <Link 
                                href="/careers" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-extrabold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                            >
                                View Career Opportunities
                                <ArrowRight size={18} />
                            </Link>
                            <a 
                                href="#explore" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-border text-text-primary font-bold hover:bg-surface-muted hover:border-text-secondary/30 transition-all"
                            >
                                Explore Growth
                                <ArrowDown size={18} className="text-text-secondary" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
                        <div className="relative z-10 aspect-video rounded-[2rem] overflow-hidden shadow-xl shadow-primary/10 border border-white/10 bg-surface-muted">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/SVwhpMWdo2s?rel=0" 
                                title="Grow With Us at MV Diabetes" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="absolute inset-0 w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
