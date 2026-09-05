'use client';

import { motion } from 'framer-motion';
import { Info, UserCheck } from 'lucide-react';

const infoPoints = [
    {
        heading: 'People with diabetic neuropathy',
        body: 'Neuropathy causes reduced sensation in the feet. Diabetic footwear provides extra cushioning and protection, reducing the risk of undetected wounds.',
    },
    {
        heading: 'Those with foot deformities',
        body: 'Structural changes in the foot — such as bunions, hammer toes, or Charcot foot — may benefit from specially accommodating therapeutic footwear.',
    },
    {
        heading: 'People prone to foot ulcers',
        body: 'Individuals with a history of foot ulcers may be advised to wear therapeutic footwear to reduce areas of high pressure and friction.',
    },
    {
        heading: 'Those with circulation concerns',
        body: 'Poor circulation in the feet is common in long-term diabetes. Well-fitting footwear that does not restrict blood flow plays an important protective role.',
    },
];

export default function ProductsInfo() {
    return (
        <section className="section-padding bg-white">
            <div className="container-site">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left — heading + body */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <Info size={12} />
                            Diabetic Footwear Information
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight leading-tight mb-6">
                            Do You Need Diabetic Footwear?
                        </h2>

                        <div className="space-y-4 text-text-secondary text-base leading-relaxed">
                            <p>
                                Whether therapeutic or diabetic footwear is appropriate varies based on an
                                individual&apos;s specific foot health, medical history, and risk factors. There is
                                no single answer that applies to everyone living with diabetes.
                            </p>
                            <p>
                                Some individuals with diabetes may walk comfortably in well-fitting, supportive
                                regular footwear, while others — particularly those with neuropathy, circulation
                                concerns, or previous foot complications — may benefit significantly from
                                specially designed therapeutic footwear.
                            </p>
                        </div>

                        {/* Professional advice callout */}
                        <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/15">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white">
                                <UserCheck size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary-dark text-sm mb-1">
                                    Seek Professional Assessment
                                </h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    If you are living with diabetes, consult a qualified healthcare professional or
                                    podiatrist to assess your specific foot health needs before selecting footwear.
                                    An assessment helps determine the level of therapeutic support that is right for you.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — who may benefit */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    >
                        <h3 className="text-lg font-bold text-primary-dark mb-6">
                            Who May Particularly Benefit
                        </h3>
                        <div className="space-y-4">
                            {infoPoints.map((point, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 p-5 bg-surface-muted rounded-xl border border-border hover:border-primary/20 hover:bg-white transition-colors duration-300"
                                >
                                    <div className="w-7 h-7 rounded-full bg-primary-light/15 border border-primary-light/30 flex items-center justify-center shrink-0 text-primary-light font-bold text-xs mt-0.5">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-dark text-sm mb-1">
                                            {point.heading}
                                        </h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">{point.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
