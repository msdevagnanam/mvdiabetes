'use client';

import { whyMVContent } from '@/data/why-mv-diabetes';
import Image from 'next/image';
import { Award, Users, ShieldCheck, Activity } from 'lucide-react';

export default function InstitutionalTrust() {
    const { institutionalTrust } = whyMVContent;

    // Map specific icons to the verified source metrics
    const getMetricIcon = (label: string) => {
        if (label.includes('Patients')) return <Users className="w-8 h-8 text-secondary" />;
        if (label.includes('Decades')) return <Activity className="w-8 h-8 text-accent" />;
        if (label.includes('Centre')) return <Award className="w-8 h-8 text-primary" />;
        if (label.includes('Accredited')) return <ShieldCheck className="w-8 h-8 text-[#73BC82]" />;
        return <Award className="w-8 h-8 text-secondary" />;
    };

    return (
        <section id="pioneers" className="section-padding bg-surface-muted relative overflow-hidden border-y border-border">
            <div className="container-site">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left: Legacy Visual */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative">
                            {/* Decorative background framing */}
                            <div className="absolute -inset-4 bg-white rounded-[2rem] shadow-sm border border-border transform -rotate-2" />
                            
                            <figure className="relative z-10">
                                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                                    <Image
                                        src="/images/why-mv/founder-prof-m-viswanathan.jpg"
                                        alt="Portrait of Prof. M. Viswanathan, founder of MV Hospital for Diabetes"
                                        width={459}
                                        height={489}
                                        sizes="(max-width: 1024px) 70vw, 420px"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                                <figcaption className="mt-4 text-sm leading-relaxed text-text-secondary">
                                    <span className="font-bold text-text-primary">Prof. M. Viswanathan</span>
                                    <span className="mt-0.5 block">Founder, MV Hospital for Diabetes</span>
                                </figcaption>
                            </figure>
                            
                            {/* Floating decorative element */}
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[radial-gradient(circle_at_center,var(--mv-cyan)_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none rounded-full" style={{ '--mv-cyan': '#03B9D5' } as React.CSSProperties} />
                        </div>
                    </div>

                    {/* Right: Content & Trust Metrics */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                            Our History
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-8 tracking-tight">
                            {institutionalTrust.title}
                        </h2>
                        
                        <div className="prose prose-lg prose-blue text-text-secondary mb-12 max-w-none">
                            {institutionalTrust.paragraphs.map((para, idx) => (
                                <p key={idx} className="leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Verified Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {institutionalTrust.metrics.map((metric, idx) => (
                                <div 
                                    key={idx} 
                                    className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                                >
                                    <div className="mb-4 bg-surface rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {getMetricIcon(metric.label)}
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-1 tracking-tight">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
