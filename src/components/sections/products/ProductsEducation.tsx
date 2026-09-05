'use client';

import { motion, type Variants } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const avoidItems = [
    {
        number: '01',
        title: 'High Heels',
        description:
            'High heels shift body weight to the front of the foot, increasing pressure on the ball of the foot and toes — areas particularly vulnerable for people with diabetes.',
        icon: '👠',
    },
    {
        number: '02',
        title: 'No Heel Counter',
        description:
            'Footwear without a firm heel counter fails to stabilise the foot, increasing instability and the risk of injury — especially during walking.',
        icon: '🥿',
    },
    {
        number: '03',
        title: 'Toe Grip Footwear',
        description:
            'Footwear that requires the toes to grip — such as open-toe sandals without a strap — creates friction and pressure on the toes that can lead to sores.',
        icon: '🩴',
    },
    {
        number: '04',
        title: 'Narrow-Fit Shoes',
        description:
            'Narrow-fit shoes compress the foot, restricting circulation and creating pressure points that can develop into ulcers or other serious complications.',
        icon: '👟',
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ProductsEducation() {
    return (
        <section className="section-padding bg-surface-muted">
            <div className="container-site">
                {/* Heading */}
                <div className="max-w-2xl mb-12 lg:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error/8 border border-error/20 text-error text-xs font-bold tracking-widest uppercase mb-5">
                        <AlertTriangle size={13} />
                        Important Information
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark tracking-tight leading-tight">
                        Diabetes Patients Should Avoid Wearing These
                    </h2>
                    <p className="mt-4 text-text-secondary text-base leading-relaxed">
                        Certain types of footwear can pose significant risks to the feet of people living with
                        diabetes. Understanding what to avoid is an important step in protecting your foot health.
                    </p>
                </div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
                >
                    {avoidItems.map((avoidItem) => (
                        <motion.div
                            key={avoidItem.number}
                            variants={item}
                            className="relative flex flex-col gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-error/20 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-error/5 border border-error/15 flex items-center justify-center text-2xl">
                                    {avoidItem.icon}
                                </div>
                                <span className="text-4xl font-black text-border select-none">{avoidItem.number}</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-base font-bold text-primary-dark mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-error inline-block shrink-0" />
                                    {avoidItem.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {avoidItem.description}
                                </p>
                            </div>

                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-error/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-text-secondary text-center max-w-2xl mx-auto leading-relaxed">
                    The above information is provided for educational awareness. For personalised guidance on footwear
                    selection, please consult a qualified healthcare professional or podiatrist.
                </p>
            </div>
        </section>
    );
}
