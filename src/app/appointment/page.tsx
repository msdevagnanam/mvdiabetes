import type { Metadata } from 'next';
import { Suspense } from 'react';
import AppointmentForm from '@/components/appointment/AppointmentForm';

export const metadata: Metadata = {
    title: 'Book Appointment — MV Diabetes',
    description: 'Book an appointment at MV Diabetes — India\'s first exclusive diabetes hospital. Choose your location, doctor, and preferred time.',
    alternates: { canonical: '/appointment' },
};

export default function AppointmentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-surface-muted flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
        }>
            <AppointmentForm />
        </Suspense>
    );
}
