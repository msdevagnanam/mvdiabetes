import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { disclaimer } from '@/data/legal';
import { siteConfig } from '@/data/site';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/disclaimer');

export default function Page() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Disclaimer' },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <LegalPage
                document={disclaimer}
                title="Disclaimer"
                eyebrow="Legal"
                intro="Important information about the content published on the MV Diabetes website."
                notice="The information on this website is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis or treatment."
            />
        </>
    );
}
