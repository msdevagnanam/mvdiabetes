import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Clock, Check, ArrowRight, Users } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { packages, getPackageBySlug } from '@/data/packages';

export async function generateStaticParams() {
    return packages.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);
    if (!pkg) return {};
    return {
        title: `${pkg.name} — ₹${pkg.price.toLocaleString()} | MV Diabetes`,
        description: pkg.description,
        alternates: { canonical: `/packages/${pkg.slug}` },
    };
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = getPackageBySlug(slug);
    if (!pkg) notFound();

    return (
        <>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                </div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Packages', href: '/packages' }, { label: pkg.name }]} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 mt-4">
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10">{pkg.category}</span>
                                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10 flex items-center gap-1"><MapPin size={12} />{pkg.location}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{pkg.name}</h1>
                            <div className="flex items-baseline gap-3 mt-4">
                                <span className="text-4xl font-extrabold text-secondary">₹{pkg.price.toLocaleString()}</span>
                                {pkg.originalPrice > pkg.price && (
                                    <>
                                        <span className="text-lg text-white/40 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                                        <span className="px-2.5 py-1 bg-secondary text-white text-xs font-bold rounded-lg">{pkg.discount}% OFF</span>
                                    </>
                                )}
                            </div>
                            <div className="mt-6">
                                <Link href={`/appointment?package=${pkg.slug}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                                    Book This Package <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                        {pkg.image && (
                            <div className="w-full md:w-80 h-48 md:h-auto rounded-2xl overflow-hidden bg-white/10 shrink-0">
                                <Image src={pkg.image} alt={pkg.name} width={320} height={200} className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    <div className="mb-10">
                        <h2 className="text-2xl font-extrabold text-text-primary mb-4">Overview</h2>
                        <p className="text-text-secondary leading-relaxed">{pkg.description}</p>
                    </div>

                    {pkg.inclusions.length > 0 && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-4">What&apos;s Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {pkg.inclusions.map((inc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                                        <Check size={16} className="text-green-600 shrink-0" />
                                        <span className="text-text-primary text-sm font-medium">{inc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {pkg.duration && (
                            <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                                <Clock size={20} className="text-primary mx-auto mb-2" />
                                <div className="text-sm text-text-secondary">Duration</div>
                                <div className="font-bold text-text-primary">{pkg.duration}</div>
                            </div>
                        )}
                        {pkg.eligibility && (
                            <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                                <Users size={20} className="text-primary mx-auto mb-2" />
                                <div className="text-sm text-text-secondary">Who is it for?</div>
                                <div className="font-bold text-text-primary text-sm">{pkg.eligibility}</div>
                            </div>
                        )}
                        <div className="p-4 rounded-xl bg-surface-muted border border-border text-center">
                            <MapPin size={20} className="text-primary mx-auto mb-2" />
                            <div className="text-sm text-text-secondary">Location</div>
                            <div className="font-bold text-text-primary">{pkg.location === 'BDC' ? 'Bengaluru' : pkg.location}</div>
                        </div>
                    </div>

                    <div className="p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Book {pkg.name}</h3>
                        <p className="text-white/70 mb-6">Get started with your diabetes health assessment today.</p>
                        <Link href={`/appointment?package=${pkg.slug}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            Book This Package <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
