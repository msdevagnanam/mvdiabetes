'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function LegacySection() {
    return (
        <section id="legacy" className="section-padding bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden relative">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4f1ea] rounded-l-[100px] opacity-40 -z-10 hidden lg:block" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="container-site max-w-7xl mx-auto z-10 relative">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column — Elegant Floating Portrait */}
                    <div className="lg:col-span-5 relative order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-[400px] mx-auto lg:mx-0"
                        >
                            {/* Premium Frame Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a87c] to-[#8c6b41] rounded-[2rem] opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

                            <div className="relative rounded-[2rem] bg-white p-3 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 transform transition-transform duration-700 hover:-translate-y-2">
                                <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden border border-[#e1d5c2]">
                                    <Image
                                        src="/images/about/Dr.viswanathan.png"
                                        alt="Prof. M. Viswanathan"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover sepia-[0.15] brightness-[1.05] contrast-[1.05] transition-transform duration-1000 hover:scale-105"
                                    />
                                    {/* Inner shadow overlay for vintage depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white text-center">
                                        <h4 className="text-xl font-bold mb-1 tracking-tight drop-shadow-md">Prof. M. Viswanathan</h4>
                                        <p className="text-sm font-medium text-white/80 uppercase tracking-widest drop-shadow-sm">1923 — 1996</p>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -right-6 top-16 bg-white border border-[#c9a87c] rounded-full px-6 py-3 shadow-xl transform rotate-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#8c6b41]" />
                                    <span className="text-[#8c6b41] font-bold text-sm tracking-widest uppercase">Founder</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column — Narrative Text (Now on Left visually on Desktop) */}
                    <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-sm font-bold text-[#c9a87c] uppercase tracking-[0.2em] mb-3 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-[#c9a87c]" />
                                India&apos;s Father of Diabetes Care
                            </h3>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-dark tracking-tight mb-6">
                                The Legacy
                            </h2>
                        </motion.div>

                        <div className="space-y-6 text-text-secondary text-base lg:text-lg leading-relaxed relative">
                            {/* Giant faded quote mark in the background */}
                            <Quote size={120} className="absolute -top-6 -left-8 text-black/[0.03] -z-10 rotate-12" />

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <span className="float-left text-5xl font-serif text-[#c9a87c] leading-[40px] pr-3 pt-2">M</span>
                                V Diabetes has its origins in the early 1950s, when India was still in its infancy, and qualified doctors and well-appointed hospitals were hard to come by. And diabetes was a relatively unknown disease. Yet, nothing deterred Prof. M. Viswanathan, a young doctor who graduated from Stanley Medical College, Chennai, from starting MV Hospital as a general hospital. In 1971 it became a hospital exclusively for diabetes care.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Over the next 50 years, under Prof. M. Viswanathan&apos;s professional and administrative leadership, the hospital has grown to achieve the status of a teaching institution of international excellence.
                            </motion.p>

                            {/* Elevated Quote Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="my-10 bg-white border-l-4 border-[#c9a87c] p-6 sm:p-8 rounded-r-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative"
                            >
                                <Quote size={24} className="text-[#c9a87c] absolute top-6 right-6 opacity-40" />
                                <p className="text-primary-dark font-medium leading-relaxed italic text-lg mb-6">
                                    &quot;The Diabetes Research Centre is an outstanding example of how pursuit of a dream and excellence produces exotic fruits. There are few centres in the world that can match the all-round capabilities of your Centre in - Care, Education, Research and Prevention. I would say it is one of the World&apos;s finest diabetes establishments and its best-kept secret.&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#f4f1ea] flex items-center justify-center">
                                        <span className="text-[#c9a87c] font-bold">PZ</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-primary text-sm">Paul Zimmet</p>
                                        <p className="text-xs text-text-secondary">Internationally respected WHO Consultant in Diabetes, Australia</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Prof. Viswanathan published more than 250 peer-reviewed research papers and articles in various prestigious National and International Journals, collaborating with institutions such as London University Hospital (UK), and the Karolinska Institute (Sweden).
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                He combined erudition, scholarship, and talent with sterling character to become widely recognized as <strong>&apos;The Father of Diabetes in India&apos;</strong>. His relentless crusade in education and care paved the way for modern treatments. His passion and visionary zeal continues to inspire every one of us at MV Diabetes to fulfill his ultimate, unfinished dream &mdash; a world without diabetes.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
