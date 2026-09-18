'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Award, BookOpen, Users, Activity, FileText, CheckCircle2 } from 'lucide-react';
import { AcademicFaculty } from '@/data/academics';

interface FacultyModalProps {
    faculty: AcademicFaculty;
    onClose: () => void;
}

export default function FacultyModal({ faculty, onClose }: FacultyModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
        
        // Trap focus
        if (modalRef.current) {
            modalRef.current.focus();
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // match animation duration
    };

    // Close on backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div 
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            onClick={handleBackdropClick}
        >
            <div 
                ref={modalRef}
                tabIndex={-1}
                className={`bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl relative outline-none transition-all duration-300 ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`modal-title-${faculty.id}`}
            >
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 md:top-5 md:right-5 z-20 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                    aria-label="Close profile"
                >
                    <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="bg-[#044c79] text-white p-6 md:p-8 shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Profile Image / Fallback */}
                        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white p-1.5 rounded-2xl shadow-xl overflow-hidden relative">
                            {faculty.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover rounded-xl" />
                            ) : (
                                <div className="w-full h-full bg-surface-muted flex items-center justify-center rounded-xl border border-border">
                                    <span className="text-[#044c79] font-black text-3xl">{faculty.name.replace('Dr. ', '').charAt(0)}</span>
                                </div>
                            )}
                        </div>

                        <div className="text-center md:text-left pt-1">
                            <h2 id={`modal-title-${faculty.id}`} className="text-2xl md:text-3xl font-extrabold mb-1.5">{faculty.name}</h2>
                            <p className="text-base md:text-lg text-[#ffbd2a] font-bold mb-3">{faculty.role}</p>
                            {faculty.experience && (
                                <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
                                    <Award size={16} className="text-[#ffbd2a]" /> {faculty.experience}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Modal Content - Scrollable Area */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        
                        {/* Left Column */}
                        <div className="space-y-8">
                            
                            {faculty.specialInterests && faculty.specialInterests.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <Activity className="text-[#ffbd2a]" size={20} /> 
                                        Special Interests & Expertise
                                    </h3>
                                    <ul className="space-y-2.5 list-none p-0 m-0">
                                        {faculty.specialInterests.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base">
                                                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {faculty.clinicalRoles && faculty.clinicalRoles.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <CheckCircle2 className="text-[#ffbd2a]" size={20} /> 
                                        Clinical Roles & Qualifications
                                    </h3>
                                    <ul className="space-y-2.5 bg-surface p-5 rounded-2xl border border-border list-none m-0">
                                        {faculty.clinicalRoles.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {faculty.memberships && faculty.memberships.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <Users className="text-[#ffbd2a]" size={20} /> 
                                        Professional Memberships
                                    </h3>
                                    <ul className="space-y-2.5 list-none p-0 m-0">
                                        {faculty.memberships.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            
                            {faculty.research && faculty.research.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <FileText className="text-[#ffbd2a]" size={20} /> 
                                        Research & Publications
                                    </h3>
                                    <div className="bg-surface p-5 rounded-2xl border border-border">
                                        <ul className="space-y-3 list-none p-0 m-0">
                                            {faculty.research.map((item, idx) => (
                                                <li key={idx} className="text-text-primary text-sm md:text-base border-b border-border/50 pb-3 last:border-0 last:pb-0">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            )}

                            {faculty.academicContributions && faculty.academicContributions.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <BookOpen className="text-[#ffbd2a]" size={20} /> 
                                        Academic Contributions
                                    </h3>
                                    <ul className="space-y-2.5 list-none p-0 m-0">
                                        {faculty.academicContributions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                            
                            {faculty.awards && faculty.awards.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <Award className="text-[#ffbd2a]" size={20} /> 
                                        Awards & Recognition
                                    </h3>
                                    <ul className="space-y-2.5 bg-secondary/5 p-5 rounded-2xl border border-secondary/20 list-none m-0">
                                        {faculty.awards.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base font-medium">
                                                <span className="text-secondary mt-0.5">★</span>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                            
                            {faculty.community && faculty.community.length > 0 && (
                                <section>
                                    <h3 className="text-lg font-bold text-[#044c79] mb-4 flex items-center gap-2.5">
                                        <Users className="text-[#ffbd2a]" size={20} /> 
                                        Community Involvement
                                    </h3>
                                    <ul className="space-y-2.5 list-none p-0 m-0">
                                        {faculty.community.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-text-primary text-sm md:text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
