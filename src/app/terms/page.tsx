import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/data/branches';

export const metadata: Metadata = {
    title: 'Terms & Conditions — MV Diabetes',
    description: 'Terms and Conditions for using MV Diabetes website and services.',
    alternates: { canonical: '/terms' },
};

export default function TermsPage() {
    return (
        <>
            <PageHero title="Terms & Conditions" description="Rules and regulations for using our website and services." breadcrumbs={[{ label: 'Terms' }]} />
            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_ul]:space-y-1 [&_li]:text-text-secondary">
                        <p>Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

                        <h2>2. Medical Information Disclaimer</h2>
                        <p>The information provided on this website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>

                        <h2>3. Use of Website</h2>
                        <p>You agree to use this website only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or the content.</p>

                        <h2>4. Intellectual Property</h2>
                        <p>All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of MV Diabetes or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.</p>

                        <h2>5. Online Appointments and Queries</h2>
                        <p>Online appointment requests through our website act as a request for scheduling. Appointments are only confirmed once our team contacts you. MV Diabetes reserves the right to cancel or reschedule appointments based on doctor availability.</p>

                        <h2>6. Privacy</h2>
                        <p>Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>

                        <h2>7. Changes to Terms</h2>
                        <p>MV Diabetes reserves the right, in its sole discretion, to change the Terms under which the website is offered. The most current version of the Terms will supersede all previous versions.</p>

                        <h2>8. Contact Information</h2>
                        <p>If you have any questions about these Terms, please contact us at:</p>
                        <p>
                            <strong>MV Hospital for Diabetes</strong><br />
                            Main Branch, Royapuram<br />
                            Email: {branches.find(b => b.isMainBranch)?.email}<br />
                            Phone: {branches.find(b => b.isMainBranch)?.phones[0]}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
