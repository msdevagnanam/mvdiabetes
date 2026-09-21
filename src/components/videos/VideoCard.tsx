import Image from 'next/image';
import { Play } from 'lucide-react';
import { VideoItem } from '@/data/videos';

interface VideoCardProps {
    video: VideoItem;
    onClick: (video: VideoItem) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
    return (
        <button
            onClick={() => onClick(video)}
            className="group flex flex-col w-full text-left bg-surface rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Play video: ${video.title}`}
        >
            <div className="relative w-full aspect-video bg-surface-muted overflow-hidden">
                <Image
                    src={video.thumbnailUrl}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center pl-1 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-secondary/30">
                        <Play fill="currentColor" size={24} />
                    </div>
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                        {video.category}
                    </span>
                </div>
                
                <h3 className="text-lg font-bold text-text-primary leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                    {video.title}
                </h3>
            </div>
        </button>
    );
}
