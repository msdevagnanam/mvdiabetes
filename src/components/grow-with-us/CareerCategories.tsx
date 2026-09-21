'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import { Stethoscope, HeartPulse, Building2, Crosshair, Microscope, Wrench, Monitor } from 'lucide-react';

export default function CareerCategories() {
    const { careerCategories } = growWithUsContent;

    // Map specific icons to the career categories
    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'clinical': return <Stethoscope className="w-8 h-8 text-primary" />;
            case 'patient-care': return <HeartPulse className="w-8 h-8 text-secondary" />;
            case 'administration': return <Building2 className="w-8 h-8 text-accent" />;
            case 'paramedical': return <Crosshair className="w-8 h-8 text-[#73BC82]" />;
            case 'research': return <Microscope className="w-8 h-8 text-[#03B9D5]" />;
            case 'facility': return <Wrench className="w-8 h-8 text-[#EEC642]" />;
            case 'it': return <Monitor className="w-8 h-8 text-primary-dark" />;
            default: return <Stethoscope className="w-8 h-8 text-primary" />;
        }
    };

    return (
        <section className="section-padding bg-surface border-t border-border relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container-site relative z-10">
                
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        Join Our Team
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
                        {careerCategories.title}
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {careerCategories.description}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {careerCategories.categories.map((category, idx) => (
                        <div 
                            key={idx}
                            className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-surface-muted flex items-center justify-center border border-border group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                                    {getCategoryIcon(category.id)}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary leading-tight group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                            </div>
                            
                            {/* Roles List */}
                            <ul className="space-y-4 flex-grow">
                                {category.roles.map((role, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 mt-2 flex-shrink-0" />
                                        <span className="text-text-secondary font-medium leading-relaxed">
                                            {role}
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
