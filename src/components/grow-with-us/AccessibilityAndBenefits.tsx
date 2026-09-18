'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import { MapPin, Building, Banknote, ShieldPlus, Coffee, Gift } from 'lucide-react';

export default function AccessibilityAndBenefits() {
    const { accessibility, benefits } = growWithUsContent;

    const getBenefitIcon = (id: string) => {
        switch (id) {
            case 'financial': return <Banknote className="w-6 h-6 text-primary" />;
            case 'health': return <ShieldPlus className="w-6 h-6 text-secondary" />;
            case 'workplace': return <Coffee className="w-6 h-6 text-accent" />;
            case 'additional': return <Gift className="w-6 h-6 text-[#73BC82]" />;
            default: return <Banknote className="w-6 h-6 text-primary" />;
        }
    };

    return (
        <section className="section-padding bg-surface-muted border-y border-border relative">
            <div className="container-site">
                
                {/* 1. Accessibility / Locations */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-border mb-16 md:mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                Our Reach
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-6">
                                {accessibility.title}
                            </h2>
                            <p className="text-lg font-bold text-primary mb-6">
                                {accessibility.description}
                            </p>
                            
                            <div className="space-y-6 mb-8">
                                {accessibility.branches.map((branch, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-primary mb-1">{branch.title}</h4>
                                            <p className="text-text-secondary">{branch.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-surface p-6 rounded-2xl border border-border flex items-start gap-4">
                                <Building className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <p className="text-sm font-medium text-text-secondary leading-relaxed">
                                    {accessibility.footer}
                                </p>
                            </div>
                        </div>

                        {/* Visual Map Concept */}
                        <div className="relative h-full min-h-[300px] bg-surface rounded-[1.5rem] border border-border overflow-hidden flex items-center justify-center p-8">
                            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                            
                            <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-primary-dark/5 to-secondary/5 rounded-full border border-primary/10 flex items-center justify-center">
                                {/* Royapuram Main */}
                                <div className="absolute top-[20%] right-[30%] group">
                                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(3,65,127,0.4)] animate-pulse" />
                                    <div className="absolute top-6 -translate-x-1/2 left-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-border text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Royapuram (Main)
                                    </div>
                                </div>
                                {/* Adyar Branch */}
                                <div className="absolute bottom-[30%] right-[40%] group">
                                    <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(3,185,213,0.4)]" />
                                    <div className="absolute top-5 -translate-x-1/2 left-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-border text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Adyar
                                    </div>
                                </div>
                                {/* Bengaluru Branch */}
                                <div className="absolute bottom-[20%] left-[20%] group">
                                    <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(3,185,213,0.4)]" />
                                    <div className="absolute top-5 -translate-x-1/2 left-1/2 bg-white px-3 py-1.5 rounded-lg shadow-md border border-border text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Bengaluru (Koramangala)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Employee Benefits */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
                        {benefits.title}
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {benefits.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.groups.map((group, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center">
                                    {getBenefitIcon(group.groupId)}
                                </div>
                                <h3 className="font-bold text-text-primary leading-tight">
                                    {group.groupTitle}
                                </h3>
                            </div>
                            
                            <ul className="space-y-4 flex-grow">
                                {group.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                                        <span className="text-sm font-medium text-text-secondary leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
