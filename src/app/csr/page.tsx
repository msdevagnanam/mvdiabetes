import type { Metadata } from 'next';
import CSRHero from '@/components/csr/CSRHero';
import AmputationSupportFund from '@/components/csr/AmputationSupportFund';
import MadhaviammaTrust from '@/components/csr/MadhaviammaTrust';
import SupportFundSection from '@/components/csr/SupportFundSection';
import CSRTimelineSection from '@/components/csr/CSRTimelineSection';
import CSRCTA from '@/components/csr/CSRCTA';
import { csrSourceTitle, madhaviammaTrust } from '@/data/csr';
import { siteConfig } from '@/data/site';

const description =
    'Explore MV Diabetes Hospital CSR activities, including the Diabetic Amputation Support Fund, the Dr. Madhaviamma Charitable Trust, free health camps, vaccination initiatives and community support.';

export const metadata: Metadata = {
    title: 'CSR Activities | Community & Social Initiatives',
    description,
    openGraph: {
        title: `${csrSourceTitle} | MV Diabetes`,
        description,
        url: `${siteConfig.url}/csr`,
        images: [
            {
                url: `${siteConfig.url}/images/csr/2019/karunalaya-support.jpg`,
                width: 1600,
                height: 1067,
                alt: 'Financial support handed over to Karunalaya, an organisation working for street and working children',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${csrSourceTitle} | MV Diabetes`,
        description,
    },
    alternates: { canonical: '/csr' },
};

export default function CSRPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'CSR' },
        ],
    };

    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: csrSourceTitle,
        description,
        url: `${siteConfig.url}/csr`,
        inLanguage: 'en-IN',
        about: {
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
        mentions: {
            '@type': 'Organization',
            name: madhaviammaTrust.heading,
            foundingDate: madhaviammaTrust.established,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Reveal animations are progressive enhancement — show everything without JS. */}
            <noscript>
                <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
            </noscript>

            <CSRHero />
            <AmputationSupportFund />
            <MadhaviammaTrust />
            <SupportFundSection />
            <CSRTimelineSection />
            <CSRCTA />
        </>
    );
}
