import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, ChevronLeft } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsImagePlaceholder from '@/components/ui/NewsImagePlaceholder';
import RelatedNews from '@/components/news/RelatedNews';
import SocialShare from '@/components/news/SocialShare';
import { newsEvents, getEventBySlug } from '@/data/news-events';

export async function generateStaticParams() {
    return newsEvents.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    if (!event) return {};
    
    return {
        title: `${event.title} | MV Diabetes News`,
        description: event.excerpt,
        alternates: { canonical: `https://mvdiabetes.com/news/${event.slug}` },
        openGraph: {
            title: event.title,
            description: event.excerpt,
            url: `https://mvdiabetes.com/news/${event.slug}`,
            type: 'article',
            publishedTime: event.date,
            images: event.image.status === 'available' && event.image.src ? [event.image.src] : [],
        }
    };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    
    if (!event) notFound();

    const formattedDate = (() => {
        try {
            return new Date(event.date).toLocaleDateString('en-IN', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            });
        } catch {
            return String(event.year);
        }
    })();

    // Generate JSON-LD based on category
    const isEvent = event.category === 'Conference' || event.category === 'Camp' || event.category === 'Training' || event.category === 'Awareness';
    
    const jsonLd = isEvent ? {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        description: event.excerpt,
        startDate: event.date,
        image: event.image.status === 'available' ? event.image.src : undefined,
        organizer: {
            '@type': 'Organization',
            name: 'MV Diabetes',
            url: 'https://mvdiabetes.com'
        }
    } : {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: event.title,
        datePublished: event.date,
        description: event.excerpt,
        image: event.image.status === 'available' ? event.image.src : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'MV Diabetes',
            logo: {
                '@type': 'ImageObject',
                url: 'https://mvdiabetes.com/logo.png'
            }
        }
    };

    return (
        <main className="bg-surface font-sans min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {/* Minimal top nav to back */}
            <div className="bg-white border-b border-border py-4 sticky top-0 z-40 shadow-sm">
                <div className="container-site max-w-4xl">
                    <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-primary transition-colors">
                        <ChevronLeft size={16} />
                        Back to News & Events
                    </Link>
                </div>
            </div>

            <article className="pb-16 md:pb-24">
                {/* Header */}
                <header className="container-site max-w-4xl pt-10 md:pt-16 pb-8 md:pb-12 text-center">
                    <div className="flex justify-center mb-6">
                        <Breadcrumbs 
                            items={[
                                { label: 'News & Events', href: '/news' }, 
                                { label: event.category, href: `/news?category=${event.category}` }
                            ]} 
                        />
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-md border border-primary/20">
                            {event.category}
                        </span>
                        <span className="text-sm font-medium text-text-secondary flex items-center gap-1.5">
                            <Calendar size={14} />
                            {formattedDate}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight mb-8 max-w-3xl mx-auto">
                        {event.title}
                    </h1>

                    <div className="flex justify-center mb-4">
                        <SocialShare url={`https://mvdiabetes.com/news/${event.slug}`} title={event.title} />
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container-site max-w-5xl mb-12 md:mb-16">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-md">
                        {event.image.status === 'available' && event.image.src ? (
                            <Image
                                src={event.image.src}
                                alt={event.image.alt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 1024px"
                                className="object-cover"
                            />
                        ) : (
                            <NewsImagePlaceholder 
                                title={event.title}
                                year={event.year}
                                category={event.category}
                                size="lg"
                                className="!h-full"
                            />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="container-site max-w-[720px]">
                    <div className="prose prose-lg prose-blue max-w-none text-text-secondary 
                        [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 
                        [&_h3]:text-text-primary [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
                        [&_p]:leading-relaxed [&_p]:mb-6
                        [&_ul]:my-6 [&_li]:mb-2 [&_li]:text-text-secondary
                        [&_blockquote]:border-l-4 [&_blockquote]:border-primary/40 [&_blockquote]:bg-primary/5 [&_blockquote]:p-4 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-text-primary
                        [&_a]:text-primary [&_a]:font-semibold [&_a]:underline [&_a]:decoration-primary/30 [&_a:hover]:decoration-primary
                        [&_img]:rounded-xl [&_img]:shadow-sm
                    ">
                        {/* We use dangerouslySetInnerHTML here if content has HTML, but our extraction stripped it mostly.
                            If it has HTML, this renders it. If it's plain text with line breaks, we format it. */}
                        {event.content.includes('<p>') ? (
                            <div dangerouslySetInnerHTML={{ __html: event.content }} />
                        ) : (
                            event.content.split('\n\n').map((para, i) => {
                                if (para.trim() === '') return null;
                                if (para.startsWith('## ')) return <h2 key={i}>{para.replace('## ', '')}</h2>;
                                if (para.startsWith('### ')) return <h3 key={i}>{para.replace('### ', '')}</h3>;
                                if (para.startsWith('- ')) {
                                    return (
                                        <ul key={i}>
                                            {para.split('\n').map((li, j) => (
                                                <li key={j}>{li.replace('- ', '')}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return <p key={i}>{para}</p>;
                            })
                        )}
                    </div>

                    {/* Event photo gallery */}
                    {event.gallery && event.gallery.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-border">
                            <h2 className="text-xl font-bold text-primary-dark mb-5">Event Gallery</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                {event.gallery.map((photo, i) => (
                                    <div
                                        key={photo.src}
                                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-muted border border-border"
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            sizes="(max-width: 640px) 50vw, 33vw"
                                            loading={i < 3 ? undefined : 'lazy'}
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {event.sourceUrl && (
                        <div className="mt-12 pt-6 border-t border-border flex justify-end">
                            <a 
                                href={event.sourceUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
                            >
                                View Original Archive Source <ArrowRight size={12} />
                            </a>
                        </div>
                    )}
                </div>
            </article>

            {/* Related News */}
            <RelatedNews 
                currentSlug={event.slug}
                currentYear={event.year}
                currentCategory={event.category}
                allItems={newsEvents}
            />

            {/* Final CTA */}
            <section className="bg-white pb-16 md:pb-20 lg:pb-24">
                <div className="container-site">
                    <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-primary/10">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-extrabold mb-4">
                                Your Health Journey Starts Here
                            </h2>
                            <p className="text-white/80 mb-8">
                                Join thousands of patients who trust MV Diabetes for their comprehensive diabetes care.
                            </p>
                            <Link 
                                href="/appointment" 
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Book Appointment
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
