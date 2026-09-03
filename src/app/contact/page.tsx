import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/data/branches';
import ContactForm from '@/components/contact/ContactForm';
import GlobalContactCards from '@/components/contact/GlobalContactCards';

export const metadata: Metadata = {
    title: 'Contact Us — MV Diabetes',
    description: 'Contact MV Diabetes. Find addresses, phone numbers, email, and maps for all locations in Chennai and Bengaluru.',
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Contact Us"
                description="Reach out to us at any of our locations across Chennai and Bengaluru. We're here to assist you."
                breadcrumbs={[{ label: 'Contact' }]}
            />

            <GlobalContactCards />

            <section className="section-padding bg-surface-muted">
                <div className="container-site">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Left Column: Branches */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <div className="mb-4">
                                <h2 className="text-2xl lg:text-3xl font-extrabold text-text-primary mb-3">Our Locations</h2>
                                <p className="text-text-secondary">Find a center near you. Our state-of-the-art facilities offer everything you need for complete diabetes care.</p>
                            </div>

                            <div className="flex flex-col gap-5 pr-2">
                                {branches.map(branch => (
                                    <div key={branch.id} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                        <div className="flex items-center gap-2 mb-2">
                                            {branch.isMainBranch && <span className="text-[0.65rem] uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full font-bold">Main Hospital</span>}
                                            <span className="text-xs font-semibold text-text-secondary uppercase">{branch.city}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary mb-4">{branch.shortName}</h3>

                                        <div className="space-y-4 text-sm text-text-secondary">
                                            <div className="flex items-start gap-3">
                                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{branch.address}</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                                                <div className="flex flex-col gap-1">
                                                    {branch.phones.map(p => <a key={p} href={`tel:${p.replace(/[\s-]/g, '')}`} className="font-medium hover:text-primary transition-colors">{p}</a>)}
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                                                <a href={`mailto:${branch.email}`} className="font-medium hover:text-primary transition-colors hover:underline underline-offset-4">{branch.email}</a>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                                                <span className="font-medium">{branch.openingHours}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border/50">
                                            <Link href="/appointment"
                                                className="flex-1 text-center py-2.5 rounded-xl bg-secondary text-white text-sm font-bold hover:bg-secondary/90 transition-all shadow-sm">
                                                Book Appointment
                                            </Link>
                                            <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer"
                                                className="flex-1 text-center py-2.5 rounded-xl border border-border text-text-primary text-sm font-bold hover:bg-surface-muted transition-all">
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7 mt-8 lg:mt-0">
                            <div className="sticky top-28">
                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
