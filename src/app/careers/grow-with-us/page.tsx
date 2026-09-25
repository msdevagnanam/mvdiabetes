import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import GrowHero from '@/components/grow-with-us/GrowHero';
import VisionAndLeadership from '@/components/grow-with-us/VisionAndLeadership';
import CareerCategories from '@/components/grow-with-us/CareerCategories';
import GrowthPathways from '@/components/grow-with-us/GrowthPathways';
import AccessibilityAndBenefits from '@/components/grow-with-us/AccessibilityAndBenefits';
import CareerCTA from '@/components/grow-with-us/CareerCTA';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/careers/grow-with-us');

export default function GrowWithUsPage() {
    // Structured Data (Organization / Employment context)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Grow With Us - Careers at MV Diabetes',
        description: 'Explore career opportunities, professional growth, leadership development and employee benefits at MV Diabetes.',
        url: 'https://mvdiabetes.com/careers/grow-with-us',
        publisher: {
            '@type': 'MedicalOrganization',
            name: 'MV Hospital for Diabetes',
            url: 'https://mvdiabetes.com/'
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
                                    { label: 'Grow With Us', href: '/careers/grow-with-us' }
                                ]} 
                            />
                        </div>
                        
                        <nav className="flex items-center gap-6 overflow-x-auto hide-scrollbar mask-gradient-right w-full lg:w-auto pb-1 lg:pb-0">
                            <a href="#explore" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Vision & Leadership
                            </a>
                            <a href="#categories" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Career Opportunities
                            </a>
                            <a href="#growth" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors whitespace-nowrap px-1">
                                Growth & Benefits
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
                        { label: 'Grow With Us', href: '/careers/grow-with-us' }
                    ]} 
                />
            </div>

            <GrowHero />
            
            <VisionAndLeadership />
            
            <div id="categories">
                <CareerCategories />
            </div>
            
            <div id="growth">
                <GrowthPathways />
                <AccessibilityAndBenefits />
            </div>

            <CareerCTA />
            
        </main>
    );
}
