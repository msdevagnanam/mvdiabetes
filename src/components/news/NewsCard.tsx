'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import NewsImagePlaceholder from '@/components/ui/NewsImagePlaceholder';

interface NewsCardProps {
    slug: string;
    title: string;
    excerpt: string;
    year: number;
    date: string;
    category: string;
    image: {
        src: string;
        alt: string;
        status: 'available' | 'missing' | 'needs-review';
    };
    featured?: boolean;
}

export default function NewsCard({
    slug,
    title,
    excerpt,
    year,
    date,
    category,
    image,
    featured = false,
}: NewsCardProps) {
    const formattedDate = (() => {
        try {
            return new Date(date).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
        } catch {
            return String(year);
        }
    })();

    const categoryColors: Record<string, string> = {
        Award: 'bg-secondary/10 text-secondary border-secondary/20',
        Conference: 'bg-primary/10 text-primary border-primary/20',
        Camp: 'bg-accent/10 text-accent border-accent/20',
        Research: 'bg-[#03B9D5]/10 text-[#03B9D5] border-[#03B9D5]/20',
        Training: 'bg-[#73BC82]/10 text-[#73BC82] border-[#73BC82]/20',
        Awareness: 'bg-[#EEC642]/10 text-[#b8940a] border-[#EEC642]/30',
        Community: 'bg-[#73BC82]/10 text-[#4a8a56] border-[#73BC82]/20',
        Legacy: 'bg-primary-dark/10 text-primary-dark border-primary-dark/20',
        Institutional: 'bg-primary/10 text-primary border-primary/20',
        News: 'bg-[#03B9D5]/10 text-[#03B9D5] border-[#03B9D5]/20',
        Event: 'bg-primary/10 text-primary border-primary/20',
    };

    const catClass = categoryColors[category] || categoryColors.Event;

    if (featured) {
        return (
            <Link
                href={`/news/${slug}`}
                className="group grid md:grid-cols-2 gap-6 bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
                {/* Image */}
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
                    {image.status === 'available' && image.src ? (
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    ) : (
                        <NewsImagePlaceholder
                            title={title}
                            year={year}
                            category={category}
                            size="lg"
                            className="!h-full"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-8 md:pr-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${catClass}`}>
                            {category}
                        </span>
                        <span className="text-xs text-text-secondary flex items-center gap-1">
                            <Calendar size={11} />
                            {formattedDate}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-text-primary leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-6">
                        {excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                        Read Full Article
                        <ArrowRight size={16} />
                    </span>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/news/${slug}`}
            className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                {image.status === 'available' && image.src ? (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <NewsImagePlaceholder
                        title={title}
                        year={year}
                        category={category}
                        size="md"
                        className="!h-full"
                    />
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-5">
                <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${catClass}`}>
                        {category}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                        <Calendar size={10} />
                        {formattedDate}
                    </span>
                </div>
                <h3 className="font-bold text-text-primary leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-4 flex-grow">
                    {excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold group-hover:gap-2.5 transition-all">
                    Read More
                    <ArrowRight size={14} />
                </span>
            </div>
        </Link>
    );
}
