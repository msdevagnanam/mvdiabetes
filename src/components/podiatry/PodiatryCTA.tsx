import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { podiatryCta } from '@/data/podiatry';

export default function PodiatryCTA() {
    return (
        <section className="bg-white pb-16 md:pb-20 lg:pb-24" aria-labelledby="podiatry-cta-heading">
            <div className="container-site">
                <div className="relative flex flex-col items-start gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark to-primary p-7 sm:p-8 md:flex-row md:items-center md:justify-between md:p-12 lg:p-16">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-white/[0.04]" />
                        <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-secondary/[0.06]" />
                    </div>

                    <div className="relative z-10">
                        <h2
                            id="podiatry-cta-heading"
                            className="text-2xl font-extrabold leading-tight text-white md:text-3xl lg:text-4xl"
                        >
                            {podiatryCta.heading}
                        </h2>
                        <p className="mt-3 max-w-xl text-base text-white/70 md:text-lg">
                            {podiatryCta.subheading}
                        </p>
                    </div>

                    <Link
                        href={podiatryCta.href}
                        className="relative z-10 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-8 md:w-auto font-semibold text-white shadow-lg transition-all hover:bg-white hover:text-secondary hover:shadow-xl hover:shadow-secondary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        {podiatryCta.buttonLabel}
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
