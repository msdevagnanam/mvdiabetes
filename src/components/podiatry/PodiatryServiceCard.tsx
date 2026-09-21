import Image from 'next/image';
import { Info } from 'lucide-react';
import type { PodiatryService } from '@/data/podiatry';

export default function PodiatryServiceCard({ service }: { service: PodiatryService }) {
    return (
        <article
            id={service.id}
            className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary-dark/[0.07]"
        >
            <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 620px"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <span
                    className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-dark/85 font-mono text-sm font-bold tabular-nums text-secondary backdrop-blur-sm"
                    aria-hidden="true"
                >
                    {service.number}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-7 lg:p-8">
                <h3 className="text-xl font-extrabold text-primary-dark lg:text-2xl">
                    {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {service.description}
                </p>

                {service.caveat && (
                    <p className="mt-5 flex gap-2.5 rounded-xl border-l-[3px] border-primary-light bg-primary/[0.05] px-4 py-3.5 text-[0.9375rem] font-medium leading-relaxed text-primary-dark">
                        <Info size={17} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{service.caveat}</span>
                    </p>
                )}
            </div>
        </article>
    );
}
