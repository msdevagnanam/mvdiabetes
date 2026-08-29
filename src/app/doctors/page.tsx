import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Stethoscope } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { doctors } from '@/data/doctors';

export const metadata: Metadata = {
    title: 'Our Doctors — MV Diabetes',
    description: 'Meet our team of experienced diabetologists, surgeons, and specialists at MV Diabetes. Book an appointment with India\'s leading diabetes experts.',
    alternates: { canonical: '/doctors' },
};

export default function DoctorsPage() {
    const specialtyList = [...new Set(doctors.map(d => d.specialty))];

    return (
        <>
            <PageHero
                title="Our Doctors"
                description="Meet the experienced team of diabetologists, surgeons, and specialists dedicated to providing world-class diabetes care."
                breadcrumbs={[{ label: 'Doctors' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    {/* Specialty quick links */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {specialtyList.map(s => (
                            <span key={s} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/10">
                                <Stethoscope size={14} />{s}
                            </span>
                        ))}
                    </div>

                    {/* Doctor grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {doctors.map(doc => (
                            <div key={doc.id} className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                                {/* Photo */}
                                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                                    {doc.image ? (
                                        <Image src={doc.image} alt={doc.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-primary/30 text-5xl font-bold">
                                            {doc.name.charAt(0)}
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3 className="font-bold text-text-primary text-lg leading-snug">{doc.name}</h3>
                                    <p className="text-sm text-primary font-medium mt-1">{doc.designation}</p>
                                    <p className="text-xs text-text-secondary mt-1.5">{doc.qualifications}</p>
                                    <div className="flex items-center gap-1.5 text-xs text-text-secondary mt-2">
                                        <MapPin size={12} />{doc.location.join(', ')}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 mt-4">
                                        <Link href={`/doctors/${doc.slug}`}
                                            className="flex-1 text-center px-3 py-2.5 rounded-xl border-2 border-border text-text-primary text-sm font-semibold hover:bg-surface-muted transition-all">
                                            View Profile
                                        </Link>
                                        <Link href={`/appointment?doctor=${doc.slug}`}
                                            className="flex-1 text-center px-3 py-2.5 rounded-xl bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all">
                                            Book
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
