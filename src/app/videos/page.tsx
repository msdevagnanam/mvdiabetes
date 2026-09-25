import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Video } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import VideoGallery from '@/components/videos/VideoGallery';
import FeaturedVideoPlayer from '@/components/videos/FeaturedVideoPlayer';
import { videos } from '@/data/videos';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/videos');

export default function VideosPage() {
    // Get the featured video (fallback to first if none marked)
    const featuredVideo = videos.find(v => v.isFeatured) || videos[0];

    return (
        <main className="bg-surface font-sans min-h-screen">
            
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-[#014874] pt-8 pb-12 md:pt-12 md:pb-16">
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                
                <div className="container-site relative z-10">
                    <Breadcrumbs items={[{ label: 'Videos' }]} variant="dark" />

                    <div className="max-w-3xl mt-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                            <Video className="w-4 h-4 text-secondary" />
                            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
                                Media Gallery
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                            Videos
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                            60 years of Diabetes Care, Research, Education & Training in Diabetes. Explore patient stories, institutional milestones and insights from MV Diabetes.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. FEATURED VIDEO */}
            <section className="py-16 md:py-24 bg-white relative border-b border-border">
                <div className="container-site">
                    <FeaturedVideoPlayer video={featuredVideo} />
                </div>
            </section>

            {/* 3. VIDEO GALLERY (Client Component with Search/Filter/Modal) */}
            <VideoGallery />

            {/* 4. CTA */}
            <section className="py-20 bg-gradient-to-br from-surface to-surface-muted border-t border-border relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-10 translate-y-10" />
                <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
                        Stay Connected With MV Diabetes
                    </h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Explore our latest updates, educational resources, and stories from our healthcare community.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/contact" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                        <Link 
                            href="/news" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-text-primary border border-border font-bold hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5 shadow-sm"
                        >
                            Read Our News
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
