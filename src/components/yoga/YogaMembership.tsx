import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { getStarted, yogaAppointmentHref } from '@/data/yoga';

export default function YogaMembership() {
    return (
        <section
            id="get-started"
            className="scroll-mt-24 bg-[#F4F8FA] section-padding"
            aria-labelledby="get-started-heading"
        >
            <div className="container-site">
                <Reveal className="max-w-2xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Membership
                    </p>
                    <h2
                        id="get-started-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.12] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        {getStarted.heading}
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    <p className="mt-6 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                        {getStarted.intro}
                    </p>
                </Reveal>

                <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
                    {getStarted.tiers.map((tier, i) => (
                        <Reveal as="li" key={tier.id} delay={i * 80}>
                            {/* Row on phones so the sparse cards don't become tall empty boxes */}
                            <div className="flex h-full flex-row items-center gap-5 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-primary-dark/[0.06] sm:flex-col sm:items-start sm:gap-6 sm:p-7 lg:p-8">
                                {tier.icon ? (
                                    <Image
                                        src={tier.icon}
                                        alt=""
                                        width={209}
                                        height={209}
                                        sizes="56px"
                                        aria-hidden="true"
                                        className="h-14 w-14 shrink-0"
                                    />
                                ) : (
                                    <span
                                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/15 font-mono text-sm font-bold text-primary-dark"
                                        aria-hidden="true"
                                    >
                                        0{i + 1}
                                    </span>
                                )}
                                <h3 className="text-lg font-extrabold leading-snug text-primary-dark lg:text-xl">
                                    {tier.title}
                                </h3>
                            </div>
                        </Reveal>
                    ))}
                </ul>

                <Reveal delay={120}>
                    <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <Link
                            href={yogaAppointmentHref}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-dark px-8 font-bold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
                        >
                            {getStarted.buttonLabel}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <p className="text-sm leading-relaxed text-text-secondary">
                            Membership options are listed as published. Contact us for current
                            details.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
