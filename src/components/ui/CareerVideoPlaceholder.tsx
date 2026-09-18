'use client';

import { Play } from 'lucide-react';

interface CareerVideoPlaceholderProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function CareerVideoPlaceholder({
    title = 'GROW WITH US',
    subtitle = 'MV DIABETES',
    className = '',
}: CareerVideoPlaceholderProps) {
    return (
        <div
            className={`relative w-full aspect-video bg-gradient-to-br from-primary-dark via-primary to-[#014874] overflow-hidden flex flex-col items-center justify-center p-8 rounded-[2rem] shadow-xl shadow-primary/10 border border-white/10 group cursor-pointer ${className}`}
            role="button"
            aria-label="Play Recruitment Video"
        >
            {/* Subtle medical/heritage pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Glowing accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover:bg-secondary/30 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3 pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Play Button */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(3,185,213,0.3)]">
                        <Play className="w-6 h-6 text-primary ml-1.5" />
                    </div>
                </div>

                {/* Subtitle / Eyebrow */}
                <p className="text-secondary/90 text-sm font-bold tracking-[0.25em] uppercase mb-2">
                    {subtitle}
                </p>

                {/* Title */}
                <h3 className="text-white/90 text-3xl md:text-4xl font-extrabold tracking-tight leading-snug mb-4">
                    {title}
                </h3>
                
                {/* Placeholder Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <span className="text-white/50 text-[10px] font-semibold tracking-widest uppercase">
                        Video Placeholder
                    </span>
                </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-xl" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-xl" />
        </div>
    );
}
