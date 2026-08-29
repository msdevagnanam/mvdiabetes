'use client';

import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    description?: string;
    breadcrumbs: BreadcrumbItem[];
    children?: React.ReactNode;
}

export default function PageHero({ title, description, breadcrumbs, children }: PageHeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container-site relative z-10 section-padding pb-12 lg:pb-16">
                {/* Breadcrumbs (white text override) */}
                <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white [&_nav]:text-white/60 [&_svg]:text-white/30">
                    <Breadcrumbs items={breadcrumbs} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mt-4"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg text-white/70 mt-4 leading-relaxed">
                            {description}
                        </p>
                    )}
                    {children && <div className="mt-6">{children}</div>}
                </motion.div>
            </div>
        </section>
    );
}
