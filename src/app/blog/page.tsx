import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogListing from '@/components/blog/BlogListing';
import BlogCTA from '@/components/blog/BlogCTA';

export const metadata: Metadata = {
  title: 'Diabetes Blog & Knowledge Centre | MV Diabetes',
  description: 'Explore our comprehensive library of expert articles, practical guides, and the latest advancements in diabetes management from the specialists at MV Diabetes.',
};

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
