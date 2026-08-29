import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { branches } from '@/data/branches';

const footerLinks = {
    about: [
        { label: 'Our Story', href: '/about-us' },
        { label: 'Vision & Mission', href: '/about-us#vision-mission' },
        { label: 'Branches', href: '/about/branches' },
        { label: 'Facilities', href: '/about/facilities' },
        { label: 'Infrastructure', href: '/about/infrastructure' },
        { label: 'CSR Activities', href: '/csr' },
    ],
    care: [
        { label: 'Diabetes Care', href: '/care/diabetes-care' },
        { label: 'Diabetic Foot Care', href: '/care/diabetic-foot-care' },
        { label: 'Podiatry', href: '/care/podiatry' },
        { label: 'Kidney Care', href: '/care/kidney-care' },
        { label: 'Obesity Management', href: '/care/obesity-management' },
        { label: 'Eye Care', href: '/care/diabetic-eye-care' },
        { label: 'Yoga', href: '/care/yoga' },
    ],
    quickLinks: [
        { label: 'Doctors', href: '/doctors' },
        { label: 'Health Packages', href: '/packages' },
        { label: 'Checkups', href: '/checkups' },
        { label: 'Academics', href: '/academics' },
        { label: 'Research', href: '/research' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
    ],
    support: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Book Appointment', href: '/appointment' },
        { label: 'FAQ', href: '/faq' },
        { label: 'News & Events', href: '/news' },
        { label: 'Videos', href: '/videos' },
    ],
};

const socialLinks = [
    { href: siteConfig.social.facebook, label: 'Facebook', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
    { href: siteConfig.social.linkedin, label: 'LinkedIn', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> },
    { href: siteConfig.social.instagram, label: 'Instagram', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> },
    { href: siteConfig.social.youtube, label: 'YouTube', svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1c.3-1.3 1.3-2.3 2.5-2.6 2.2-.6 6-.6 7-.6s4.8 0 7 .6c1.2.3 2.2 1.3 2.5 2.6.5 2 .5 5.5.5 5.5s0 3.5-.5 5.5c-.3 1.3-1.3 2.3-2.5 2.6-2.2.6-6 .6-7 .6s-4.8 0-7-.6c-1.2-.3-2.2-1.3-2.5-2.6-.5-2-.5-5.5-.5-5.5s0-3.5.5-5.5z" /><path d="m10 15 5-3-5-3v6z" /></svg> },
];

export default function Footer() {
    const mainBranch = branches.find((b) => b.isMainBranch);

    return (
        <div className="pb-4 lg:pb-6 pt-12 lg:pt-16 px-4 xl:px-0 bg-surface-muted">
            <footer className="container-site !max-w-[1320px] mx-auto bg-primary-dark text-white/80 rounded-3xl overflow-hidden shadow-2xl relative mb-4">
                {/* Main Footer */}
                <div className="px-6 lg:px-8 pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="flex items-center mb-5">
                                <Image
                                    src="/images/logo/mv-logo.png"
                                    alt="MV Diabetes Logo"
                                    width={200}
                                    height={64}
                                    className="h-12 lg:h-14 w-auto object-contain brightness-0 invert"
                                />
                            </Link>
                            <p className="text-sm leading-relaxed text-white/60 mb-6">
                                {siteConfig.tagline}. India&apos;s first hospital exclusively for diabetes.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(({ svg, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
                                        aria-label={label}
                                    >
                                        {svg}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">About</h4>
                            <ul className="space-y-2.5">
                                {footerLinks.about.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Diabetes Care</h4>
                            <ul className="space-y-2.5">
                                {footerLinks.care.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
                            <ul className="space-y-2.5">
                                {footerLinks.quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
                            <ul className="space-y-4">
                                {mainBranch && (
                                    <li className="flex gap-2.5">
                                        <MapPin size={16} className="shrink-0 mt-0.5 text-white/40" />
                                        <span className="text-sm text-white/60">{mainBranch.address}</span>
                                    </li>
                                )}
                                <li>
                                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                                        <Phone size={16} className="shrink-0 text-white/40" />
                                        {siteConfig.phone}
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                                        <Mail size={16} className="shrink-0 text-white/40" />
                                        {siteConfig.email}
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="/appointment"
                                    className="inline-flex items-center px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary/90 transition-colors"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container-site flex flex-col sm:flex-row items-center justify-between py-5 gap-3">
                        <p className="text-xs text-white/40">
                            © {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms</Link>
                            <Link href="/disclaimer" className="text-xs text-white/40 hover:text-white/70 transition-colors">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
