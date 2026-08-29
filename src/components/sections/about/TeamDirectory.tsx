'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { bengaluruTeam, teamCategories } from '@/data/team';

export default function TeamDirectory() {
    const [filter, setFilter] = useState('All');

    const filteredTeam =
        filter === 'All' ? bengaluruTeam : bengaluruTeam.filter((m) => m.category === filter);

    return (
        <section id="team" className="section-padding bg-surface-muted overflow-hidden">
            <div className="container-site">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
                    >
                        Our Bengaluru Team
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold leading-tight mb-3"
                    >
                        Multidisciplinary Care, Working Together
                    </motion.h2>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {teamCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filter === cat
                                    ? 'bg-primary text-white shadow-md shadow-primary/15'
                                    : 'bg-white border border-border text-text-secondary hover:border-primary/30 hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
                    {filteredTeam.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: Math.min(i, 7) * 0.04 }}
                            className="bg-white rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-sm transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                    <span className="text-primary text-xs font-bold">
                                        {member.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-text-primary leading-snug">{member.name}</h4>
                                    <p className="text-xs text-text-secondary mt-0.5 leading-snug">{member.qualification}</p>
                                    <span className="inline-block mt-2 text-[0.65rem] font-medium text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                                        {member.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredTeam.length === 0 && (
                    <div className="text-center py-12 text-text-secondary">
                        <Users size={32} className="mx-auto mb-3 text-text-secondary/40" />
                        <p className="text-sm">No team members found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
