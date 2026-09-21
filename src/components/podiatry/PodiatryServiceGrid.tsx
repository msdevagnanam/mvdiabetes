import { footClinicStatement, podiatryServices } from '@/data/podiatry';
import PodiatryServiceCard from './PodiatryServiceCard';
import Reveal from '@/components/ui/Reveal';

export default function PodiatryServiceGrid() {
    return (
        <section
            id="foot-clinic"
            className="scroll-mt-24 bg-surface-muted section-padding"
            aria-labelledby="foot-clinic-heading"
        >
            <div className="container-site">
                {/* ---------------- Section lead ---------------- */}
                <Reveal className="max-w-3xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Therapies &amp; Education
                    </p>
                    <h2
                        id="foot-clinic-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        Our Foot Clinic &amp; Podiatry Unit
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    <p className="mt-6 text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                        {footClinicStatement}
                    </p>
                </Reveal>

                {/* ---------------- Facility cards ---------------- */}
                <div className="mt-12 grid gap-6 md:gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                    {podiatryServices.map((service, i) => (
                        <Reveal
                            key={service.id}
                            delay={(i % 2) * 90}
                            className={i % 2 === 1 ? 'lg:mt-14' : undefined}
                        >
                            <PodiatryServiceCard service={service} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
