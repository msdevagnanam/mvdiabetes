'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Calendar, Clock, User, MapPin, Stethoscope, ArrowRight, ArrowLeft, Check,
    Loader2, AlertCircle, Phone, Mail, ChevronRight,
} from 'lucide-react';
import { branches } from '@/data/branches';
import { doctors } from '@/data/doctors';
import { specialties } from '@/data/specialties';
import { packages as pkgList } from '@/data/packages';
import { checkups as checkupList } from '@/data/checkups';

const STEPS = ['Intent', 'Location', 'Doctor', 'Date & Time', 'Your Details', 'Review'];

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
    const [step, setStep] = useState(0);
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
            // Auto-advance if type pre-populated
            if (updates.appointmentType) setStep(1);
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

    const validateStep = (): boolean => {
        const e: Record<string, string> = {};
        if (step === 0 && !form.appointmentType) e.appointmentType = 'Please select an appointment type.';
        if (step === 1 && !form.location) e.location = 'Please select a location.';
        if (step === 3 && !form.appointmentDate) e.appointmentDate = 'Please select an appointment date.';
        if (step === 4) {
            if (!form.patientName.trim()) e.patientName = 'Please enter your name.';
            if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
            else {
                const cleaned = form.phone.replace(/[\s\-+]/g, '');
                if (!/^(91)?[6-9]\d{9}$/.test(cleaned)) e.phone = 'Please enter a valid 10-digit mobile number.';
            }
            if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
            if (!form.consent) e.consent = 'Please provide your consent to proceed.';
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = () => { if (validateStep()) setStep(s => Math.min(s + 1, STEPS.length - 1)); };
    const back = () => setStep(s => Math.max(s - 1, 0));

    const submit = async () => {
        if (submitting) return;
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
                setStep(4);
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

    const selectedDoctor = doctors.find(d => d.slug === form.doctor);

    const renderStep = () => {
        switch (step) {
            case 0: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">What would you like to book?</h2>
                    <p className="text-text-secondary mb-6">Select the type of appointment you need.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {APPOINTMENT_TYPES.map(t => {
                            const Icon = t.icon;
                            return (
                                <button key={t.id} onClick={() => update('appointmentType', t.id)}
                                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${form.appointmentType === t.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}`}>
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${form.appointmentType === t.id ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                                        <Icon size={20} />
                                    </div>
                                    <span className="font-semibold text-text-primary">{t.label}</span>
                                </button>
                            );
                        })}
                    </div>
                    {errors.appointmentType && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle size={14} />{errors.appointmentType}</p>}
                </div>
            );
            case 1: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">Select your preferred location</h2>
                    <p className="text-text-secondary mb-6">Choose the MV Diabetes centre nearest to you.</p>
                    <div className="space-y-3">
                        {branches.map(b => (
                            <button key={b.id} onClick={() => update('location', b.shortName.replace(/ \(.*\)/, ''))}
                                className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all ${form.location === b.shortName.replace(/ \(.*\)/, '') ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}`}>
                                <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${form.location === b.shortName.replace(/ \(.*\)/, '') ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="font-semibold text-text-primary">{b.shortName}</div>
                                    <div className="text-sm text-text-secondary mt-0.5">{b.city} — {b.address.slice(0, 60)}…</div>
                                </div>
                            </button>
                        ))}
                    </div>
                    {errors.location && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><AlertCircle size={14} />{errors.location}</p>}
                </div>
            );
            case 2: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">Choose your doctor</h2>
                    <p className="text-text-secondary mb-6">Select a specific doctor or let us assign the best available specialist.</p>
                    <button onClick={() => update('doctor', '')}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left mb-3 transition-all ${!form.doctor ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}`}>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${!form.doctor ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                            <User size={20} />
                        </div>
                        <div>
                            <div className="font-semibold text-text-primary">Any Available Doctor</div>
                            <div className="text-sm text-text-secondary">We\'ll assign the best available specialist</div>
                        </div>
                    </button>
                    <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                        {locationDoctors.map(d => (
                            <button key={d.id} onClick={() => update('doctor', d.slug)}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${form.doctor === d.slug ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}`}>
                                <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center ${form.doctor === d.slug ? 'bg-primary text-white' : 'bg-surface-muted text-text-secondary'}`}>
                                    <Stethoscope size={20} />
                                </div>
                                <div>
                                    <div className="font-semibold text-text-primary">{d.name}</div>
                                    <div className="text-sm text-text-secondary">{d.designation} · {d.specialty}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            );
            case 3: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">Select your preferred date & time</h2>
                    <p className="text-text-secondary mb-6">Choose when you&apos;d like to visit.</p>
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Preferred Date *</label>
                            <input type="date" min={today} value={form.appointmentDate}
                                onChange={e => update('appointmentDate', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary" />
                            {errors.appointmentDate && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.appointmentDate}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Alternative Date (optional)</label>
                            <input type="date" min={today} value={form.alternativeDate}
                                onChange={e => update('alternativeDate', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-2">Preferred Time Slot</label>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {TIME_SLOTS.map(t => (
                                    <button key={t} onClick={() => update('preferredTime', t)}
                                        className={`px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${form.preferredTime === t ? 'border-primary bg-primary text-white' : 'border-border hover:border-primary/30 text-text-primary'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
            case 4: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">Your Details</h2>
                    <p className="text-text-secondary mb-6">Please provide your information for the appointment.</p>
                    <div className="space-y-4">
                        {[
                            { name: 'patientName' as const, label: 'Full Name *', type: 'text', placeholder: 'Enter your full name' },
                            { name: 'age' as const, label: 'Age', type: 'number', placeholder: 'Your age' },
                        ].map(f => (
                            <div key={f.name}>
                                <label className="block text-sm font-semibold text-text-primary mb-1.5">{f.label}</label>
                                <input type={f.type} value={form[f.name]} placeholder={f.placeholder}
                                    onChange={e => update(f.name, e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary" />
                                {errors[f.name] && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors[f.name]}</p>}
                            </div>
                        ))}
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-1.5">Gender</label>
                            <div className="flex gap-2">
                                {['Male', 'Female', 'Other'].map(g => (
                                    <button key={g} onClick={() => update('gender', g)}
                                        className={`px-5 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${form.gender === g ? 'border-primary bg-primary text-white' : 'border-border hover:border-primary/30 text-text-primary'}`}>
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone Number *</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-text-secondary bg-surface-muted border-2 border-r-0 border-border rounded-l-xl">+91</span>
                                <input type="tel" value={form.phone} placeholder="98765 43210" maxLength={10}
                                    onChange={e => update('phone', e.target.value.replace(/\D/g, ''))}
                                    className="flex-1 px-4 py-3 rounded-r-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary" />
                            </div>
                            {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-1.5">Email (optional)</label>
                            <input type="email" value={form.email} placeholder="your@email.com"
                                onChange={e => update('email', e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary" />
                            {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-text-primary mb-1.5">Reason for Visit</label>
                            <textarea value={form.reasonForVisit} placeholder="Briefly describe your reason for visit..."
                                onChange={e => update('reasonForVisit', e.target.value)} rows={3}
                                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-text-primary resize-none" />
                        </div>
                        <div className="flex items-start gap-3 pt-2">
                            <input id="consent" type="checkbox" checked={form.consent}
                                onChange={e => update('consent', e.target.checked)}
                                className="w-4 h-4 rounded border-border text-primary focus:ring-primary mt-0.5" />
                            <label htmlFor="consent" className="text-sm text-text-secondary">
                                I consent to MV Diabetes contacting me regarding this appointment request. My information will be handled in accordance with the <Link href="/privacy" className="text-primary underline">Privacy Policy</Link>.
                            </label>
                        </div>
                        {errors.consent && <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle size={14} />{errors.consent}</p>}
                    </div>
                </div>
            );
            case 5: return (
                <div>
                    <h2 className="text-xl font-bold text-text-primary mb-2">Review Your Appointment Request</h2>
                    <p className="text-text-secondary mb-6">Please confirm all details are correct before submitting.</p>
                    <div className="space-y-3">
                        {[
                            { label: 'Appointment Type', value: APPOINTMENT_TYPES.find(t => t.id === form.appointmentType)?.label, edit: 0 },
                            { label: 'Location', value: form.location, edit: 1 },
                            { label: 'Doctor', value: selectedDoctor?.name || 'Any Available Doctor', edit: 2 },
                            { label: 'Preferred Date', value: form.appointmentDate ? new Date(form.appointmentDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '—', edit: 3 },
                            { label: 'Preferred Time', value: form.preferredTime || 'Any available slot', edit: 3 },
                            { label: 'Patient Name', value: form.patientName, edit: 4 },
                            { label: 'Phone', value: `+91 ${form.phone}`, edit: 4 },
                            ...(form.email ? [{ label: 'Email', value: form.email, edit: 4 }] : []),
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                                <div>
                                    <div className="text-sm text-text-secondary">{item.label}</div>
                                    <div className="font-semibold text-text-primary">{item.value}</div>
                                </div>
                                <button onClick={() => setStep(item.edit)} className="text-sm text-primary hover:underline font-medium">Edit</button>
                            </div>
                        ))}
                    </div>
                    {errors.submit && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                            <p className="text-red-600 text-sm flex items-center gap-2"><AlertCircle size={16} />{errors.submit}</p>
                            <a href={`tel:+919380814247`} className="text-sm text-primary font-medium mt-2 inline-block">Call Appointments Team</a>
                        </div>
                    )}
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                        <p className="text-amber-800 text-sm"><strong>Please note:</strong> Submitting this form creates an appointment <em>request</em>. Our appointments team will contact you to confirm availability.</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-surface-muted">
            {/* Header / Progress */}
            <div className="bg-white border-b border-border sticky top-0 z-30">
                <div className="container-site py-4">
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="text-lg font-bold text-text-primary">Book Appointment</h1>
                        <span className="text-sm text-text-secondary">Step {step + 1} of {STEPS.length}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="flex gap-1.5">
                        {STEPS.map((_, i) => (
                            <div key={i} className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${i <= step ? 'bg-primary' : 'bg-border'}`} />
                        ))}
                    </div>
                    {/* Step labels (desktop) */}
                    <div className="hidden md:flex mt-2 gap-1.5">
                        {STEPS.map((label, i) => (
                            <div key={i} className={`flex-1 text-center text-xs font-medium transition-colors ${i <= step ? 'text-primary' : 'text-text-secondary/50'}`}>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form content */}
            <div className="container-site py-8 lg:py-12">
                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-sm"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-between mt-6">
                        {step > 0 ? (
                            <button onClick={back} className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-border text-text-primary font-semibold hover:bg-surface-muted transition-all">
                                <ArrowLeft size={18} /> Back
                            </button>
                        ) : (
                            <Link href="/" className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-border text-text-primary font-semibold hover:bg-surface-muted transition-all">
                                <ArrowLeft size={18} /> Home
                            </Link>
                        )}
                        {step < STEPS.length - 1 ? (
                            <button onClick={next} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                Continue <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button onClick={submit} disabled={submitting}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 disabled:opacity-60 disabled:cursor-not-allowed">
                                {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : <><Check size={18} /> Submit Request</>}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
