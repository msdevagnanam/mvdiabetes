'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Calendar, User, MapPin, Stethoscope, Check,
    Loader2, AlertCircle, PhoneCall
} from 'lucide-react';
import { branches } from '@/data/branches';
import { doctors } from '@/data/doctors';
import { packages as pkgList } from '@/data/packages';

const APPOINTMENT_TYPES = [
    { id: 'consultation', label: 'Consultation' },
    { id: 'checkup', label: 'Diabetes Checkup' },
    { id: 'package', label: 'Health Package' },
    { id: 'footcare', label: 'Foot Care' },
    { id: 'other', label: 'Other' },
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

    return (
        <div id="form-top" className="min-h-screen bg-surface-muted py-8 lg:py-16">
            <div className="container-site max-w-3xl">
                {/* Header Page Title */}
                <div className="mb-8 text-center max-w-2xl mx-auto px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-text-primary leading-tight mb-4 tracking-tight">Book Your Appointment</h1>
                    <p className="text-text-secondary text-lg">Schedule your visit at MV The appointments team will check the availability of the consultant and date requested and send you a confirmation mail or call you on the mobile no. shared by you.</p>
                </div>

                <div className="bg-white rounded-[2rem] border border-border p-6 sm:p-8 lg:p-10 shadow-sm">
                    <div className="flex flex-col gap-8">

                        <h2 className="text-xl font-bold text-text-primary mb-1 border-b pb-4">Service Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                            {/* SECTION: Appointment Type */}
                            <div id="appointmentType-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">What would you like to book? <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select
                                        value={form.appointmentType}
                                        onChange={e => update('appointmentType', e.target.value)}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold appearance-none hover:border-black/20 cursor-pointer shadow-sm"
                                    >
                                        <option value="">Select Appointment Type</option>
                                        {APPOINTMENT_TYPES.map(t => (
                                            <option key={t.id} value={t.id}>{t.label}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary flex items-center justify-center w-8 h-8">
                                        <Stethoscope size={18} />
                                    </div>
                                </div>
                                {errors.appointmentType && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={16} />{errors.appointmentType}</p>}
                            </div>

                            {/* SECTION: Location */}
                            <div id="location-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">Select your preferred location <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select
                                        value={form.location}
                                        onChange={e => update('location', e.target.value)}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold appearance-none hover:border-black/20 cursor-pointer shadow-sm"
                                    >
                                        <option value="">Select Nearest Branch</option>
                                        {branches.map(b => (
                                            <option key={b.id} value={b.shortName.replace(/ \(.*\)/, '')}>{b.shortName} - {b.city}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary flex items-center justify-center w-8 h-8">
                                        <MapPin size={18} />
                                    </div>
                                </div>
                                {errors.location && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={16} />{errors.location}</p>}
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-text-primary mb-1 mt-4 border-b pb-4">Date</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                            {/* SECTION: Date 1 */}
                            <div id="appointmentDate1-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">Appointment Date - 1 <span className="text-red-500">*</span></label>
                                <input type="date" min={today} value={form.appointmentDate1}
                                    onChange={e => update('appointmentDate1', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold hover:border-black/20 shadow-sm" />
                                {errors.appointmentDate1 && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.appointmentDate1}</p>}
                            </div>

                            {/* SECTION: Date 2 */}
                            <div id="appointmentDate2-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">Appointment Date - 2</label>
                                <input type="date" min={today} value={form.appointmentDate2}
                                    onChange={e => update('appointmentDate2', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold hover:border-black/20 shadow-sm" />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-text-primary mb-1 mt-4 border-b pb-4">Patient Details</h2>
                        {/* SECTION: Patient Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                            <div id="patientName-field" className="md:col-span-2">
                                <label className="block text-sm font-bold text-text-primary mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input type="text" value={form.patientName} placeholder="Enter your full name"
                                    onChange={e => update('patientName', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold hover:border-black/20 shadow-sm" />
                                {errors.patientName && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.patientName}</p>}
                            </div>

                            <div id="phone-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">Phone Number <span className="text-red-500">*</span></label>
                                <div className="flex shadow-sm rounded-xl">
                                    <span className="inline-flex items-center px-4 font-bold text-text-secondary bg-surface-muted border-2 border-r-0 border-border rounded-l-xl select-none">+91</span>
                                    <input type="tel" value={form.phone} placeholder="98765 43210" maxLength={10}
                                        onChange={e => update('phone', e.target.value.replace(/\D/g, ''))}
                                        className="flex-1 px-5 py-4 rounded-r-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold tracking-wide hover:border-black/20" />
                                </div>
                                {errors.phone && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.phone}</p>}
                            </div>

                            <div id="email-field">
                                <label className="block text-sm font-bold text-text-primary mb-2">Email <span className="text-red-500">*</span></label>
                                <input type="email" value={form.email} placeholder="your@email.com"
                                    onChange={e => update('email', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold hover:border-black/20 shadow-sm" />
                                {errors.email && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Age</label>
                                <input type="number" value={form.age} placeholder="e.g. 45"
                                    onChange={e => update('age', e.target.value)}
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold hover:border-black/20 shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Gender</label>
                                <div className="relative">
                                    <select
                                        value={form.gender}
                                        onChange={e => update('gender', e.target.value)}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-text-primary font-semibold appearance-none hover:border-black/20 cursor-pointer shadow-sm"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary flex items-center justify-center w-8 h-8">
                                        <User size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION: Submit Area */}
                        <div className="bg-gradient-to-br from-surface-muted to-white p-6 sm:p-8 rounded-3xl border-2 border-border/50 flex flex-col mt-4 shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)]">
                            <div id="consent-field" className="flex items-start gap-4 mb-8 max-w-6xl text-left bg-white p-4 rounded-2xl border border-border shadow-sm">
                                <input id="consent" type="checkbox" checked={form.consent}
                                    onChange={e => update('consent', e.target.checked)}
                                    className="w-5 h-5 rounded border-2 border-border text-primary focus:ring-primary focus:ring-4 focus:ring-primary/20 mt-0.5 cursor-pointer shrink-0 transition-all" />
                                <div>
                                    <label htmlFor="consent" className="text-sm font-medium text-text-primary leading-relaxed cursor-pointer select-none">
                                        I consent to MV Diabetes contacting me regarding this appointment request via phone or email. My information will be handled securely in accordance with the <Link href="/privacy" className="text-primary hover:underline font-bold">Privacy Policy</Link>.<span className="text-red-500">*</span>
                                    </label>
                                    {errors.consent && <p className="text-red-500 text-sm mt-3 flex items-center gap-1 font-semibold bg-red-50 w-fit px-3 py-1.5 rounded-lg border border-red-100"><AlertCircle size={14} />{errors.consent}</p>}
                                </div>
                            </div>

                            {errors.submit && (
                                <div className="mb-6 w-full p-5 bg-red-50 border-2 border-red-200 rounded-2xl text-left">
                                    <p className="text-red-600 font-bold flex items-center gap-2 mb-2"><AlertCircle size={20} /> Submission Failed</p>
                                    <p className="text-red-600/80 text-sm font-medium">{errors.submit}</p>
                                    <a href={`tel:+919380814247`} className="text-sm text-primary bg-white px-4 py-2 rounded-lg border border-border font-bold mt-4 inline-flex items-center gap-2 hover:border-primary transition-all shadow-sm"><PhoneCall size={14} /> Call Appointments Team directly</a>
                                </div>
                            )}

                            <button onClick={submit} disabled={submitting}
                                className="w-full flex items-center justify-center gap-3 px-12 py-5 lg:py-5 rounded-2xl bg-secondary text-text-primary font-black text-lg hover:bg-[#ebae12] hover:-translate-y-1 transition-all duration-300 shadow-[0_15px_30px_rgba(255,193,41,0.25)] hover:shadow-[0_20px_40px_rgba(255,193,41,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                                {submitting ? <><Loader2 size={24} className="animate-spin" /> Submitting Request…</> : <><Check size={24} /> Confirm & Submit Request</>}
                            </button>
                            <p className="text-text-secondary text-sm mt-6 font-medium text-center">By submitting, you are requesting an appointment slot. Our team will contact you shortly to confirm your final schedule.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
