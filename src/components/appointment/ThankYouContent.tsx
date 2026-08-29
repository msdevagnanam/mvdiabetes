'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Calendar, MapPin, User, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/data/site';

function ThankYouContent() {
    const params = useSearchParams();
    const ref = params.get('ref') || 'MV-0000-0000';
    const name = params.get('name') || 'Patient';
    const location = params.get('location') || '';
    const date = params.get('date') || '';
    const doctor = params.get('doctor') || '';
    const type = params.get('type') || '';

    const formattedDate = date
        ? new Date(date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        : '';

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-surface-muted">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-lg w-full"
            >
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm text-center">
                    {/* Success Icon */}
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="text-green-600" size={32} />
                    </div>

                    <h1 className="text-2xl font-extrabold text-text-primary mb-2">Appointment Request Received</h1>
                    <p className="text-text-secondary mb-6">Thank you, <strong>{name}</strong>.</p>

                    {/* Summary */}
                    <div className="bg-surface-muted rounded-xl p-5 text-left space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                            <Stethoscope size={16} className="text-primary shrink-0" />
                            <span className="text-text-secondary">Type:</span>
                            <span className="text-text-primary font-medium capitalize ml-auto">{type}</span>
                        </div>
                        {location && (
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin size={16} className="text-primary shrink-0" />
                                <span className="text-text-secondary">Location:</span>
                                <span className="text-text-primary font-medium ml-auto">{location}</span>
                            </div>
                        )}
                        {doctor && (
                            <div className="flex items-center gap-3 text-sm">
                                <User size={16} className="text-primary shrink-0" />
                                <span className="text-text-secondary">Doctor:</span>
                                <span className="text-text-primary font-medium ml-auto">{doctor.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
                            </div>
                        )}
                        {formattedDate && (
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar size={16} className="text-primary shrink-0" />
                                <span className="text-text-secondary">Date:</span>
                                <span className="text-text-primary font-medium ml-auto">{formattedDate}</span>
                            </div>
                        )}
                        <div className="pt-3 border-t border-border">
                            <div className="text-xs text-text-secondary mb-1">Reference Number</div>
                            <div className="text-lg font-bold text-primary tracking-wide">{ref}</div>
                        </div>
                    </div>

                    {/* What happens next */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left mb-6">
                        <h3 className="text-sm font-bold text-amber-800 mb-1">What happens next?</h3>
                        <p className="text-sm text-amber-700">
                            Our appointments team will contact you within 24 hours to confirm availability and finalise your appointment. Please keep your phone reachable.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-border text-text-primary font-semibold hover:bg-surface-muted transition-all text-sm">
                            Back to Home
                        </Link>
                        <Link href="/care" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all text-sm">
                            View Care <ArrowRight size={16} />
                        </Link>
                    </div>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 text-sm text-primary font-medium mt-4 hover:underline">
                        <Phone size={14} /> Call Appointments Team: {siteConfig.phone}
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default ThankYouContent;
