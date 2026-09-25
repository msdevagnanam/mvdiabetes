import type { Metadata } from 'next';
import ResearchHero from '@/components/research/ResearchHero';
import ResearchIntro from '@/components/research/ResearchIntro';
import ResearchArchive from '@/components/research/ResearchArchive';
import ResearchCTA from '@/components/research/ResearchCTA';
import { researchStats, type SortOrder } from '@/data/research/publications';
import { siteConfig } from '@/data/site';
import { buildPageMetadata } from '@/data/seo';

const description =
    'Explore the MV Diabetes research publications archive, featuring scientific publications and research contributions spanning from 1958 onwards.';

export const metadata: Metadata = buildPageMetadata('/research');

const SORTS: SortOrder[] = ['newest', 'oldest', 'source'];

function firstValue(value: string | string[] | undefined) {
    return Array.isArray(value) ? value[0] : value;
}

export default async function ResearchPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;

    const q = firstValue(params.q)?.trim() || undefined;

    const yearParam = Number(firstValue(params.year));
    const year = Number.isInteger(yearParam) ? yearParam : undefined;

    const sortParam = firstValue(params.sort) as SortOrder | undefined;
    const sort = sortParam && SORTS.includes(sortParam) ? sortParam : undefined;

    const pageParam = Number(firstValue(params.page));
    const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : undefined;

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'Research' },
        ],
    };

    /**
     * The page is described as a collection. Individual ScholarlyArticle records
     * are deliberately not emitted: the source citations do not carry reliable
     * per-record authors, journals or publication dates for all 896 entries, and
     * inventing those fields to satisfy a schema would misrepresent the archive.
     */
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Research Publications',
        description,
        url: `${siteConfig.url}/research`,
        inLanguage: 'en-IN',
        about: { '@type': 'MedicalCondition', name: 'Diabetes' },
        publisher: {
            '@type': 'MedicalBusiness',
            name: siteConfig.fullName,
            url: siteConfig.url,
        },
        mainEntity: {
            '@type': 'Dataset',
            name: `MV Diabetes research publications, ${researchStats.earliestYear}–${researchStats.latestYear}`,
            description: `${researchStats.total} publication records across ${researchStats.years} years.`,
            temporalCoverage: `${researchStats.earliestYear}/${researchStats.latestYear}`,
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />

            {/* Reveal animations are progressive enhancement — show everything without JS. */}
            <noscript>
                <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
            </noscript>

            <ResearchHero />
            <ResearchIntro />
            <ResearchArchive q={q} year={year} sort={sort} page={page} />
            <ResearchCTA />
        </>
    );
}
