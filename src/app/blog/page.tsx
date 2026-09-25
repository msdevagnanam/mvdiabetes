import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogListing from '@/components/blog/BlogListing';
import BlogCTA from '@/components/blog/BlogCTA';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/blog');

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen font-sans">
      <BlogHero />
      <BlogListing />
      <div className="container-site">
        <BlogCTA />
      </div>
    </main>
  );
}
