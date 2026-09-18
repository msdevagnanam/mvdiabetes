'use client';

import { useState, useMemo } from 'react';
import { bmwData, formatBMWValue, getYearTotals, BMWYearData, BMWLocationData } from '@/data/bmw-data';
import { Download, BarChart3, FileSpreadsheet, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

// ─── Bin color legend tokens ───
const binColors = {
    yellow: { bg: 'bg-[#EEC642]', text: 'text-[#8B6914]', light: 'bg-[#EEC642]/10', border: 'border-[#EEC642]/30', label: 'Yellow Bin' },
    red:    { bg: 'bg-red-500',    text: 'text-red-600',    light: 'bg-red-500/10',    border: 'border-red-500/30',    label: 'Red Bin' },
    blue:   { bg: 'bg-blue-500',   text: 'text-blue-600',   light: 'bg-blue-500/10',   border: 'border-blue-500/30',   label: 'Blue Bin' },
    white:  { bg: 'bg-gray-400',   text: 'text-gray-600',   light: 'bg-gray-400/10',   border: 'border-gray-400/30',   label: 'White Bin' },
};

// ─── Summary Card ───
function SummaryCard({ label, value, color }: { label: string; value: number; color: keyof typeof binColors }) {
    const c = binColors[color];
    return (
        <div className={`bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-4 h-4 rounded-full ${c.bg}`} />
                <span className="text-sm font-bold text-text-secondary uppercase tracking-wider">{label}</span>
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight">
                {value}<span className="text-lg font-bold text-text-secondary ml-1.5">kg</span>
            </div>
        </div>
    );
}

// ─── Data Table ───
function DataTable({ data, title }: { data: BMWLocationData; title: string }) {
    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-border bg-surface-muted/50">
                <h3 className="text-lg font-bold text-text-primary">{title}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-muted/30 border-b border-border">
                            <th className="text-left py-3.5 px-5 font-bold text-text-secondary uppercase tracking-wider text-xs">Month</th>
                            <th className="text-right py-3.5 px-5 font-bold text-text-secondary uppercase tracking-wider text-xs">
                                <span className="inline-flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${binColors.yellow.bg}`} />Yellow
                                </span>
                            </th>
                            <th className="text-right py-3.5 px-5 font-bold text-text-secondary uppercase tracking-wider text-xs">
                                <span className="inline-flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${binColors.red.bg}`} />Red
                                </span>
                            </th>
                            <th className="text-right py-3.5 px-5 font-bold text-text-secondary uppercase tracking-wider text-xs">
                                <span className="inline-flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${binColors.blue.bg}`} />Blue
                                </span>
                            </th>
                            <th className="text-right py-3.5 px-5 font-bold text-text-secondary uppercase tracking-wider text-xs">
                                <span className="inline-flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${binColors.white.bg}`} />White
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.months.map((row, idx) => {
                            const isNull = row.yellow === null;
                            return (
                                <tr key={idx} className={`border-b border-border/50 hover:bg-surface-muted/30 transition-colors ${isNull ? 'opacity-40' : ''}`}>
                                    <td className="py-3 px-5 font-medium text-text-primary">{row.month}</td>
                                    <td className="py-3 px-5 text-right tabular-nums font-medium text-text-secondary">{formatBMWValue(row.yellow)}</td>
                                    <td className="py-3 px-5 text-right tabular-nums font-medium text-text-secondary">{formatBMWValue(row.red)}</td>
                                    <td className="py-3 px-5 text-right tabular-nums font-medium text-text-secondary">{formatBMWValue(row.blue)}</td>
                                    <td className="py-3 px-5 text-right tabular-nums font-medium text-text-secondary">{formatBMWValue(row.white)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-primary text-white font-bold">
                            <td className="py-3.5 px-5 rounded-bl-2xl">Total</td>
                            <td className="py-3.5 px-5 text-right tabular-nums">{data.totals.yellow}</td>
                            <td className="py-3.5 px-5 text-right tabular-nums">{data.totals.red}</td>
                            <td className="py-3.5 px-5 text-right tabular-nums">{data.totals.blue}</td>
                            <td className="py-3.5 px-5 text-right tabular-nums rounded-br-2xl">{data.totals.white}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

// ─── Simple Bar Chart (CSS-based, no library) ───
function BarChart({ data, label }: { data: BMWLocationData; label: string }) {
    const populatedMonths = data.months.filter(m => m.yellow !== null);
    if (populatedMonths.length === 0) return null;

    const maxVal = Math.max(
        ...populatedMonths.map(m => Math.max(m.yellow ?? 0, m.red ?? 0, m.blue ?? 0, m.white ?? 0))
    );

    return (
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
            <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-6">{label} — Monthly Overview</h4>
            <div className="space-y-3">
                {populatedMonths.map((m, idx) => {
                    const total = (m.yellow ?? 0) + (m.red ?? 0) + (m.blue ?? 0) + (m.white ?? 0);
                    return (
                        <div key={idx} className="flex items-center gap-3">
                            <span className="text-xs font-medium text-text-secondary w-12 flex-shrink-0">{m.month.substring(0, 3)}</span>
                            <div className="flex-grow flex h-5 rounded-full overflow-hidden bg-surface-muted">
                                {m.yellow !== null && m.yellow > 0 && (
                                    <div className={`${binColors.yellow.bg} h-full transition-all duration-500`} style={{ width: `${(m.yellow / (maxVal * 1.2)) * 100}%` }} title={`Yellow: ${m.yellow} kg`} />
                                )}
                                {m.red !== null && m.red > 0 && (
                                    <div className={`${binColors.red.bg} h-full transition-all duration-500`} style={{ width: `${(m.red / (maxVal * 1.2)) * 100}%` }} title={`Red: ${m.red} kg`} />
                                )}
                                {m.blue !== null && m.blue > 0 && (
                                    <div className={`bg-blue-500 h-full transition-all duration-500`} style={{ width: `${(m.blue / (maxVal * 1.2)) * 100}%` }} title={`Blue: ${m.blue} kg`} />
                                )}
                            </div>
                            <span className="text-xs font-bold text-text-secondary tabular-nums w-16 text-right">{total} kg</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ─── Location Comparison Cards ───
function LocationComparison({ yearData }: { yearData: BMWYearData }) {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {yearData.locations.map((loc, idx) => {
                const total = loc.totals.yellow + loc.totals.red + loc.totals.blue + loc.totals.white;
                const populatedCount = loc.months.filter(m => m.yellow !== null).length;
                return (
                    <div key={idx} className="bg-white rounded-2xl border border-border shadow-sm p-6 hover:shadow-md transition-all">
                        <h4 className="text-xl font-bold text-text-primary mb-1">{loc.location}</h4>
                        <p className="text-xs text-text-secondary mb-6">{populatedCount} month{populatedCount !== 1 ? 's' : ''} reported</p>
                        <div className="text-3xl font-extrabold text-primary mb-6 tabular-nums">
                            {total}<span className="text-sm font-bold text-text-secondary ml-1">kg total</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {(['yellow', 'red', 'blue', 'white'] as const).map(bin => (
                                <div key={bin} className="flex items-center gap-2">
                                    <span className={`w-2.5 h-2.5 rounded-full ${binColors[bin].bg} flex-shrink-0`} />
                                    <span className="text-xs text-text-secondary">{binColors[bin].label}:</span>
                                    <span className="text-xs font-bold text-text-primary tabular-nums">{loc.totals[bin]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// ─── Main Dashboard Component ───
export default function BMWDashboard() {
    const availableYears = bmwData.map(d => d.year);
    const [selectedYear, setSelectedYear] = useState(availableYears[0]);
    const [selectedLocation, setSelectedLocation] = useState<string>('All');

    const yearData = useMemo(() => bmwData.find(d => d.year === selectedYear)!, [selectedYear]);
    const yearTotals = useMemo(() => getYearTotals(yearData), [yearData]);

    const locations = ['All', ...yearData.locations.map(l => l.location)];

    const filteredLocations = useMemo(() => {
        if (selectedLocation === 'All') return yearData.locations;
        return yearData.locations.filter(l => l.location === selectedLocation);
    }, [yearData, selectedLocation]);

    const displayTotals = useMemo(() => {
        if (selectedLocation === 'All') return yearTotals;
        const loc = yearData.locations.find(l => l.location === selectedLocation);
        return loc ? loc.totals : { yellow: 0, red: 0, blue: 0, white: 0 };
    }, [selectedLocation, yearData, yearTotals]);

    const hasPartialData = yearData.locations.some(l => l.months.some(m => m.yellow === null));

    return (
        <div className="space-y-12">
            {/* Year Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
                        {selectedYear} Report
                    </h2>
                    <p className="text-text-secondary mt-1">January {selectedYear} – December {selectedYear}</p>
                </div>
                <div className="flex items-center bg-surface-muted rounded-xl border border-border p-1.5" role="tablist" aria-label="Select Year">
                    {availableYears.map(year => (
                        <button
                            key={year}
                            role="tab"
                            aria-selected={year === selectedYear}
                            onClick={() => { setSelectedYear(year); setSelectedLocation('All'); }}
                            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                                year === selectedYear
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'text-text-secondary hover:text-text-primary'
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <SummaryCard label="Yellow Bin" value={displayTotals.yellow} color="yellow" />
                <SummaryCard label="Red Bin" value={displayTotals.red} color="red" />
                <SummaryCard label="Blue Bin" value={displayTotals.blue} color="blue" />
                <SummaryCard label="White Bin" value={displayTotals.white} color="white" />
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-1" role="tablist" aria-label="Select Location">
                {locations.map(loc => (
                    <button
                        key={loc}
                        role="tab"
                        aria-selected={loc === selectedLocation}
                        onClick={() => setSelectedLocation(loc)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                            loc === selectedLocation
                                ? 'bg-secondary text-white border-secondary shadow-md shadow-secondary/20'
                                : 'bg-white text-text-secondary border-border hover:border-secondary/50 hover:text-secondary'
                        }`}
                    >
                        {loc === 'All' ? 'All Locations' : loc}
                    </button>
                ))}
            </div>

            {/* Partial Data Note */}
            {hasPartialData && (
                <div className="bg-[#EEC642]/10 border border-[#EEC642]/30 rounded-2xl p-5 flex items-start gap-4">
                    <Info className="w-5 h-5 text-[#8B6914] flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-[#8B6914]">
                        Data shown reflects the values currently published in the source report. April–December are not populated in the source for {selectedYear}.
                    </p>
                </div>
            )}

            {/* Data Visualization (Bar Charts) */}
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-5 h-5 text-secondary" />
                    <h3 className="text-lg font-bold text-text-primary">Monthly Waste Overview</h3>
                </div>
                <div className={`grid ${filteredLocations.length > 1 ? 'lg:grid-cols-2 xl:grid-cols-3' : ''} gap-6`}>
                    {filteredLocations.map((loc, idx) => (
                        <BarChart key={idx} data={loc} label={loc.location} />
                    ))}
                </div>
            </div>

            {/* Data Tables */}
            <div className="space-y-8">
                {filteredLocations.map((loc, idx) => (
                    <DataTable key={idx} data={loc} title={`${loc.location} — ${selectedYear}`} />
                ))}
            </div>

            {/* Location Comparison (Only when "All Locations" is selected) */}
            {selectedLocation === 'All' && (
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold text-text-primary">Location Comparison — {selectedYear}</h3>
                    </div>
                    <LocationComparison yearData={yearData} />
                </div>
            )}

            {/* Download Section */}
            <div className="bg-surface-muted rounded-[2rem] p-8 md:p-12 border border-border">
                <div className="flex items-center gap-3 mb-8">
                    <Download className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-text-primary">Download Reports</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    {bmwData.map(yd => (
                        <a
                            key={yd.year}
                            href={yd.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-white rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FileSpreadsheet className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-text-primary">{yd.year} Biomedical Waste Report</p>
                                    <p className="text-xs text-text-secondary mt-0.5">XLS Format</p>
                                </div>
                            </div>
                            <Download className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* About the Data */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
                <h3 className="text-lg font-bold text-text-primary mb-4">About the Data</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                    This page presents the biomedical waste management data published by MV Diabetes for the reporting years 2021 and 2022, organized by location and waste category. All values are in kilograms (kg). The data is sourced directly from the official MV Diabetes biomedical waste management reports.
                </p>
                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border flex-wrap">
                    {Object.entries(binColors).map(([key, c]) => (
                        <div key={key} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${c.bg}`} />
                            <span className="text-xs font-bold text-text-secondary">{c.label} (kg)</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-surface-muted rounded-[2rem] p-8 md:p-12 border border-border">
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
                    Explore MV Diabetes
                </h3>
                <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                    Learn more about our comprehensive diabetes care, services, and commitment to community health.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/appointment"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-0.5"
                    >
                        Book Appointment
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/care/diabetes-care"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-border text-text-primary font-bold hover:bg-surface-muted hover:border-text-secondary/30 transition-all"
                    >
                        Explore Diabetes Care
                    </Link>
                </div>
            </div>
        </div>
    );
}
