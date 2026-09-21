import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { faq, faqCategories, legalCta } from '@/data/legal';
import { siteConfig } from '@/data/site';

const description =
    'Answers to common questions about M.V. Diabetes Hospital, including our services, appointments, insurance, patient support and careers.';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description,
    openGraph: {
        title: 'Frequently Asked Questions | MV Diabetes',
        description,
        url: `${siteConfig.url}/faq`,
    },
    twitter: { card: 'summary_large_image', title: 'Frequently Asked Questions | MV Diabetes', description },
    alternates: { canonical: '/faq' },
};

export default function FAQPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
            { '@type': 'ListItem', position: 2, name: 'FAQ' },
        ],
    };

    // Genuine question-and-answer content, so FAQPage schema applies here.
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.searchText.slice(item.question.length).trim(),
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className="border-b border-border bg-[#FAFBFC]">
                <div className="container-site pb-12 pt-4 md:pb-16 md:pt-6">
                    <Breadcrumbs items={[{ label: 'FAQ' }]} />
                    <div className="mt-4 max-w-3xl">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Patient Information
                        </p>
                        <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.08] text-primary-dark sm:text-4xl lg:text-[3rem]">
                            {faq.title === 'FAQ' ? 'Frequently Asked Questions' : faq.title}
                        </h1>
                        <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                            Answers to the questions we are asked most often about the hospital, our
                            services and visiting us.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white section-padding">
                <div className="container-site">
                    <div className="mx-auto max-w-3xl">
                        <FAQAccordion items={faq.items} categories={faqCategories} />
                    </div>
                </div>
            </section>

            <section className="bg-white pb-16 md:pb-20 lg:pb-24">
                <div className="container-site">
                    <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 rounded-2xl border border-border bg-surface-muted/40 p-7 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
                        <div>
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary">
                                {legalCta.eyebrow}
                            </p>
                            <h2 className="mt-2.5 text-xl font-extrabold leading-tight text-primary-dark md:text-2xl">
                                {legalCta.heading}
                            </h2>
                        </div>
                        <Link
                            href={legalCta.href}
                            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-primary-dark px-7 font-bold text-primary-dark transition-colors hover:bg-primary-dark hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
                        >
                            {legalCta.buttonLabel}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
