'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function MobileBottomBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-3 h-[60px]">
                <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex flex-col items-center justify-center gap-1 text-text-secondary hover:text-primary transition-colors"
                >
                    <Phone size={18} />
                    <span className="text-[0.65rem] font-medium">Call</span>
                </a>
                <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 text-accent hover:text-accent/80 transition-colors"
                >
                    <MessageCircle size={18} />
                    <span className="text-[0.65rem] font-medium">WhatsApp</span>
                </a>
                <Link
                    href="/appointment"
                    className="flex flex-col items-center justify-center gap-1 text-white bg-primary"
                >
                    <Calendar size={18} />
                    <span className="text-[0.65rem] font-semibold">Book Now</span>
                </Link>
            </div>
        </div>
    );
}
