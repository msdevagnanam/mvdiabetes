import type { Metadata } from 'next';
import PodiatryHero from '@/components/podiatry/PodiatryHero';
import PodiatryOverview from '@/components/podiatry/PodiatryOverview';
import PodiatryServiceGrid from '@/components/podiatry/PodiatryServiceGrid';
import LimbSalvageSection from '@/components/podiatry/LimbSalvageSection';
import WhyFootCareSection from '@/components/podiatry/WhyFootCareSection';
import PodiatryCTA from '@/components/podiatry/PodiatryCTA';
import { podiatryHeroImage, podiatryIntro, podiatryServices } from '@/data/podiatry';
import { siteConfig } from '@/data/site';

const description =
    'Specialized podiatry and diabetic foot care at MV Diabetes — foot and lower extremity assessment, corrective procedures for limb salvage, ozone therapy, magneto therapy, foot education and our Foot Clinic & Podiatry unit.';

export const metadata: Metadata = {
    title: 'Podiatry & Diabetic Foot Care',
    description,
    openGraph: {
        title: 'Podiatry & Diabetic Foot Care | MV Diabetes',
        description,
        url: `${siteConfig.url}/care/podiatry`,
        images: [
            {
                url: `${siteConfig.url}${podiatryHeroImage.src}`,
                width: podiatryHeroImage.width,
                height: podiatryHeroImage.height,
                alt: podiatryHeroImage.alt,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Podiatry & Diabetic Foot Care | MV Diabetes',
        description,
    },
    alternates: { canonical: '/care/podiatry' },
};

export default function PodiatryPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Care', item: `${siteConfig.url}/care` },
            { '@type': 'ListItem', position: 3, name: 'Podiatry' },
        ],
    };

    const medicalWebPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Podiatry & Diabetic Foot Care',
        description: podiatryIntro,
        url: `${siteConfig.url}/care/podiatry`,
        inLanguage: 'en-IN',
        about: {
            '@type': 'MedicalSpecialty',
            name: 'Podiatric',
        },
        provider: {
            '@type': 'MedicalBusiness',
            name: siteConfig.fullName,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'No.4, West Madha Church Street, Royapuram',
                addressLocality: 'Chennai',
                postalCode: '600013',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
            },
        },
        significantLink: podiatryServices.map(
            service => `${siteConfig.url}/care/podiatry#${service.id}`,
        ),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
            />

            {/* Reveal animations are progressive enhancement — show everything without JS. */}
            <noscript>
                <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
            </noscript>

            <PodiatryHero />
            <PodiatryOverview />
            <PodiatryServiceGrid />
            <LimbSalvageSection />
            <WhyFootCareSection />
            <PodiatryCTA />
        </>
    );
}
