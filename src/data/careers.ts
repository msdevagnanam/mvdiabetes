export interface Career {
    id: string;
    slug: string;
    title: string;
    department: string;
    location: string;
    description: string;
    requirements: string[];
    type: string;
    postedDate: string;
}

export const careers: Career[] = [
    { id: 'c1', slug: 'cashier', title: 'Cashier', department: 'Administration', location: 'Royapuram, Chennai', description: 'We are looking for a Cashier to manage billing and payment processing at our main hospital.', requirements: ['B.Com or equivalent', 'Minimum 1 year experience in healthcare billing', 'Computer proficiency', 'Good communication skills'], type: 'Full-time', postedDate: '2025-07-01' },
    { id: 'c2', slug: 'electrician', title: 'Electrician', department: 'Facility Services', location: 'Royapuram, Chennai', description: 'Experienced electrician needed for maintenance and repair of electrical systems at MV Hospital.', requirements: ['ITI/Diploma in Electrical', 'Minimum 3 years experience', 'Knowledge of hospital electrical systems', 'Safety certifications preferred'], type: 'Full-time', postedDate: '2025-07-01' },
    { id: 'c3', slug: 'housekeeping-ward-boys-ward-ayahs', title: 'Housekeeping – Ward Boys/Ward Ayahs', department: 'Facility Services', location: 'Royapuram, Chennai', description: 'Ward boys and ward ayahs needed for housekeeping and patient support services.', requirements: ['Previous hospital housekeeping experience preferred', 'Ability to work in shifts', 'Good physical fitness'], type: 'Full-time', postedDate: '2025-06-15' },
    { id: 'c4', slug: 'non-regd-staff-nurses-nursing-assts', title: 'Non Regd Staff Nurses/Nursing Assts', department: 'Clinical Services', location: 'Koramangala, Bengaluru', description: 'Non-registered staff nurses and nursing assistants needed for our Bengaluru centre.', requirements: ['Nursing certificate or diploma', 'Previous hospital experience preferred', 'Willingness to learn diabetes care protocols'], type: 'Full-time', postedDate: '2025-06-15' },
    { id: 'c5', slug: 'footwear-coordinator', title: 'Footwear Coordinator', department: 'Administration Services', location: 'Royapuram, Chennai', description: 'Coordinate diabetes-specific footwear services for patients including fitting and ordering.', requirements: ['Graduate in any discipline', 'Good communication skills', 'Interest in healthcare'], type: 'Full-time', postedDate: '2025-06-01' },
    { id: 'c6', slug: 'dietician-cum-counsellor', title: 'Dietician cum Counsellor', department: 'Patient Care Services', location: 'Royapuram, Chennai', description: 'Qualified dietician needed to provide nutritional counselling to diabetes patients.', requirements: ['B.Sc/M.Sc in Nutrition & Dietetics', 'Minimum 2 years clinical experience', 'Diabetes nutrition knowledge preferred', 'Good counselling skills'], type: 'Full-time', postedDate: '2025-06-01' },
    { id: 'c7', slug: 'receptionist', title: 'Receptionist', department: 'Patient Care Services', location: 'Koramangala, Bengaluru', description: 'Front desk receptionist needed at our Bengaluru centre to manage patient registrations and inquiries.', requirements: ['Graduate in any discipline', 'Good communication skills (English and Kannada)', 'Computer proficiency', 'Customer service experience preferred'], type: 'Full-time', postedDate: '2025-05-20' },
    { id: 'c8', slug: 'pharmacist', title: 'Pharmacist', department: 'Paramedical', location: 'Royapuram, Chennai', description: 'Registered pharmacist needed to manage medication dispensing and inventory at MV Hospital.', requirements: ['D.Pharm/B.Pharm', 'Pharmacy Council registration', 'Minimum 2 years hospital pharmacy experience', 'Knowledge of diabetes medications preferred'], type: 'Full-time', postedDate: '2025-05-15' },
];

export function getCareerBySlug(slug: string): Career | undefined {
    return careers.find((c) => c.slug === slug);
}
