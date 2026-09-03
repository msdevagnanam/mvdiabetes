'use client';

import { useState } from 'react';
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormState>({
        name: '', email: '', phone: '', subject: '', message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const update = (field: keyof ContactFormState, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple Validation
        if (!form.name || !form.phone || !form.message) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields (Name, Phone, and Message).');
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
                if (data.errors) {
                    const firstError = Object.values(data.errors)[0] as string;
                    setErrorMessage(firstError || 'Please check your inputs.');
                } else {
                    setErrorMessage(data.message || 'Something went wrong. Please try again.');
                }
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Unable to connect to the server. Please check your internet connection.');
        }
    };

    return (
        <div className="bg-white rounded-[2rem] border border-border shadow-2xl shadow-black/[0.03] p-6 lg:p-10 relative overflow-hidden">
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
                <div className="mb-8">
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-text-primary mb-2">Send us a Message</h2>
                    <p className="text-text-secondary text-sm lg:text-base">We usually respond within 24 hours. For medical emergencies, please call us immediately.</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-700/80 mb-6">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="text-green-700 font-bold hover:underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {status === 'error' && (
                            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-semibold">
                                <AlertCircle size={18} /> {errorMessage}
                            </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={e => update('name', e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-surface-muted/30 focus:bg-white text-text-primary placeholder:text-text-secondary/50 font-medium hover:border-black/20"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={e => update('phone', e.target.value)}
                                    placeholder="+91 98765 43210"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-surface-muted/30 focus:bg-white text-text-primary placeholder:text-text-secondary/50 font-medium hover:border-black/20"
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={e => update('email', e.target.value)}
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-surface-muted/30 focus:bg-white text-text-primary placeholder:text-text-secondary/50 font-medium hover:border-black/20"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-text-primary mb-2">Subject</label>
                                <div className="relative">
                                    <select
                                        value={form.subject}
                                        onChange={e => update('subject', e.target.value)}
                                        className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-surface-muted/30 focus:bg-white text-text-primary font-medium appearance-none hover:border-black/20 cursor-pointer"
                                    >
                                        <option value="">General Enquiry</option>
                                        <option value="appointment">Appointment Query</option>
                                        <option value="feedback">Feedback / Suggestion</option>
                                        <option value="careers">Careers</option>
                                        <option value="media">Media / Press</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-text-secondary" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-text-primary mb-2">Message <span className="text-red-500">*</span></label>
                            <textarea
                                value={form.message}
                                onChange={e => update('message', e.target.value)}
                                placeholder="How can we help you?"
                                rows={4}
                                className="w-full px-5 py-4 rounded-xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-surface-muted/30 focus:bg-white text-text-primary placeholder:text-text-secondary/50 font-medium hover:border-black/20 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 lg:py-5 rounded-2xl bg-primary text-white font-bold text-base hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(3,66,127,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {status === 'submitting' ? (
                                <><Loader2 size={18} className="animate-spin" /> Sending Message...</>
                            ) : (
                                <><Send size={18} /> Send Message</>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
