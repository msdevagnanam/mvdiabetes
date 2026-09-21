import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { termsAndConditions } from '@/data/legal';
import { siteConfig } from '@/data/site';

const description =
    'The terms and conditions governing use of the MV Diabetes website, including cookies, licensing, hyperlinking, content liability and disclaimer.';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description,
    openGraph: {
        title: 'Terms & Conditions | MV Diabetes',
        description,
        url: `${siteConfig.url}/terms-and-condition`,
    },
    twitter: { card: 'summary_large_image', title: 'Terms & Conditions | MV Diabetes', description },
    alternates: { canonical: '/terms-and-condition' },
};

export default function Page() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Terms & Conditions' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <LegalPage
                document={termsAndConditions}
                title="Terms & Conditions"
                eyebrow="Legal"
                intro="The rules and regulations for the use of the MV Diabetes website."
            />
        </>
    );
}
