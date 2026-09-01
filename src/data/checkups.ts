export interface Checkup {
    id: string;
    slug: string;
    name: string;
    image?: string;
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
        image: '/images/checkups/checkup-img1.png',
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
        image: '/images/checkups/checkup-img2.png',
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
        image: '/images/checkups/checkup-img3.png',
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
        image: '/images/checkups/checkup-img4.png',
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
        image: '/images/checkups/checkup-img7.png',
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
        image: '/images/checkups/checkup-img8.png',
        tests: [
            'Senior Diabetologist Opinion', 'Fasting Glucose - Plasma & Urine',
            'Glycosylated Haemoglobin (HbA1C)', 'Post Prandial', 'Kidney Filtration Test',
            'Serum Lipoprotein Cholesterol Analysis', 'Serum Urea',
            'Kidney Function: Urine Albumin Concentration', 'Liver Function Test',
            'Fib - 4 Index', 'Urine Complete Examination', 'Haemogram - 15 Parameters',
            'High Risk Foot Screening', 'Foot Exam Vascular', 'Bone Densitometry Test',
            'Pedicure Test', 'Eye Test Package with Fundus Photography', 'ECG & Central BP',
            'Consultation - Dental', 'Yoga Class', 'Free Breakfast',
        ],
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
        image: '/images/checkups/checkup-img5.png',
        tests: [
            'Serum Lipoprotein Cholesterol Analysis', 'TSH - Thyroid Function Test',
            'Kidney Filtration Test', 'Liver Function Test', 'Haemogram - 15 Parameters',
            'Tweak and Eat App', 'BIA In body', 'Registration Fees',
            'Senior Diabetologist Opinion', 'Random Blood Sugar',
            'Glycosylated Haemoglobin (HbA1C)',
        ],
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
        name: 'DM and Complication Prevention General Wellness (Male/ Female)',
        image: '/images/checkups/checkup-img6.png',
        tests: [
            'RBS', 'HbA1c', 'Sr. Urea', 'Sr. Creatinine', 'Urine complete',
            'Hemogram', 'LFT', 'Lipids', 'USG-ABD', 'Chest X ray',
            'ECG with Central BP', 'T3,T4,TSH', 'Sr. PSA (in Men)',
            '2D echo (Optional)',
        ],
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
