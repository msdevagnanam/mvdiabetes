import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/data/branches';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
    title: 'Contact Us — MV Diabetes',
    description: 'Contact MV Diabetes. Find addresses, phone numbers, email, and maps for all locations in Chennai and Bengaluru.',
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <>
            <PageHero title="Contact Us" description="Reach out to us at any of our locations across Chennai and Bengaluru." breadcrumbs={[{ label: 'Contact' }]} />
            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {branches.map(branch => (
                            <div key={branch.id} className="p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className="flex items-center gap-2 mb-1">
                                    {branch.isMainBranch && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full font-medium">Main Hospital</span>}
                                    <span className="text-xs text-text-secondary">{branch.city}</span>
                                </div>
                                <h3 className="text-lg font-bold text-text-primary mb-3">{branch.shortName}</h3>
                                <div className="space-y-3 text-sm text-text-secondary">
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
                                <div className="flex gap-3 mt-5">
                                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer"
                                        className="px-4 py-2.5 rounded-xl border-2 border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-all flex items-center gap-1.5">
                                        <MapPin size={14} /> Directions
                                    </a>
                                    <Link href="/appointment"
                                        className="px-4 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all flex items-center gap-1.5">
                                        Book <ArrowRight size={14} />
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
