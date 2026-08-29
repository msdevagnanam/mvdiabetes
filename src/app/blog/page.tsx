import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { blogPosts } from '@/data/blogs';

export const metadata: Metadata = {
    title: 'Blog & Articles — MV Diabetes',
    description: 'Expert articles on diabetes care, foot health, nutrition, and more from MV Diabetes medical team.',
    alternates: { canonical: '/blog' },
};

export default function BlogPage() {
    const categories = [...new Set(blogPosts.map(b => b.category))];

    return (
        <>
            <PageHero title="Blog & Articles" description="Expert insights, practical guides, and the latest in diabetes care from our medical team." breadcrumbs={[{ label: 'Blog' }]} />
            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map(c => (
                            <span key={c} className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10">{c}</span>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map(post => (
                            <Link href={`/blog/${post.slug}`} key={post.id}
                                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-secondary/10" />
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10">{post.category}</span>
                                        <span className="text-xs text-text-secondary flex items-center gap-1"><Calendar size={10} />{new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="font-bold text-text-primary leading-snug mb-2 line-clamp-2">{post.title}</h3>
                                    <p className="text-sm text-text-secondary line-clamp-2 mb-4">{post.excerpt}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">Read More <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
