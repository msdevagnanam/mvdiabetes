import { limbSalvageStatement } from '@/data/podiatry';
import Reveal from '@/components/ui/Reveal';

const EMPHASIS = 'CORRECTIVE PROCEDURES FOR LIMB SALVAGE';

export default function LimbSalvageSection() {
    const [before, after] = limbSalvageStatement.split(EMPHASIS);

    return (
        <section
            className="relative overflow-hidden bg-primary-dark section-padding"
            aria-labelledby="limb-salvage-heading"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary-light/[0.06]" />
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/[0.05]" />
            </div>

            <div className="container-site relative z-10">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-20">
                    <Reveal>
                        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-secondary">
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                            Diabetic Foot Care
                        </p>
                        <h2
                            id="limb-salvage-heading"
                            className="mt-6 text-3xl font-extrabold leading-[1.1] text-white md:text-4xl lg:text-[2.75rem]"
                        >
                            Corrective Procedures for Limb Salvage
                        </h2>
                        <div className="mt-6 h-0.5 w-16 bg-primary-light" aria-hidden="true" />
                    </Reveal>

                    <Reveal delay={120}>
                        <blockquote className="border-l-2 border-secondary/50 pl-6 md:pl-8">
                            <p className="text-xl font-medium leading-[1.55] text-white/85 md:text-2xl lg:text-[1.75rem] lg:leading-[1.5]">
                                {before}
                                <span className="font-extrabold text-secondary">
                                    corrective procedures for limb salvage
                                </span>
                                {after}
                            </p>
                            <cite className="mt-5 block text-sm not-italic text-white/65">
                                MV Hospital for Diabetes — Podiatry
                            </cite>
                        </blockquote>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
