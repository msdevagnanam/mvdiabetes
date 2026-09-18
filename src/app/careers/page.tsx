import type { Metadata } from 'next';
import JobFilterList from '@/components/careers/JobFilterList';
import PageHero from '@/components/ui/PageHero';
import { careers } from '@/data/careers';

export const metadata: Metadata = {
    title: 'Careers — MV Diabetes',
    description: 'Join the MV Diabetes team. Explore current openings across our centres in Chennai and Bengaluru.',
    alternates: { canonical: '/careers' },
};

export default function CareersPage() {
    return (
        <main className="font-sans min-h-screen bg-surface">
            {/* 1. Page Hero Section */}
            <PageHero 
                title="Join Our Team at MV Diabetes" 
                description="At MV Diabetes, we are dedicated to improving the lives of our patients through compassionate, specialized diabetes treatment. We are looking for talented, driven individuals who share our commitment to quality healthcare and excellence." 
                breadcrumbs={[{ label: 'Careers' }]} 
            >
                <a 
                    href="#job-openings" 
                    className="inline-block bg-secondary text-white font-bold px-8 py-3.5 rounded-full hover:bg-secondary-dark hover:scale-105 transition-all shadow-lg mt-2"
                >
                    Join Now
                </a>
            </PageHero>

            {/* 2. Job Openings Section */}
            <section className="py-20 bg-surface">
                <div className="container-site max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
                            Explore Job Openings
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Build a career you can be proud of - join us!
                        </p>
                    </div>

                    <JobFilterList careers={careers} />
                </div>
            </section>
        </main>
    );
}
