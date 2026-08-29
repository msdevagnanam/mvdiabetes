import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FlaskConical } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { checkups } from '@/data/checkups';

export const metadata: Metadata = {
    title: 'Recommended Checkups — MV Diabetes',
    description: 'Recommended diabetes checkups and screening programs at MV Diabetes. From prevention to complication management.',
    alternates: { canonical: '/checkups' },
};

export default function CheckupsPage() {
    return (
        <>
            <PageHero
                title="Recommended Checkups"
                description="Targeted diabetes screening programs designed by India's leading diabetologists to detect, prevent, and manage diabetes and its complications."
                breadcrumbs={[{ label: 'Checkups' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {checkups.filter(c => c.available).map(checkup => (
                            <Link href={`/checkups/${checkup.slug}`} key={checkup.id}
                                className="group p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all bg-white">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    <FlaskConical size={22} />
                                </div>
                                <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10">{checkup.category}</span>
                                <h3 className="text-lg font-bold text-text-primary mt-3 mb-2">{checkup.name}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">{checkup.description}</p>
                                {checkup.tests.length > 0 && (
                                    <p className="text-xs text-text-secondary mb-4">{checkup.tests.length} tests included</p>
                                )}
                                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
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
