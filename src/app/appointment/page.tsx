import type { Metadata } from 'next';
import { Suspense } from 'react';
import AppointmentForm from '@/components/appointment/AppointmentForm';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/appointment');

export default function AppointmentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-surface-muted flex items-center justify-center font-sans">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
        }>
            <AppointmentForm />
        </Suspense>
    );
}
