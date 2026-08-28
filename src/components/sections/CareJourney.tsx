'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Only hijack the state if we are on a large screen where the sticky behavior is active
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
            const step = Math.min(5, Math.floor(latest * 5.99));
            if (step !== activeStep) {
                setActiveStep(step);
            }
        }
    });

    return (
        <section ref={containerRef} className="bg-surface-muted relative lg:h-[400vh]">
            <div className="lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] py-16 lg:py-0 flex flex-col justify-center overflow-hidden">
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

                    {/* Desktop Timeline */}
                    <div className="hidden lg:block max-w-5xl mx-auto">
                        {/* Steps Navigation */}
                        <div className="relative flex justify-between mb-10">
                            {/* Progress line */}
                            <div className="absolute top-5 left-0 right-0 h-[2px] bg-border" />
                            <motion.div
                                className="absolute top-5 left-0 h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                            {steps.map((step, i) => (
                                <button
                                    key={step.num}
                                    onMouseEnter={() => setActiveStep(i)}
                                    onClick={() => setActiveStep(i)}
                                    className="relative z-10 flex flex-col items-center gap-3 group focus:outline-none"
                                >
                                    <div
                                        className={`
                                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ease-out
                                            ${i <= activeStep ? `${step.color} text-white shadow-xl scale-110` : 'bg-white border-2 border-border text-text-secondary scale-100 group-hover:border-primary/40'}
                                        `}
                                    >
                                        {step.num}
                                    </div>
                                    <span className={`text-sm font-semibold transition-colors duration-300 ${i === activeStep ? 'text-primary' : 'text-text-secondary group-hover:text-primary/70'}`}>
                                        {step.title}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Active Step Content */}
                        <div className="min-h-[160px] relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="bg-white rounded-2xl p-8 lg:p-10 border border-border/80 shadow-lg shadow-black/[0.03] flex items-center w-full"
                                >
                                    <div className="flex items-start gap-6 w-full">
                                        <div className={`w-14 h-14 rounded-2xl ${steps[activeStep].color} text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-lg`}>
                                            {steps[activeStep].num}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-primary mb-2 transition-colors">{steps[activeStep].title}</h3>
                                            <p className="text-text-secondary leading-relaxed max-w-2xl text-[1.05rem]">{steps[activeStep].description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Vertical Timeline */}
                    <div className="lg:hidden space-y-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-20px' }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                                className="flex gap-4"
                            >
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full ${step.color} text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md`}>
                                        {step.num}
                                    </div>
                                    {i < steps.length - 1 && <div className="w-[2px] flex-1 bg-border mt-2" />}
                                </div>
                                <div className="pb-6">
                                    <h3 className="text-base font-bold text-text-primary mb-1">{step.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
