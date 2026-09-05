'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: 'faq-1',
        question: 'What are diabetic shoes?',
        answer:
            'Diabetic shoes are specially designed footwear intended to reduce the risk of foot injuries and complications in people living with diabetes. They typically feature extra depth for custom insoles, a wide and deep toe box to reduce pressure, interior seams that are smooth or absent to prevent friction, and soft, breathable materials. They are distinct from regular shoes in that they are built specifically around the unique foot care requirements associated with diabetes.',
    },
    {
        id: 'faq-2',
        question: 'Why do people with diabetes need special shoes?',
        answer:
            'Diabetes can lead to peripheral neuropathy — reduced sensation in the feet — and poor circulation, both of which increase the risk of foot injuries going unnoticed. A small blister or sore that would cause discomfort in a person without neuropathy may go unfelt by a person with diabetes, potentially developing into a serious ulcer or infection. Diabetic shoes are designed to minimise pressure points, reduce friction, and provide a protective environment that helps prevent these complications.',
    },
    {
        id: 'faq-3',
        question: 'How do I know if I need diabetic shoes?',
        answer:
            'Whether diabetic shoes are appropriate for you depends on your individual foot health, medical history, and risk profile. If you have been diagnosed with diabetic neuropathy, have a history of foot ulcers, experience foot deformities, or have concerns about circulation in your feet, diabetic footwear may be beneficial. The best way to determine whether they are right for you is to consult a qualified healthcare professional or podiatrist, who can assess your specific situation.',
    },
    {
        id: 'faq-4',
        question: 'Can diabetic shoes be stylish, or are they all medical-looking?',
        answer:
            'Modern diabetic footwear has evolved significantly. MV Diabetes therapeutic footwear — available through Stepwise Health — is thoughtfully designed to combine therapeutic function with contemporary style. You do not have to choose between foot health and a refined appearance. The collection includes options for both men and women that look and feel like quality everyday footwear while providing the therapeutic benefits your feet need.',
    },
    {
        id: 'faq-5',
        question: 'How do I get diabetic shoes?',
        answer:
            'MV Diabetes therapeutic footwear is available through Stepwise Health — MV Diabetes\'s official footwear partner. You can browse and purchase through the Stepwise Health online shop. If you would like professional guidance on footwear selection, we recommend consulting with the team at MV Diabetes or a qualified podiatrist who can advise on the most appropriate option for your foot health needs.',
    },
];

function FAQItem({ item, isOpen, onToggle }: {
    item: typeof faqs[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-border last:border-0">
            <button
                id={item.id}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                onClick={onToggle}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
            >
                <span className="text-base font-semibold text-primary-dark group-hover:text-primary transition-colors leading-snug">
                    {item.question}
                </span>
                <span
                    className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                            ? 'bg-primary border-primary text-white'
                            : 'border-border text-text-secondary group-hover:border-primary group-hover:text-primary'
                        }`}
                    aria-hidden="true"
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`${item.id}-answer`}
                        role="region"
                        aria-labelledby={item.id}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ProductsFAQ() {
    const [openId, setOpenId] = useState<string | null>('faq-1');

    const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
                    {/* Left — heading */}
                    <div>
                        <p className="text-primary-light text-sm font-bold tracking-widest uppercase mb-4">
                            FAQ
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-text-secondary text-base leading-relaxed">
                            Common questions about diabetic footwear — answered clearly.
                        </p>
                        <div className="mt-8 p-5 rounded-2xl bg-primary text-white">
                            <p className="text-sm leading-relaxed text-white/90">
                                Have more questions? Speak with the specialist team at MV Diabetes or consult a
                                qualified podiatrist for personalised guidance.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block mt-4 text-sm font-semibold text-secondary hover:text-secondary-light transition-colors underline underline-offset-2"
                            >
                                Contact MV Diabetes →
                            </a>
                        </div>
                    </div>

                    {/* Right — accordion */}
                    <div
                        className="bg-white rounded-2xl border border-border divide-y divide-border px-6"
                        aria-label="Frequently Asked Questions about diabetic footwear"
                    >
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                item={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggle(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
