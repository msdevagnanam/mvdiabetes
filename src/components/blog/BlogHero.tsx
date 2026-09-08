'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-site relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto font-sans"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold tracking-wider mb-6 uppercase">
            MV Diabetes Knowledge Centre
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Diabetes Care, <span className="text-primary-light">Explained Clearly.</span>
          </h1>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive library of expert articles, practical guides, and the latest advancements in diabetes management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
