import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { termsAndConditions } from '@/data/legal';
import { siteConfig } from '@/data/site';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/terms-and-condition');

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
