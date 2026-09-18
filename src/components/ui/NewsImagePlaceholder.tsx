'use client';

interface NewsImagePlaceholderProps {
    title?: string;
    year?: number;
    category?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function NewsImagePlaceholder({
    title,
    year,
    category,
    className = '',
    size = 'md',
}: NewsImagePlaceholderProps) {
    const sizeClasses = {
        sm: 'h-32',
        md: 'h-48',
        lg: 'h-64 lg:h-80',
    };

    return (
        <div
            className={`relative w-full ${sizeClasses[size]} bg-gradient-to-br from-primary-dark via-primary to-[#014874] overflow-hidden flex items-center justify-center ${className}`}
            role="img"
            aria-label={title || 'MV Diabetes News & Events'}
        >
            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-[40px] -translate-x-1/2 translate-y-1/2" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 select-none">
                {/* Logo text */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>
                    <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">
                        MV Diabetes
                    </span>
                </div>

                {/* Label */}
                <p className="text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase mb-2">
                    News & Events
                </p>

                {/* Year and category */}
                {(year || category) && (
                    <div className="flex items-center justify-center gap-2 mt-3">
                        {year && (
                            <span className="text-secondary/70 text-xs font-bold">
                                {year}
                            </span>
                        )}
                        {year && category && (
                            <span className="text-white/20">•</span>
                        )}
                        {category && (
                            <span className="text-white/40 text-xs font-medium">
                                {category}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </div>
    );
}
