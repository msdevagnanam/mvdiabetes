'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HandHeart, ShieldCheck, Lightbulb, Users, ChevronDown } from 'lucide-react';
import { coreValues, type ValueItem } from '@/data/values';

const iconMap: Record<string, React.ElementType> = {
    Heart,
    HandHeart,
    ShieldCheck,
    Lightbulb,
    Users,
};

export default function ValuesExplorer() {
    const [activeValue, setActiveValue] = useState<string>(coreValues[0].id);
    const active = coreValues.find((v) => v.id === activeValue) || coreValues[0];

    return (
        <section id="values" className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        Our Values
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-6"
                    >
                        What We Stand For
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-text-secondary leading-relaxed sm:text-lg"
                    >
                        We envision a world where diabetes is effectively managed, allowing our patients to lead healthier, more fulfilling lives. With over 300 dedicated staff members, we work collaboratively to uphold our core values.
                    </motion.p>
                </div>

                {/* Desktop: Side-by-side explorer */}
                <div className="hidden lg:grid lg:grid-cols-[320px_1fr] gap-8">
                    {/* Left: Value list */}
                    <div className="space-y-2">
                        {coreValues.map((value) => {
                            const Icon = iconMap[value.icon] || Heart;
                            const isActive = value.id === activeValue;
                            return (
                                <button
                                    key={value.id}
                                    onClick={() => setActiveValue(value.id)}
                                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 ${isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/15'
                                        : 'bg-white border border-border hover:border-primary/30 hover:shadow-sm'
                                        }`}
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-white/15' : 'bg-primary/5'
                                            }`}
                                    >
                                        <Icon size={18} className={isActive ? 'text-white' : 'text-primary'} />
                                    </div>
                                    <div>
                                        <span
                                            className={`text-xs font-bold block mb-0.5 ${isActive ? 'text-secondary' : 'text-primary'
                                                }`}
                                        >
                                            {value.number}
                                        </span>
                                        <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-text-primary'}`}>
                                            {value.title}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Dynamic content panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl border border-border p-8 lg:p-10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    {(() => {
                                        const Icon = iconMap[active.icon] || Heart;
                                        return <Icon size={24} className="text-primary" />;
                                    })()}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-primary block">{active.number}</span>
                                    <h3 className="text-xl font-bold text-text-primary">{active.title}</h3>
                                </div>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-6 text-[0.95rem]">
                                {active.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3">
                                {active.details.map((detail, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2.5 px-4 py-3 bg-surface-muted rounded-xl"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span className="text-sm text-text-secondary font-medium">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile: Accordion */}
                <div className="lg:hidden space-y-3">
                    {coreValues.map((value) => (
                        <MobileValueAccordion
                            key={value.id}
                            value={value}
                            isOpen={value.id === activeValue}
                            onToggle={() => setActiveValue(value.id === activeValue ? '' : value.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MobileValueAccordion({
    value,
    isOpen,
    onToggle,
}: {
    value: ValueItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const Icon = iconMap[value.icon] || Heart;
    return (
        <div className="bg-white rounded-xl border border-border overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                        <span className="text-xs font-bold text-primary">{value.number}</span>
                        <span className="text-sm font-semibold text-text-primary block">{value.title}</span>
                    </div>
                </div>
                <ChevronDown
                    size={18}
                    className={`text-text-secondary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5">
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">{value.description}</p>
                            <div className="space-y-2">
                                {value.details.map((detail, i) => (
                                    <div key={i} className="flex items-start gap-2 px-3 py-2 bg-surface-muted rounded-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        <span className="text-xs text-text-secondary font-medium">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
