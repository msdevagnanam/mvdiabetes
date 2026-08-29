'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { institutionalStats } from '@/data/about';

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayed, setDisplayed] = useState(value);

    useEffect(() => {
        if (!isInView) return;
        // Parse the numeric part (strip commas)
        const numericStr = value.replace(/,/g, '');
        const target = parseInt(numericStr, 10);
        if (isNaN(target)) {
            setDisplayed(value);
            return;
        }

        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function animate(time: number) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * eased);

            // Format with Indian-style commas if original had them
            if (value.includes(',')) {
                setDisplayed(current.toLocaleString('en-IN'));
            } else {
                setDisplayed(current.toString());
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayed}{suffix}
        </span>
    );
}

export default function InstitutionalStats() {
    return (
        <section className="bg-white border-b border-border">
            <div className="container-site py-10 lg:py-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {institutionalStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center lg:text-left"
                        >
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-none mb-1.5">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-text-secondary font-medium leading-snug">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
