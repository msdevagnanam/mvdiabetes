import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactRequest {
    id: string;
    name: string;
    email?: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'submissions');
const CONTACT_FILE = path.join(DATA_DIR, 'contacts.json');

// Ensure the directory and file exist
function ensureDataFile() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(CONTACT_FILE)) {
        fs.writeFileSync(CONTACT_FILE, JSON.stringify([]));
    }
}

function getContacts(): ContactRequest[] {
    ensureDataFile();
    const data = fs.readFileSync(CONTACT_FILE, 'utf-8');
    return JSON.parse(data);
}

function saveContact(contact: ContactRequest) {
    const contacts = getContacts();
    contacts.push(contact);
    fs.writeFileSync(CONTACT_FILE, JSON.stringify(contacts, null, 2));
}

function validatePhone(phone: string): boolean {
    const cleaned = phone.replace(/[\s\-+]/g, '');
    // Basic validation for numbers
    return /^\d{10,15}$/.test(cleaned);
}

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
    const contacts = getContacts();
    return NextResponse.json({
        total: contacts.length,
        data: contacts
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

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

        saveContact(contactQuery);

        console.log(`[New Contact Enquiry] from ${contactQuery.name} (${contactQuery.phone}) - ${contactQuery.subject}`);

        return NextResponse.json({
            success: true,
            message: 'Your message has been received. Our team will contact you shortly.',
        }, { status: 201 });
    } catch {
        return NextResponse.json({
            success: false,
            message: 'We couldn\'t submit your message right now. Please try again or call us.',
        }, { status: 500 });
    }
}
