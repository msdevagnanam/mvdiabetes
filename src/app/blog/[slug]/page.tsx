import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug, allBlogPosts } from '@/data/blogData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import BlogPlaceholderImage from '@/components/blog/BlogPlaceholderImage';

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blogs
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | MV Diabetes',
    };
  }
  
  return {
    title: `${post.title} | MV Diabetes Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['MV Diabetes Specialist'],
      images: post.image && post.imageStatus !== 'missing' ? [post.image] : [],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const isMissingImage = !post.image || post.imageStatus === 'missing';
  
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Calculate read time (approx 200 words per min)
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="bg-background min-h-screen pt-24 pb-0 font-sans">
      <article>
        {/* Article Header */}
        <header className="container-site max-w-4xl mx-auto pt-8 pb-12">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Knowledge Centre', href: '/blog' },
              { label: post.title }
            ]} 
          />
          
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
            <span className="bg-mv-navy text-white px-4 py-1.5 rounded-full uppercase tracking-wider text-xs">
              {post.category}
            </span>
            <span className="text-text-secondary flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </span>
            <span className="text-text-secondary flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-mv-black mt-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="container-site max-w-5xl mx-auto mb-16">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            {isMissingImage ? (
              <BlogPlaceholderImage title={post.title} category={post.category} />
            ) : (
              <Image
                src={post.image!}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            )}
          </div>
        </div>

        {/* Article Body */}
        <div className="container-site max-w-6xl mx-auto pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Sidebar (TOC) */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents />
            </aside>
            
            {/* Main Content */}
            <div className="lg:col-span-7">
              <ArticleRenderer content={post.content} />
              
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-sm font-bold text-mv-navy uppercase tracking-wider mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-mv-surface-muted text-text-secondary px-3 py-1 rounded-md text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <ShareButtons 
                title={post.title} 
                url={`https://mvdiabetes.com/blog/${post.slug}`} 
              />
            </div>
            
            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-2">
              {/* Space for ads, author bio, or quick links if needed in the future */}
            </aside>
          </div>
        </div>
      </article>

      <div className="container-site">
        <BlogCTA />
      </div>

      <RelatedArticles 
        post={post} 
      />
    </main>
  );
}
