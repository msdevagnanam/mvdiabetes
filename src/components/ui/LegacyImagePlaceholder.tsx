'use client';

interface LegacyImagePlaceholderProps {
    title: string;
    subtitle?: string;
    className?: string;
    aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
}

export default function LegacyImagePlaceholder({
    title,
    subtitle,
    className = '',
    aspectRatio = 'video',
}: LegacyImagePlaceholderProps) {
    const aspectClasses = {
        video: 'aspect-[16/9] md:aspect-[21/9]',
        square: 'aspect-square',
        portrait: 'aspect-[3/4]',
        auto: 'h-full w-full',
    };

    return (
        <div
            className={`relative w-full bg-gradient-to-br from-primary-dark via-primary to-[#014874] overflow-hidden flex flex-col items-center justify-center p-8 rounded-3xl shadow-xl shadow-primary/10 border border-white/10 ${aspectClasses[aspectRatio]} ${className}`}
            role="img"
            aria-label={`${title} - Image Placeholder`}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
                {/* Brand Logo Mark */}
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-inner">
                    <div className="w-3.5 h-3.5 rounded-full bg-secondary shadow-[0_0_15px_rgba(3,185,213,0.5)]" />
                </div>

                {/* Subtitle / Eyebrow */}
                {subtitle && (
                    <p className="text-secondary/90 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                        {subtitle}
                    </p>
                )}

                {/* Title */}
                <h3 className="text-white/90 text-2xl md:text-3xl font-extrabold tracking-tight leading-snug mb-4">
                    {title}
                </h3>

                {/* Placeholder Label */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-white/10 backdrop-blur-sm mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <span className="text-white/50 text-[10px] font-semibold tracking-widest uppercase">
                        Image Placeholder
                    </span>
                </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
        </div>
    );
}
