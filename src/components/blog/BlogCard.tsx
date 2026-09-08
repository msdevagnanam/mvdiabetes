import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogData';
import BlogPlaceholderImage from './BlogPlaceholderImage';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const isMissingImage = !post.image || post.imageStatus === 'missing';

  return (
    <Link href={`/blog/${post.slug}`} className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 font-sans ${featured ? 'md:flex-row' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'}`}>
        {isMissingImage ? (
          <BlogPlaceholderImage title={post.title} category={post.category} />
        ) : (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      
      <div className={`flex flex-col flex-grow p-6 ${featured ? 'md:w-1/2 md:p-10 justify-center' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-sm text-text-secondary">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        
        <h3 className={`font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {post.title}
        </h3>
        
        <p className={`text-text-secondary mb-6 line-clamp-3 ${featured ? 'text-lg' : ''}`}>
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center font-semibold text-primary group-hover:text-primary-light transition-colors">
          Read Article
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
