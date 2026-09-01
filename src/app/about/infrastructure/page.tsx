import { Metadata } from 'next';
import { Server, Zap, Shield, Microscope, Network, Settings, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hospital Infrastructure | MV Diabetes',
    description: 'Explore our cutting-edge medical infrastructure solutions designed to optimize operations, prioritize comfort, and provide accurate diagnostics.',
    alternates: { canonical: '/about/infrastructure' }
};

const infrastructureItems = [
    { name: 'Advanced Diagnostics Lab', desc: 'World-class laboratory equipped with automated analytical systems for precise, rapid diabetes-related diagnostics.', icon: <Microscope size={24} /> },
    { name: 'Electronic Data Processing', desc: 'Robust network ensuring seamless patient records management, quick retrieval, and enhanced data security.', icon: <Server size={24} /> },
    { name: 'Continuous Monitoring Systems', desc: 'Integrated patient monitoring across wards for real-time tracking of vital parameters.', icon: <Zap size={24} /> },
    { name: 'Premium Patient Suites', desc: 'State-of-the-art inpatient rooms optimized for recovery, combining clinical efficiency with luxury comfort.', icon: <Shield size={24} /> },
    { name: 'Centralized Supply Infrastructure', desc: 'Medical gas pipelines and oxygen support deployed throughout all high-dependency units and OT rooms.', icon: <Network size={24} /> },
    { name: 'Integrated Operational Tech', desc: 'Smart building management systems ensuring ideal climate control and HEPA filtration for superior infection control.', icon: <Settings size={24} /> },
];

export default function InfrastructurePage() {
    return (
        <>
            <PageHero
                title="Our Infrastructure"
                description="Explore our cutting-edge infrastructure solutions designed to optimize hospital operations and prioritize unparalleled patient care."
                breadcrumbs={[{ label: 'About Us', href: '/about-us' }, { label: 'Infrastructure' }]}
            />

            <section className="section-padding bg-surface-muted">
                <div className="container-site">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">Built for Excellence</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            M.V. Hospital for Diabetes combines 60 years of clinical expertise with modern architectural
                            and digital infrastructure, ensuring a seamless, safe, and sophisticated experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infrastructureItems.map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl border border-border bg-white hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-dark to-primary text-white flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{item.name}</h3>
                                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white border border-border shadow-sm p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-extrabold text-primary-dark mb-2">Want to experience our facilities?</h3>
                            <p className="text-text-secondary">Walk in or schedule an appointment with our specialists today.</p>
                        </div>
                        <Link href="/appointment" className="shrink-0 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all flex items-center gap-2">
                            Book Appointment <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
