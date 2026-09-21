import type { Metadata } from 'next';
import YogaHero from '@/components/yoga/YogaHero';
import YogaIntroduction from '@/components/yoga/YogaIntroduction';
import YogaSpecialClasses from '@/components/yoga/YogaSpecialClasses';
import YogaAllRanges from '@/components/yoga/YogaAllRanges';
import YogaClassLevels from '@/components/yoga/YogaClassLevels';
import YogaPoses from '@/components/yoga/YogaPoses';
import YogaIntegration from '@/components/yoga/YogaIntegration';
import YogaBenefits from '@/components/yoga/YogaBenefits';
import YogaMembership from '@/components/yoga/YogaMembership';
import YogaCTA from '@/components/yoga/YogaCTA';
import { whyYoga, yogaHeroImage, yogaRoles } from '@/data/yoga';
import { siteConfig } from '@/data/site';

const description =
    'Explore Yoga at MV Diabetes, including diabetes-focused yoga classes, breathing and relaxation practices, special classes, and structured Yoga programs.';

export const metadata: Metadata = {
    title: 'Yoga for Diabetes | Online Yoga Classes',
    description,
    openGraph: {
        title: 'Yoga for Diabetes | Online Yoga Classes | MV Diabetes',
        description,
        url: `${siteConfig.url}/care/yoga`,
        images: [
            {
                url: `${siteConfig.url}${yogaHeroImage.src}`,
                width: yogaHeroImage.width,
                height: yogaHeroImage.height,
                alt: yogaHeroImage.alt,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yoga for Diabetes | Online Yoga Classes | MV Diabetes',
        description,
    },
    alternates: { canonical: '/care/yoga' },
};

export default function YogaPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Care', item: `${siteConfig.url}/care` },
            { '@type': 'ListItem', position: 3, name: 'Yoga' },
        ],
    };

    const medicalWebPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Yoga for Diabetes',
        description: whyYoga.intro,
        url: `${siteConfig.url}/care/yoga`,
        inLanguage: 'en-IN',
        about: {
            '@type': 'MedicalCondition',
            name: 'Diabetes',
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
        significantLink: yogaRoles.map(role => `${siteConfig.url}/care/yoga#${role.id}`),
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

            <YogaHero />
            <YogaIntroduction />
            <YogaSpecialClasses />
            <YogaAllRanges />
            <YogaClassLevels />
            <YogaPoses />
            <YogaIntegration />
            <YogaBenefits />
            <YogaMembership />
            <YogaCTA />
        </>
    );
}
