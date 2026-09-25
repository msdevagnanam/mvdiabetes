'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    User, MapPin, Stethoscope, Check, CheckCircle2,
    Loader2, AlertCircle, PhoneCall, Activity, Package, Footprints,
    MoreHorizontal, Mail, ChevronDown, ShieldCheck, type LucideIcon
} from 'lucide-react';
import { branches } from '@/data/branches';
import { doctors } from '@/data/doctors';
import { packages as pkgList } from '@/data/packages';
import { siteConfig } from '@/data/site';

const APPOINTMENT_TYPES: { id: string; label: string; icon: LucideIcon }[] = [
    { id: 'consultation', label: 'Consultation', icon: Stethoscope },
    { id: 'checkup', label: 'Diabetes Checkup', icon: Activity },
    { id: 'package', label: 'Health Package', icon: Package },
    { id: 'footcare', label: 'Foot Care', icon: Footprints },
    { id: 'other', label: 'Other', icon: MoreHorizontal },
];

const GENDERS = ['Male', 'Female', 'Other'];

const inputClass =
    'w-full h-11 rounded-xl border bg-white text-sm font-medium text-text-primary placeholder:text-text-secondary/60 outline-none transition-all hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10';

const fieldBorder = (hasError: boolean) => (hasError ? 'border-error/60 bg-error/[0.02]' : 'border-border');

function FieldLabel({ htmlFor, children, required, hint }: { htmlFor?: string; children: React.ReactNode; required?: boolean; hint?: string }) {
    return (
        <label htmlFor={htmlFor} className="flex items-baseline justify-between gap-2 mb-1.5 text-[13px] font-semibold text-text-primary">
            <span>
                {children}
                {required && <span className="text-error ml-0.5">*</span>}
            </span>
            {hint && <span className="text-[11px] font-medium text-text-secondary">{hint}</span>}
        </label>
    );
}

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-error">
            <AlertCircle size={13} className="shrink-0" />
            {message}
        </p>
    );
}

const APPOINTMENT_HIGHLIGHTS = [
    'India\'s first exclusive diabetes hospital, caring for patients since 1954',
    'Specialist consultants across Chennai and Bengaluru branches',
    'On-site diagnostics, foot care and dietetics under one roof',
    'Our team confirms your slot by call or email before the visit',
];

interface FormState {
    appointmentType: string;
    location: string;
    appointmentDate1: string;
    appointmentDate2: string;
    patientName: string;
    phone: string;
    email: string;
    age: string;
    gender: string;
    consent: boolean;
}

