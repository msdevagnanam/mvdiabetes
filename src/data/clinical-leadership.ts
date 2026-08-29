export interface ClinicalDoctor {
    id: string;
    name: string;
    designation: string;
    qualifications: string;
    experience: string;
    image?: string;
    expertise: string[];
    shortBio: string;
    slug: string;
}

export const clinicalDoctors: ClinicalDoctor[] = [
    {
        id: 'bs-sanjay',
        name: 'Dr. B.S. Sanjay',
        designation: 'Consultant Physician & Diabetologist',
        qualifications: 'M.B.B.S., D-DIAB (AIMS)',
        experience: '19 years',
        image: '/images/our-doctors/Dr. B S Sanjay.png',
        expertise: [
            'Internal Medicine and Diabetology',
            'Complex diabetes cases and complications',
            'Diabetic foot offloading research',
        ],
        shortBio:
            'Consultant Physician and Diabetologist at MV Centre for Diabetes with over 19 years of clinical experience. PG Diploma in Diabetology from Amrita Institute of Medical Science. With MV Centre since 2009.',
        slug: 'dr-bs-sanjay',
    },
    {
        id: 'senthil-g',
        name: 'Dr. G. Senthil',
        designation: 'Senior Consultant Surgeon',
        qualifications: 'MBBS, MS, MCh (Plastic Surgery)',
        experience: '25+ years',
        image: '/images/our-doctors/Dr. G. Senthil.png',
        expertise: [
            'Diabetic foot surgery',
            'Plastic & reconstructive surgery',
            'Conservative limb-saving surgical techniques',
        ],
        shortBio:
            'Senior Consultant Surgeon specialising in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery. Pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications.',
        slug: 'dr-g-senthil',
    },
    {
        id: 'abishek-sr',
        name: 'Dr. Abishek S.R.',
        designation: 'Diabetologist',
        qualifications: 'MBBS, MD',
        experience: '3+ years',
        image: '/images/our-doctors/Dr. Abishek S.R.png',
        expertise: [
            'Newer forms of diabetes',
            'Diabetes prevention strategies',
            'Type 1 diabetes care',
        ],
        shortBio:
            'Consultant Diabetologist at MV Hospital for Diabetes. Fellowship in Clinical Diabetology. Certified in Hypertension, Obesity, and Diabetes from Joslin Diabetes Center.',
        slug: 'dr-abishek-sr',
    },
    {
        id: 'leela-baid',
        name: 'Dr. Leela Baid',
        designation: 'Consultant Diabetologist',
        qualifications: 'MBBS, Fellowship in Diabetology, MBA (Hospital Management)',
        experience: '9+ years',
        image: '/images/our-doctors/Dr. Leela Baid.png',
        expertise: [
            'Type 1 and Type 2 diabetes',
            'Advanced diabetes technologies & insulin pumps',
            'Pediatric diabetes (SWEET Project)',
        ],
        shortBio:
            'Consultant Diabetologist with expertise in advanced diabetes technologies. Certified in insulin pump therapy. Part of the MV Hospital team since 2014.',
        slug: 'dr-leela-baid',
    },
    {
        id: 'uma-mahesh',
        name: 'Dr. Uma Mahesh',
        designation: 'Senior Consultant Diabetologist',
        qualifications: 'MBBS, MDRC',
        experience: '25+ years',
        image: '/images/our-doctors/Dr Uma Mahesh.png',
        expertise: [
            'Type 2 diabetes management',
            'Advanced diabetes therapeutics',
            'Clinical research leadership',
        ],
        shortBio:
            'Senior Consultant Diabetologist with over 25 years of experience. Served at MV Hospital for Diabetes (1999–2014). Trained over 300 doctors in Diabetology. Faculty for WDF Project training 3000 doctors nationwide.',
        slug: 'dr-uma-mahesh',
    },
    {
        id: 'prashanth-arun',
        name: 'Dr. Prashanth Arun',
        designation: 'Consultant Physician & Diabetologist',
        qualifications: 'MBBS, MD, PG Diploma in Diabetology (Royal College, UK)',
        experience: '12+ years',
        image: '/images/our-doctors/Dr. Prashanth Arun.png',
        expertise: [
            'Complex diabetes management',
            'Internal Medicine and Diabetology',
            'ICU care and inpatient management',
        ],
        shortBio:
            'Consultant Physician and Diabetologist with over 12 years of clinical experience. With MV Hospital since 2017. RSSDI Achievement Award (2023), SRM Eminent Alumni Award (2023).',
        slug: 'dr-prashanth-arun',
    },
];
