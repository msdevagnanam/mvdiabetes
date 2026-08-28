export interface Checkup {
    id: string;
    name: string;
    tests: string[];
    category: string;
}

export const checkups: Checkup[] = [
    {
        id: 'pre-dm-prevention',
        name: 'Pre DM / DM Prevention',
        tests: ['GTT', 'HbA1c', 'Urea', 'Creatinine', 'Urine Deposits', 'Hemogram', 'Lipids'],
        category: 'Prevention',
    },
    {
        id: 'type1-dm',
        name: "Type 1 DM / Other DM's",
        tests: ['C-Peptide', 'GAD'],
        category: 'Diagnosis',
    },
    {
        id: 'gdm-screening',
        name: 'GDM Screening And Follow Up',
        tests: ['GTT', 'HbA1c', 'Sr. Creatinine', 'T3, T4, TSH', 'Lipids', 'ECG with Central BP'],
        category: "Women's Health",
    },
    {
        id: 'review-package',
        name: 'Review Package',
        tests: [
            'Short Review (FBS, PPBS, HbA1c, CBC, UC)',
            'Sr. Urea, Sr. Creatinine, Lipids',
        ],
        category: 'Review',
    },
    {
        id: 'amputation-prevention',
        name: 'Amputation Prevention',
        tests: [
            'Senior Diabetologist Opinion',
            'Fasting Glucose - Plasma & Urine',
            'Post Prandial',
            'Glycosylated Haemoglobin (HbA1C)',
            'Kidney Filtration Test',
            'Serum Urea',
            'Urine Examination',
            'Refraction Charges',
            'Foot Exam Vascular',
            'Foot Exam Neuro',
            'ECG & Central BP',
            'Yoga Class',
        ],
        category: 'Foot Care',
    },
    {
        id: 'geriatric-dm',
        name: 'Geriatric DM',
        tests: [],
        category: 'Senior Care',
    },
    {
        id: 'obesity-mgmt',
        name: 'Obesity Management',
        tests: [],
        category: 'Wellness',
    },
    {
        id: 'complication-prevention',
        name: 'DM and Complication Prevention General Wellness',
        tests: [],
        category: 'Prevention',
    },
];
