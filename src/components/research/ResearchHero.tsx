import { ArrowDown } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { publicationsPerYear, researchStats } from '@/data/research/publications';

/** Decade markers for the archive spine, derived from the dataset. */
function decadeSpine() {
    const byDecade = new Map<number, number>();
    publicationsPerYear.forEach(({ year, count }) => {
        const decade = Math.floor(year / 10) * 10;
        byDecade.set(decade, (byDecade.get(decade) ?? 0) + count);
    });
    const max = Math.max(...byDecade.values());
    return [...byDecade.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([decade, count]) => ({ decade, count, share: count / max }));
}

export default function ResearchHero() {
    const spine = decadeSpine();

    return (
        <section className="relative overflow-hidden border-b border-border bg-white">
            <div className="container-site relative z-10 pb-14 pt-4 md:pb-20 md:pt-6 lg:pb-24">
                <Breadcrumbs items={[{ label: 'Research' }]} />

                <div className="mt-4 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-end lg:gap-16">
                    {/* ---------------- Left ---------------- */}
                    <div className="max-w-xl">
                        <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                            <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                            Research&nbsp;/&nbsp;Publications
                        </p>

                        <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.06] text-primary-dark sm:text-4xl lg:text-[3.25rem]">
                            Research Publications
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-text-secondary lg:text-xl lg:leading-relaxed">
                            A scientific archive spanning decades of diabetes research and clinical
                            knowledge.
                        </p>

                        <p className="mt-8 font-mono text-2xl font-bold tracking-tight text-primary-dark lg:text-3xl">
                            {researchStats.earliestYear} &mdash; {researchStats.latestYear}
                        </p>

                        <div className="mt-8">
                            <a
                                href="#archive"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary-dark px-7 font-semibold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
                            >
                                Browse the archive
                                <ArrowDown size={18} aria-hidden="true" />
                            </a>
                        </div>

                        {/* Every figure below is computed from the migrated dataset */}
                        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
                            {[
                                { label: 'Publications', value: researchStats.total },
                                { label: 'Years covered', value: researchStats.years },
                                { label: 'With DOI', value: researchStats.withDoi },
                                { label: 'With PMID', value: researchStats.withPmid },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <dd className="font-mono text-2xl font-bold text-primary-dark lg:text-3xl">
                                        {stat.value}
                                    </dd>
                                    <dt className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-text-secondary">
                                        {stat.label}
                                    </dt>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* ---------------- Right: archive spine ---------------- */}
                    <div className="lg:pb-2">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-text-secondary">
                            Publications by decade
                        </p>
                        <ol className="mt-5 space-y-px">
                            {spine.map(({ decade, count, share }) => (
                                <li
                                    key={decade}
                                    className="flex items-center gap-4 border-t border-border py-2.5 first:border-t-0"
                                >
                                    <span className="w-12 shrink-0 font-mono text-sm font-bold text-primary-dark">
                                        {decade}s
                                    </span>
                                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
                                        <span
                                            className="block h-full rounded-full bg-primary-light"
                                            style={{ width: `${Math.max(share * 100, 3)}%` }}
                                        />
                                    </span>
                                    <span className="w-10 shrink-0 text-right font-mono text-sm tabular-nums text-text-secondary">
                                        {count}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
