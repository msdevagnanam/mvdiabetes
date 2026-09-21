'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Briefcase, ArrowRight, Calendar, Users, GraduationCap, Clock } from 'lucide-react';
import { JobOpening } from '@/data/careers';

interface JobFilterListProps {
    careers: JobOpening[];
}

export default function JobFilterList({ careers }: JobFilterListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All Job Category');
    const [selectedLocation, setSelectedLocation] = useState<string>('All Job Location');

    // Extract unique categories and locations
    const categories = useMemo(() => {
        const cats = new Set(careers.map(c => c.category));
        return ['All Job Category', ...Array.from(cats)];
    }, [careers]);

    const locations = useMemo(() => {
        const locs = new Set(careers.map(c => c.location));
        return ['All Job Location', ...Array.from(locs)];
    }, [careers]);

    // Filter jobs
    const filteredCareers = useMemo(() => {
        return careers.filter(job => {
            const matchCategory = selectedCategory === 'All Job Category' || job.category === selectedCategory;
            const matchLocation = selectedLocation === 'All Job Location' || job.location === selectedLocation;
            return matchCategory && matchLocation;
        });
    }, [careers, selectedCategory, selectedLocation]);

    return (
        <div id="job-openings" className="w-full">
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="relative">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-64 appearance-none bg-white border border-border text-text-secondary py-3.5 pl-4 pr-10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm cursor-pointer"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full sm:w-64 appearance-none bg-white border border-border text-text-secondary py-3.5 pl-4 pr-10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm cursor-pointer"
                    >
                        {locations.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-secondary">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>

            {/* Jobs List */}
            <div className="space-y-4">
                {filteredCareers.length > 0 ? (
                    filteredCareers.map(job => (
                        <Link href={`/careers/${job.slug}`} key={job.slug}
                            className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/20 transition-all">
                            
                            <div className="flex-grow">
                                <div className="mb-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                                        {job.category}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-extrabold text-text-primary group-hover:text-primary transition-colors leading-tight mb-4">
                                    {job.title}
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 text-sm text-text-secondary">
                                    <span className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary/70" />
                                        {job.location}
                                    </span>
                                    {job.experience && (
                                        <span className="flex items-center gap-2">
                                            <Clock size={16} className="text-primary/70" />
                                            Exp: {job.experience}
                                        </span>
                                    )}
                                    {job.openings && (
                                        <span className="flex items-center gap-2">
                                            <Users size={16} className="text-primary/70" />
                                            {job.openings} opening{job.openings > 1 ? 's' : ''}
                                        </span>
                                    )}
                                    {job.employmentType && (
                                        <span className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-primary/70" />
                                            {job.employmentType}
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            <span className="flex items-center gap-2 text-primary font-bold shrink-0 group-hover:gap-3 transition-all bg-primary/5 px-6 py-3 rounded-full justify-center w-full lg:w-auto mt-2 lg:mt-0">
                                View Details <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-border shadow-sm">
                        <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 text-text-secondary">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">No openings found</h3>
                        <p className="text-text-secondary max-w-sm mx-auto text-lg mb-6">
                            Try changing your search or filters to see other available positions.
                        </p>
                        <button 
                            onClick={() => {
                                setSelectedCategory('All Job Category');
                                setSelectedLocation('All Job Location');
                            }}
                            className="text-primary font-bold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
