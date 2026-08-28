'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, Mail, MapPin, ChevronDown, ChevronRight, MessageCircle } from 'lucide-react';
import { navigation, type NavItem } from '@/data/navigation';
import { siteConfig } from '@/data/site';

import Image from 'next/image';

function UtilityBar() {
    return (
        <div className="hidden lg:block bg-primary-dark text-white/80 text-sm">
            <div className="container-site flex items-center justify-between py-2">
                <div className="flex items-center gap-6">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Phone size={13} />
                        <span>{siteConfig.phone}</span>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Mail size={13} />
                        <span>{siteConfig.email}</span>
                    </a>
                    <Link href="/about/branches" className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <MapPin size={13} />
                        <span>4 Locations</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-white/60">Toll Free: {siteConfig.tollFree}</span>
                    <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                        <MessageCircle size={13} />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

function DesktopNav() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveMenu(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
    };

    return (
        <nav className="hidden lg:flex items-center gap-1">
            {navigation.slice(1).map((item) => (
                <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link
                        href={item.href}
                        className={`
              flex items-center gap-1 px-3 py-2 text-[0.9rem] font-medium rounded-lg transition-colors
              ${activeMenu === item.label ? 'text-primary bg-primary/5' : 'text-text-primary hover:text-primary'}
            `}
                    >
                        {item.label}
                        {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`} />}
                    </Link>
                    {item.children && activeMenu === item.label && (
                        <div
                            className="absolute top-full left-0 pt-2 z-50"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="bg-white rounded-xl shadow-xl border border-border/60 py-2 min-w-[240px]">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-primary hover:bg-primary/5 transition-colors"
                                    >
                                        <ChevronRight size={14} className="text-primary/40" />
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] lg:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-[380px] bg-white shadow-2xl flex flex-col">
                <div className="flex items-center justify-between p-5 border-b border-border">
                    <span className="text-lg font-bold text-primary">Menu</span>
                    <button onClick={onClose} className="p-2 hover:bg-surface-muted rounded-lg" aria-label="Close menu">
                        <X size={22} />
                    </button>
                </div>
                <nav className="flex-1 overflow-y-auto py-2">
                    {navigation.map((item) => (
                        <div key={item.label} className="border-b border-border/40 last:border-0">
                            {item.children ? (
                                <>
                                    <button
                                        onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                                        className="flex items-center justify-between w-full px-5 py-3.5 text-[0.95rem] font-medium text-text-primary hover:bg-surface-muted transition-colors"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {expandedItem === item.label && (
                                        <div className="bg-surface-muted/50 pb-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={onClose}
                                                    className="block px-8 py-2.5 text-sm text-text-secondary hover:text-primary transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block px-5 py-3.5 text-[0.95rem] font-medium text-text-primary hover:bg-surface-muted transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="p-5 border-t border-border space-y-3">
                    <Link
                        href="/appointment"
                        onClick={onClose}
                        className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                    >
                        Book Appointment
                    </Link>
                    <a
                        href={`tel:${siteConfig.phone}`}
                        className="block w-full py-3 bg-surface-muted text-text-primary text-center font-medium rounded-xl hover:bg-border transition-colors"
                    >
                        Call {siteConfig.phone}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <UtilityBar />
            <div className={`sticky z-[60] flex justify-center w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'top-4 lg:top-6 px-4 xl:px-0' : 'top-0 px-0'}`}>
                <header
                    className={`
                      mx-auto bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full overflow-hidden
                      ${scrolled
                            ? 'max-w-[1320px] shadow-2xl shadow-black/10 border border-border/70 rounded-2xl bg-white/95 backdrop-blur-xl'
                            : 'max-w-full shadow-sm border-b border-border/30 rounded-none'}
                    `}
                >
                    <div className={`flex items-center justify-between h-16 lg:h-[72px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'px-4 lg:px-6' : 'container-site'}`}>
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/images/logo/mv-logo.png"
                                alt="MV Diabetes Logo"
                                width={220}
                                height={70}
                                className="h-10 lg:h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <DesktopNav />

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button
                                className="p-2 text-text-secondary hover:text-primary hover:bg-surface-muted rounded-lg transition-colors"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>
                            <Link
                                href="/appointment"
                                className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                            >
                                Book Appointment
                            </Link>
                            <button
                                className="lg:hidden p-2 text-text-primary hover:bg-surface-muted rounded-lg transition-colors"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={22} />
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}