export default function AppointmentForm() {
    const params = useSearchParams();
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [form, setForm] = useState<FormState>({
        appointmentType: '', location: '', appointmentDate1: '', appointmentDate2: '',
        patientName: '', phone: '', email: '', age: '', gender: '', consent: false,
    });

    // Pre-populate from URL query params
    useEffect(() => {
        const doctorSlug = params.get('doctor');
        const packageSlug = params.get('package');
        const checkupSlug = params.get('checkup');
        const serviceSlug = params.get('service');

        const updates: Partial<FormState> = {};

        if (doctorSlug) {
            const doc = doctors.find(d => d.slug === doctorSlug);
            if (doc) {
                if (doc.location.length === 1) updates.location = doc.location[0];
                updates.appointmentType = 'consultation';
            }
        }
        if (packageSlug) {
            const pkg = pkgList.find(p => p.slug === packageSlug);
            if (pkg) {
                updates.appointmentType = 'package';
                updates.location = pkg.location;
            }
        }
        if (checkupSlug) {
            updates.appointmentType = 'checkup';
        }
        if (serviceSlug) {
            updates.appointmentType = 'consultation';
        }

        if (Object.keys(updates).length > 0) {
            setForm(prev => ({ ...prev, ...updates }));
        }
    }, [params]);

    const update = useCallback((field: keyof FormState, value: string | boolean) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setErrors(prev => {
            const next = { ...prev };
            delete next[field];
            return next;
        });
    }, []);

    const validateForm = (): boolean => {
        const e: Record<string, string> = {};
        if (!form.appointmentType) e.appointmentType = 'Please select an appointment type.';
        if (!form.location) e.location = 'Please select a location.';
        if (!form.appointmentDate1) e.appointmentDate1 = 'Please select an appointment date.';

        if (!form.patientName.trim()) e.patientName = 'Please enter your name.';

        if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
        else {
            const cleaned = form.phone.replace(/[\s\-+]/g, '');
            if (!/^(91)?[6-9]\d{9}$/.test(cleaned)) e.phone = 'Please enter a valid 10-digit mobile number.';
        }

        if (!form.email.trim()) e.email = 'Please enter your email address.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';

        if (!form.consent) e.consent = 'Please provide your consent to proceed.';

        setErrors(e);

        if (Object.keys(e).length > 0) {
            const firstErrorId = Object.keys(e)[0] + '-field';
            const el = document.getElementById(firstErrorId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return false;
        }
        return true;
    };

    const submit = async () => {
        if (submitting) return;
        if (!validateForm()) return;

        setSubmitting(true);
        setErrors({});
        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                const p = new URLSearchParams({
                    ref: data.referenceNumber,
                    name: form.patientName,
                    location: form.location,
                    date: form.appointmentDate1,
                    date2: form.appointmentDate2,
                    type: form.appointmentType,
                });
                router.push(`/thank-you?${p.toString()}`);
            } else if (data.errors) {
                setErrors(data.errors);
            } else {
                setErrors({ submit: data.message || 'Something went wrong. Please try again.' });
            }
        } catch {
            setErrors({ submit: 'We couldn\'t submit your request right now. Please try again or call our appointments team.' });
        } finally {
            setSubmitting(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    const steps = [
        { label: 'Service', done: !!form.appointmentType && !!form.location },
        { label: 'Date', done: !!form.appointmentDate1 },
        { label: 'Patient', done: !!form.patientName.trim() && !!form.phone.trim() && !!form.email.trim() },
    ];
    const completedSteps = steps.filter(s => s.done).length;

    return (
        <div id="form-top" className="min-h-screen bg-surface-muted py-6 lg:py-10 font-sans">
            <div className="container-site max-w-7xl">
                {/* Header Page Title */}
                <div className="mb-8 text-center max-w-3xl mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-primary leading-tight mb-3 tracking-tight">Book Your Appointment</h1>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">Schedule your visit at MV The appointments team will check the availability of the consultant and date requested and send you a confirmation mail or call you on the mobile no. shared by you.</p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
                    {/* Left Image Side — sticks alongside the long form */}
                    <div className="hidden lg:block sticky top-24">
                        {/* The photo is 1536x1024, so the frame keeps a 3:2 ratio
                            and nothing gets cropped. */}
                        <div className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden border border-border bg-white shadow-xl shadow-primary-dark/5">
                            <Image
                                src="/images/hero/mv-hero-img2.png"
                                alt="An MV Diabetes doctor examining a patient's foot during a consultation"
                                fill
                                priority
                                sizes="(max-width: 1024px) 0px, 450px"
                                className="object-cover"
                            />
                        </div>

                        <div className="mt-5 bg-white rounded-2xl border border-border p-5 shadow-xl shadow-primary-dark/5">
                            <h2 className="text-sm font-bold text-text-primary mb-3">Why book with MV Diabetes?</h2>
                            <ul className="flex flex-col gap-2.5">
                                {APPOINTMENT_HIGHLIGHTS.map((point) => (
                                    <li key={point} className="flex items-start gap-2.5 text-sm text-text-secondary leading-snug">
                                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Form Side — compact so every field fits without much scrolling */}
                    <div className="bg-white rounded-3xl border border-border shadow-xl shadow-primary-dark/5 overflow-hidden">
                        {/* Header with slim progress bar */}
                        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 sm:px-6 py-4 text-white">
                            <div className="flex items-center justify-between gap-3">
                                <h2 className="text-lg font-extrabold leading-tight">Appointment Request</h2>
                                <span className="text-[11px] font-semibold text-white/70 whitespace-nowrap">{completedSteps}/{steps.length} sections done</span>
                            </div>
                            <div className="mt-2.5 h-1 rounded-full bg-white/15 overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-secondary transition-all duration-500"
                                    style={{ width: `${(completedSteps / steps.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="p-5 sm:p-6 flex flex-col gap-4">
                            {/* Service */}
                            <div id="appointmentType-field">
                                <FieldLabel required htmlFor="appointmentType">What would you like to book?</FieldLabel>
                                
                                {/* Mobile/Tablet Dropdown */}
                                <div className="relative md:hidden">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
                                        {(() => {
                                            const selectedType = APPOINTMENT_TYPES.find(t => t.id === form.appointmentType);
                                            const Icon = selectedType ? selectedType.icon : Stethoscope;
                                            return <Icon size={15} />;
                                        })()}
                                    </div>
                                    <select
                                        id="appointmentType"
                                        value={form.appointmentType}
                                        onChange={e => update('appointmentType', e.target.value)}
                                        className={`${inputClass} ${fieldBorder(!!errors.appointmentType)} pl-9 pr-8 appearance-none cursor-pointer truncate ${form.appointmentType ? '' : 'text-text-secondary'}`}
                                    >
                                        <option value="">Select service</option>
                                        {APPOINTMENT_TYPES.map(({ id, label }) => (
                                            <option key={id} value={id}>{label}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                </div>

                                {/* Desktop Pills */}
                                <div role="radiogroup" aria-label="Appointment type" className="hidden md:flex flex-wrap gap-2">
                                    {APPOINTMENT_TYPES.map(({ id, label, icon: Icon }) => {
                                        const selected = form.appointmentType === id;
                                        return (
                                            <button
                                                key={id}
                                                type="button"
                                                role="radio"
                                                aria-checked={selected}
                                                onClick={() => update('appointmentType', id)}
                                                className={`inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full border text-[13px] font-semibold transition-all ${
                                                    selected
                                                        ? 'border-primary bg-primary text-white shadow-sm'
                                                        : `${errors.appointmentType ? 'border-error/60' : 'border-border'} bg-white text-text-primary hover:border-primary/40 hover:text-primary`
                                                }`}
                                            >
                                                <Icon size={14} />
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>
                                <FieldError message={errors.appointmentType} />
                            </div>

                            {/* Location + dates */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div id="location-field">
                                    <FieldLabel htmlFor="location" required>Location</FieldLabel>
                                    <div className="relative">
                                        <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                        <select
                                            id="location"
                                            value={form.location}
                                            onChange={e => update('location', e.target.value)}
                                            className={`${inputClass} ${fieldBorder(!!errors.location)} pl-9 pr-8 appearance-none cursor-pointer truncate ${form.location ? '' : 'text-text-secondary'}`}
                                        >
                                            <option value="">Select branch</option>
                                            {branches.map(b => (
                                                <option key={b.id} value={b.shortName.replace(/ \(.*\)/, '')}>{b.shortName} - {b.city}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                    </div>
                                    <FieldError message={errors.location} />
                                </div>
                                <div id="appointmentDate1-field">
                                    <FieldLabel htmlFor="appointmentDate1" required>Preferred date</FieldLabel>
                                    <input id="appointmentDate1" type="date" min={today} value={form.appointmentDate1}
                                        onChange={e => update('appointmentDate1', e.target.value)}
                                        className={`${inputClass} ${fieldBorder(!!errors.appointmentDate1)} px-3`} />
                                    <FieldError message={errors.appointmentDate1} />
                                </div>
                                <div id="appointmentDate2-field">
                                    <FieldLabel htmlFor="appointmentDate2" hint="Optional">Alternate date</FieldLabel>
                                    <input id="appointmentDate2" type="date" min={form.appointmentDate1 || today} value={form.appointmentDate2}
                                        onChange={e => update('appointmentDate2', e.target.value)}
                                        className={`${inputClass} border-border px-3`} />
                                </div>
                            </div>

                            <div className="h-px bg-border" />

                            {/* Patient details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div id="patientName-field">
                                    <FieldLabel htmlFor="patientName" required>Full name</FieldLabel>
                                    <div className="relative">
                                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                        <input id="patientName" type="text" autoComplete="name" value={form.patientName} placeholder="Patient's full name"
                                            onChange={e => update('patientName', e.target.value)}
                                            className={`${inputClass} ${fieldBorder(!!errors.patientName)} pl-9 pr-3`} />
                                    </div>
                                    <FieldError message={errors.patientName} />
                                </div>

                                <div id="phone-field">
                                    <FieldLabel htmlFor="phone" required>Mobile number</FieldLabel>
                                    <div className={`flex h-11 rounded-xl border bg-white overflow-hidden transition-all hover:border-primary/40 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 ${fieldBorder(!!errors.phone)}`}>
                                        <span className="inline-flex items-center px-3 text-sm font-bold text-text-secondary bg-surface-muted border-r border-border select-none">+91</span>
                                        <input id="phone" type="tel" inputMode="numeric" autoComplete="tel-national" value={form.phone} placeholder="98765 43210" maxLength={10}
                                            onChange={e => update('phone', e.target.value.replace(/\D/g, ''))}
                                            className="flex-1 min-w-0 px-3 text-sm font-medium tracking-wide text-text-primary placeholder:text-text-secondary/60 bg-transparent outline-none" />
                                    </div>
                                    <FieldError message={errors.phone} />
                                </div>

                                <div id="email-field" className="sm:col-span-2">
                                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_90px_190px] gap-3">
                                        <div>
                                            <FieldLabel htmlFor="email" required>Email</FieldLabel>
                                            <div className="relative">
                                                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                                <input id="email" type="email" autoComplete="email" value={form.email} placeholder="your@email.com"
                                                    onChange={e => update('email', e.target.value)}
                                                    className={`${inputClass} ${fieldBorder(!!errors.email)} pl-9 pr-3`} />
                                            </div>
                                            <FieldError message={errors.email} />
                                        </div>
                                        <div>
                                            <FieldLabel htmlFor="age">Age</FieldLabel>
                                            <input id="age" type="number" min={0} max={120} inputMode="numeric" value={form.age} placeholder="45"
                                                onChange={e => update('age', e.target.value)}
                                                className={`${inputClass} border-border px-3`} />
                                        </div>
                                        <div>
                                            <FieldLabel>Gender</FieldLabel>
                                            <div role="radiogroup" aria-label="Gender" className="grid grid-cols-3 gap-1 p-1 h-11 rounded-xl bg-surface-muted border border-border">
                                                {GENDERS.map(g => {
                                                    const selected = form.gender === g;
                                                    return (
                                                        <button
                                                            key={g}
                                                            type="button"
                                                            role="radio"
                                                            aria-checked={selected}
                                                            onClick={() => update('gender', selected ? '' : g)}
                                                            className={`rounded-lg text-xs font-semibold transition-all ${selected ? 'bg-white text-primary shadow-sm ring-1 ring-primary/20' : 'text-text-secondary hover:text-text-primary'}`}
                                                        >
                                                            {g}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Consent + submit */}
                            <div id="consent-field">
                                <label htmlFor="consent" className="flex items-start gap-2.5 cursor-pointer">
                                    <input id="consent" type="checkbox" checked={form.consent}
                                        onChange={e => update('consent', e.target.checked)}
                                        className="w-4 h-4 mt-0.5 rounded accent-primary cursor-pointer shrink-0" />
                                    <span className="text-xs text-text-secondary leading-relaxed select-none">
                                        I consent to MV Diabetes contacting me by phone or email about this appointment, as per the{' '}
                                        <Link href="/privacy-policy" className="text-primary hover:underline font-semibold" onClick={e => e.stopPropagation()}>Privacy Policy</Link>.
                                        <span className="text-error ml-0.5">*</span>
                                    </span>
                                </label>
                                <FieldError message={errors.consent} />
                            </div>

                            {errors.submit && (
                                <div role="alert" className="p-3 bg-error/[0.06] border border-error/30 rounded-xl">
                                    <p className="text-error font-bold flex items-center gap-2 text-sm"><AlertCircle size={15} /> Submission failed</p>
                                    <p className="text-error/80 text-xs font-medium mt-0.5">{errors.submit}</p>
                                </div>
                            )}

                            <div>
                                <button type="button" onClick={submit} disabled={submitting}
                                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-secondary text-text-primary font-bold text-base hover:bg-[#ebae12] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-secondary/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                    {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : <><Check size={18} strokeWidth={2.5} /> Request Appointment</>}
                                </button>
                                <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-text-secondary">
                                    <span className="flex items-center gap-1.5">
                                        <ShieldCheck size={14} className="text-primary-light" />
                                        We&apos;ll call or email to confirm your slot.
                                    </span>
                                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 font-semibold text-primary hover:underline">
                                        <PhoneCall size={13} /> {siteConfig.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
