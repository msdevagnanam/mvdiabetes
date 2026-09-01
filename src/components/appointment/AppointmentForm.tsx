'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Calendar, Clock, User, MapPin, Stethoscope, Check,
    Loader2, AlertCircle, Phone, Mail,
} from 'lucide-react';
import { branches } from '@/data/branches';
import { doctors } from '@/data/doctors';
import { specialties } from '@/data/specialties';
import { packages as pkgList } from '@/data/packages';
import { checkups as checkupList } from '@/data/checkups';

const APPOINTMENT_TYPES = [
    { id: 'consultation', label: 'Consultation', icon: Stethoscope },
    { id: 'checkup', label: 'Diabetes Checkup', icon: Calendar },
    { id: 'package', label: 'Health Package', icon: Check },
    { id: 'footcare', label: 'Foot Care', icon: User },
    { id: 'other', label: 'Other', icon: Phone },
];

const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

interface FormState {
    appointmentType: string;
    location: string;
    doctor: string;
    appointmentDate: string;
    alternativeDate: string;
    preferredTime: string;
    patientName: string;
    age: string;
    gender: string;
    phone: string;
    email: string;
    reasonForVisit: string;
    message: string;
    consent: boolean;
}

export default function AppointmentForm() {
    const params = useSearchParams();
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [form, setForm] = useState<FormState>({
        appointmentType: '', location: '', doctor: '', appointmentDate: '',
        alternativeDate: '', preferredTime: '', patientName: '', age: '',
        gender: '', phone: '', email: '', reasonForVisit: '', message: '', consent: false,
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
                updates.doctor = doc.slug;
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
        if (!form.appointmentDate) e.appointmentDate = 'Please select an appointment date.';

        if (!form.patientName.trim()) e.patientName = 'Please enter your name.';
        if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
        else {
            const cleaned = form.phone.replace(/[\s\-+]/g, '');
            if (!/^(91)?[6-9]\d{9}$/.test(cleaned)) e.phone = 'Please enter a valid 10-digit mobile number.';
        }
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
        if (!form.consent) e.consent = 'Please provide your consent to proceed.';

        setErrors(e);

        // Scroll to first error
        if (Object.keys(e).length > 0) {
            const firstErrorId = Object.keys(e)[0] + '-field';
            const firstErrorElement = document.getElementById(firstErrorId);
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        return Object.keys(e).length === 0;
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
                    date: form.appointmentDate,
                    doctor: form.doctor || '',
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

    const locationDoctors = form.location
        ? doctors.filter(d => d.location.includes(form.location) && d.appointmentEnabled)
        : doctors.filter(d => d.appointmentEnabled);

    return (
        <div className="min-h-screen bg-surface-muted py-8 lg:py-16">
            <div className="container-site max-w-4xl">
                {/* Header Page Title */}
                <div className="mb-8 text-center max-w-2xl mx-auto px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text-primary leading-tight mb-4 tracking-tight">Book Your Appointment</h1>
                    <p className="text-text-secondary text-lg">Schedule your visit at MV Diabetes. Please fill out the form below and our team will get back to confirm your slot.</p>
                </div>

                <div className="bg-white rounded-[2rem] border border-border p-6 sm:p-8 lg:p-12 shadow-sm">
                    <div className="flex flex-col gap-10 lg:gap-14">

                        {/* SECTION: Appointment Type */}
                        <div id="appointmentType-field">
                            <h2 className="text-xl font-bold text-text-primary mb-1">1. What would you like to book? <span className="text-red-500">*</span></h2>
                            <p className="text-text-secondary mb-6 text-sm font-medium">Select the type of appointment you need.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                                {APPOINTMENT_TYPES.map(t => {
                                    const Icon = t.icon;
                                    return (
                                        <button key={t.id} onClick={() => update('appointmentType', t.id)}
                                            className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${form.appointmentType === t.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20 scale-[1.02]' : 'border-border hover:border-primary/30 bg-white shadow-sm'}`}>
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${form.appointmentType === t.id ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                                                <Icon size={20} />
                                            </div>
                                            <span className="font-semibold text-text-primary">{t.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            {errors.appointmentType && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={16} />{errors.appointmentType}</p>}
                        </div>

                        <hr className="border-border rounded-full" />

                        {/* SECTION: Location */}
                        <div id="location-field">
                            <h2 className="text-xl font-bold text-text-primary mb-1">2. Select your preferred location <span className="text-red-500">*</span></h2>
                            <p className="text-text-secondary mb-6 text-sm font-medium">Choose the MV Diabetes centre nearest to you.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {branches.map(b => (
                                    <button key={b.id} onClick={() => update('location', b.shortName.replace(/ \(.*\)/, ''))}
                                        className={`w-full flex justify-start sm:flex-col sm:items-center sm:justify-center gap-4 p-5 rounded-2xl border-2 sm:text-center transition-all ${form.location === b.shortName.replace(/ \(.*\)/, '') ? 'border-primary bg-primary/5 ring-2 ring-primary/20 scale-[1.02]' : 'border-border hover:border-primary/30 bg-white shadow-sm'}`}>
                                        <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${form.location === b.shortName.replace(/ \(.*\)/, '') ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                                            <MapPin size={24} />
                                        </div>
                                        <div className="text-left sm:text-center">
                                            <div className="font-bold text-text-primary text-lg sm:text-base leading-tight">{b.shortName}</div>
                                            <div className="text-xs font-medium text-text-secondary mt-1">{b.city}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {errors.location && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={16} />{errors.location}</p>}
                        </div>

                        <hr className="border-border rounded-full" />

                        {/* SECTION: Doctor */}
                        <div id="doctor-field">
                            <h2 className="text-xl font-bold text-text-primary mb-1">3. Choose your doctor <span className="text-text-secondary text-sm font-medium ml-1 bg-surface-muted px-2 py-1 rounded-md border border-border">Optional</span></h2>
                            <p className="text-text-secondary mb-6 text-sm font-medium">Select a specific doctor or leave blank and let us assign the best available specialist for your needs.</p>

                            <div className="relative">
                                <select
                                    value={form.doctor}
                                    onChange={e => update('doctor', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold appearance-none hover:border-black/20 cursor-pointer shadow-sm"
                                >
                                    <option value="">Any Available Doctor / Specialist (Fastest Assignment)</option>
                                    {locationDoctors.map(d => (
                                        <option key={d.id} value={d.slug}>{d.name} — {d.specialty}</option>
                                    ))}
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary flex items-center justify-center w-8 h-8 rounded-lg bg-surface-muted border border-border">
                                    <User size={16} className="text-primary" />
                                </div>
                            </div>
                        </div>

                        <hr className="border-border rounded-full" />

                        {/* SECTION: Date & Time */}
                        <div id="appointmentDate-field">
                            <h2 className="text-xl font-bold text-text-primary mb-1">4. Select your preferred date & time <span className="text-red-500">*</span></h2>
                            <p className="text-text-secondary mb-6 text-sm font-medium">Choose when you&apos;d like to visit.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-bold text-text-primary mb-2">Preferred Date <span className="text-red-500">*</span></label>
                                    <input type="date" min={today} value={form.appointmentDate}
                                        onChange={e => update('appointmentDate', e.target.value)}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium hover:border-black/20 shadow-sm" />
                                    {errors.appointmentDate && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.appointmentDate}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-text-primary mb-2 ml-[1px]">Alternative Date <span className="text-text-secondary font-medium ml-1 bg-surface-muted px-2 py-0.5 rounded-md border border-border">Optional</span></label>
                                    <input type="date" min={today} value={form.alternativeDate}
                                        onChange={e => update('alternativeDate', e.target.value)}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium hover:border-black/20 shadow-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-3">Preferred Time Slot <span className="text-text-secondary font-medium ml-1 bg-surface-muted px-2 py-0.5 rounded-md border border-border">Optional</span></label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                                    {TIME_SLOTS.map(t => (
                                        <button key={t} onClick={() => update('preferredTime', t)}
                                            className={`px-2 py-3 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all ${form.preferredTime === t ? 'border-primary bg-primary text-white shadow-[0_8px_20px_rgba(3,66,127,0.25)]' : 'border-border hover:border-primary/30 text-text-secondary hover:text-primary bg-white shadow-sm'}`}>
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr className="border-border rounded-full" />

                        {/* SECTION: Patient Details */}
                        <div id="patientName-field">
                            <h2 className="text-xl font-bold text-text-primary mb-1">5. Your Details <span className="text-red-500">*</span></h2>
                            <p className="text-text-secondary mb-6 text-sm font-medium">Please provide your information for the appointment confirmation.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-text-primary mb-2">Full Name <span className="text-red-500">*</span></label>
                                    <input type="text" value={form.patientName} placeholder="Enter your full name"
                                        onChange={e => update('patientName', e.target.value)}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium hover:border-black/20 shadow-sm" />
                                    {errors.patientName && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.patientName}</p>}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Age</label>
                                        <input type="number" value={form.age} placeholder="e.g. 45"
                                            onChange={e => update('age', e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium hover:border-black/20 shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-primary mb-2">Gender</label>
                                        <select
                                            value={form.gender}
                                            onChange={e => update('gender', e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium appearance-none hover:border-black/20 cursor-pointer shadow-sm"
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div id="phone-field">
                                    <label className="block text-sm font-bold text-text-primary mb-2">Phone Number <span className="text-red-500">*</span></label>
                                    <div className="flex shadow-sm rounded-xl">
                                        <span className="inline-flex items-center px-4 font-bold text-text-secondary bg-surface-muted border-2 border-r-0 border-border rounded-l-xl select-none">+91</span>
                                        <input type="tel" value={form.phone} placeholder="98765 43210" maxLength={10}
                                            onChange={e => update('phone', e.target.value.replace(/\D/g, ''))}
                                            className="flex-1 px-5 py-3.5 rounded-r-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold tracking-wide hover:border-black/20" />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.phone}</p>}
                                </div>

                                <div id="email-field">
                                    <label className="block text-sm font-bold text-text-primary mb-2 flex items-center gap-3">Email <span className="text-text-secondary text-xs uppercase tracking-wide font-bold ml-1 bg-surface-muted px-2 py-0.5 rounded border border-border">Optional</span></label>
                                    <input type="email" value={form.email} placeholder="your@email.com"
                                        onChange={e => update('email', e.target.value)}
                                        className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium hover:border-black/20 shadow-sm" />
                                    {errors.email && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.email}</p>}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-bold text-text-primary mb-2">Reason for Visit <span className="text-text-secondary font-medium ml-1 bg-surface-muted px-2 py-1 rounded border border-border shadow-sm text-xs">Optional</span></label>
                                <textarea value={form.reasonForVisit} placeholder="Briefly describe your reason for visit..."
                                    onChange={e => update('reasonForVisit', e.target.value)} rows={4}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-medium resize-y hover:border-black/20 shadow-sm" />
                            </div>
                        </div>

                        {/* SECTION: Submit Area */}
                        <div className="bg-gradient-to-br from-surface-muted to-white p-6 sm:p-8 rounded-3xl border-2 border-border/50 flex flex-col items-center text-center shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)] mt-4">
                            <div id="consent-field" className="flex items-start gap-4 mb-8 max-w-2xl text-left bg-white p-4 rounded-2xl border border-border shadow-sm">
                                <input id="consent" type="checkbox" checked={form.consent}
                                    onChange={e => update('consent', e.target.checked)}
                                    className="w-5 h-5 rounded border-2 border-border text-primary focus:ring-primary focus:ring-4 focus:ring-primary/20 mt-0.5 cursor-pointer shrink-0 transition-all" />
                                <div>
                                    <label htmlFor="consent" className="text-sm font-medium text-text-primary leading-relaxed cursor-pointer select-none">
                                        I consent to MV Diabetes contacting me regarding this appointment request via phone or email. My information will be handled securely in accordance with the <Link href="/privacy" className="text-primary hover:underline font-bold">Privacy Policy</Link>. <span className="text-red-500">*</span>
                                    </label>
                                    {errors.consent && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.consent}</p>}
                                </div>
                            </div>

                            {errors.submit && (
                                <div className="mb-6 w-full max-w-2xl p-5 bg-red-50 border-2 border-red-200 rounded-2xl text-left">
                                    <p className="text-red-600 font-bold flex items-center gap-2 mb-2"><AlertCircle size={20} /> Submission Failed</p>
                                    <p className="text-red-600/80 text-sm font-medium">{errors.submit}</p>
                                    <a href={`tel:+919380814247`} className="text-sm text-primary bg-white px-4 py-2 rounded-lg border border-border font-bold mt-4 inline-flex items-center gap-2 hover:border-primary transition-all shadow-sm"><Phone size={14} /> Call Appointments Team directly</a>
                                </div>
                            )}

                            <button onClick={submit} disabled={submitting}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-5 lg:py-5 rounded-2xl bg-secondary text-text-primary font-black text-lg hover:bg-[#ebae12] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_30px_rgba(255,193,41,0.25)] hover:shadow-[0_20px_40px_rgba(255,193,41,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                {submitting ? <><Loader2 size={24} className="animate-spin" /> Submitting Request…</> : <><Check size={24} /> Confirm & Submit Request</>}
                            </button>
                            <p className="text-text-secondary text-sm mt-6 max-w-md font-medium">By submitting, you are requesting an appointment slot. Our team will contact you shortly to confirm your final schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
