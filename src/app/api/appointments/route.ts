import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';
import { deliverSubmission } from '@/lib/notify';

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
    appointmentDate1: string;
    appointmentDate2?: string;
    preferredTime?: string;
    reasonForVisit?: string;
    message?: string;
    status: 'REQUESTED' | 'PENDING_CONFIRMATION' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
    referenceNumber: string;
    createdAt: string;
}

const APPOINTMENT_TYPE_LABELS: Record<string, string> = {
    consultation: 'Consultation',
    checkup: 'Diabetes Checkup',
    package: 'Health Package',
    footcare: 'Foot Care',
    other: 'Other',
};

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

// No GET handler: submissions contain patient details and must never be publicly readable.

export async function POST(request: NextRequest) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!body.patientName?.trim()) errors.patientName = 'Please enter your name.';
    if (!body.phone?.trim()) errors.phone = 'Please enter your phone number.';
    else if (!validatePhone(body.phone)) errors.phone = 'Please enter a valid 10-digit mobile number.';
    if (body.email && !validateEmail(body.email)) errors.email = 'Please enter a valid email address.';
    if (!body.location?.trim()) errors.location = 'Please select a location.';
    if (!body.appointmentDate1?.trim()) errors.appointmentDate1 = 'Please select an appointment date.';
    if (!body.appointmentType?.trim()) errors.appointmentType = 'Please select an appointment type.';

    // Check date is not in the past
    if (body.appointmentDate1) {
        const selectedDate = new Date(body.appointmentDate1);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
            errors.appointmentDate1 = 'Please select a future date.';
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
        appointmentDate1: body.appointmentDate1.trim(),
        appointmentDate2: body.appointmentDate2?.trim() || undefined,
        preferredTime: body.preferredTime || undefined,
        reasonForVisit: body.reasonForVisit?.trim() || undefined,
        message: body.message?.trim() || undefined,
        status: 'REQUESTED',
        referenceNumber: generateReferenceNumber(),
        createdAt: new Date().toISOString(),
    };

    // One field list drives both the Google Sheet columns and the notification email.
    const fields: [string, string | undefined][] = [
        ['Submitted (IST)', new Date(appointment.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
        ['Reference', appointment.referenceNumber],
        ['Appointment type', APPOINTMENT_TYPE_LABELS[appointment.appointmentType] ?? appointment.appointmentType],
        ['Location', appointment.location],
        ['Preferred date', appointment.appointmentDate1],
        ['Alternate date', appointment.appointmentDate2],
        ['Patient name', appointment.patientName],
        ['Mobile', `+91 ${appointment.phone}`],
        ['Email', appointment.email],
        ['Age', appointment.age],
        ['Gender', appointment.gender],
        ['Doctor', appointment.doctor],
        ['Specialty', appointment.specialty],
        ['Package', appointment.packageSlug],
        ['Checkup', appointment.checkupSlug],
        ['Preferred time', appointment.preferredTime],
        ['Reason for visit', appointment.reasonForVisit],
        ['Message', appointment.message],
    ];

    try {
        const result = await deliverSubmission({
            localFile: 'appointments.json',
            record: appointment,
            sheet: { tab: 'Appointments', headers: fields.map(([k]) => k), row: fields.map(([, v]) => v) },
            email: {
                kind: 'appointment',
                subject: `New appointment request ${appointment.referenceNumber} — ${appointment.patientName} (${appointment.location})`,
                replyTo: appointment.email,
                fields,
            },
        });

        if (result === 'unconfigured') {
            // Never report success for a request nobody will receive.
            return NextResponse.json({
                success: false,
                message: `Online booking is temporarily unavailable. Please call our appointments team on ${siteConfig.phone}.`,
            }, { status: 503 });
        }

        return NextResponse.json({
            success: true,
            referenceNumber: appointment.referenceNumber,
            status: appointment.status,
            message: 'Your appointment request has been received. Our appointments team will contact you to confirm availability.',
        }, { status: 201 });
    } catch (err) {
        console.error('[appointments] delivery failed:', err);
        return NextResponse.json({
            success: false,
            message: `We couldn't submit your request right now. Please try again or call our appointments team on ${siteConfig.phone}.`,
        }, { status: 500 });
    }
}
