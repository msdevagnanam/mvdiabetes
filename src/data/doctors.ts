export interface Doctor {
    id: string;
    slug: string;
    name: string;
    designation: string;
    qualifications: string;
    specialty: string;
    location: string[];
    image?: string;
    about?: string;
}

export const doctors: Doctor[] = [
    {
        id: 'vijay-viswanathan',
        slug: 'dr-vijay-viswanathan',
        name: 'Dr. Vijay Viswanathan',
        designation: 'Head & Chief Diabetologist',
        qualifications: 'M.D., Ph.D., FICP, FRCP (London & Glasgow)',
        specialty: 'Diabetology',
        location: ['Royapuram', 'Koramangala'],
        about:
            'Head & Chief Diabetologist at MV Hospital for Diabetes. First Asian President of D-Foot International. Leading expert in diabetic foot care and diabetes research.',
    },
    {
        id: 'senthil-g',
        slug: 'dr-g-senthil',
        name: 'Dr. Senthil',
        designation: 'Chief Plastic & Foot surgeon',
        qualifications: 'MBBS, MS',
        specialty: 'Surgery',
        location: ['Royapuram'],
    },
    {
        id: 'prashanth-arun',
        slug: 'dr-prashanth-arun',
        name: 'Dr. Prashanth Arun',
        designation: 'Consultant Physician & Diabetologist',
        qualifications: 'MBBS, MD',
        specialty: 'Diabetology',
        location: ['Royapuram'],
    },
    {
        id: 'uma-mahesh',
        slug: 'dr-uma-mahesh',
        name: 'Dr. Uma Mahesh',
        designation: 'Senior Diabetologist',
        qualifications: 'MBBS, MD',
        specialty: 'Diabetology',
        location: ['Royapuram'],
    },
    {
        id: 'leela-baid',
        slug: 'dr-leela-baid',
        name: 'Dr. Leela Baid',
        designation: 'Senior Diabetologist & Asst. Medical superintendent -OP',
        qualifications: 'MBBS, MD',
        specialty: 'Diabetology',
        location: ['Royapuram'],
    },
    {
        id: 'abishek-sr',
        slug: 'dr-abishek-sr',
        name: 'Dr. Abishek S.R',
        designation: 'Diabetologist',
        qualifications: 'MBBS, MD',
        specialty: 'Diabetology',
        location: ['Royapuram'],
    },
    {
        id: 'bs-sanjay',
        slug: 'dr-bs-sanjay',
        name: 'Dr. B S Sanjay',
        designation: 'Consultant Physician and Diabetologist',
        qualifications: 'M.B.B.S, D-DIAB (AIMS)',
        specialty: 'Diabetology',
        location: ['Royapuram', 'Koramangala'],
    },
    {
        id: 'vishnupriya-reddy',
        slug: 'dr-vishnupriya-reddy',
        name: 'Dr. Vishnupriya Reddy',
        designation: 'Consultant Diabetologist',
        qualifications: 'M.B.B.S, MDRC, DFM (RCGP)',
        specialty: 'Diabetology',
        location: ['Koramangala'],
    },
    {
        id: 'shyam-sunder',
        slug: 'dr-shyam-sunder',
        name: 'Dr. Shyam Sunder',
        designation: 'Consultant Cardiologist',
        qualifications: 'MBBS, M.D., D.N.B., D.M (Cardiology)',
        specialty: 'Cardiology',
        location: ['Koramangala'],
    },
    {
        id: 'sreelakshmi',
        slug: 'dr-sreelakshmi',
        name: 'Dr. Sreelakshmi',
        designation: 'Consultant Dentist',
        qualifications: 'BDS, MDS',
        specialty: 'Dental',
        location: ['Koramangala'],
    },
    {
        id: 'dilip-dhanapal',
        slug: 'dr-dilip-dhanapal',
        name: 'Dr. Dilip Dhanapal',
        designation: 'Consultant Urologist',
        qualifications: 'MBBS, MS, M.Ch (Urology)',
        specialty: 'Urology',
        location: ['Koramangala'],
    },
    {
        id: 'amit-jain',
        slug: 'dr-amit-jain',
        name: 'Dr. Amit Jain',
        designation: 'Wound Care Specialist',
        qualifications: 'MBBS, DNB (Surgery), FPS (Diabetic Foot)',
        specialty: 'Diabetic Foot Care',
        location: ['Koramangala'],
    },
    {
        id: 'ramamurthy',
        slug: 'dr-ramamurthy',
        name: 'Dr. Ramamurthy',
        designation: 'Consultant',
        qualifications: 'M.B.B.S, DNB, MNAMS',
        specialty: 'General Medicine',
        location: ['Koramangala'],
    },
];
