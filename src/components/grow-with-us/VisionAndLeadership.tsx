'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import { Target } from 'lucide-react';

export default function VisionAndLeadership() {
    const { vision, leadership } = growWithUsContent;

    return (
        <section id="explore" className="section-padding bg-white relative border-t border-border">
            <div className="container-site">
                
                {/* Vision Section */}
                <div className="max-w-5xl mx-auto mb-24 md:mb-32">
                    <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                        <div className="md:col-span-4 text-center md:text-right border-b md:border-b-0 md:border-r border-border pb-8 md:pb-0 md:pr-16">
                            <Target className="w-12 h-12 text-secondary mx-auto md:ml-auto md:mr-0 mb-6" />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                                {vision.title}
                            </h2>
                        </div>
                        <div className="md:col-span-8">
                            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-text-primary leading-tight font-medium text-center md:text-left">
                                "{vision.statement}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Leadership Development Section */}
                <div className="bg-surface-muted rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-border">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                Core Philosophy
                            </span>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6 tracking-tight">
                                {leadership.title}
                            </h3>
                            <p className="text-lg text-text-secondary leading-relaxed border-l-4 border-secondary/40 pl-6">
                                {leadership.description}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {leadership.principles.map((principle, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors"
                                >
                                    <span className="text-4xl font-extrabold text-primary/10 mb-3 group-hover:text-primary/20 transition-colors">
                                        {principle.id}
                                    </span>
                                    <h4 className="text-lg font-bold text-text-primary tracking-wider uppercase">
                                        {principle.label}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
