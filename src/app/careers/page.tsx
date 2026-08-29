import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, ArrowRight, Calendar } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { careers } from '@/data/careers';

export const metadata: Metadata = {
    title: 'Careers — MV Diabetes',
    description: 'Join the MV Diabetes team. Explore current openings across our centres in Chennai and Bengaluru.',
    alternates: { canonical: '/careers' },
};

export default function CareersPage() {
    return (
        <>
            <PageHero title="Careers at MV Diabetes" description="Join India's first exclusive diabetes hospital. Explore current openings across our centres in Chennai and Bengaluru." breadcrumbs={[{ label: 'Careers' }]} />
            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    <div className="space-y-4">
                        {careers.map(job => (
                            <Link href={`/careers/${job.slug}`} key={job.id}
                                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                                <div>
                                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-text-secondary">
                                        <span className="flex items-center gap-1"><Briefcase size={12} />{job.department}</span>
                                        <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                                        <span className="flex items-center gap-1"><Calendar size={12} />{job.type}</span>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1.5 text-sm text-primary font-semibold shrink-0 group-hover:gap-2.5 transition-all">
                                    View Details <ArrowRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
