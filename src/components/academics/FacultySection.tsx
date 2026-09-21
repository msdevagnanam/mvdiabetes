'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { AcademicFaculty } from '@/data/academics';
import FacultyModal from '@/components/academics/FacultyModal';

interface FacultySectionProps {
    facultyList: AcademicFaculty[];
}

export default function FacultySection({ facultyList }: FacultySectionProps) {
    const [selectedFaculty, setSelectedFaculty] = useState<AcademicFaculty | null>(null);

    return (
        <section className="py-24 bg-white border-t border-border">
            {selectedFaculty && (
                <FacultyModal 
                    faculty={selectedFaculty} 
                    onClose={() => setSelectedFaculty(null)} 
                />
            )}
            
            <div className="container-site max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#044c79] mb-4">
                        Academic Faculty & Contributors
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Learn from our distinguished team of medical professionals and researchers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyList.map((doc) => (
                        <div key={doc.id} className="bg-surface rounded-3xl p-8 border border-border hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col h-full text-center">
                            <div className="w-24 h-24 mx-auto bg-white rounded-full mb-6 p-1 shadow-md overflow-hidden relative">
                                {doc.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <div className="w-full h-full bg-surface-muted flex items-center justify-center rounded-full">
                                        <span className="text-[#044c79] font-black text-2xl">{doc.name.replace('Dr. ', '').charAt(0)}</span>
                                    </div>
                                )}
                            </div>
                            
                            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                                {doc.name}
                            </h3>
                            <p className="text-sm font-bold text-secondary-dark uppercase tracking-wider mb-4">
                                {doc.role.split('\n')[0]}
                            </p>
                            {doc.experience && (
                                <p className="text-sm text-text-secondary mb-6 line-clamp-2">
                                    {doc.experience}
                                </p>
                            )}
                            
                            <div className="mt-auto pt-6 border-t border-border/50">
                                <button 
                                    onClick={() => setSelectedFaculty(doc)}
                                    className="inline-flex items-center gap-2 text-[#044c79] font-bold hover:text-primary transition-colors"
                                >
                                    View Profile <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
