import { Metadata } from 'next';
import { BookOpen, GraduationCap, Award, FileText, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Academic Courses | MV Diabetes',
    description: 'Explore academic courses offered by MV Diabetes, including Fellowship in Clinical Diabetology and Advanced Certificate Courses for medical professionals.',
    alternates: { canonical: '/academics' }
};

const courses = [
    {
        title: 'Fellowship In Clinical Diabetology (FCD)',
        duration: '2 years (Post MBBS)',
        type: 'Full Time',
        eligibility: 'MBBS graduates through Entrance examination & Interview',
        icon: <Award className="text-secondary w-8 h-8" />
    },
    {
        title: 'Advanced Certificate Course In Diabetology',
        duration: '2 yrs (Post MBBS) / 1 yr (Post MD/DNB Gen Medicine)',
        type: 'Full Time',
        eligibility: 'Applications taken twice a year (June & December). Affiliated with Jaipur National University & RSSDI',
        icon: <GraduationCap className="text-primary w-8 h-8" />
    }
];

export default function AcademicsPage() {
    return (
        <>
            <PageHero
                title="Academic Courses"
                description="Enhance your medical knowledge and skills with our specialized training programs in Diabetology."
                breadcrumbs={[{ label: 'Academics' }]}
            />

            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">Training the Next Generation of Experts</h2>
                            <p className="text-text-secondary leading-relaxed">
                                MV Hospital for Diabetes extends its excellence beyond patient care into rigorous education.
                                Over 3,000 doctors from all over India have been trained in our hospital, contributing to a healthier future.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {courses.map((course, idx) => (
                                <div key={idx} className="bg-surface-muted p-8 rounded-2xl border border-border flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-6">
                                        {course.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">{course.title}</h3>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <div>
                                                <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Duration</span>
                                                <span className="text-text-primary font-medium">{course.duration}</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <div>
                                                <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Eligibility & Admission</span>
                                                <span className="text-text-primary text-sm leading-relaxed">{course.eligibility}</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <div>
                                                <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Type</span>
                                                <span className="text-text-primary font-medium">{course.type}</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                                        Download Application <FileText size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-center mt-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Interested in Collaboration?</h2>
                                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                                    Join our network of medical professionals dedicated to eradicating diabetes-related complications.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-white hover:text-secondary transition-all">
                                    Contact Us <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
