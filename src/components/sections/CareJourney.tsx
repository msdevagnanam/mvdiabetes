'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Understand',
        description: 'Learn about your diabetes type, risk factors, and how it affects your body through expert guidance.',
        color: 'bg-primary',
    },
    {
        num: '02',
        title: 'Diagnose',
        description: 'Comprehensive screening and diagnostic tests by our senior diabetologists for accurate assessment.',
        color: 'bg-primary-light',
    },
    {
        num: '03',
        title: 'Treat',
        description: 'Personalized treatment plans combining modern medicine, nutrition, and lifestyle modifications.',
        color: 'bg-accent',
    },
    {
        num: '04',
        title: 'Monitor',
        description: 'Regular check-ups, health packages, and continuous glucose monitoring for optimal control.',
        color: 'bg-secondary',
    },
    {
        num: '05',
        title: 'Prevent',
        description: 'Proactive complication prevention — foot care, kidney screening, eye exams, and cardiac assessments.',
        color: 'bg-primary',
    },
    {
        num: '06',
        title: 'Live Better',
        description: 'Yoga, nutrition counseling, and wellness programs to help you thrive with diabetes.',
        color: 'bg-accent',
    },
];

export default function CareJourney() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLElement>(null);
    const sectionHeightRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionHeightRef,
        offset: ["start center", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (typeof window !== 'undefined') {
            // Using 6.5 to map to 6 items smoothly over the scroll distance
            const step = Math.min(5, Math.floor(latest * 6.5));
            if (activeStep !== step) {
                setActiveStep(step);
            }
        }
    });

    return (
        <section ref={containerRef} className="section-padding bg-surface-muted relative">
            <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        Your Care Journey
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-4"
                    >
                        Simplifying Your Diabetes Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        className="text-text-secondary"
                    >
                        From your first consultation to long-term wellness, we guide you through every step.
                    </motion.p>
                </div>

                <div ref={sectionHeightRef} className="max-w-4xl mx-auto relative pb-20">

                    {/* Desktop Horizontal Timeline (Sticky) */}
                    <div className="hidden lg:block sticky top-[80px] z-50 bg-surface-muted/95 backdrop-blur-sm pt-6 pb-8 mb-12 border-b border-border/50">
                        <div className="relative flex justify-between px-4">
                            {/* Progress line */}
                            <div className="absolute top-5 left-8 right-8 h-[2px] bg-border" />
                            <motion.div
                                className="absolute top-5 left-8 h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                            {steps.map((step, i) => (
                                <div
                                    key={step.num}
                                    className="relative z-10 flex flex-col items-center gap-3"
                                >
                                    <div
                                        className={`
                                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ease-out shadow-md
                                            ${i === activeStep ? `${step.color} text-white scale-110 shadow-lg ring-[6px] ring-primary/10 ring-offset-2 ring-offset-surface-muted` :
                                                i < activeStep ? `${step.color} text-white shadow-md scale-100` :
                                                    'bg-white border-2 border-border text-text-secondary scale-100'}
                                        `}
                                    >
                                        {step.num}
                                    </div>
                                    <span className={`text-sm font-semibold transition-colors duration-300 ${i === activeStep ? 'text-primary' : i < activeStep ? 'text-text-primary' : 'text-text-secondary'}`}>
                                        {step.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stacked Cards Layout */}
                    <div>
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                className="sticky bg-white rounded-3xl border border-border shadow-[0_-8px_30px_rgba(0,0,0,0.04)] p-8 lg:p-12 mb-6 lg:mb-10"
                                style={{
                                    // Give sticky space for the horizontal timeline + offset for thickness
                                    top: `calc(230px + ${i * 24}px)`,
                                    zIndex: i + 1
                                }}
                            >
                                <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 items-start">
                                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${step.color} text-white flex items-center justify-center text-xl lg:text-2xl font-bold shrink-0 shadow-lg`}>
                                        {step.num}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between gap-4 mb-3">
                                            <h3 className="text-xl lg:text-2xl font-bold text-text-primary">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-text-secondary leading-relaxed text-base lg:text-lg max-w-2xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
