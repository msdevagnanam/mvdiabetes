'use client';

import { useState, type KeyboardEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowRight, BarChart3, CalendarRange, CircleCheck, Clock, Download, FileSpreadsheet,
    Info, LayoutGrid, MapPin, TriangleAlert,
} from 'lucide-react';
import {
    BMW_CATEGORIES, BMW_CATEGORY_LABELS, BMW_LOCATIONS, MONTH_NAMES,
    bmwReports, bmwYears, formatKg, getCategoryValue, getPublishedLocations, getRecords,
    getSheet, getYear, grandTotal, monthTotal, sumCategories,
    type BMWCategory, type BMWLocation, type BMWRecord,
} from '@/data/bmw-data';
import { bmwCsvFileName, bmwCsvHref, bmwCsvSize } from '@/data/bmw-csv';

// ─── Bin colours ───
// The four bins are fixed CPCB categories, so each keeps its own hue. Yellow/Red/Blue pass the
// categorical colour-blind separation check on white; yellow is below 3:1 contrast, so every value
// is also printed as text (table, tooltip, legend) and identity never relies on colour alone.
const BIN_SWATCH: Record<BMWCategory, string> = {
    yellow: 'bg-[#D29F14]',
    red: 'bg-[#D94052]',
    blue: 'bg-[#2F6BC9]',
    white: 'bg-white ring-1 ring-inset ring-[#8E99A6]',
};

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2';

const shortMonth = (m: number) => MONTH_NAMES[m - 1].slice(0, 3);
const monthSpan = (from: number, to: number, year: number) =>
    from === to ? `${MONTH_NAMES[from - 1]} ${year}` : `${MONTH_NAMES[from - 1]} – ${MONTH_NAMES[to - 1]} ${year}`;
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

// ─── Selection (kept in the URL: ?year=2024&location=royapuram) ───

type LocationFilter = 'all' | BMWLocation;
interface Selection {
    year: number;
    location: LocationFilter;
}

const DEFAULT_YEAR = bmwYears[bmwYears.length - 1].year;

function resolveSelection(yearParam: string | null, locationParam: string | null): Selection {
    const year = bmwYears.some(y => String(y.year) === yearParam) ? Number(yearParam) : DEFAULT_YEAR;
    const location = getPublishedLocations(year).find(l => l.toLowerCase() === locationParam?.toLowerCase());
    return { year, location: location ?? 'all' };
}

// ─── Year status ───

type StatusTone = 'complete' | 'partial' | 'progress';

function getYearStatus(year: number): { tone: StatusTone; label: string; detail: string } {
    const info = getYear(year)!;
    const published = getPublishedLocations(year);
    if (info.windowEndMonth < 12) {
        return { tone: 'progress', label: 'Year in progress', detail: `Reported to ${MONTH_NAMES[info.windowEndMonth - 1]} ${year}` };
    }
    const allMonths = published.every(l => getRecords(year, l).length === 12);
    if (published.length === BMW_LOCATIONS.length && allMonths) {
        return { tone: 'complete', label: 'Complete', detail: 'All locations, all 12 months' };
    }
    const missing = BMW_LOCATIONS.filter(l => !published.includes(l));
    const partial = published.filter(l => getRecords(year, l).length < 12);
    return {
        tone: 'partial',
        label: 'Partial coverage',
        detail: missing.length
            ? `${published.join(', ')} only`
            : `${partial.join(' & ')}: some months not reported`,
    };
}

const STATUS_STYLE: Record<StatusTone, { cls: string; Icon: typeof CircleCheck }> = {
    complete: { cls: 'bg-[#73BC82]/15 text-[#245C31] border-[#73BC82]/40', Icon: CircleCheck },
    partial: { cls: 'bg-[#EEC642]/20 text-[#6B5208] border-[#EEC642]/50', Icon: Info },
    progress: { cls: 'bg-primary-light/10 text-primary border-primary-light/40', Icon: Clock },
};

