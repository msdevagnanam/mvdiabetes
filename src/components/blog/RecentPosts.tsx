import Image from 'next/image';
import Link from 'next/link';
import { hasBlogImage, type BlogPost } from '@/data/blogData';
import BlogPlaceholderImage from '@/components/blog/BlogPlaceholderImage';

interface RecentPostsProps {
  posts: BlogPost[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="bg-surface-muted rounded-2xl p-6 border border-border sticky top-24">
      <h3 className="font-bold text-text-primary text-lg mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-primary-light"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2001/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Recent Blogs
      </h3>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex gap-3 items-start rounded-xl -m-1 p-1 transition-colors hover:bg-background"
            >
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-border bg-background">
                {hasBlogImage(post) ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <BlogPlaceholderImage title={post.title} category={post.category} />
                )}
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary-light uppercase tracking-wide mb-1 truncate">
                  {post.category}
                </p>
                <h4 className="text-sm font-semibold text-text-primary leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <time
                  dateTime={post.date}
                  className="mt-1 block text-xs text-text-secondary"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
      >
        View all articles
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2001/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
