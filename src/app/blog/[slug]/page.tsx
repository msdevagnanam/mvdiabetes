import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug, allBlogPosts, hasBlogImage, getRecentPosts } from '@/data/blogData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleRenderer from '@/components/blog/ArticleRenderer';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import BlogPlaceholderImage from '@/components/blog/BlogPlaceholderImage';
import RecentPosts from '@/components/blog/RecentPosts';

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blogs
export async function generateStaticParams() {
  const params = allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
  // Legacy aliases
  params.push({ slug: 'what-happens-if-diabetes-is-left-untreated-copy' });
  params.push({ slug: 'the-latest-advancements-in-diabetes-treatment-what-patients-should-know-2' });
  return params;
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
      images: hasBlogImage(post) ? [post.image] : [],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const isMissingImage = !hasBlogImage(post);

  // Sidebar: latest articles, excluding the one being read
  const recentPosts = getRecentPosts(5, post.slug);
  
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
    <main className="bg-background min-h-screen pb-0 font-sans">
      <article>
        {/* Article Header */}
        <header className="container-site max-w-3xl mx-auto pt-6 pb-6 text-center flex flex-col items-center">
          <div className="w-full flex justify-center mb-3">
            <Breadcrumbs 
              className="justify-center"
              items={[
                { label: 'Knowledge Centre', href: '/blog' },
                { label: post.category, href: `/blog` },
                { label: post.title.length > 30 ? post.title.slice(0, 30) + '…' : post.title }
              ]} 
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary text-center leading-tight tracking-tight mb-4 max-w-2xl mx-auto">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-text-secondary mb-4 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
              {post.category}
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} min read
            </span>
            {post.author && (
              <>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1.5 font-medium text-text-primary">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </span>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal text-center max-w-2xl mx-auto mb-2">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Featured Image */}
        <div className="container-site mb-12 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-[16/9] max-h-[420px] rounded-2xl overflow-hidden shadow-lg border border-border mx-auto">
            {isMissingImage ? (
              <BlogPlaceholderImage title={post.title} category={post.category} />
            ) : (
              <Image
                src={post.image!}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
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
            <div className="lg:col-span-6">
              <ArticleRenderer content={post.content} />
              
              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-surface-muted text-text-secondary px-3 py-1 rounded-md text-sm border border-border/60">
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
            <aside className="hidden lg:block lg:col-span-3">
              <RecentPosts posts={recentPosts} />
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
