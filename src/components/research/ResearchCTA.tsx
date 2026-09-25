import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ResearchCTA() {
    return (
        <section className="bg-white pb-16 md:pb-20 lg:pb-24" aria-labelledby="research-cta-heading">
            <div className="container-site">
                <div className="flex flex-col items-start gap-6 rounded-2xl bg-primary p-7 sm:p-8 md:flex-row md:items-center md:justify-between md:p-10 shadow-xl shadow-primary/10">
                    <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-secondary">
                            We Are Available
                        </p>
                        <h2
                            id="research-cta-heading"
                            className="mt-2.5 text-xl font-extrabold leading-tight text-white md:text-2xl"
                        >
                            Interested in Collaboration?
                        </h2>
                    </div>

                    <Link
                        href="/appointment"
                        className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-8 font-bold text-white shadow-lg transition-all hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-auto"
                    >
                        Get Appointment
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
