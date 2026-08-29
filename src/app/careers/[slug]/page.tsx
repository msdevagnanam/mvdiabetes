import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, Calendar, Check, ArrowLeft, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { careers, getCareerBySlug } from '@/data/careers';
import { siteConfig } from '@/data/site';

export async function generateStaticParams() {
    return careers.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const job = getCareerBySlug(slug);
    if (!job) return {};
    return { title: `${job.title} — Careers | MV Diabetes`, description: job.description, alternates: { canonical: `/careers/${job.slug}` } };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = getCareerBySlug(slug);
    if (!job) notFound();

    return (
        <>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" /></div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-white/60 text-sm">
                        <span className="flex items-center gap-1.5"><Briefcase size={14} />{job.department}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} />{job.location}</span>
                        <span className="flex items-center gap-1.5"><Calendar size={14} />{job.type}</span>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-white">
                <div className="container-site max-w-3xl">
                    <div className="mb-8">
                        <h2 className="text-2xl font-extrabold text-text-primary mb-4">About This Role</h2>
                        <p className="text-text-secondary leading-relaxed">{job.description}</p>
                    </div>
                    {job.requirements.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">Requirements</h2>
                            <div className="space-y-3">
                                {job.requirements.map((r, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-muted border border-border">
                                        <Check size={16} className="text-primary shrink-0" />
                                        <span className="text-text-primary text-sm">{r}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Interested in this role?</h3>
                        <p className="text-white/70 mb-6">Send your resume to our HR team.</p>
                        <a href={`mailto:${siteConfig.email}?subject=Application for ${job.title}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            <Mail size={16} /> Apply via Email
                        </a>
                    </div>
                    <div className="mt-6">
                        <Link href="/careers" className="flex items-center gap-2 text-sm text-primary font-semibold hover:underline"><ArrowLeft size={14} /> All Openings</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
