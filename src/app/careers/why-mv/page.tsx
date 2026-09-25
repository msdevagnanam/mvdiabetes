import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import WhyMVHero from '@/components/why-mv/WhyMVHero';
import MissionStatement from '@/components/why-mv/MissionStatement';
import InstitutionalTrust from '@/components/why-mv/InstitutionalTrust';
import CoreValues from '@/components/why-mv/CoreValues';
import WorkplaceCulture from '@/components/why-mv/WorkplaceCulture';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/careers/why-mv');

export default function WhyMVPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Why MV Diabetes',
        description: 'At MV Diabetes and the Prof. M. Viswanathan Diabetes Research Centre, our mission is simple yet profound: Every person having diabetes should be helped to live his normal span life in perfect health.',
        url: 'https://mvdiabetes.com/careers/why-mv',
        publisher: {
            '@type': 'MedicalOrganization',
            name: 'MV Hospital for Diabetes',
            foundingDate: '1954',
            founder: {
                '@type': 'Person',
                name: 'Prof. M. Viswanathan'
            },
            logo: {
                '@type': 'ImageObject',
                url: 'https://mvdiabetes.com/logo.png'
            }
        }
    };

    return (
        <main className="bg-surface font-sans min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {/* Sticky In-Page Navigation (Desktop) / Horizontal Scroll (Mobile) */}
            <div className="bg-white/90 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm transition-all">
                <div className="container-site">
                    <div className="flex items-center justify-between py-3">
                        <div className="hidden lg:block">
                            <Breadcrumbs 
                                items={[
                                    { label: 'Careers', href: '/careers' }, 
                                    { label: 'Why MV Diabetes', href: '/careers/why-mv' }
                                ]} 
                            />
                        </div>
                        
                        <nav className="flex items-center gap-6 overflow-x-auto hide-scrollbar mask-gradient-right w-full lg:w-auto pb-1 lg:pb-0">
                            <a href="#mission" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Mission
                            </a>
                            <a href="#pioneers" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Pioneers
                            </a>
                            <a href="#values" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Our Values
                            </a>
                            <a href="#people" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Our People
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* In case mobile view needs breadcrumbs too */}
            <div className="lg:hidden container-site py-4">
                <Breadcrumbs 
                    items={[
                        { label: 'Careers', href: '/careers' }, 
                        { label: 'Why MV Diabetes', href: '/careers/why-mv' }
                    ]} 
                />
            </div>

            <WhyMVHero />
            <MissionStatement />
            <InstitutionalTrust />
            <CoreValues />
            <WorkplaceCulture />
            
        </main>
    );
}
