import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ResearchCTA() {
    return (
        <section className="bg-white pb-16 md:pb-20 lg:pb-24" aria-labelledby="research-cta-heading">
            <div className="container-site">
                <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface-muted/40 p-7 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10">
                    <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-primary">
                            We Are Available
                        </p>
                        <h2
                            id="research-cta-heading"
                            className="mt-2.5 text-xl font-extrabold leading-tight text-primary-dark md:text-2xl"
                        >
                            Interested in Collaboration?
                        </h2>
                    </div>

                    <Link
                        href="/appointment"
                        className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-primary-dark px-7 font-bold text-primary-dark transition-colors hover:bg-primary-dark hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
                    >
                        Get Appointment
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
