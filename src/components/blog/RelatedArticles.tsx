import Link from 'next/link';
import { BlogPost, getRelatedPosts } from '@/data/blogData';
import BlogCard from './BlogCard';

export default function RelatedArticles({ post, count = 3 }: { post: BlogPost, count?: number }) {
  const relatedPosts = getRelatedPosts(post, count);
  
  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-surface-muted border-t border-border">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 font-sans">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Read More</h2>
            <p className="text-text-secondary mt-2 text-base lg:text-lg">Related articles you might find helpful</p>
          </div>
          <Link href="/blog" className="text-primary-light font-bold hover:text-primary transition-colors mt-4 md:mt-0 flex items-center">
            View All Articles
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
