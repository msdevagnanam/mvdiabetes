'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    variant?: 'light' | 'dark';
    className?: string;
}

export default function Breadcrumbs({ items, variant = 'light', className = '' }: BreadcrumbsProps) {
    const isDark = variant === 'dark';

    return (
        <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
            <ol className={`flex items-center gap-1.5 text-sm flex-wrap ${isDark ? 'text-white/70' : 'text-text-secondary'}`}>
                <li>
                    <Link href="/" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary'}`}>Home</Link>
                </li>
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                        <ChevronRight size={14} className={isDark ? 'text-white/30' : 'text-text-secondary/40'} />
                        {item.href ? (
                            <Link href={item.href} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-primary'}`}>{item.label}</Link>
                        ) : (
                            <span className={`font-medium ${isDark ? 'text-white' : 'text-text-primary'}`}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
