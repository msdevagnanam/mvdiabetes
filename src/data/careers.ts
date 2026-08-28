export interface Career {
    id: string;
    slug: string;
    title: string;
    department: string;
    location: string;
}

export const careers: Career[] = [
    { id: 'c1', slug: 'cashier', title: 'Cashier', department: 'Administration', location: 'Royapuram, Chennai' },
    { id: 'c2', slug: 'electrician', title: 'Electrician', department: 'Facility Services', location: 'Royapuram, Chennai' },
    { id: 'c3', slug: 'housekeeping-ward-boys-ward-ayahs', title: 'Housekeeping – Ward Boys/Ward Ayahs', department: 'Facility Services', location: 'Royapuram, Chennai' },
    { id: 'c4', slug: 'non-regd-staff-nurses-nursing-assts', title: 'Non Regd Staff Nurses/Nursing Assts', department: 'Clinical Services', location: 'Koramangala, Bengaluru' },
    { id: 'c5', slug: 'footwear-coordinator', title: 'Footwear Coordinator', department: 'Administration Services', location: 'Royapuram, Chennai' },
    { id: 'c6', slug: 'dietician-cum-counsellor', title: 'Dietician cum Counsellor', department: 'Patient Care Services', location: 'Royapuram, Chennai' },
    { id: 'c7', slug: 'receptionist', title: 'Receptionist', department: 'Patient Care Services', location: 'Koramangala, Bengaluru' },
    { id: 'c8', slug: 'pharmacist', title: 'Pharmacist', department: 'Paramedical', location: 'Royapuram, Chennai' },
];
