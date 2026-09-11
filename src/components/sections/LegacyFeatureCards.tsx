import Image from 'next/image';
import { Activity, ShieldCheck, HeartPulse, ArrowUpRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "360° Diabetes Footcare",
        description: "Comprehensive footcare from prevention and wound management to custom protective footwear.",
        image: "/images/legacy/legacy-img1.png",
        icon: Activity,
    },
    {
        id: 2,
        title: "Legacy of Excellence",
        description: "Pioneering diabetes care since 1954 in India’s first dedicated diabetes hospital facility.",
        image: "/images/legacy/legacy-img2.png",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Holistic Diabetes Care",
        description: "Integrated care combining advanced medical technology and therapeutic yoga for total control.",
        image: "/images/legacy/legacy-img3.png",
        icon: HeartPulse,
    }
];

export default function LegacyFeatureCards() {
    return (
        <section className="py-16 lg:py-24 bg-surface-muted border-b border-border relative z-10 w-full font-sans">
            <div className="container-site">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.id}
                            className="relative h-[380px] rounded-3xl overflow-hidden bg-primary-dark border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0 bg-black">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${
                                        feature.id === 2 ? 'object-center' : 'object-top'
                                    }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-10 gap-3">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {feature.title}
                                    </h3>
                                    <div className="w-12 h-12 rounded-full bg-secondary text-primary-dark flex items-center justify-center shrink-0 shadow-lg">
                                        <ArrowUpRight size={24} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <p className="text-white/85 leading-relaxed text-[0.95rem] mt-1">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
