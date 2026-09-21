'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { VideoItem } from '@/data/videos';
import VideoModal from './VideoModal';

export default function FeaturedVideoPlayer({ video }: { video: VideoItem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Thumbnail Side */}
                <div className="lg:col-span-7 xl:col-span-8 relative">
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="relative w-full aspect-video bg-black rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary block"
                        aria-label={`Play featured video: ${video.title}`}
                    >
                        <Image
                            src={video.thumbnailUrl}
                            alt={video.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center transition-colors group-hover:bg-black/10">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary text-white flex items-center justify-center pl-2 shadow-xl shadow-secondary/20 transform transition-transform duration-300 group-hover:scale-110">
                                <Play fill="currentColor" size={40} />
                            </div>
                        </div>
                    </button>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
                    <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 inline-block">
                        Featured Video
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary leading-tight mb-4">
                        {video.title}
                    </h2>
                    <p className="text-text-secondary mb-8 text-lg">
                        Real patients share their recovery stories and experiences with our world-class Hyperbaric Oxygen Therapy.
                    </p>
                    
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 self-start"
                    >
                        <Play size={18} fill="currentColor" />
                        Watch Now
                    </button>
                </div>
            </div>

            {isOpen && (
                <VideoModal video={video} onClose={() => setIsOpen(false)} />
            )}
        </>
    );
}
