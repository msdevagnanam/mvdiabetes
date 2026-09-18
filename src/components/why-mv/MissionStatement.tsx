'use client';

import { whyMVContent } from '@/data/why-mv-diabetes';

export default function MissionStatement() {
    const { mission } = whyMVContent;

    return (
        <section id="mission" className="section-padding bg-white relative">
            <div className="container-site">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-8 block">
                        Our Mission
                    </span>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-dark leading-tight relative z-10">
                        {/* Decorative quote marks */}
                        <span className="absolute -top-10 -left-6 md:-left-12 text-6xl md:text-8xl text-surface-muted -z-10 font-serif leading-none select-none">
                            "
                        </span>
                        
                        {mission.statement.replace(/[“”"]/g, '')}
                        
                        <span className="absolute -bottom-12 -right-4 md:-right-8 text-6xl md:text-8xl text-surface-muted -z-10 font-serif leading-none select-none">
                            "
                        </span>
                    </h2>
                    
                    {/* Subtle divider */}
                    <div className="mt-16 w-24 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent mx-auto rounded-full" />
                </div>
            </div>
        </section>
    );
}
