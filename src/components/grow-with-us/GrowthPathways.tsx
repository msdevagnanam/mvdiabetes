'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import { BookOpen, Globe2, Sparkles } from 'lucide-react';

export default function GrowthPathways() {
    const { growthPathways } = growWithUsContent;

    const getPathwayIcon = (id: string) => {
        switch (id) {
            case '01': return <BookOpen className="w-8 h-8 text-primary" />;
            case '02': return <Globe2 className="w-8 h-8 text-secondary" />;
            case '03': return <Sparkles className="w-8 h-8 text-accent" />;
            default: return <BookOpen className="w-8 h-8 text-primary" />;
        }
    };

    return (
        <section className="section-padding bg-white relative">
            <div className="container-site relative z-10">
                
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Your Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
                        {growthPathways.title}
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {growthPathways.description}
                    </p>
                </div>

                {/* Growth Journey - Horizontal on Desktop, Vertical on Mobile */}
                <div className="relative max-w-5xl mx-auto">
                    
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-border rounded-full" />
                    
                    {/* Connecting Line (Mobile) */}
                    <div className="lg:hidden absolute top-10 bottom-10 left-8 w-1 bg-border rounded-full" />

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {growthPathways.steps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className="relative flex flex-col lg:items-center lg:text-center pl-20 lg:pl-0 group"
                            >
                                {/* Mobile Step Circle */}
                                <div className="lg:hidden absolute left-0 top-0 w-16 h-16 rounded-full bg-surface border-4 border-white shadow-sm flex items-center justify-center z-10 group-hover:border-primary transition-colors duration-300">
                                    <span className="text-xl font-extrabold text-text-secondary/30">
                                        {step.id}
                                    </span>
                                </div>

                                {/* Desktop Icon/Step Area */}
                                <div className="hidden lg:flex w-20 h-20 bg-white border-4 border-surface shadow-sm rounded-2xl items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-primary/20">
                                    {getPathwayIcon(step.id)}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shadow-md">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Mobile Icon inline */}
                                <div className="lg:hidden mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {getPathwayIcon(step.id)}
                                </div>

                                <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                
                                <p className="text-text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
