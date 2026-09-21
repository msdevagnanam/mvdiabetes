'use client';

import { whyMVContent } from '@/data/why-mv-diabetes';
import { Heart, Users, CheckCircle, Lightbulb, UserPlus, ArrowRight } from 'lucide-react';

export default function CoreValues() {
    const { values } = whyMVContent;

    // Map icons and colors to specific values
    const valueStyles = [
        { icon: <Heart className="w-8 h-8" />, color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' }, // Patient-Centered Care
        { icon: <Users className="w-8 h-8" />, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' }, // Respect & Compassion
        { icon: <CheckCircle className="w-8 h-8" />, color: 'text-[#73BC82]', bg: 'bg-[#73BC82]/10', border: 'border-[#73BC82]/20' }, // Quality
        { icon: <Lightbulb className="w-8 h-8" />, color: 'text-[#03B9D5]', bg: 'bg-[#03B9D5]/10', border: 'border-[#03B9D5]/20' }, // Innovation
        { icon: <UserPlus className="w-8 h-8" />, color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' }, // Staff
    ];

    const featuredValue = values.items[0];
    const gridValues = values.items.slice(1);

    return (
        <section id="values" className="section-padding bg-white relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container-site relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Our Principles
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
                        {values.title}
                    </h2>
                    <p className="mt-4 text-text-secondary text-lg">
                        The principles behind every interaction, ensuring the highest standards of care.
                    </p>
                </div>

                {/* Values Layout: Featured + Grid */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-24">
                    
                    {/* Featured Value: Patient-Centered Care */}
                    <div className="lg:w-5/12 bg-primary text-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col justify-between group">
                        {/* Decorative background pattern */}
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <span className="text-5xl font-extrabold text-white/10 tracking-tighter">
                                    {featuredValue.number}
                                </span>
                            </div>
                            
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                                {featuredValue.title}
                            </h3>
                            
                            <p className="text-white/80 text-lg leading-relaxed">
                                {featuredValue.description}
                            </p>
                        </div>
                        
                        <div className="relative z-10 mt-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* Remaining Values Grid */}
                    <div className="lg:w-7/12 grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {gridValues.map((value, idx) => {
                            const style = valueStyles[idx + 1];
                            return (
                                <div 
                                    key={idx}
                                    className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                                >
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${style.bg} ${style.color} ${style.border}`}>
                                            {style.icon}
                                        </div>
                                        <span className="text-3xl font-extrabold text-text-secondary/10 tracking-tighter">
                                            {value.number}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-text-primary mb-4 relative z-10 group-hover:text-primary transition-colors">
                                        {value.title}
                                    </h4>
                                    
                                    <p className="text-text-secondary text-sm leading-relaxed flex-grow relative z-10">
                                        {value.description}
                                    </p>
                                    
                                    {/* Hover gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-surface-muted/0 to-surface-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* What This Means For You - Editorial Translation Section */}
                <div className="bg-surface-muted rounded-[2rem] p-8 md:p-12 border border-border">
                    <h3 className="text-2xl font-extrabold text-text-primary mb-10 text-center">
                        What This Means For You
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border">
                        {values.translation.map((item, idx) => (
                            <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''}`}>
                                <h4 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                                    {item.keyword}
                                </h4>
                                <p className="text-text-secondary text-sm font-medium leading-relaxed">
                                    {item.statement}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
