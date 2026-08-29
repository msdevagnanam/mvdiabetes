import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/data/branches';

export const metadata: Metadata = {
    title: 'Our Branches — MV Diabetes',
    description: 'Find MV Diabetes hospital and centres across Chennai and Bengaluru.',
    alternates: { canonical: '/about/branches' },
};

export default function BranchesPage() {
    return (
        <>
            <PageHero title="Our Branches" description="MV Diabetes provides world-class care across Chennai and Bengaluru." breadcrumbs={[{ label: 'About', href: '/about-us' }, { label: 'Branches' }]} />
            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {branches.map(branch => (
                            <div key={branch.id} className="p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    {branch.isMainBranch && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">Main Hospital</span>}
                                    <span className="text-xs text-text-secondary bg-surface-muted px-2 py-0.5 rounded-full">{branch.city}</span>
                                </div>
                                <h2 className="text-xl font-bold text-text-primary mb-1">{branch.name}</h2>
                                <h3 className="text-sm font-semibold text-primary mb-4">{branch.shortName}</h3>
                                <div className="space-y-3 text-sm text-text-secondary flex-1">
                                    <div className="flex gap-2.5">
                                        <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                        <span>{branch.address}</span>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Phone size={16} className="text-primary shrink-0" />
                                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                                            {branch.phones.map(p => <a key={p} href={`tel:${p.replace(/[\s-]/g, '')}`} className="hover:text-primary transition-colors">{p}</a>)}
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Mail size={16} className="text-primary shrink-0" />
                                        <a href={`mailto:${branch.email}`} className="hover:text-primary transition-colors">{branch.email}</a>
                                    </div>
                                    <div className="flex gap-2.5">
                                        <Clock size={16} className="text-primary shrink-0" />
                                        <span>{branch.openingHours}</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-border">
                                    <h4 className="text-sm font-semibold text-text-primary mb-3">Available Services:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {branch.services.map(s => (
                                            <span key={s} className="px-2.5 py-1 bg-surface-muted text-text-secondary text-xs rounded-lg border border-border">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2.5 rounded-xl border-2 border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-all">
                                        Directions
                                    </a>
                                    <Link href="/appointment"
                                        className="flex-1 text-center px-4 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all">
                                        Book
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
