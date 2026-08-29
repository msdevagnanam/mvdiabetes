import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
    title: 'Medical Disclaimer — MV Diabetes',
    description: 'Medical Disclaimer for MV Diabetes website content and online services.',
    alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
    return (
        <>
            <PageHero title="Medical Disclaimer" description="Important information about the medical content on our website." breadcrumbs={[{ label: 'Disclaimer' }]} />
            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_ul]:space-y-1 [&_li]:text-text-secondary">
                        <p>Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>

                        <h2>1. Not Medical Advice</h2>
                        <p>The information on this website is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content, including text, graphics, images, and information, contained on or available through this website is for general information purposes only.</p>

                        <h2>2. No Doctor-Patient Relationship</h2>
                        <p>Your use of this website and any communication with MV Diabetes through this website does not create a doctor-patient relationship prior to a formal consultation at our hospital or clinics.</p>

                        <h2>3. Treatment Decisions</h2>
                        <p>NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR ACCESSED THROUGH THIS WEBSITE.</p>
                        <p>MV Diabetes makes no representation and assumes no responsibility for the accuracy of information contained on or available through this website, and such information is subject to change without notice. You are encouraged to confirm any information obtained from or through this website with other sources, and review all information regarding any medical condition or treatment with your physician.</p>

                        <h2>4. Emergencies</h2>
                        <p>If you think you may have a medical emergency, call your doctor, go to the nearest hospital emergency department, or call emergency services immediately. DO NOT use this website for medical emergencies.</p>

                        <h2>5. Testimonials and Success Stories</h2>
                        <p>Any testimonials or success stories presented on this website are real-life experiences of patients. However, individual results may vary. Testimonials are not intended as a guarantee that anyone will achieve the same or similar results.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
