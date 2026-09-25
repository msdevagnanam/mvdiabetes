import type { Metadata } from 'next';
import { siteConfig } from './site';

/**
 * Page-level SEO, keyed by route.
 *
 * Titles and descriptions follow the live mvdiabetes.com pages (the URLs Google already ranks) so
 * rankings carry over when this site replaces it. The live copy was cleaned where it was broken:
 * descriptions that stopped mid-sentence with "..." are completed, template placeholders such as
 * "[Your Website Name]" are replaced, and pages whose live SEO described something else entirely
 * (the BMW data page talks about BMW cars; the news page describes a single 2017 article) keep
 * accurate copy of their own.
 */
export interface PageSeo {
    title: string;
    description: string;
    /** Page-specific share image; falls back to the site default. */
    image?: { url: string; width: number; height: number; alt: string };
    ogType?: 'website' | 'article' | 'profile';
}

export const DEFAULT_OG_IMAGE = {
    url: '/images/og/mv-diabetes.jpg',
    width: 1200,
    height: 630,
    alt: 'MV Diabetes — India\'s first hospital exclusively for diabetes',
};

export const pageSeo = {
    '/': {
        title: 'MV Diabetes — India\'s Leading Diabetes Super Specialty Hospital',
        description: siteConfig.description,
    },
    '/about-us': {
        title: 'About Us | Specialized Diabetic Care Center Chennai',
        description: 'Discover the story behind our organization, our values, and our commitment to making a difference. Learn about our team, our achievements and our legacy as India\'s first hospital exclusively for diabetes.',
    },
    '/about/infrastructure': {
        title: 'MV Diabetes | Cutting-Edge Infrastructure Solutions',
        description: 'Explore our cutting-edge hospital infrastructure designed for better diabetes care. From advanced diagnostics and clinical facilities to research and patient care spaces in Royapuram and Koramangala.',
    },
    '/about/facilities': {
        title: 'Explore Comprehensive Hospital Facilities: Ensuring Comfort',
        description: 'Delve into our extensive array of hospital facilities designed to prioritize your comfort and well-being. From state-of-the-art medical services to dedicated patient care at MV Diabetes.',
    },
    '/about/branches': {
        title: 'Find Nearby Hospital Branches for Easy Access',
        description: 'Locate MV Diabetes hospital branches near you effortlessly for convenient access to quality healthcare services across Chennai and Bengaluru.',
    },
    '/prof-m-viswanathan': {
        title: 'The Legacy of Prof. M. Viswanathan | MV Diabetes',
        description: 'Discover the inspiring journey of Prof. M. Viswanathan, the pioneer who established one of India\'s earliest organized diabetes clinics and became known as the Father of Diabetology in India.',
        ogType: 'profile',
    },
    '/care/podiatry': {
        title: 'Expert Podiatry Services: Comprehensive Foot Care Solutions',
        description: 'Discover expert podiatry services dedicated to keeping your feet healthy and pain-free. Our skilled podiatrists offer a range of diabetic foot care and limb salvage treatments.',
    },
    '/care/yoga': {
        title: 'Discover Tranquility Anywhere: Online Yoga Classes',
        description: 'Join our online yoga classes to experience the transformative power of yoga from the comfort of your own space, with diabetes-focused sessions by MV Diabetes.',
    },
    '/care/kidney-care': {
        title: 'Diabetes Kidney Disease | Prevention & Treatment Solutions',
        description: 'Learn about diabetes kidney disease, its causes, symptoms, and effective treatment options. Discover ways to prevent kidney damage with expert care at MV Diabetes.',
    },
    '/care/dental-care': {
        title: 'Diabetic Dentistry | Diabetic Dentistry Near Me in Royapuram',
        description: 'Diabetes is a complex condition that affects more than just blood sugar levels. Its impact extends to various aspects of health, including oral wellness.',
    },
    '/our-products': {
        title: 'Comfortable & Supportive Diabetic Footwear for Healthy Feet',
        description: 'Discover our range of diabetes footwear designed to provide comfort, support, and protection. Shop now for shoes built with patented, clinically tested technology.',
    },
    '/appointment': {
        title: 'Book an Appointment | Expert Diabetes Care at MV Diabetes',
        description: 'Schedule your consultation with MV Diabetes today for expert diabetes care and management. Get personalized treatment from our specialists in Chennai and Bengaluru.',
    },
    '/contact': {
        title: 'Get in Touch | MV Diabetes Support & Assistance',
        description: 'Have questions or need assistance? Contact MV Diabetes today for expert support. Reach out via phone, email or visit our centres in Chennai and Bengaluru.',
    },
    '/blog': {
        title: 'Empowering Health: Insights from MV Diabetes Hospital',
        description: 'Explore our diabetes hospital blog for expert insights, practical tips, and inspiring stories aimed at enhancing your understanding of diabetes care.',
    },
    '/news': {
        title: 'Stay Informed with the Latest in News and Events | MV Diabetes',
        description: 'Explore the latest developments, medical events, research milestones, community initiatives and institutional moments from MV Diabetes.',
    },
    '/videos': {
        title: 'Informative Diabetes Videos: Expert Insights and Guidance',
        description: 'Explore our collection of diabetes videos offering valuable insights, tips, and guidance for managing diabetes effectively, from the specialists at MV Diabetes.',
    },
    '/research': {
        title: 'Research Publications: Explore Cutting-Edge Insights',
        description: 'Delve into a wealth of research publications covering diverse topics and disciplines. Our collection of research publications features diabetes studies by MV Diabetes from 1958 onwards.',
    },
    '/academics': {
        title: 'Explore Academic Courses: Enhance Your Knowledge & Skills',
        description: 'Discover a diverse range of academic courses tailored to your interests and career goals. From foundational training to the Fellowship in Clinical Diabetology at MV Diabetes.',
    },
    '/csr': {
        title: 'Engage in Meaningful CSR Activities: Make a Positive Impact',
        description: 'Join us in our CSR (Corporate Social Responsibility) initiatives and contribute towards creating a better world. Explore opportunities to support free health camps, amputation support and community care.',
    },
    '/careers': {
        title: 'MV Diabetes Hospital Careers | Grow with Us in Healthcare',
        description: 'Discover a fulfilling career at MV Diabetes Hospital. We are seeking passionate individuals committed to excellence in diabetes care across Chennai and Bengaluru.',
    },
    '/careers/grow-with-us': {
        title: 'Grow with Us @ MV Diabetes | Career Opportunities in Chennai',
        description: 'At MV Diabetes, we recruit and develop resourceful individuals who align with our vision and culture. Explore career growth, leadership development and employee benefits.',
    },
    '/careers/why-mv': {
        title: 'Why MV Diabetes: Helping Every Person with Diabetes Live a Normal Life',
        description: 'At MV Diabetes, we are more than just a workplace. We foster a family-oriented culture that prioritizes teamwork and mutual respect.',
    },
    '/faq': {
        title: 'FAQ Guide: Quick Answers to Your Questions',
        description: 'Explore our comprehensive FAQ guide to find quick solutions to common queries. Whether you\'re seeking information about our services, appointments, insurance or careers, we\'re here to help.',
    },
    '/bmw-data': {
        title: 'Biomedical Waste Management (BMW) Data 2021–2022 | MV Diabetes',
        description: 'View MV Diabetes biomedical waste management data for 2021 and 2022, organized by location, month and waste category.',
    },
    '/privacy-policy': {
        title: 'Privacy Policy: Your Privacy Matters | MV Diabetes Hospital',
        description: 'At MV Diabetes, we are committed to protecting your privacy. Our privacy policy outlines how we collect, use, and protect your personal information.',
    },
    '/terms-and-condition': {
        title: 'Terms and Conditions | MV Diabetes Hospital | Royapuram',
        description: 'Read our comprehensive Terms and Conditions to understand the guidelines, responsibilities, and rights governing your use of the MV Diabetes website.',
    },
    '/disclaimer': {
        title: 'Important Information About Our Website | MV Diabetes',
        description: 'Our disclaimer page provides important information about the content and services offered on the MV Diabetes website. While we strive for accuracy, it is not a substitute for professional medical advice.',
    },
} satisfies Record<string, PageSeo>;

export type SeoRoute = keyof typeof pageSeo;

/**
 * Builds consistent metadata for a route: exact title (no template suffix, so it matches the live
 * site), description, canonical URL and Open Graph / Twitter tags. `image` overrides the default
 * share image for pages that have a better one of their own.
 */
export function buildPageMetadata(route: SeoRoute, overrides: Partial<PageSeo> = {}): Metadata {
    return buildMetadata(route, { ...pageSeo[route], ...overrides });
}

/** Same as buildPageMetadata, for dynamic routes whose SEO copy comes from their own data. */
export function buildMetadata(route: string, seo: PageSeo): Metadata {
    const image = seo.image ?? DEFAULT_OG_IMAGE;
    return {
        title: { absolute: seo.title },
        description: seo.description,
        alternates: { canonical: route },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: route,
            siteName: siteConfig.name,
            locale: 'en_IN',
            type: seo.ogType ?? 'website',
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
            images: [image.url],
        },
    };
}
