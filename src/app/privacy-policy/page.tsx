import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { privacyPolicy } from '@/data/legal';
import { siteConfig } from '@/data/site';

const description =
    'Read the MV Diabetes privacy policy, covering the personal and usage data we collect, cookies, how information is used and shared, retention, security and your choices.';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description,
    openGraph: {
        title: 'Privacy Policy | MV Diabetes',
        description,
        url: `${siteConfig.url}/privacy-policy`,
    },
    twitter: { card: 'summary_large_image', title: 'Privacy Policy | MV Diabetes', description },
    alternates: { canonical: '/privacy-policy' },
};

export default function Page() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Privacy Policy' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <LegalPage
                document={privacyPolicy}
                title="Privacy Policy"
                eyebrow="Legal"
                intro="How MV Diabetes collects, uses and protects your information when you use our website."
            />
        </>
    );
}
