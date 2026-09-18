import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, Calendar, Check, ArrowLeft, Clock, GraduationCap, Users, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import PageHero from '@/components/ui/PageHero';
import { careers, getCareerBySlug } from '@/data/careers';
import JobApplicationForm from '@/components/careers/JobApplicationForm';

export async function generateStaticParams() {
    return careers.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const job = getCareerBySlug(slug);
    
    if (!job) return {};
    
    return { 
        title: `${job.title} Jobs at MV Diabetes | Careers`, 
        description: `Explore current career opportunities for ${job.title} (${job.category}) at MV Diabetes in ${job.location}. Experience required: ${job.experience || 'Not specified'}.`, 
        alternates: { canonical: `/careers/${job.slug}` } 
    };
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const job = getCareerBySlug(slug);
    
    if (!job) notFound();

    // Find related jobs (same category or location, excluding current)
    const relatedJobs = careers
        .filter(c => c.slug !== job.slug && (c.category === job.category || c.location === job.location))
        .slice(0, 3);

    // JobPosting Structured Data
    const structuredData = {
        '@context': 'https://schema.org/',
        '@type': 'JobPosting',
        title: job.title,
        description: `<strong>Responsibilities:</strong><ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`,
        hiringOrganization: {
            '@type': 'Organization',
            name: 'MV Diabetes',
            sameAs: 'https://mvdiabetes.com'
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: job.location
            }
        },
        employmentType: job.employmentType || 'FULL_TIME'
    };

    return (
        <main className="font-sans min-h-screen bg-surface">
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Hero */}
            <PageHero 
                title={job.title}
                breadcrumbs={[
                    { label: 'Careers', href: '/careers' }, 
                    { label: job.title }
                ]} 
            >
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-white/90 text-sm md:text-base font-medium">
                    <span className="flex items-center gap-2"><Briefcase size={18} className="text-secondary" />{job.category}</span>
                    <span className="flex items-center gap-2"><MapPin size={18} className="text-secondary" />{job.location}</span>
                </div>
            </PageHero>

            {/* Layout */}
            <section className="py-12 md:py-20 bg-surface">
                <div className="container-site max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                        
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Responsibilities & Requirements */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border mb-12">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#044c79] mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#ffbd2a] after:rounded-full">
                                    Responsibilities & Requirements
                                </h2>
                                
                                <div className="space-y-4">
                                    {job.responsibilities.map((r, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-muted transition-colors">
                                            <div className="w-6 h-6 rounded-full bg-[#044c79]/10 text-[#044c79] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <p className="text-text-primary leading-relaxed text-lg">{r}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Application Form */}
                            <div id="application-form" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border scroll-mt-24">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#044c79] mb-4">
                                    Apply for this position
                                </h2>
                                <p className="text-text-secondary mb-8">Please fill out the form below to submit your application for the {job.title} position.</p>
                                
                                <JobApplicationForm jobTitle={job.title} />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-white p-8 rounded-3xl shadow-sm border border-border">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-6 pb-4 border-b border-border">
                                    Job Summary
                                </h3>
                                
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-secondary font-medium">Job Category</p>
                                            <p className="text-text-primary font-bold">{job.category}</p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-text-secondary font-medium">Location</p>
                                            <p className="text-text-primary font-bold">{job.location}</p>
                                        </div>
                                    </li>
                                    
                                    {job.experience && (
                                        <li className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-text-secondary font-medium">Experience</p>
                                                <p className="text-text-primary font-bold">{job.experience}</p>
                                            </div>
                                        </li>
                                    )}
                                    
                                    {job.qualification && (
                                        <li className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <GraduationCap size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-text-secondary font-medium">Qualification</p>
                                                <p className="text-text-primary font-bold">{job.qualification}</p>
                                            </div>
                                        </li>
                                    )}
                                    
                                    {job.openings && (
                                        <li className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Users size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-text-secondary font-medium">No. of Openings</p>
                                                <p className="text-text-primary font-bold">{job.openings}</p>
                                            </div>
                                        </li>
                                    )}
                                </ul>

                                <div className="mt-10">
                                    <a 
                                        href="#application-form"
                                        className="w-full flex items-center justify-center bg-[#ffbd2a] text-text-primary font-bold py-4 rounded-xl hover:bg-[#eab308] hover:scale-[1.02] transition-all shadow-md"
                                    >
                                        APPLY FOR THIS POSITION
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Opportunities */}
            {relatedJobs.length > 0 && (
                <section className="py-20 bg-white border-t border-border">
                    <div className="container-site max-w-6xl">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-3xl font-extrabold text-[#044c79]">
                                Explore More Opportunities
                            </h2>
                            <Link href="/careers" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                                View All Openings <ArrowRight size={16} />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedJobs.map(related => (
                                <Link href={`/careers/${related.slug}`} key={related.slug}
                                    className="group bg-surface border border-border p-6 rounded-2xl hover:border-primary/30 hover:shadow-lg transition-all flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                                            {related.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors flex-grow">
                                        {related.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-text-secondary mt-auto pt-4 border-t border-border">
                                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary/60" />{related.location}</span>
                                        {related.experience && <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary/60" />{related.experience}</span>}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="mt-8 text-center md:hidden">
                            <Link href="/careers" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                View All Openings <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