function StatusBadge({ year }: { year: number }) {
    const status = getYearStatus(year);
    const { cls, Icon } = STATUS_STYLE[status.tone];
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${cls}`}>
            <Icon className="w-3.5 h-3.5" aria-hidden />
            {status.label}
            <span className="font-medium opacity-80">· {status.detail}</span>
        </span>
    );
}

// ─── Value cell ───

function KgValue({ value }: { value: number | null }) {
    if (value === null) {
        return <abbr title="Not reported in the source" className="no-underline text-text-secondary">n/r</abbr>;
    }
    return <>{formatKg(value)}</>;
}

// ─── Controls ───

function YearPicker({ selection, onSelect }: { selection: Selection; onSelect?: (s: Selection) => void }) {
    return (
        <fieldset>
            <legend className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <CalendarRange className="w-4 h-4" aria-hidden /> Reporting year
            </legend>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {bmwYears.map(({ year, windowEndMonth }) => {
                    const active = year === selection.year;
                    return (
                        <button
                            key={year}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onSelect?.({ year, location: 'all' })}
                            className={`rounded-xl border px-3 py-2.5 text-center transition-colors ${FOCUS_RING} ${active
                                ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                                : 'bg-white border-border text-text-primary hover:border-primary/40 hover:bg-primary/5'
                                }`}
                        >
                            <span className="block text-base font-extrabold tabular-nums">{year}</span>
                            <span className={`block text-[11px] font-semibold ${active ? 'text-white/80' : 'text-text-secondary'}`}>
                                {windowEndMonth < 12 ? `Jan – ${shortMonth(windowEndMonth)}` : 'Jan – Dec'}
                            </span>
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

function LocationPicker({ selection, onSelect }: { selection: Selection; onSelect?: (s: Selection) => void }) {
    const published = getPublishedLocations(selection.year);
    const options: { value: LocationFilter; label: string; sub: string; disabled: boolean }[] = [
        { value: 'all', label: 'All locations', sub: `${published.length} of ${BMW_LOCATIONS.length} published`, disabled: false },
        ...BMW_LOCATIONS.map(loc => {
            const months = getRecords(selection.year, loc).length;
            const isPublished = published.includes(loc);
            return {
                value: loc as LocationFilter,
                label: loc,
                sub: isPublished ? `${plural(months, 'month')} reported` : `Not published for ${selection.year}`,
                disabled: !isPublished,
            };
        }),
    ];
    return (
        <fieldset>
            <legend className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden /> Location
            </legend>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {options.map(opt => {
                    const active = opt.value === selection.location;
                    return (
                        <button
                            key={opt.value}
                            type="button"
                            aria-pressed={active}
                            disabled={opt.disabled}
                            onClick={() => onSelect?.({ year: selection.year, location: opt.value })}
                            className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${FOCUS_RING} ${opt.disabled
                                ? 'bg-surface-muted/60 border-dashed border-border text-text-secondary cursor-not-allowed'
                                : active
                                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-white border-border text-text-primary hover:border-primary/40 hover:bg-primary/5'
                                }`}
                        >
                            <span className="block text-sm font-bold">{opt.label}</span>
                            <span className={`block text-[11px] font-medium ${active ? 'text-white/80' : 'text-text-secondary'}`}>{opt.sub}</span>
                        </button>
                    );
                })}
            </div>
        </fieldset>
    );
}

// ─── Summary ───

