'use client';

import { useState } from 'react';
import { Paperclip, UploadCloud, X, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';

interface JobApplicationFormProps {
    jobTitle: string;
}

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate a brief submission delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // As per requirements, there is no real HR backend API configured in this project.
        // We gracefully fallback to simulating a successful capture or providing email instructions.
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3">Application Initialized</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                    Due to system limitations, direct uploads are currently offline. Please complete your application by emailing your CV and Cover Letter directly to our HR team at <strong>{siteConfig.email}</strong>.
                </p>
                <a 
                    href={`mailto:${siteConfig.email}?subject=Application for ${jobTitle} Position`}
                    className="inline-flex font-bold items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-all"
                >
                    <Mail size={18} /> Send Application Email
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-text-primary mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        id="fullName"
                        required 
                        autoComplete="name"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-text-primary mb-2">Phone <span className="text-red-500">*</span></label>
                    <input 
                        type="tel" 
                        id="phone"
                        required 
                        autoComplete="tel"
                        className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">Email Address <span className="text-red-500">*</span></label>
                <input 
                    type="email" 
                    id="email"
                    required 
                    autoComplete="email"
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="coverLetter" className="block text-sm font-bold text-text-primary mb-2">Cover Letter <span className="text-red-500">*</span></label>
                <textarea 
                    id="coverLetter"
                    required 
                    rows={5}
                    className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                    placeholder="Tell us why you are a great fit for this role..."
                ></textarea>
            </div>

            <div>
                <span className="block text-sm font-bold text-text-primary mb-2">Upload CV / Resume <span className="text-red-500">*</span></span>
                
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-xl hover:bg-surface transition-colors relative">
                    <div className="space-y-2 text-center">
                        <UploadCloud className="mx-auto h-12 w-12 text-primary/40" />
                        
                        {file ? (
                            <div className="flex flex-col items-center gap-2">
                                <span className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-lg">
                                    <Paperclip size={16} /> {file.name}
                                </span>
                                <button type="button" onClick={() => setFile(null)} className="text-sm text-red-500 hover:underline flex items-center gap-1 mt-1">
                                    <X size={14} /> Remove
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex text-sm text-text-secondary justify-center">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-semibold text-primary hover:text-primary-dark focus-within:outline-none">
                                        <span>Upload a file</span>
                                        <input 
                                            id="file-upload" 
                                            name="file-upload" 
                                            type="file" 
                                            className="sr-only" 
                                            required
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-text-secondary">PDF, DOC, DOCX up to 10MB</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-start mt-6">
                <div className="flex items-center h-5">
                    <input 
                        id="consent" 
                        type="checkbox" 
                        required
                        className="w-4 h-4 border border-border rounded bg-surface focus:ring-3 focus:ring-primary/20 accent-primary" 
                    />
                </div>
                <label htmlFor="consent" className="ml-3 text-sm font-medium text-text-secondary">
                    I consent to the storage and handling of my submitted data by MV Diabetes for recruitment purposes in accordance with the Privacy Policy. <span className="text-red-500">*</span>
                </label>
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white font-bold px-8 py-4 rounded-xl hover:bg-secondary-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg flex justify-center items-center"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Processing Application...
                        </>
                    ) : (
                        'Submit Application'
                    )}
                </button>
            </div>
        </form>
    );
}
