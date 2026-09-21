'use client';

import { growWithUsContent } from '@/data/grow-with-us';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function CareerCTA() {
    const { cta } = growWithUsContent;

    return (
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
                    {cta.title}
                </span>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                    {cta.subtitle}
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link 
                        href="/careers" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-extrabold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-0.5"
                    >
                        View Current Vacancies
                        <ArrowRight size={18} />
                    </Link>
                    <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
                    >
                        <Mail size={18} />
                        Contact HR
                    </Link>
                </div>
            </div>
        </section>
    );
}
