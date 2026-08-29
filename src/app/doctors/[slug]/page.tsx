import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Award, BookOpen, ArrowRight, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { doctors, getDoctorBySlug } from '@/data/doctors';

export async function generateStaticParams() {
    return doctors.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const doc = getDoctorBySlug(slug);
    if (!doc) return {};
    return {
        title: `${doc.name} — ${doc.designation} | MV Diabetes`,
        description: doc.about || `${doc.name}, ${doc.designation} at MV Diabetes. ${doc.qualifications}.`,
        alternates: { canonical: `/doctors/${doc.slug}` },
    };
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const doc = getDoctorBySlug(slug);
    if (!doc) notFound();

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Doctors', href: '/doctors' }, { label: doc.name }]} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 mt-4">
                        {/* Photo */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0 bg-white/10 border-2 border-white/20">
                            {doc.image ? (
                                <Image src={doc.image} alt={doc.name} width={224} height={224} className="w-full h-full object-cover object-top" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/30 text-6xl font-bold">
                                    {doc.name.charAt(0)}
                                </div>
                            )}
                        </div>
                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{doc.name}</h1>
                            <p className="text-secondary text-lg font-semibold mt-2">{doc.designation}</p>
                            <p className="text-white/60 mt-1">{doc.qualifications}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {doc.location.map(l => (
                                    <span key={l} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                                        <MapPin size={12} />{l}
                                    </span>
                                ))}
                                {doc.experience && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                                        <Calendar size={12} />{doc.experience}
                                    </span>
                                )}
                            </div>
                            <div className="mt-6">
                                <Link href={`/appointment?doctor=${doc.slug}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                                    Book Appointment <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    {doc.bio && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">About</h2>
                            <p className="text-text-secondary leading-relaxed">{doc.bio}</p>
                        </div>
                    )}

                    {doc.expertise && doc.expertise.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Clinical Expertise</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {doc.expertise.map((e, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-text-primary font-medium text-sm">{e}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {doc.memberships && doc.memberships.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Memberships & Awards</h2>
                            <div className="space-y-3">
                                {doc.memberships.map((m, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border">
                                        <Award size={16} className="text-primary shrink-0" />
                                        <span className="text-text-primary text-sm">{m}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Ready to Book Your Appointment?</h3>
                        <p className="text-white/70 mb-6">Schedule a consultation with {doc.name} at your preferred MV Diabetes location.</p>
                        <Link href={`/appointment?doctor=${doc.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            Book Appointment <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
