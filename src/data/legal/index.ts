import faqData from './faq.json';
import termsData from './terms-and-condition.json';
import privacyData from './privacy-policy.json';
import disclaimerData from './disclaimer.json';

/**
 * FAQ and legal document content.
 *
 * Extracted from the MV Diabetes WordPress pages by
 * scripts/extract-legal-pages.mjs, which reads each page's REST
 * `content.rendered`. That matters for Terms & Conditions: its public URL
 * renders a "store coming soon" template, but the page itself still holds the
 * full document, which is what has been migrated here.
 *
 * Wording is reproduced as published — including source spelling, the
 * "[insert email address]" placeholder in the FAQ, and legal phrasing. Only
 * presentational markup was normalised, and source links were remapped onto
 * routes this site serves. Nothing here may be rewritten, shortened or
 * supplemented with invented clauses.
 */

export type LegalBlock =
    | { type: 'paragraph'; html: string }
    | { type: 'heading'; level: number; html: string }
    | { type: 'list'; ordered: boolean; items: string[] };

export interface LegalSection {
    id: string;
    title: string;
    /** Source heading level, so the document's own hierarchy is preserved. */
    level: number;
    blocks: LegalBlock[];
}

export interface LegalDocument {
    title: string;
    sections: LegalSection[];
}

export interface FaqEntry {
    id: string;
    question: string;
    category: string;
    blocks: LegalBlock[];
    /** Plain text of question and answer, used for client-side search. */
    searchText: string;
}

export const faq = faqData as { title: string; items: FaqEntry[] };
export const termsAndConditions = termsData as unknown as LegalDocument;
export const privacyPolicy = privacyData as unknown as LegalDocument;
export const disclaimer = disclaimerData as unknown as LegalDocument;

/** Question topics in source order, for the FAQ filter. */
export const faqCategories = [...new Set(faq.items.map(item => item.category))];

/**
 * Shared CTA, taken from the wording the source pages carry beneath their
 * content. It points at the site's existing appointment route.
 */
export const legalCta = {
    eyebrow: 'We Are Available',
    heading: 'Interested in Collaboration?',
    buttonLabel: 'Get Appointment',
    href: '/appointment',
};

/**
 * Sections that only introduce their children carry no paragraphs of their
 * own; the table of contents still lists them.
 */
export function tocEntries(document: LegalDocument) {
    return document.sections.map(section => ({
        id: section.id,
        title: section.title,
        level: section.level,
    }));
}
