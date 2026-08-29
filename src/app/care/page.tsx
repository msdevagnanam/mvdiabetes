import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { specialties } from '@/data/specialties';

export const metadata: Metadata = {
    title: 'Our Care — Diabetes Specialties | MV Diabetes',
    description: 'Explore MV Diabetes specialties: diabetes care, diabetic foot care, podiatry, kidney care, cardiology, nutrition, and more.',
    alternates: { canonical: '/care' },
};

export default function CarePage() {
    return (
        <>
            <PageHero
                title="Our Diabetes Care"
                description="Comprehensive, multidisciplinary diabetes care covering every aspect of diabetes management — from prevention to advanced complication care."
                breadcrumbs={[{ label: 'Care' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialties.map(spec => (
                            <Link href={`/care/${spec.slug}`} key={spec.id}
                                className="group p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all bg-white">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="text-xl">●</span>
                                </div>
                                <h3 className="text-lg font-bold text-text-primary mb-2">{spec.name}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-4">{spec.shortDescription}</p>
                                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
                                    Learn More <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
