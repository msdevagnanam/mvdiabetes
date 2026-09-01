import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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

            <section className="section-padding bg-surface-muted">
                <div className="container-site">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {checkups.filter(c => c.available).map(checkup => (
                            <Link href={`/checkups/${checkup.slug}`} key={checkup.id}
                                className="group flex flex-col rounded-2xl border border-border hover:shadow-xl overflow-hidden hover:border-primary/20 transition-all duration-300 bg-white">

                                {checkup.image ? (
                                    <div className="w-full h-56 relative bg-surface overflow-hidden">
                                        <Image
                                            src={checkup.image}
                                            alt={checkup.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                                            <span className="w-fit text-xs font-bold text-white bg-primary px-2.5 py-1 rounded-full mb-3 shadow-sm">{checkup.category}</span>
                                            <h3 className="text-xl font-bold text-white leading-snug">{checkup.name}</h3>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-48 bg-primary/5 flex items-center justify-center">
                                        <FlaskConical size={48} className="text-primary/20" />
                                    </div>
                                )}

                                <div className="p-6 flex flex-col flex-1">
                                    {!checkup.image && (
                                        <>
                                            <span className="w-fit text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10 mb-3">{checkup.category}</span>
                                            <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">{checkup.name}</h3>
                                        </>
                                    )}
                                    <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">{checkup.description}</p>

                                    <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                                        {checkup.tests.length > 0 ? (
                                            <p className="text-xs font-medium text-text-secondary">{checkup.tests.length} tests included</p>
                                        ) : (
                                            <div />
                                        )}
                                        <span className="inline-flex items-center gap-1.5 text-sm text-primary font-bold group-hover:gap-2.5 group-hover:text-primary-dark transition-all">
                                            View Details <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
