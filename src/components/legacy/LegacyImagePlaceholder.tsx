import { Camera } from 'lucide-react';

interface LegacyImagePlaceholderProps {
    title: string;
    subtitle?: string;
    aspectRatio?: string;
    className?: string;
}

export default function LegacyImagePlaceholder({
    title,
    subtitle,
    aspectRatio = '4/5',
    className = '',
}: LegacyImagePlaceholderProps) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary-dark/5 via-primary/5 to-primary-light/5 ${className}`}
            style={{ aspectRatio }}
        >
            {/* Subtle pattern background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2303427f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera size={28} className="text-primary/40" />
                </div>
                <div>
                    <p className="text-sm font-semibold text-primary/60">{title}</p>
                    {subtitle && (
                        <p className="text-xs text-text-secondary/60 mt-1">{subtitle}</p>
                    )}
                </div>
                <span className="text-[0.65rem] uppercase tracking-widest text-primary/30 font-medium">
                    Historical Image
                </span>
            </div>
        </div>
    );
}
