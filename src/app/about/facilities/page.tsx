import { Metadata } from 'next';
import { Building2, Stethoscope, BriefcaseMedical, Home, Pill, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hospital Facilities | MV Diabetes',
    description: 'Explore comprehensive features and facilities at MV Diabetes ensuring comfort, advanced care, and unparalleled medical expertise.',
    alternates: { canonical: '/about/facilities' }
};

const facilities = [
    { name: 'Diabetic Eye Care', desc: 'Comprehensive screening and treatment for diabetic retinopathy and complete eye care.', icon: <Stethoscope size={24} /> },
    { name: 'Diabetes Footwear Unit', desc: 'Custom diagnostic and therapeutic footwear solutions for diabetic foot conditions.', icon: <Building2 size={24} /> },
    { name: 'Weight Management Clinic', desc: 'Dedicated obesity and lifestyle counseling directed at holistic well-being.', icon: <BriefcaseMedical size={24} /> },
    { name: 'Online Consultation', desc: 'Telemedicine services offering remote care and virtual appointments with top specialists.', icon: <Home size={24} /> },
    { name: 'Home Blood Collection', desc: 'Convenient and hygienic at-home lab sample collection services.', icon: <Home size={24} /> },
    { name: 'Medicine Home Delivery', desc: 'Prompt doorstep delivery of prescribed medications and essentials.', icon: <Pill size={24} /> },
    { name: 'Medicine Insurance Tie-ups', desc: 'Cashless and reimbursed medication support via select insurance partners.', icon: <Pill size={24} /> },
    { name: 'Free Diabetes Clinic', desc: 'Community outreach clinics providing accessible care for the underprivileged.', icon: <Building2 size={24} /> },
    { name: 'Yoga Clinic', desc: 'Specialized yoga therapy sessions focused on glycemic control and stress management.', icon: <Stethoscope size={24} /> },
];

export default function FacilitiesPage() {
    return (
        <>
            <PageHero
                title="Our Facilities"
                description="Explore our extensive array of hospital facilities designed to prioritize your comfort, overall well-being, and state-of-the-art medical recovery."
                breadcrumbs={[{ label: 'About Us', href: '/about-us' }, { label: 'Facilities' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">Patient-Centric Features</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            From advanced diagnostic labs and inpatient wards to our dedicated footwear units
                            and telemedicine platforms, MV Diabetes offers unparalleled medical infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilities.map((fac, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border border-border bg-surface hover:shadow-xl hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {fac.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{fac.name}</h3>
                                <p className="text-text-secondary leading-relaxed mb-6">{fac.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-extrabold text-white mb-2">Book an Appointment Today</h3>
                            <p className="text-primary-100">Experience our world-class facilities and expert care firsthand.</p>
                        </div>
                        <Link href="/appointment" className="shrink-0 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-surface-muted transition-all flex items-center gap-2">
                            Schedule Visit <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
