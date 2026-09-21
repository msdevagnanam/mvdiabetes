export type AcademicCourse = {
    id: string;
    title: string;
    provider?: string;
    duration: string;
    eligibility?: string;
    admission?: string;
    mode: string;
    intake?: string;
    applicationUrl?: string;
    prospectusUrl?: string;
};

export type AcademicFaculty = {
    id: string;
    name: string;
    role: string;
    experience?: string;
    image?: string;
    specialInterests?: string[];
    memberships?: string[];
    research?: string[];
    publications?: string[];
    conferences?: string[];
    awards?: string[];
    community?: string[];
    clinicalRoles?: string[];
    academicContributions?: string[];
};

export const academicData = {
    courses: [
        {
            id: 'advanced-certificate',
            title: 'Advanced Certificate Course In Diabetology',
            provider: 'Jaipur National University & RSSDI',
            duration: '2 years – Post MBBS\n1 year – Post MD/DNB (Gen Medicine)',
            mode: 'Full Time',
            intake: 'June and December',
            applicationUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/RSSDI-Prospectus-Jan-2023-15-16.pdf',
            prospectusUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/RSSDI-Prospectus-Jan-2023_compressed.pdf'
        },
        {
            id: 'fellowship',
            title: 'Fellowship In Clinical Diabetology (FCD)',
            duration: '2 years – Post MBBS',
            mode: 'Full Time',
            admission: 'Entrance Examination & Interview',
            applicationUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/FCD-Registration-Form-JUNE-2022.pdf'
        }
    ] as AcademicCourse[],
    
    awardImage: 'https://mvdiabetes.com/wp-content/uploads/2023/06/AWARD-1-400-X-500.jpg',
    
    videos: [
        {
            src: 'https://mvdiabetes.com/wp-content/uploads/2023/10/Dr.-Sharuka.mp4',
            title: 'Dr. Sharuka Testimonial'
        }
    ],

    faculty: [
        {
            id: 'dr-sanjay',
            name: 'Dr. B S Sanjay',
            role: 'Consultant Physician and Diabetologist',
            experience: '19 years of experience in Internal Medicine and Diabetology',
            image: 'https://mvdiabetes.com/wp-content/uploads/2026/05/Dr-Sanjay-B-S-e1777620789290.png',
            specialInterests: [
                'Managing complex diabetes cases and complications'
            ],
            memberships: [
                'Lifetime Member – RSSDI and IMA'
            ],
            research: [
                'Diabetic Foot offloading effectiveness to heal foot ulcers',
                'Studies involving triple oral antiglycemic versus single drug initiation in newly detected diabetes',
                'Public awareness activities regarding diabetes and complications prevention'
            ]
        },
        {
            id: 'dr-senthil',
            name: 'Dr. G. Senthil',
            role: 'Senior Consultant Surgeon',
            experience: '25+ years of clinical and surgical experience',
            specialInterests: [
                'Diabetic Foot Surgery',
                'Plastic & Reconstructive Surgery',
                'General Surgery'
            ],
            clinicalRoles: [
                'MBBS',
                'MS General Surgery',
                'MCh Plastic Surgery'
            ],
            academicContributions: [
                'Specialized Expertise',
                'Distinguished Approach',
                'Academic & Professional Contributions'
            ],
            community: [
                'Community & Patient Engagement'
            ]
        },
        {
            id: 'dr-abishek',
            name: 'Dr. Abishek S.R',
            role: 'Consultant Diabetologist',
            experience: '3+ years of experience in Diabetology',
            specialInterests: [
                'Newer forms of diabetes',
                'Diabetes prevention strategies',
                'Type 1 diabetes care',
                'Community-based screening and education'
            ],
            clinicalRoles: [
                'Fellowship in Clinical Diabetology – MV Hospital for Diabetes',
                'Certificate course in Hypertension, Obesity, and Diabetes – Joslin Diabetes Center'
            ],
            memberships: [
                'Life Member, Indian Medical Association',
                'Life Member, RSSDI'
            ],
            research: [
                'Various presentations and publications in national forums'
            ]
        },
        {
            id: 'dr-leela',
            name: 'Dr. Leela Baid',
            role: 'Consultant Diabetologist',
            experience: '9+ years of experience in Diabetology',
            specialInterests: [
                'Type 1 and Type 2 diabetes',
                'Advanced diabetes technologies',
                'Insulin pumps',
                'Time in Range',
                'Modern glucose monitoring',
                'Pediatric diabetes via SWEET Project'
            ],
            memberships: [
                'Professional memberships actively maintained'
            ],
            research: [
                'Research & Publications',
                'Conference presentations',
                'Lectures'
            ],
            awards: [
                'Various academic and professional awards'
            ],
            community: [
                'Community initiatives'
            ]
        },
        {
            id: 'dr-uma',
            name: 'Dr. Uma Mahesh',
            role: 'Senior Consultant Diabetologist\nChief Consultant at Dr. Mahesh Diabetes Centre in association with Diabetacare (UK)',
            experience: '25+ years of experience in Diabetology',
            academicContributions: [
                'Academic & Teaching Contributions',
                'Professional Involvement',
                'GCP Certifications'
            ],
            research: [
                'Principal/Co-Investigator trials',
                'Publications & Conferences'
            ],
            awards: [
                'Awards & Presentations'
            ],
            community: [
                'Community Involvement'
            ]
        },
        {
            id: 'dr-prashanth',
            name: 'Dr. Prashanth Arun',
            role: 'Consultant Physician and Diabetologist',
            experience: '12+ years of experience in Internal Medicine and Diabetology',
            specialInterests: [
                'Internal Medicine and Diabetology special focus'
            ],
            memberships: [
                'Professional memberships'
            ],
            academicContributions: [
                'Book/chapter contributions',
                'Conference roles',
                'BLS/ACLS'
            ],
            research: [
                'Publications',
                'Research interests',
                'Clinical trials'
            ],
            awards: [
                'Awards and recognition'
            ],
            community: [
                'Media/health article contributions',
                'Digital presence',
                'Community/public engagement'
            ]
        }
    ] as AcademicFaculty[],
    
    contact: {
        email: 'academics@mvdiabetes.com'
    }
};
