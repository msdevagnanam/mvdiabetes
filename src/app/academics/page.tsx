import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, GraduationCap, Award, FileText, ArrowRight, MapPin, Calendar, Clock, Users } from 'lucide-react';
import { academicData } from '@/data/academics';
import FacultySection from '@/components/academics/FacultySection';

export const metadata: Metadata = {
    title: 'Academic Courses & Diabetology Training | MV Diabetes',
    description: 'Explore academic courses and professional training programs in Diabetology at MV Hospital for Diabetes, including the Fellowship in Clinical Diabetology and Advanced Certificate Course in Diabetology.',
    alternates: { canonical: '/academics' }
};

export default function AcademicsPage() {
    const advancedCourse = academicData.courses.find(c => c.id === 'advanced-certificate');
    const fellowshipCourse = academicData.courses.find(c => c.id === 'fellowship');

    // Structured Data for the academic organization and courses
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'M.V. Hospital for Diabetes & Prof. M. Viswanathan Diabetes Research Centre',
        url: 'https://mvdiabetes.com/academics',
        sameAs: ['https://mvdiabetes.com'],
        hasCourse: academicData.courses.map(c => ({
            '@type': 'Course',
            name: c.title,
            description: c.duration,
            provider: {
                '@type': 'EducationalOrganization',
                name: c.provider || 'MV Diabetes',
                sameAs: 'https://mvdiabetes.com'
            }
        }))
    };

    return (
        <main className="font-sans min-h-screen bg-surface">
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Premium Academic Hero */}
            <section className="relative bg-[#044c79] overflow-hidden py-16 md:py-20 lg:py-28">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
                
                <div className="container-site relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-secondary/20 text-secondary mb-6 border border-secondary/30">
                                Academics
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                                Enhance your medical knowledge and skills
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                                Specialized training programs in Diabetology at MV Hospital for Diabetes & Prof. M. Viswanathan Diabetes Research Centre.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="#programs" className="px-8 py-4 bg-secondary text-[#044c79] font-bold rounded-xl hover:bg-white transition-colors">
                                    Explore Courses
                                </a>
                                {advancedCourse?.prospectusUrl && (
                                    <a href={advancedCourse.prospectusUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center gap-2">
                                        Download Prospectus <FileText size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        <div className="relative hidden lg:block">
                            {/* Academic Hero Visual */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                <Image 
                                    src="/images/academics-hero.jpg"
                                    alt="Medical training at MV Diabetes"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#044c79]/40 to-transparent mix-blend-multiply" />
                            </div>
                            
                            {/* Stats Badge */}
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float border border-border">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#044c79] leading-none mb-1">3,000+</p>
                                    <p className="text-sm text-text-secondary font-bold uppercase tracking-wider">Doctors Trained</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Activities Intro */}
            <section className="py-20 bg-white">
                <div className="container-site max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#044c79] mb-6">
                        Academic Activities in MVH & Prof. M.V. DRC
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        MV Hospital for Diabetes extends its excellence beyond patient care into rigorous medical education. 
                        Our academic programs are designed to train the next generation of experts in clinical diabetology, 
                        equipping them with the advanced knowledge and practical skills required to tackle diabetes effectively.
                    </p>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-20 bg-surface">
                <div className="container-site max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Our Programs</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#044c79]">
                            Specialized Academic Courses
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Course 1: ACCD */}
                        {advancedCourse && (
                            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col h-full hover:shadow-xl hover:border-primary/20 transition-all">
                                <div className="flex items-start justify-between mb-8 gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 border border-primary/10">
                                        <BookOpen size={32} />
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 bg-surface rounded-full text-xs font-bold text-text-secondary uppercase tracking-wider border border-border">
                                            Academic Program
                                        </span>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-[#044c79] mb-2">{advancedCourse.title}</h3>
                                {advancedCourse.provider && (
                                    <p className="text-primary font-bold mb-8">{advancedCourse.provider}</p>
                                )}
                                
                                <div className="space-y-6 flex-grow mb-10">
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-secondary mt-1 shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-text-secondary font-bold uppercase mb-1">Duration</p>
                                            <p className="text-text-primary whitespace-pre-line">{advancedCourse.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Calendar className="text-secondary mt-1 shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-text-secondary font-bold uppercase mb-1">Application Intake</p>
                                            <p className="text-text-primary">{advancedCourse.intake}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-secondary mt-1 shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-text-secondary font-bold uppercase mb-1">Mode</p>
                                            <p className="text-text-primary">{advancedCourse.mode}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-border">
                                    {advancedCourse.applicationUrl && (
                                        <a href={advancedCourse.applicationUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">
                                            Application Form <FileText size={18} />
                                        </a>
                                    )}
                                    {advancedCourse.prospectusUrl && (
                                        <a href={advancedCourse.prospectusUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3.5 bg-surface text-[#044c79] font-bold rounded-xl border-2 border-border hover:border-primary/30 transition-colors">
                                            View Prospectus
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Course 2: FCD */}
                        {fellowshipCourse && (
                            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col h-full hover:shadow-xl hover:border-secondary/30 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10" />
                                
                                <div className="flex items-start justify-between mb-8 gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary-dark flex items-center justify-center shrink-0 border border-secondary/20">
                                        <Award size={32} />
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 bg-[#ffbd2a]/20 text-[#b4800b] rounded-full text-xs font-bold uppercase tracking-wider border border-[#ffbd2a]/30">
                                            Fellowship Program
                                        </span>
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-[#044c79] mb-8 pr-8">{fellowshipCourse.title}</h3>
                                
                                <div className="space-y-6 flex-grow mb-10">
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-secondary mt-1 shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-text-secondary font-bold uppercase mb-1">Duration</p>
                                            <p className="text-text-primary whitespace-pre-line">{fellowshipCourse.duration}</p>
                                        </div>
                                    </div>
                                    {fellowshipCourse.admission && (
                                        <div className="flex items-start gap-4">
                                            <BookOpen className="text-secondary mt-1 shrink-0" size={20} />
                                            <div>
                                                <p className="text-sm text-text-secondary font-bold uppercase mb-1">Admission</p>
                                                <p className="text-text-primary">{fellowshipCourse.admission}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-secondary mt-1 shrink-0" size={20} />
                                        <div>
                                            <p className="text-sm text-text-secondary font-bold uppercase mb-1">Mode</p>
                                            <p className="text-text-primary">{fellowshipCourse.mode}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8 border-t border-border">
                                    {fellowshipCourse.applicationUrl && (
                                        <a href={fellowshipCourse.applicationUrl} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 py-3.5 bg-[#044c79] text-white font-bold rounded-xl hover:bg-[#033a5d] transition-colors">
                                            Download Application <FileText size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FCD Award Highlight */}
            <section className="py-24 bg-white border-y border-border overflow-hidden">
                <div className="container-site max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl transform -rotate-3 scale-105" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={academicData.awardImage} 
                                alt="MV Hospital FCD Award" 
                                className="relative rounded-3xl shadow-xl border border-border w-full max-w-md mx-auto lg:mx-0 object-contain bg-white p-4"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#044c79] mb-6">
                                FCD Program
                            </h2>
                            <p className="text-xl text-text-primary leading-relaxed font-medium mb-8">
                                Fellowship in Clinical Diabetology is our premier training program recognizing excellence in diabetes care and research.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-10">
                                This comprehensive program is designed to provide intensive clinical exposure and academic rigor to physicians aiming to specialize in the complex management of diabetes and its associated complications.
                            </p>
                            {fellowshipCourse?.applicationUrl && (
                                <a href={fellowshipCourse.applicationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-[#044c79] font-bold rounded-xl hover:bg-[#eab308] transition-colors">
                                    Download FCD Application <ArrowRight size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor's Speech (Videos) */}
            <section className="py-24 bg-surface overflow-hidden">
                <div className="container-site max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* Left Side: Video */}
                        <div className="order-2 lg:order-1 relative">
                            {/* Decorative background shape */}
                            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -rotate-3 scale-105" />
                            
                            <div className="relative space-y-6">
                                {academicData.videos.map((video, idx) => (
                                    <div key={idx} className="bg-white rounded-3xl p-4 shadow-xl border border-border">
                                        <div className="aspect-video bg-black rounded-2xl overflow-hidden relative group">
                                            <video 
                                                src={video.src} 
                                                controls 
                                                preload="metadata"
                                                className="w-full h-full object-cover"
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="p-5 text-left">
                                            <h3 className="text-lg font-bold text-[#044c79]">{video.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-secondary/20 text-secondary-dark mb-6 border border-secondary/30">
                                Testimonials
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#044c79] mb-6 leading-tight">
                                Doctor's Speech
                            </h2>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                Watch these short videos on what some doctors from all over India who were trained in our hospital have to say about their training.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Faculty Profiles - Extracted to Client Component */}
            <FacultySection facultyList={academicData.faculty} />

            {/* Collaboration CTA */}
            <section className="py-20 bg-[#044c79] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                <div className="container-site max-w-4xl relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                        Interested in Collaboration?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        For academic collaboration, training enquiries, and professional engagement with our institution.
                    </p>
                    <a href={`mailto:${academicData.contact.email}`} className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-[#044c79] font-bold text-lg rounded-xl hover:bg-white transition-colors shadow-lg">
                        Contact Academic Team
                    </a>
                </div>
            </section>
        </main>
    );
}
