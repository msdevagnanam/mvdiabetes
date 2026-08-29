import type { Metadata } from 'next';
import { Suspense } from 'react';
import ThankYouContent from '@/components/appointment/ThankYouContent';

export const metadata: Metadata = {
    title: 'Appointment Request Received — MV Diabetes',
    description: 'Your appointment request has been received. Our team will contact you to confirm.',
    robots: { index: false },
};

export default function ThankYouPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-surface-muted flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
        }>
            <ThankYouContent />
        </Suspense>
    );
}
