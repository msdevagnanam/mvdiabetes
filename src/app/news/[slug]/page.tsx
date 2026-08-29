import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { newsEvents, getEventBySlug } from '@/data/events';

export async function generateStaticParams() {
    return newsEvents.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    if (!event) return {};
    return { title: `${event.title} | MV Diabetes`, description: event.excerpt, alternates: { canonical: `/news/${event.slug}` } };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    if (!event) notFound();

    return (
        <>
            <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" /></div>
                <div className="container-site relative z-10 section-padding pb-12">
                    <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                        <Breadcrumbs items={[{ label: 'News & Events', href: '/news' }, { label: event.title.length > 40 ? event.title.slice(0, 40) + '…' : event.title }]} />
                    </div>
                    <div className="max-w-3xl mt-4">
                        <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/10">{event.category}</span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">{event.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-white/60 text-sm">
                            <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(event.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            {event.location && <span className="flex items-center gap-1.5"><MapPin size={14} />{event.location}</span>}
                            {event.time && <span className="flex items-center gap-1.5"><Clock size={14} />{event.time}</span>}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-white">
                <div className="container-site max-w-3xl">
                    <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-text-primary [&_h2]:font-extrabold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4 [&_li]:text-text-secondary leading-relaxed">
                        {event.content.split('\n').map((para, i) => {
                            if (para.startsWith('## ')) return <h2 key={i}>{para.replace('## ', '')}</h2>;
                            if (para.startsWith('- ')) return <ul key={i}><li>{para.replace('- ', '')}</li></ul>;
                            if (para.trim()) return <p key={i}>{para}</p>;
                            return null;
                        })}
                    </div>
                    <div className="mt-12 flex gap-4">
                        <Link href="/news" className="px-5 py-3 rounded-xl border-2 border-border text-text-primary font-semibold hover:bg-surface-muted transition-all text-sm">All Events</Link>
                        <Link href="/appointment" className="px-5 py-3 rounded-xl bg-secondary text-white font-semibold hover:bg-secondary/90 transition-all text-sm flex items-center gap-2">Book Appointment <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}
