'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
    return (
        <section className="bg-gradient-to-r from-primary to-primary-light">
            <div className="container-site py-14 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                    <div className="max-w-xl">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                            Your Diabetes Journey Deserves Expertise Built Over Generations
                        </h2>
                        <p className="text-white/70 leading-relaxed">
                            Experience the difference of India&apos;s first exclusive diabetes hospital — where pioneering research,
                            compassionate care, and 60+ years of expertise come together for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <Link
                            href="/appointment"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-black/10"
                        >
                            Book an Appointment <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/care"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                        >
                            Explore Our Care
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
