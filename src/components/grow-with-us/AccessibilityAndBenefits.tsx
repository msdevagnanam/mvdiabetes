'use client';

import { useState } from 'react';
import { growWithUsContent } from '@/data/grow-with-us';
import { branches } from '@/data/branches';
import { MapPin, Building, Banknote, ShieldPlus, Coffee, Gift, ExternalLink } from 'lucide-react';

// Map pins come from the real branch records so this stays in sync with
// /about/branches instead of drifting into hardcoded copy.
const locations = branches.map((b) => ({
    id: b.id,
    label: b.shortName.replace(/ Branch$/, '').replace('(Main Hospital)', '(Main)'),
    city: b.city,
    address: b.address,
    mapUrl: b.mapUrl,
    isMain: Boolean(b.isMainBranch),
    query: b.address,
}));

const cityCount = new Set(locations.map((l) => l.city)).size;

export default function AccessibilityAndBenefits() {
    const { accessibility, benefits } = growWithUsContent;
    const [activeId, setActiveId] = useState(locations[0].id);
    const active = locations.find((l) => l.id === activeId) ?? locations[0];

    const getBenefitIcon = (id: string) => {
        switch (id) {
            case 'financial': return <Banknote className="w-6 h-6 text-primary" />;
            case 'health': return <ShieldPlus className="w-6 h-6 text-secondary" />;
            case 'workplace': return <Coffee className="w-6 h-6 text-accent" />;
            case 'additional': return <Gift className="w-6 h-6 text-[#73BC82]" />;
            default: return <Banknote className="w-6 h-6 text-primary" />;
        }
    };

    return (
        <section className="section-padding bg-surface-muted border-y border-border relative">
            <div className="container-site">
                
                {/* 1. Accessibility / Locations */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-border mb-16 md:mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                                Our Reach
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-6">
                                {accessibility.title}
                            </h2>
                            <p className="text-lg font-bold text-primary mb-6">
                                {accessibility.description}
                            </p>
                            
                            <div className="space-y-6 mb-8">
                                {accessibility.branches.map((branch, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-primary mb-1">{branch.title}</h4>
                                            <p className="text-text-secondary">{branch.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-surface p-6 rounded-2xl border border-border flex items-start gap-4">
                                <Building className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <p className="text-sm font-medium text-text-secondary leading-relaxed">
                                    {accessibility.footer}
                                </p>
                            </div>
                        </div>

                        {/* Interactive branch map */}
                        <div className="bg-surface rounded-[1.5rem] border border-border overflow-hidden flex flex-col">
                            <div className="px-5 pt-5 pb-4 border-b border-border">
                                <div className="flex items-baseline justify-between gap-3 mb-3">
                                    <h3 className="text-sm font-bold text-text-primary">Where you could work</h3>
                                    <span className="text-xs font-semibold text-text-secondary whitespace-nowrap">
                                        {locations.length} centres · {cityCount} cities
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {locations.map((loc) => {
                                        const isActive = loc.id === active.id;
                                        return (
                                            <button
                                                key={loc.id}
                                                type="button"
                                                onClick={() => setActiveId(loc.id)}
                                                aria-pressed={isActive}
                                                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                                                    isActive
                                                        ? 'bg-primary text-white border-primary shadow-sm'
                                                        : 'bg-white text-text-secondary border-border hover:border-primary/40 hover:text-primary'
                                                }`}
                                            >
                                                {loc.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="relative w-full aspect-[4/3] min-h-[260px] bg-black/5">
                                <iframe
                                    key={active.id}
                                    title={`Map of MV Diabetes ${active.label}, ${active.city}`}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(active.query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="p-5 bg-white border-t border-border">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-text-primary text-sm leading-snug">
                                            {active.label}
                                            {active.isMain && (
                                                <span className="ml-2 align-middle text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20 px-1.5 py-0.5 rounded">
                                                    Main hospital
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-xs text-text-secondary leading-relaxed mt-1">
                                            {active.address}
                                        </p>
                                        <a
                                            href={active.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-1.5 transition-all"
                                        >
                                            Get directions
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Employee Benefits */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                        What We Offer
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
                        {benefits.title}
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {benefits.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.groups.map((group, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm flex flex-col h-full hover:shadow-md hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center">
                                    {getBenefitIcon(group.groupId)}
                                </div>
                                <h3 className="font-bold text-text-primary leading-tight">
                                    {group.groupTitle}
                                </h3>
                            </div>
                            
                            <ul className="space-y-4 flex-grow">
                                {group.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0" />
                                        <span className="text-sm font-medium text-text-secondary leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
