import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Tag, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { packages } from '@/data/packages';

export const metadata: Metadata = {
    title: 'Health Packages — MV Diabetes',
    description: 'Explore comprehensive diabetes health packages at MV Diabetes. Affordable screenings and wellness packages across Chennai and Bengaluru.',
    alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
    const locations = [...new Set(packages.map(p => p.location))];

    return (
        <>
            <PageHero
                title="Health Packages"
                description="Comprehensive diabetes screening and wellness packages designed by India's leading diabetologists. Affordable care across all MV Diabetes locations."
                breadcrumbs={[{ label: 'Health Packages' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    {locations.map(loc => {
                        const locPackages = packages.filter(p => p.location === loc && p.available);
                        return (
                            <div key={loc} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-3 mb-6">
                                    <MapPin size={20} className="text-primary" />
                                    <h2 className="text-2xl font-extrabold text-text-primary">{loc === 'BDC' ? 'Bengaluru (Koramangala)' : loc}</h2>
                                    <span className="text-sm text-text-secondary bg-surface-muted px-3 py-1 rounded-full">{locPackages.length} packages</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {locPackages.map(pkg => (
                                        <Link href={`/packages/${pkg.slug}`} key={pkg.id}
                                            className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                                            <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                                                {pkg.image && <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />}
                                                {pkg.discount > 0 && (
                                                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-secondary text-white text-xs font-bold rounded-lg">{pkg.discount}% OFF</span>
                                                )}
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10">{pkg.category}</span>
                                                </div>
                                                <h3 className="font-bold text-text-primary text-lg leading-snug">{pkg.name}</h3>
                                                <div className="flex items-baseline gap-2 mt-3">
                                                    <span className="text-2xl font-extrabold text-primary">₹{pkg.price.toLocaleString()}</span>
                                                    {pkg.originalPrice > pkg.price && (
                                                        <span className="text-sm text-text-secondary line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                                                    )}
                                                </div>
                                                <div className="mt-4 flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                                                    View Details <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
