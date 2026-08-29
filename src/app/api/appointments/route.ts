import { NextRequest, NextResponse } from 'next/server';

interface AppointmentRequest {
    id: string;
    patientName: string;
    phone: string;
    email?: string;
    age?: string;
    gender?: string;
    location: string;
    doctor?: string;
    specialty?: string;
    packageSlug?: string;
    checkupSlug?: string;
    appointmentType: string;
    appointmentDate: string;
    alternativeDate?: string;
    preferredTime?: string;
    reasonForVisit?: string;
    message?: string;
    status: 'REQUESTED' | 'PENDING_CONFIRMATION' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
    referenceNumber: string;
    createdAt: string;
}

// In-memory store for development only
// IMPORTANT: This is NOT a production database. Replace with a real backend.
const appointmentStore: AppointmentRequest[] = [];

function generateReferenceNumber(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `MV-${year}-${random}`;
}

function validatePhone(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-+]/g, '');
    // Indian mobile: 10 digits or 91 + 10 digits
    return /^(91)?[6-9]\d{9}$/.test(cleaned);
}

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Server-side validation
        const errors: Record<string, string> = {};

        if (!body.patientName?.trim()) errors.patientName = 'Please enter your name.';
        if (!body.phone?.trim()) errors.phone = 'Please enter your phone number.';
        else if (!validatePhone(body.phone)) errors.phone = 'Please enter a valid 10-digit mobile number.';
        if (body.email && !validateEmail(body.email)) errors.email = 'Please enter a valid email address.';
        if (!body.location?.trim()) errors.location = 'Please select a location.';
        if (!body.appointmentDate?.trim()) errors.appointmentDate = 'Please select an appointment date.';
        if (!body.appointmentType?.trim()) errors.appointmentType = 'Please select an appointment type.';

        // Check date is not in the past
        if (body.appointmentDate) {
            const selectedDate = new Date(body.appointmentDate);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                errors.appointmentDate = 'Please select a future date.';
            }
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json({ success: false, errors }, { status: 400 });
        }

        const appointment: AppointmentRequest = {
            id: crypto.randomUUID(),
            patientName: body.patientName.trim(),
            phone: body.phone.trim(),
            email: body.email?.trim() || undefined,
            age: body.age?.trim() || undefined,
            gender: body.gender || undefined,
            location: body.location.trim(),
            doctor: body.doctor || undefined,
            specialty: body.specialty || undefined,
            packageSlug: body.packageSlug || undefined,
            checkupSlug: body.checkupSlug || undefined,
            appointmentType: body.appointmentType.trim(),
            appointmentDate: body.appointmentDate.trim(),
            alternativeDate: body.alternativeDate?.trim() || undefined,
            preferredTime: body.preferredTime || undefined,
            reasonForVisit: body.reasonForVisit?.trim() || undefined,
            message: body.message?.trim() || undefined,
            status: 'REQUESTED',
            referenceNumber: generateReferenceNumber(),
            createdAt: new Date().toISOString(),
        };

        appointmentStore.push(appointment);

        return NextResponse.json({
            success: true,
            referenceNumber: appointment.referenceNumber,
            status: appointment.status,
            message: 'Your appointment request has been received. Our appointments team will contact you to confirm availability.',
        }, { status: 201 });
    } catch {
        return NextResponse.json({
            success: false,
            message: 'We couldn\'t submit your request right now. Please try again or call our appointments team.',
        }, { status: 500 });
    }
}
