import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/data/site';
import { deliverSubmission } from '@/lib/notify';

interface ContactRequest {
    id: string;
    name: string;
    email?: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: string;
}

function validatePhone(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-+]/g, '');
    // Basic validation for numbers
    return /^\d{10,15}$/.test(cleaned);
}

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// No GET handler: enquiries contain personal details and must never be publicly readable.

export async function POST(request: NextRequest) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!body.name?.trim()) errors.name = 'Please enter your name.';
    if (!body.phone?.trim()) errors.phone = 'Please enter your phone number.';
    else if (!validatePhone(body.phone)) errors.phone = 'Please enter a valid phone number.';

    if (body.email && !validateEmail(body.email)) errors.email = 'Please enter a valid email address.';
    if (!body.message?.trim()) errors.message = 'Please enter a message.';

    if (Object.keys(errors).length > 0) {
        return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const contactQuery: ContactRequest = {
        id: crypto.randomUUID(),
        name: body.name.trim(),
        phone: body.phone.trim(),
        email: body.email?.trim() || undefined,
        subject: body.subject?.trim() || 'General Enquiry',
        message: body.message.trim(),
        createdAt: new Date().toISOString(),
    };

    // One field list drives both the Google Sheet columns and the notification email.
    const fields: [string, string | undefined][] = [
        ['Submitted (IST)', new Date(contactQuery.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
        ['Subject', contactQuery.subject],
        ['Name', contactQuery.name],
        ['Phone', contactQuery.phone],
        ['Email', contactQuery.email],
        ['Message', contactQuery.message],
    ];

    try {
        const result = await deliverSubmission({
            localFile: 'contacts.json',
            record: contactQuery,
            sheet: { tab: 'Contacts', headers: fields.map(([k]) => k), row: fields.map(([, v]) => v) },
            email: {
                kind: 'contact',
                subject: `New website enquiry — ${contactQuery.subject} (${contactQuery.name})`,
                replyTo: contactQuery.email,
                fields,
            },
        });

        if (result === 'unconfigured') {
            // Never report success for a message nobody will receive.
            return NextResponse.json({
                success: false,
                message: `Our contact form is temporarily unavailable. Please call us on ${siteConfig.phone} or email ${siteConfig.email}.`,
            }, { status: 503 });
        }

        return NextResponse.json({
            success: true,
            message: 'Your message has been received. Our team will contact you shortly.',
        }, { status: 201 });
    } catch (err) {
        console.error('[contact] delivery failed:', err);
        return NextResponse.json({
            success: false,
            message: `We couldn't submit your message right now. Please try again or call us on ${siteConfig.phone}.`,
        }, { status: 500 });
    }
}