function Summary({ year, locations }: { year: number; locations: BMWLocation[] }) {
    const records = locations.flatMap(l => getRecords(year, l));
    const totals = sumCategories(records);
    const grandValue = grandTotal(records);
    const basis = locations.map(l => `${l} (${plural(getRecords(year, l).length, 'month')})`).join(', ');
    const months = [...new Set(records.map(r => r.month))];
    const period = months.length ? monthSpan(Math.min(...months), Math.max(...months), year) : String(year);

    return (
        <section aria-labelledby="bmw-summary-heading" className="grid lg:grid-cols-[1.1fr_2fr] gap-4 md:gap-5">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white p-6 md:p-7 shadow-lg shadow-primary/15 flex flex-col justify-between">
                <div>
                    <h3 id="bmw-summary-heading" className="text-xs font-bold uppercase tracking-wider text-white/70">
                        Total biomedical waste reported
                    </h3>
                    <p className="mt-3 text-5xl font-extrabold tracking-tight">
                        {grandValue === null ? 'Not reported' : formatKg(grandValue)}
                        {grandValue !== null && <span className="text-xl font-bold text-white/70 ml-2">kg</span>}
                    </p>
                </div>
                <p className="mt-5 text-sm text-white/80 leading-relaxed">
                    {period}. Sum of published monthly figures for {basis}.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
                {BMW_CATEGORIES.map(cat => {
                    const { value, months: n } = totals[cat];
                    return (
                        <div key={cat} className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                            <div className="flex items-center gap-2.5">
                                <span className={`w-3.5 h-3.5 rounded-[4px] ${BIN_SWATCH[cat]}`} aria-hidden />
                                <span className="text-xs sm:text-sm font-bold text-text-secondary uppercase tracking-wider">{BMW_CATEGORY_LABELS[cat]}</span>
                            </div>
                            <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                                {value === null ? 'Not reported' : formatKg(value)}
                                {value !== null && <span className="text-base font-bold text-text-secondary ml-1.5">kg</span>}
                            </p>
                            <p className="mt-1 text-xs text-text-secondary">
                                {value === 0 ? `Reported as 0 in all ${n} months` : `From ${plural(n, 'monthly figure')}`}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// ─── Monthly chart ───

function niceScale(max: number): { top: number; ticks: number[] } {
    if (max <= 0) return { top: 1, ticks: [0, 1] };
    const rough = max / 4;
    const pow = 10 ** Math.floor(Math.log10(rough));
    const step = [1, 2, 2.5, 5, 10].map(m => m * pow).find(s => s >= rough)!;
    const top = Math.ceil(max / step) * step;
    const ticks: number[] = [];
    for (let v = 0; v <= top + step / 1000; v += step) ticks.push(Math.round(v * 100) / 100);
    return { top, ticks };
}

function describeMonth(year: number, month: number, rec: BMWRecord | undefined, windowEnd: number): string {
    if (!rec) return `${MONTH_NAMES[month - 1]} ${year}: ${month > windowEnd ? 'not yet reported' : 'not reported in the source'}`;
    const total = monthTotal(rec);
    const parts = BMW_CATEGORIES.map(c => {
        const v = getCategoryValue(rec, c);
        return `${BMW_CATEGORY_LABELS[c]} ${v === null ? 'not reported' : `${formatKg(v)} kg`}`;
    });
    return `${MONTH_NAMES[month - 1]} ${year}: ${total === null ? '' : `total ${formatKg(total)} kg; `}${parts.join(', ')}`;
}

function MonthlyChart({ year, location, records, windowEnd }: { year: number; location: BMWLocation; records: BMWRecord[]; windowEnd: number }) {
    const [active, setActive] = useState<number | null>(null);
    const byMonth = new Map(records.map(r => [r.month, r]));
    const totals = records.map(r => monthTotal(r) ?? 0);
    const max = Math.max(0, ...totals);
    const { top, ticks } = niceScale(max);
    const peak = records.find(r => (monthTotal(r) ?? 0) === max);
    const reported = records.map(r => r.month);
    const whiteAllZero = records.length > 0 && records.every(r => r.whiteKg === 0);

    const move = (e: KeyboardEvent) => {
        if (!reported.length) return;
        const idx = active === null ? -1 : reported.indexOf(active);
        let next: number | null = null;
        if (e.key === 'ArrowRight') next = reported[Math.min(reported.length - 1, idx + 1)];
        else if (e.key === 'ArrowLeft') next = reported[Math.max(0, idx - 1)];
        else if (e.key === 'Home') next = reported[0];
        else if (e.key === 'End') next = reported[reported.length - 1];
        else if (e.key === 'Escape') { setActive(null); return; }
        if (next !== null) { e.preventDefault(); setActive(next); }
    };

    const activeRec = active === null ? undefined : byMonth.get(active);

    return (
        <figure className="m-0">
            <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5">
                <span className="text-sm font-bold text-text-primary flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary-light" aria-hidden /> Monthly quantity by bin (kg)
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-text-secondary" aria-label="Legend">
                    {BMW_CATEGORIES.map(c => (
                        <span key={c} className="inline-flex items-center gap-1.5">
                            <span className={`w-2.5 h-2.5 rounded-[3px] ${BIN_SWATCH[c]}`} aria-hidden />
                            {BMW_CATEGORY_LABELS[c]}{c === 'white' && whiteAllZero ? ' (0 every month)' : ''}
                        </span>
                    ))}
                </span>
            </figcaption>

            <div
                tabIndex={records.length ? 0 : -1}
                role="group"
                aria-label={`${location} ${year} monthly chart. Use the left and right arrow keys to read each month. The table lists the same figures.`}
                onKeyDown={move}
                onFocus={() => setActive(a => a ?? reported[0] ?? null)}
                onBlur={() => setActive(null)}
                onPointerLeave={() => setActive(null)}
                className={`relative rounded-lg ${FOCUS_RING}`}
            >
                <div className="flex">
                    {/* Y axis */}
                    <div className="relative w-9 sm:w-11 shrink-0 h-52 sm:h-60 mt-6" aria-hidden>
                        {ticks.map(t => (
                            <span key={t} className="absolute right-2 -translate-y-1/2 text-[10px] sm:text-[11px] tabular-nums text-text-secondary" style={{ bottom: `calc(${(t / top) * 100}% - 0.5em)` }}>
                                {formatKg(t)}
                            </span>
                        ))}
                    </div>
                    <div className="relative flex-1 min-w-0">
                        {/* Plot */}
                        <div className="relative h-52 sm:h-60 mt-6">
                            {ticks.map(t => (
                                <div key={t} className="absolute inset-x-0 border-t border-border/80" style={{ bottom: `${(t / top) * 100}%` }} aria-hidden />
                            ))}
                            <div className="absolute inset-0 grid grid-cols-12 gap-[2px] sm:gap-1">
                                {MONTH_NAMES.map((_, i) => {
                                    const month = i + 1;
                                    const rec = byMonth.get(month);
                                    const total = rec ? monthTotal(rec) ?? 0 : 0;
                                    const isActive = active === month;
                                    return (
                                        <div
                                            key={month}
                                            className="relative h-full flex justify-center"
                                            onPointerEnter={() => setActive(rec ? month : null)}
                                            aria-hidden
                                        >
                                            {rec ? (
                                                <div
                                                    className={`absolute bottom-0 w-full max-w-6 flex flex-col-reverse gap-[2px] rounded-t-[4px] overflow-hidden transition-opacity ${active !== null && !isActive ? 'opacity-45' : ''}`}
                                                    style={{ height: `${(total / top) * 100}%` }}
                                                >
                                                    {BMW_CATEGORIES.map(c => {
                                                        const v = getCategoryValue(rec, c) ?? 0;
                                                        return v > 0 ? <div key={c} className={BIN_SWATCH[c]} style={{ flex: `${v} 1 0` }} /> : null;
                                                    })}
                                                </div>
                                            ) : month <= windowEnd ? (
                                                <span className="absolute bottom-1 text-[10px] font-bold text-text-secondary">–</span>
                                            ) : null}
                                            {rec && peak === rec && (
                                                <span className="absolute text-[10px] sm:text-[11px] font-bold text-text-primary tabular-nums whitespace-nowrap" style={{ bottom: `calc(${(total / top) * 100}% + 4px)` }}>
                                                    {formatKg(total)}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tooltip */}
                            {activeRec && active !== null && (
                                <div
                                    className="absolute z-10 top-0 w-52 rounded-xl bg-[#1A1A1A] text-white p-3 shadow-xl pointer-events-none"
                                    style={active <= 6
                                        ? { left: `${((active - 1) / 12) * 100}%` }
                                        : { right: `${((12 - active) / 12) * 100}%` }}
                                    aria-hidden
                                >
                                    <p className="text-[11px] font-semibold text-white/70">{MONTH_NAMES[active - 1]} {year} · {location}</p>
                                    <p className="text-lg font-extrabold tabular-nums">{formatKg(monthTotal(activeRec) ?? 0)} <span className="text-xs font-semibold text-white/70">kg total</span></p>
                                    <ul className="mt-1.5 space-y-0.5">
                                        {BMW_CATEGORIES.map(c => (
                                            <li key={c} className="flex items-center gap-2 text-xs">
                                                <span className={`w-3 h-[2px] ${c === 'white' ? 'bg-[#C9CED6]' : BIN_SWATCH[c]}`} />
                                                <span className="font-bold tabular-nums w-12 text-right"><KgValue value={getCategoryValue(activeRec, c)} /></span>
                                                <span className="text-white/70">{BMW_CATEGORY_LABELS[c]}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* X axis */}
                        <div className="grid grid-cols-12 gap-[2px] sm:gap-1 mt-2" aria-hidden>
                            {MONTH_NAMES.map((name, i) => (
                                <span key={name} className={`text-center text-[10px] sm:text-[11px] font-semibold ${i + 1 > windowEnd ? 'text-text-secondary/50' : 'text-text-secondary'}`}>
                                    <span className="sm:hidden">{name[0]}</span>
                                    <span className="hidden sm:inline">{name.slice(0, 3)}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="sr-only" aria-live="polite">
                    {active !== null ? describeMonth(year, active, activeRec, windowEnd) : ''}
                </p>
            </div>
            <p className="mt-3 text-[11px] text-text-secondary">
                Peak month labelled. “–” marks a month with no figures in the source.
            </p>
        </figure>
    );
}

// ─── Monthly table + reconciliation ───

function MonthlyTable({ year, location, records, windowEnd }: { year: number; location: BMWLocation; records: BMWRecord[]; windowEnd: number }) {
    const sheet = getSheet(year, location)!;
    const byMonth = new Map(records.map(r => [r.month, r]));
    const calc = sumCategories(records);
    const grand = grandTotal(records);
    const published = sheet.publishedTotals;
    const mismatches = published ? BMW_CATEGORIES.filter(c => calc[c].value !== published[c]) : [];
    const months = records.map(r => r.month);
    const span = months.length ? monthSpan(Math.min(...months), Math.max(...months), year) : '';
    const cell = 'py-2.5 px-3 sm:px-4 text-right tabular-nums';

    return (
        <div>
            <div className="relative overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[34rem] text-sm">
                    <caption className="sr-only">
                        {location} biomedical waste by month, {year}, in kilograms. {sheet.periodLabel} as published.
                    </caption>
                    <thead>
                        <tr className="bg-surface-muted/60 border-b border-border">
                            <th scope="col" className="text-left py-3 px-3 sm:px-4 text-xs font-bold uppercase tracking-wider text-text-secondary">Month</th>
                            {BMW_CATEGORIES.map(c => (
                                <th key={c} scope="col" className="text-right py-3 px-3 sm:px-4 text-xs font-bold uppercase tracking-wider text-text-secondary">
                                    <span className="inline-flex items-center gap-1.5 justify-end whitespace-nowrap">
                                        <span className={`w-2.5 h-2.5 rounded-[3px] shrink-0 ${BIN_SWATCH[c]}`} aria-hidden />
                                        {BMW_CATEGORY_LABELS[c]}
                                    </span>
                                    <span className="block normal-case font-semibold tracking-normal">in kg</span>
                                </th>
                            ))}
                            <th scope="col" className="text-right py-3 px-3 sm:px-4 text-xs font-bold uppercase tracking-wider text-text-primary">
                                Total<span className="block normal-case font-semibold tracking-normal">in kg</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {MONTH_NAMES.map((name, i) => {
                            const month = i + 1;
                            const rec = byMonth.get(month);
                            if (!rec) {
                                const future = month > windowEnd;
                                return (
                                    <tr key={name} className="border-b border-border/60 bg-surface-muted/25">
                                        <th scope="row" className="text-left py-2.5 px-3 sm:px-4 font-medium text-text-secondary">{name}</th>
                                        <td colSpan={5} className="py-2.5 px-3 sm:px-4 text-right text-xs font-semibold text-text-secondary">
                                            {future ? 'Not yet reported' : 'Not reported in source'}
                                        </td>
                                    </tr>
                                );
                            }
                            const total = monthTotal(rec);
                            return (
                                <tr key={name} className="border-b border-border/60 hover:bg-primary/[0.03]">
                                    <th scope="row" className="text-left py-2.5 px-3 sm:px-4 font-semibold text-text-primary">{name}</th>
                                    {BMW_CATEGORIES.map(c => (
                                        <td key={c} className={`${cell} text-text-primary`}><KgValue value={getCategoryValue(rec, c)} /></td>
                                    ))}
                                    <td className={`${cell} font-bold text-text-primary`}><KgValue value={total} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-primary text-white">
                            <th scope="row" className="text-left py-3 px-3 sm:px-4 font-bold">
                                Total <span className="block text-[11px] font-medium text-white/75">{plural(records.length, 'month')} · calculated</span>
                            </th>
                            {BMW_CATEGORIES.map(c => (
                                <td key={c} className={`${cell} font-bold`}><KgValue value={calc[c].value} /></td>
                            ))}
                            <td className={`${cell} font-extrabold`}><KgValue value={grand} /></td>
                        </tr>
                        {published && (
                            <tr className="bg-surface-muted/60">
                                <th scope="row" className="text-left py-3 px-3 sm:px-4 font-bold text-text-primary">
                                    Published total <span className="block text-[11px] font-medium text-text-secondary">as printed in source</span>
                                </th>
                                {BMW_CATEGORIES.map(c => {
                                    const differs = mismatches.includes(c);
                                    return (
                                        <td key={c} className={`${cell} font-bold ${differs ? 'bg-[#EEC642]/30 text-[#5C4606]' : 'text-text-primary'}`}>
                                            <span className="inline-flex items-center gap-1 justify-end">
                                                {differs && <TriangleAlert className="w-3.5 h-3.5" aria-hidden />}
                                                {formatKg(published[c])}
                                                {differs && <span className="sr-only"> (differs from calculated total)</span>}
                                            </span>
                                        </td>
                                    );
                                })}
                                <td className={`${cell} text-text-secondary`}><abbr title="The source does not publish a combined total" className="no-underline">—</abbr></td>
                            </tr>
                        )}
                    </tfoot>
                </table>
            </div>

            {published && mismatches.length === 0 && (
                <p className="mt-3 flex items-start gap-2 text-xs text-[#245C31]">
                    <CircleCheck className="w-4 h-4 shrink-0" aria-hidden />
                    Calculated totals ({span}) match the Total row published in the source.
                </p>
            )}
            {mismatches.length > 0 && (
                <div className="mt-3 rounded-xl border border-[#EEC642]/60 bg-[#EEC642]/10 p-4 text-sm text-[#5C4606]">
                    <p className="font-bold flex items-center gap-2">
                        <TriangleAlert className="w-4 h-4 shrink-0" aria-hidden /> Source total differs from its monthly figures
                    </p>
                    <ul className="mt-2 space-y-1">
                        {mismatches.map(c => {
                            const diff = Math.round((published![c] - (calc[c].value ?? 0)) * 100) / 100;
                            return (
                                <li key={c}>
                                    {BMW_CATEGORY_LABELS[c]}: published {formatKg(published![c])} kg, monthly sum {formatKg(calc[c].value ?? 0)} kg ({diff > 0 ? '+' : ''}{formatKg(diff)} kg).
                                </li>
                            );
                        })}
                    </ul>
                    {sheet.notes?.map(n => <p key={n} className="mt-2 text-xs leading-relaxed">{n}</p>)}
                </div>
            )}
            {mismatches.length === 0 && sheet.notes?.map(n => (
                <p key={n} className="mt-2 flex items-start gap-2 text-xs text-text-secondary">
                    <Info className="w-4 h-4 shrink-0" aria-hidden /> {n}
                </p>
            ))}
        </div>
    );
}

function LocationReport({ year, location }: { year: number; location: BMWLocation }) {
    const records = getRecords(year, location);
    const windowEnd = getYear(year)!.windowEndMonth;
    const sheet = getSheet(year, location)!;
    const inWindow = Math.min(windowEnd, 12);
    return (
        <article aria-labelledby={`bmw-${year}-${location}`} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <header className="px-5 md:px-7 py-5 border-b border-border bg-surface-muted/40 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h3 id={`bmw-${year}-${location}`} className="text-lg md:text-xl font-extrabold text-text-primary">
                        Bio Medical Waste Report – {location}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">{sheet.periodLabel}</p>
                </div>
                <p className="text-xs font-semibold text-text-secondary">
                    {records.length} of {inWindow} months reported{windowEnd < 12 ? ' to date' : ''}
                </p>
            </header>
            <div className="p-5 md:p-7 grid grid-cols-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8">
                <MonthlyChart year={year} location={location} records={records} windowEnd={windowEnd} />
                <MonthlyTable year={year} location={location} records={records} windowEnd={windowEnd} />
            </div>
        </article>
    );
}

// ─── Coverage matrix ───

function CoverageMatrix({ selection, onSelect }: { selection: Selection; onSelect?: (s: Selection) => void }) {
    return (
        <section aria-labelledby="bmw-coverage-heading">
            <div className="flex items-center gap-3 mb-2">
                <LayoutGrid className="w-5 h-5 text-primary" aria-hidden />
                <h2 id="bmw-coverage-heading" className="text-xl md:text-2xl font-extrabold text-text-primary">Reporting coverage, 2021 – 2026</h2>
            </div>
            <p className="text-sm text-text-secondary mb-6 max-w-3xl">
                Which months each location has published. Select a cell to open that report.
            </p>
            <div className="relative overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
                <table className="w-full min-w-[40rem] text-sm">
                    <caption className="sr-only">Months of biomedical waste data published per location and year</caption>
                    <thead>
                        <tr className="bg-surface-muted/60 border-b border-border">
                            <th scope="col" className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-text-secondary">Year</th>
                            {BMW_LOCATIONS.map(l => (
                                <th key={l} scope="col" className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-text-secondary">{l}</th>
                            ))}
                            <th scope="col" className="text-left py-3 px-4 text-xs font-bold uppercase tracking-wider text-text-secondary">Downloads</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bmwYears.map(({ year, windowEndMonth }) => {
                            const report = bmwReports.find(r => r.year === year);
                            return (
                                <tr key={year} className={`border-b border-border/60 ${selection.year === year ? 'bg-primary/[0.04]' : ''}`}>
                                    <th scope="row" className="text-left py-3 px-4 font-extrabold text-text-primary tabular-nums">{year}</th>
                                    {BMW_LOCATIONS.map(loc => {
                                        const sheet = getSheet(year, loc);
                                        if (sheet?.status !== 'published') {
                                            return <td key={loc} className="py-3 px-4 text-xs font-semibold text-text-secondary">Not published</td>;
                                        }
                                        const months = new Set(getRecords(year, loc).map(r => r.month));
                                        const selected = selection.year === year && selection.location === loc;
                                        return (
                                            <td key={loc} className="py-2 px-2">
                                                <button
                                                    type="button"
                                                    aria-pressed={selected}
                                                    onClick={() => {
                                                        onSelect?.({ year, location: loc });
                                                        document.getElementById('bmw-report')?.scrollIntoView({ block: 'start' });
                                                    }}
                                                    aria-label={`${loc} ${year}: ${months.size} of ${windowEndMonth} months reported. Open report.`}
                                                    className={`w-full rounded-lg px-2 py-2 text-left transition-colors ${FOCUS_RING} ${selected ? 'bg-primary/10 ring-1 ring-primary/40' : 'hover:bg-primary/5'}`}
                                                >
                                                    <span className="flex gap-[3px]" aria-hidden>
                                                        {MONTH_NAMES.map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`h-3.5 flex-1 max-w-3 rounded-[2px] ${months.has(i + 1)
                                                                    ? 'bg-primary'
                                                                    : i + 1 > windowEndMonth ? 'border border-dashed border-text-secondary/40' : 'bg-border'}`}
                                                            />
                                                        ))}
                                                    </span>
                                                    <span className="mt-1.5 block text-xs font-semibold text-text-primary">
                                                        {months.size} / {windowEndMonth} months{windowEndMonth < 12 ? ' (to date)' : ''}
                                                    </span>
                                                </button>
                                            </td>
                                        );
                                    })}
                                    <td className="py-3 px-4 text-xs text-text-secondary">
                                        <a href={bmwCsvHref(year)} download={bmwCsvFileName(year)} className={`font-bold text-primary underline underline-offset-2 rounded ${FOCUS_RING}`}>
                                            CSV<span className="sr-only"> data file for {year}</span>
                                        </a>
                                        {report && (
                                            <>
                                                {' · '}
                                                <a href={report.href} download className={`font-bold text-primary underline underline-offset-2 rounded ${FOCUS_RING}`}>
                                                    XLS<span className="sr-only"> original report for {year},</span>
                                                </a>
                                                {' '}({report.coverage})
                                            </>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-secondary" aria-hidden>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-[2px] bg-primary" /> Reported</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-[2px] bg-border" /> Not reported in source</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-[2px] border border-dashed border-text-secondary/40" /> Not yet reported</span>
            </div>
        </section>
    );
}

// ─── Downloads ───

function ReportLink({ report }: { report: (typeof bmwReports)[number] }) {
    const kb = Math.round(report.sizeBytes / 1024);
    return (
        <a
            href={report.href}
            download
            aria-label={`Download ${report.label}, XLS spreadsheet, ${kb} KB, covering ${report.coverage}`}
            className={`flex items-center justify-between gap-4 bg-white rounded-xl p-4 sm:p-5 border border-border hover:border-primary/40 hover:shadow-md transition-all group ${FOCUS_RING}`}
        >
            <span className="flex items-center gap-4 min-w-0">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5 text-primary" aria-hidden />
                </span>
                <span className="min-w-0">
                    <span className="block font-bold text-text-primary">{report.label}</span>
                    <span className="block text-xs text-text-secondary mt-0.5">
                        {report.coverage} · {report.locations.join(', ')} · {report.format}, {kb} KB
                    </span>
                </span>
            </span>
            <Download className="w-5 h-5 shrink-0 text-text-secondary group-hover:text-primary transition-colors" aria-hidden />
        </a>
    );
}

function DataFileLink({ year }: { year: number }) {
    const info = getYear(year)!;
    const kb = Math.max(1, Math.round(bmwCsvSize(year) / 1024));
    const period = `January – ${MONTH_NAMES[info.windowEndMonth - 1]} ${year}`;
    const locations = getPublishedLocations(year);
    return (
        <a
            href={bmwCsvHref(year)}
            download={bmwCsvFileName(year)}
            aria-label={`Download ${year} data file, CSV, ${kb} KB, covering ${period}`}
            className={`flex items-center justify-between gap-3 bg-white rounded-xl p-4 border border-border hover:border-primary/40 hover:shadow-md transition-all group ${FOCUS_RING}`}
        >
            <span className="min-w-0">
                <span className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-text-primary tabular-nums">{year}</span>
                    {info.windowEndMonth < 12 && (
                        <span className="rounded-full bg-primary-light/10 border border-primary-light/40 px-2 py-0.5 text-[10px] font-bold text-primary">In progress</span>
                    )}
                </span>
                <span className="block text-xs text-text-secondary mt-0.5">{period}</span>
                <span className="block text-xs text-text-secondary">{locations.join(', ')} · CSV, {kb} KB</span>
            </span>
            <Download className="w-5 h-5 shrink-0 text-text-secondary group-hover:text-primary transition-colors" aria-hidden />
        </a>
    );
}

function Downloads() {
    return (
        <section aria-labelledby="bmw-downloads-heading" className="bg-surface-muted rounded-[2rem] p-6 md:p-10 border border-border space-y-10">
            <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" aria-hidden />
                <h2 id="bmw-downloads-heading" className="text-xl md:text-2xl font-extrabold text-text-primary">Download reports</h2>
            </div>

            <div>
                <h3 className="text-base font-bold text-text-primary">Original hospital reports</h3>
                <p className="text-sm text-text-secondary mt-1 mb-4">The report files as originally published. Only 2021 and 2022 were issued as files.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    {bmwReports.map(report => (
                        <div key={report.href}>
                            <ReportLink report={report} />
                            {report.notes?.map(n => <p key={n} className="mt-2 px-1 text-xs text-text-secondary leading-relaxed">{n}</p>)}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-base font-bold text-text-primary">Data by year, {bmwYears[0].year} – {bmwYears[bmwYears.length - 1].year}</h3>
                <p className="text-sm text-text-secondary mt-1 mb-4">
                    A spreadsheet (CSV) of every figure shown on this page for that year, opening in Excel or Google Sheets. Compiled from the published figures; blank cells mean not reported, not zero.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bmwYears.map(({ year }) => <DataFileLink key={year} year={year} />)}
                </div>
            </div>
        </section>
    );
}

// ─── About ───

function AboutData() {
    const conventions = [
        { term: '0', desc: 'The source reports zero for that bin and month.' },
        { term: 'Not reported in source', desc: 'The source row or cell is blank. It is not treated as zero and is left out of totals.' },
        { term: 'Not yet reported', desc: 'The month falls after the latest published report.' },
        { term: 'Not published', desc: 'No table exists for that location and year. Figures are never estimated or redistributed from another location.' },
    ];
    return (
        <section aria-labelledby="bmw-about-heading" className="bg-white rounded-2xl p-6 md:p-8 border border-border">
            <h2 id="bmw-about-heading" className="text-lg md:text-xl font-extrabold text-text-primary mb-3">About the data</h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
                MV Hospital for Diabetes publishes the weight of biomedical waste handed over for disposal each month, by colour-coded bin category, for each reporting location. All values are in kilograms (kg) and are shown as published. Totals are calculated from the monthly figures; where the source also prints a Total row, it is shown alongside and any difference is flagged rather than corrected.
            </p>
            <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {conventions.map(c => (
                    <div key={c.term}>
                        <dt className="text-sm font-bold text-text-primary">{c.term}</dt>
                        <dd className="text-sm text-text-secondary mt-0.5">{c.desc}</dd>
                    </div>
                ))}
            </dl>
            <div className="flex items-center gap-x-6 gap-y-2 mt-6 pt-6 border-t border-border flex-wrap">
                {BMW_CATEGORIES.map(c => (
                    <span key={c} className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-[3px] ${BIN_SWATCH[c]}`} aria-hidden />
                        <span className="text-xs font-bold text-text-secondary">{BMW_CATEGORY_LABELS[c]} (kg)</span>
                    </span>
                ))}
            </div>
        </section>
    );
}

// ─── Dashboard ───

function DashboardView({ selection, onSelect }: { selection: Selection; onSelect?: (s: Selection) => void }) {
    const { year, location } = selection;
    const info = getYear(year)!;
    const published = getPublishedLocations(year);
    const shown = location === 'all' ? published : [location];
    const report = bmwReports.find(r => r.year === year);

    return (
        <div className="space-y-12 md:space-y-16">
            <div id="bmw-report" className="scroll-mt-28 space-y-8">
                <div className="bg-white rounded-2xl border border-border shadow-sm p-5 md:p-6 grid lg:grid-cols-2 gap-6">
                    <YearPicker selection={selection} onSelect={onSelect} />
                    <LocationPicker selection={selection} onSelect={onSelect} />
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4" aria-live="polite">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                            {year} Biomedical Waste Report{location !== 'all' && <span className="text-primary"> · {location}</span>}
                        </h2>
                        <p className="text-text-secondary mt-1">
                            Reporting period: {monthSpan(1, info.windowEndMonth, year)}
                        </p>
                    </div>
                    <StatusBadge year={year} />
                </div>

                {info.notes && (
                    <div className="rounded-2xl border border-primary-light/30 bg-primary-light/[0.06] p-4 md:p-5 flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                        <div className="space-y-1.5 text-sm text-text-primary">
                            {info.notes.map(n => <p key={n}>{n}</p>)}
                        </div>
                    </div>
                )}

                <Summary year={year} locations={shown} />

                <div className="space-y-8">
                    {shown.map(loc => <LocationReport key={`${year}-${loc}`} year={year} location={loc} />)}
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
                    <span className="inline-flex items-center gap-2 flex-wrap">
                        <Download className="w-4 h-4 text-primary" aria-hidden />
                        <a href={bmwCsvHref(year)} download={bmwCsvFileName(year)} className={`font-bold text-primary underline underline-offset-2 rounded ${FOCUS_RING}`}>
                            Download {year} data (CSV)
                        </a>
                    </span>
                    <span className="inline-flex items-center gap-2 flex-wrap">
                        <FileSpreadsheet className="w-4 h-4 text-primary" aria-hidden />
                        {report ? (
                            <a href={report.href} download className={`font-bold text-primary underline underline-offset-2 rounded ${FOCUS_RING}`}>
                                Original {year} report (XLS, {report.coverage})
                            </a>
                        ) : (
                            <>No original report file was issued for {year}.</>
                        )}
                    </span>
                </div>
            </div>

            <CoverageMatrix selection={selection} onSelect={onSelect} />
            <Downloads />
            <AboutData />

            <div className="text-center bg-surface-muted rounded-[2rem] p-8 md:p-12 border border-border">
                <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">Explore MV Diabetes</h2>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                    Learn more about our comprehensive diabetes care, services, and commitment to community health.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/appointment"
                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-text-primary font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-0.5 ${FOCUS_RING}`}
                    >
                        Book Appointment
                        <ArrowRight size={18} aria-hidden />
                    </Link>
                    <Link
                        href="/care/diabetes-care"
                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-border text-text-primary font-bold hover:bg-surface-muted hover:border-text-secondary/30 transition-all ${FOCUS_RING}`}
                    >
                        Explore Diabetes Care
                    </Link>
                </div>
            </div>
        </div>
    );
}

/** Reads the year and location from the URL so links such as /bmw-data?year=2024 open that year. */
export default function BMWDashboard() {
    const params = useSearchParams();
    const selection = resolveSelection(params.get('year'), params.get('location'));

    const select = (next: Selection) => {
        const query = new URLSearchParams(params.toString());
        query.set('year', String(next.year));
        if (next.location === 'all') query.delete('location');
        else query.set('location', next.location.toLowerCase());
        window.history.replaceState(null, '', `${window.location.pathname}?${query.toString()}${window.location.hash}`);
    };

    return <DashboardView selection={selection} onSelect={select} />;
}

/** Prerendered stand-in (latest year, all locations) shown until the URL has been read. */
export function BMWDashboardFallback() {
    return <DashboardView selection={resolveSelection(null, null)} />;
}
