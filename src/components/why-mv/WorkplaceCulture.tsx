'use client';

import { whyMVContent } from '@/data/why-mv-diabetes';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WorkplaceCulture() {
    const { workplace, finalCta } = whyMVContent;

    return (
        <>
            <section id="people" className="section-padding bg-surface border-t border-border relative overflow-hidden">
                <div className="container-site">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Left: Content */}
                        <div className="max-w-2xl">
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                Our Culture
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-8 tracking-tight">
                                {workplace.title}
                            </h2>
                            
                            <div className="prose prose-lg prose-blue text-text-secondary mb-10">
                                {workplace.paragraphs.map((para, idx) => (
                                    <p key={idx} className="leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Legacy Highlight Box */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-text-primary mb-6">
                                    {workplace.legacy.title}
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
                                    <div className="text-4xl font-extrabold text-primary tracking-tighter whitespace-nowrap">
                                        {workplace.legacy.metric}
                                    </div>
                                    <div className="space-y-3">
                                        {workplace.legacy.points.map((point, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                                <span className="text-sm font-semibold text-text-secondary">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visual — kept at the photograph's own aspect so the
                            whole team stays in frame rather than being cropped to fill */}
                        <div className="relative">
                            {/* Decorative background framing */}
                            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform rotate-3" />
                            <div className="absolute inset-0 bg-secondary/5 rounded-[2rem] transform -rotate-3" />
                            
                            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-border shadow-lg shadow-black/5">
                                <Image
                                    src="/images/why-mv/mv-team.jpg"
                                    alt="Doctors, nurses and coordinators from MV Hospital for Diabetes at a community health camp"
                                    width={1080}
                                    height={810}
                                    sizes="(max-width: 1024px) 92vw, 560px"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-[#014874] relative overflow-hidden">
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }}
                />

                <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 font-bold uppercase tracking-widest text-xs mb-8">
                        {finalCta.title}
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                        {finalCta.subtitle}
                    </h2>
                    
                    <p className="text-lg text-white/80 mb-12 leading-relaxed">
                        {finalCta.footerText}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            href="/appointment" 
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-extrabold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-0.5"
                        >
                            Book Appointment
                            <ArrowRight size={18} />
                        </Link>
                        <Link 
                            href="/care/diabetes-care" 
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
                        >
                            Explore Diabetes Care
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
