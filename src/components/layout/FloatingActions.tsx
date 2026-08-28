'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function FloatingActions() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-24 lg:bottom-8 right-4 lg:right-6 z-40 flex flex-col gap-3 items-end">
            {/* Scroll to Top Button */}
            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white text-primary shadow-lg shadow-black/10 flex items-center justify-center hover:scale-105 hover:bg-surface-muted transition-all duration-300 border border-border"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent text-white shadow-lg shadow-accent/30 flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp"
            >
                <MessageCircle size={22} />
            </a>
            <Link
                href="/appointment"
                className="hidden lg:flex w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 items-center justify-center hover:scale-105 transition-transform"
                aria-label="Book Appointment"
            >
                <Calendar size={22} />
            </Link>
        </div>
    );
}
