import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPosts, getBlogBySlug } from '@/data/blogs';

export async function generateStaticParams() {
    return blogPosts.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) return {};
    return { title: `${post.title} | MV Diabetes Blog`, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) notFound();

    const related = blogPosts.filter(b => b.id !== post.id && b.category === post.category).slice(0, 3);

    return (
        <article>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" /></div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title.length > 40 ? post.title.slice(0, 40) + '…' : post.title }]} />
                    </div>
                    <div className="max-w-3xl mt-4">
                        <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10">{post.category}</span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-white/60 text-sm">
                            <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
                            <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-site max-w-3xl">
                    <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-text-primary [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:space-y-1 [&_ol]:space-y-1 [&_li]:text-text-secondary [&_strong]:text-text-primary leading-relaxed">
                        {post.content.split('\n').map((para, i) => {
                            if (para.startsWith('## ')) return <h2 key={i}>{para.replace('## ', '')}</h2>;
                            if (para.startsWith('### ')) return <h3 key={i}>{para.replace('### ', '')}</h3>;
                            if (para.startsWith('- ')) return <ul key={i}><li>{para.replace('- ', '')}</li></ul>;
                            if (/^\d+\.\s/.test(para)) return <ol key={i}><li>{para.replace(/^\d+\.\s/, '')}</li></ol>;
                            if (para.trim()) return <p key={i}>{para}</p>;
                            return null;
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-primary-dark to-primary rounded-2xl text-center">
                        <h3 className="text-xl font-extrabold text-white mb-3">Need Expert Diabetes Care?</h3>
                        <p className="text-white/70 mb-6">Book an appointment with India&apos;s leading diabetes specialists.</p>
                        <Link href="/appointment" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all">
                            Book Appointment <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Related */}
                    {related.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-extrabold text-text-primary mb-6">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {related.map(r => (
                                    <Link href={`/blog/${r.slug}`} key={r.id} className="p-4 rounded-xl border border-border hover:border-primary/20 hover:shadow-sm transition-all">
                                        <span className="text-xs text-primary font-medium">{r.category}</span>
                                        <h4 className="font-bold text-text-primary text-sm mt-1 line-clamp-2">{r.title}</h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </article>
    );
}
