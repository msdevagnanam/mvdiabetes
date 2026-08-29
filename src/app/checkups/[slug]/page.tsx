import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, MapPin, Users, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { checkups, getCheckupBySlug } from '@/data/checkups';

export async function generateStaticParams() {
    return checkups.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const checkup = getCheckupBySlug(slug);
    if (!checkup) return {};
    return {
        title: `${checkup.name} — MV Diabetes`,
        description: checkup.description,
        alternates: { canonical: `/checkups/${checkup.slug}` },
    };
}

export default async function CheckupDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const checkup = getCheckupBySlug(slug);
    if (!checkup) notFound();

    return (
        <>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" /></div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Checkups', href: '/checkups' }, { label: checkup.name }]} />
                    </div>
                    <div className="mt-4">
                        <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10">{checkup.category}</span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3">{checkup.name}</h1>
                        <p className="text-lg text-white/70 mt-3 max-w-2xl">{checkup.description}</p>
                        <div className="mt-6">
                            <Link href={`/appointment?checkup=${checkup.slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                                Book This Checkup <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    {checkup.tests.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Tests Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {checkup.tests.map((test, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                                        <Check size={16} className="text-green-600 shrink-0" />
                                        <span className="text-text-primary text-sm font-medium">{test}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {checkup.gender && (
                            <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                                <Users size={20} className="text-primary mx-auto mb-2" />
                                <div className="text-sm text-text-secondary">Gender</div>
                                <div className="font-bold text-text-primary">{checkup.gender}</div>
                            </div>
                        )}
                        {checkup.ageGroup && (
                            <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                                <Users size={20} className="text-primary mx-auto mb-2" />
                                <div className="text-sm text-text-secondary">Age Group</div>
                                <div className="font-bold text-text-primary text-sm">{checkup.ageGroup}</div>
                            </div>
                        )}
                        <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                            <MapPin size={20} className="text-primary mx-auto mb-2" />
                            <div className="text-sm text-text-secondary">Available At</div>
                            <div className="font-bold text-text-primary text-sm">{checkup.location}</div>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Book {checkup.name}</h3>
                        <p className="text-white/70 mb-6">Get screened today at MV Diabetes.</p>
                        <Link href={`/appointment?checkup=${checkup.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            Book This Checkup <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
