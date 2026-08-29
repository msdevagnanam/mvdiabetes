import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { newsEvents } from '@/data/events';

export const metadata: Metadata = {
    title: 'News & Events — MV Diabetes',
    description: 'Latest news, events, health camps, and conferences from MV Diabetes.',
    alternates: { canonical: '/news' },
};

export default function NewsPage() {
    return (
        <>
            <PageHero title="News & Events" description="Stay updated with the latest from MV Diabetes — conferences, health camps, research, and community initiatives." breadcrumbs={[{ label: 'News & Events' }]} />
            <section className="section-padding bg-white">
                <div className="container-site">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsEvents.map(event => (
                            <Link href={`/news/${event.slug}`} key={event.id}
                                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all">
                                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10" />
                                <div className="p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full border border-primary/10">{event.category}</span>
                                        <span className="text-xs text-text-secondary flex items-center gap-1"><Calendar size={10} />{new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                    <h3 className="font-bold text-text-primary leading-snug mb-2 line-clamp-2">{event.title}</h3>
                                    <p className="text-sm text-text-secondary line-clamp-2 mb-4">{event.excerpt}</p>
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
