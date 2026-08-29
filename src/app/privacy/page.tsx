import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { branches } from '@/data/branches';

export const metadata: Metadata = {
    title: 'Privacy Policy — MV Diabetes',
    description: 'Privacy Policy and data protection guidelines for MV Diabetes patients and website users.',
    alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
    return (
        <>
            <PageHero title="Privacy Policy" description="How we protect and manage your personal and medical information." breadcrumbs={[{ label: 'Privacy Policy' }]} />
            <section className="section-padding bg-white">
                <div className="container-site max-w-4xl">
                    <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-text-primary [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:space-y-1 [&_li]:text-text-secondary">
                        <p>Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</p>

                        <h2>1. Introduction</h2>
                        <p>MV Hospital for Diabetes and Prof. M. Viswanathan Diabetes Research Centre (&quot;MV Diabetes&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, and date of birth.</li>
                            <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
                            <li><strong>Health Data:</strong> includes medical history, current health status, test results, and treatment plans necessary for providing medical care.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>To provide medical care and related services.</li>
                            <li>To process your appointment requests and manage your schedule.</li>
                            <li>To communicate with you regarding your treatment, appointments, or inquiries.</li>
                            <li>To improve our website, services, and patient experience.</li>
                            <li>To comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

                        <h2>5. Data Retention</h2>
                        <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any medical, legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.</p>

                        <h2>6. Your Legal Rights</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

                        <h2>7. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
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
