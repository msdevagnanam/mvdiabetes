'use client';

import { motion } from 'framer-motion';
import { dreamContinuesContent } from '@/data/history';

export default function DreamContinues() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03]" />
            </div>

            <div className="container-site relative z-10 py-20 lg:py-28">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6"
                    >
                        {dreamContinuesContent.headline}
                    </motion.p>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mb-8"
                    >
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight italic">
                            &ldquo;{dreamContinuesContent.quote}&rdquo;
                        </p>
                    </motion.blockquote>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        {dreamContinuesContent.description}
                    </motion.p>

                    {/* Decorative divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-24 h-0.5 bg-secondary/50 mx-auto mt-10 origin-center"
                    />
                </div>
            </div>
        </section>
    );
}
