import { Metadata } from 'next';
import ProductsHero from '@/components/sections/products/ProductsHero';
import ProductsIntro from '@/components/sections/products/ProductsIntro';
import ProductsCategories from '@/components/sections/products/ProductsCategories';
import ProductsGrid from '@/components/sections/products/ProductsGrid';
import ProductsEditorial from '@/components/sections/products/ProductsEditorial';
import ProductsEducation from '@/components/sections/products/ProductsEducation';
import ProductsInfo from '@/components/sections/products/ProductsInfo';
import ProductsFAQ from '@/components/sections/products/ProductsFAQ';
import ProductsFinalCTA from '@/components/sections/products/ProductsFinalCTA';

export const metadata: Metadata = {
    title: 'Diabetic Footwear & Therapeutic Shoes | MV Diabetes',
    description:
        'Explore therapeutic and diabetic footwear featured by MV Diabetes, designed with patented technology and clinical testing for comfort, support and foot health.',
    alternates: {
        canonical: 'https://mvdiabetes.vercel.app/our-products',
    },
    openGraph: {
        title: 'Diabetic Footwear & Therapeutic Shoes | MV Diabetes',
        description:
            'Explore therapeutic and diabetic footwear featured by MV Diabetes, designed with patented technology and clinical testing for comfort, support and foot health.',
        url: 'https://mvdiabetes.vercel.app/our-products',
        siteName: 'MV Diabetes',
        type: 'website',
        images: [
            {
                url: 'https://mvdiabetes.vercel.app/images/products-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'MV Diabetes Therapeutic Diabetic Footwear',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Diabetic Footwear & Therapeutic Shoes | MV Diabetes',
        description:
            'Explore therapeutic and diabetic footwear featured by MV Diabetes, designed with patented technology and clinical testing for comfort, support and foot health.',
    },
};

export default function OurProductsPage() {
    return (
        <>
            {/* Section 01 — Hero */}
            <ProductsHero />

            {/* Section 02 — Introduction */}
            <ProductsIntro />

            {/* Section 03 — Shop by Category */}
            <ProductsCategories />

            {/* Section 04 — Featured Product Grid */}
            <ProductsGrid />

            {/* Section 05 — Every Step Matters */}
            <ProductsEditorial />

            {/* Section 06 — Footwear Education */}
            <ProductsEducation />

            {/* Section 07 — Do You Need Diabetic Footwear? */}
            <ProductsInfo />

            {/* Section 08 — FAQ Accordion */}
            <ProductsFAQ />

            {/* Section 09 — Final CTA */}
            <ProductsFinalCTA />
        </>
    );
}
