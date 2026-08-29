import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HelpCircle, Stethoscope } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { specialties, getSpecialtyBySlug } from '@/data/specialties';
import { doctors } from '@/data/doctors';

export async function generateStaticParams() {
    return specialties.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const spec = getSpecialtyBySlug(slug);
    if (!spec) return {};
    return {
        title: `${spec.name} — MV Diabetes`,
        description: spec.shortDescription,
        alternates: { canonical: `/care/${spec.slug}` },
    };
}

export default async function CareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const spec = getSpecialtyBySlug(slug);
    if (!spec) notFound();

    const specialists = doctors.filter(d =>
        d.specialty.toLowerCase().includes(spec.name.split(' ')[0].toLowerCase()) ||
        spec.name.toLowerCase().includes(d.specialty.toLowerCase())
    );

    const related = spec.relatedSpecialties
        .map(s => specialties.find(sp => sp.slug === s))
        .filter(Boolean);

    return (
        <>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Care', href: '/care' }, { label: spec.name }]} />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-4">{spec.name}</h1>
                    <p className="text-lg text-white/70 mt-4 max-w-3xl leading-relaxed">{spec.shortDescription}</p>
                    <div className="mt-6">
                        <Link href={`/appointment?service=${spec.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                            Book Appointment <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    {/* Overview */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-extrabold text-text-primary mb-4">Overview</h2>
                        <p className="text-text-secondary leading-relaxed">{spec.description}</p>
                    </div>

                    {/* Approach */}
                    <div className="mb-10 p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                        <h2 className="text-xl font-extrabold text-text-primary mb-3">Our Approach</h2>
                        <p className="text-text-secondary leading-relaxed">{spec.approach}</p>
                    </div>

                    {/* Conditions */}
                    {spec.conditions.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Conditions We Manage</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {spec.conditions.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-text-primary font-medium text-sm">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Specialists */}
                    {specialists.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Our Specialists</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {specialists.slice(0, 4).map(doc => (
                                    <Link href={`/doctors/${doc.slug}`} key={doc.id}
                                        className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:shadow-sm transition-all">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                                            {doc.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-text-primary text-sm">{doc.name}</div>
                                            <div className="text-xs text-text-secondary">{doc.designation}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQs */}
                    {spec.faqs.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {spec.faqs.map((faq, i) => (
                                    <div key={i} className="p-5 rounded-xl border border-border">
                                        <h3 className="font-bold text-text-primary flex items-center gap-2 text-sm">
                                            <HelpCircle size={16} className="text-primary shrink-0" />{faq.question}
                                        </h3>
                                        <p className="text-text-secondary text-sm mt-2 ml-6">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related */}
                    {related.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Related Services</h2>
                            <div className="flex flex-wrap gap-3">
                                {related.map(r => r && (
                                    <Link href={`/care/${r.slug}`} key={r.id}
                                        className="px-4 py-2.5 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all text-sm font-semibold text-text-primary flex items-center gap-2">
                                        <Stethoscope size={14} className="text-primary" />{r.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Need {spec.name}?</h3>
                        <p className="text-white/70 mb-6">Book an appointment with our specialist team today.</p>
                        <Link href={`/appointment?service=${spec.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            Book Appointment <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
