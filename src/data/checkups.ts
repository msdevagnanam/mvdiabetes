export interface Checkup {
    id: string;
    slug: string;
    name: string;
    tests: string[];
    category: string;
    description: string;
    price?: string;
    gender?: string;
    ageGroup?: string;
    location: string;
    available: boolean;
}

export const checkups: Checkup[] = [
    {
        id: 'pre-dm-prevention',
        slug: 'pre-dm-prevention',
        name: 'Pre DM / DM Prevention',
        tests: ['GTT', 'HbA1c', 'Urea', 'Creatinine', 'Urine Deposits', 'Hemogram', 'Lipids'],
        category: 'Prevention',
        description: 'Comprehensive screening for individuals at risk of developing diabetes. Includes glucose tolerance testing and metabolic panel to identify pre-diabetes early.',
        gender: 'All',
        ageGroup: 'Adults 30+',
        location: 'All Branches',
        available: true,
    },
    {
        id: 'type1-dm',
        slug: 'type-1-dm-screening',
        name: "Type 1 DM / Other DM's",
        tests: ['C-Peptide', 'GAD'],
        category: 'Diagnosis',
        description: 'Specialised diagnostic panel to confirm Type 1 diabetes, including C-Peptide levels and GAD antibody testing to differentiate diabetes types.',
        gender: 'All',
        ageGroup: 'All Ages',
        location: 'Royapuram',
        available: true,
    },
    {
        id: 'gdm-screening',
        slug: 'gdm-screening',
        name: 'GDM Screening And Follow Up',
        tests: ['GTT', 'HbA1c', 'Sr. Creatinine', 'T3, T4, TSH', 'Lipids', 'ECG with Central BP'],
        category: "Women's Health",
        description: 'Gestational diabetes screening for pregnant women, including glucose tolerance test, thyroid function, and comprehensive metabolic panel.',
        gender: 'Female',
        ageGroup: 'Pregnant Women',
        location: 'Royapuram, Adyar',
        available: true,
    },
    {
        id: 'review-package',
        slug: 'review-package',
        name: 'Review Package',
        tests: ['Short Review (FBS, PPBS, HbA1c, CBC, UC)', 'Sr. Urea, Sr. Creatinine, Lipids'],
        category: 'Review',
        description: 'Regular review checkup for existing diabetes patients to monitor blood sugar control and organ function.',
        gender: 'All',
        ageGroup: 'All Ages',
        location: 'All Branches',
        available: true,
    },
    {
        id: 'amputation-prevention',
        slug: 'amputation-prevention',
        name: 'Amputation Prevention',
        tests: [
            'Senior Diabetologist Opinion', 'Fasting Glucose - Plasma & Urine', 'Post Prandial',
            'Glycosylated Haemoglobin (HbA1C)', 'Kidney Filtration Test', 'Serum Urea',
            'Urine Examination', 'Refraction Charges', 'Foot Exam Vascular', 'Foot Exam Neuro',
            'ECG & Central BP', 'Yoga Class',
        ],
        category: 'Foot Care',
        description: 'Comprehensive screening for patients at risk of diabetic foot complications. Includes vascular and neurological foot assessments, senior diabetologist opinion, and preventive care plan.',
        gender: 'All',
        ageGroup: 'Adults with Diabetes',
        location: 'Royapuram',
        available: true,
    },
    {
        id: 'geriatric-dm',
        slug: 'geriatric-dm',
        name: 'Geriatric DM',
        tests: [],
        category: 'Senior Care',
        description: 'Specialised diabetes assessment designed for elderly patients, addressing age-specific diabetes management challenges and complication prevention.',
        gender: 'All',
        ageGroup: 'Seniors 60+',
        location: 'Royapuram',
        available: true,
    },
    {
        id: 'obesity-mgmt',
        slug: 'obesity-management-checkup',
        name: 'Obesity Management',
        tests: [],
        category: 'Wellness',
        description: 'Comprehensive obesity assessment including metabolic screening, body composition analysis, and personalised weight management plan.',
        gender: 'All',
        ageGroup: 'Adults',
        location: 'Royapuram, Adyar',
        available: true,
    },
    {
        id: 'complication-prevention',
        slug: 'complication-prevention-wellness',
        name: 'DM and Complication Prevention General Wellness',
        tests: [],
        category: 'Prevention',
        description: 'General wellness screening focused on early detection and prevention of diabetes complications including cardiovascular, renal, and neurological assessments.',
        gender: 'All',
        ageGroup: 'Adults with Diabetes',
        location: 'All Branches',
        available: true,
    },
];

export function getCheckupBySlug(slug: string): Checkup | undefined {
    return checkups.find((c) => c.slug === slug);
}
