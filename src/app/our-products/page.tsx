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
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/our-products', { image: { url: '/images/products/shop-hero.jpg', width: 2560, height: 1179, alt: 'MV Diabetes therapeutic diabetic footwear' } });

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
