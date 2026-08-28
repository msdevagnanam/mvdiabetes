export interface Specialty {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    icon: string; // lucide icon name
}

export const specialties: Specialty[] = [
    {
        id: 'diabetes-care',
        slug: 'diabetes-care',
        name: 'Diabetes Care',
        shortDescription:
            'Comprehensive outpatient and inpatient services for Type 1, Type 2, and gestational diabetes with personalized treatment plans.',
        icon: 'Activity',
    },
    {
        id: 'diabetic-foot',
        slug: 'diabetic-foot-care',
        name: 'Diabetic Foot Care',
        shortDescription:
            'Advanced limb salvage and amputation prevention. Over 90,000 patients saved from prescribed amputation.',
        icon: 'Footprints',
    },
    {
        id: 'podiatry',
        slug: 'podiatry',
        name: 'Podiatry',
        shortDescription:
            'Specialized foot, ankle, and lower extremity care including corrective procedures, ozone therapy, and magneto therapy.',
        icon: 'HeartPulse',
    },
    {
        id: 'kidney-care',
        slug: 'kidney-care',
        name: 'Kidney Care',
        shortDescription:
            'Comprehensive diabetic nephropathy management and kidney health monitoring for diabetes patients.',
        icon: 'Stethoscope',
    },
    {
        id: 'obesity',
        slug: 'obesity-management',
        name: 'Obesity Management',
        shortDescription:
            'Weight management and lifestyle counseling programs designed specifically for individuals with or at risk of diabetes.',
        icon: 'Scale',
    },
    {
        id: 'urology',
        slug: 'urology',
        name: 'Urology',
        shortDescription:
            'Specialized urological care for diabetes-related complications and conditions.',
        icon: 'Shield',
    },
    {
        id: 'nutrition',
        slug: 'nutrition',
        name: 'Nutrition & Dietetics',
        shortDescription:
            'Personalized diet planning and nutritional counseling for optimal diabetes management.',
        icon: 'Apple',
    },
    {
        id: 'yoga',
        slug: 'yoga',
        name: 'Yoga for Diabetes',
        shortDescription:
            'Guided yoga classes designed to improve insulin sensitivity, reduce stress, and support diabetes management.',
        icon: 'Leaf',
    },
    {
        id: 'eye-care',
        slug: 'diabetic-eye-care',
        name: 'Diabetic Eye Care',
        shortDescription:
            'Screening and treatment for diabetic retinopathy and other diabetes-related eye conditions.',
        icon: 'Eye',
    },
    {
        id: 'cardiology',
        slug: 'cardiology',
        name: 'Cardiology',
        shortDescription:
            'Heart health assessment and care for patients with diabetes-related cardiovascular complications.',
        icon: 'Heart',
    },
    {
        id: 'dental',
        slug: 'dental-care',
        name: 'Dental Care',
        shortDescription:
            'Oral health services addressing the connection between diabetes and dental conditions.',
        icon: 'Smile',
    },
    {
        id: 'gastro',
        slug: 'gastrointestinal',
        name: 'Gastrointestinal',
        shortDescription:
            'Management of gastrointestinal complications associated with diabetes.',
        icon: 'Pill',
    },
];
