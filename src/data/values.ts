export const visionContent = {
    label: 'Our Vision',
    statement: 'A Happy, Healthy World Unburdened By Diabetes',
    description:
        'We envision a future where diabetes no longer diminishes lives — where every patient receives the care, education, and support they need to thrive.',
};

export const missionContent = {
    label: 'Our Mission',
    statement:
        'Every person having diabetes should be helped to live his normal span of life in perfect health.',
    description:
        'Through compassionate care, cutting-edge research, and unwavering commitment to excellence, we strive to transform the diabetes experience for every patient who walks through our doors.',
};

export interface ValueItem {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    details: string[];
    icon: string;
}

export const coreValues: ValueItem[] = [
    {
        id: 'patient-centered',
        number: '01',
        title: 'Patient-Centered Care',
        shortTitle: 'Patient-Centered',
        description:
            'The patient is at the heart of everything we do. Our treatment, recovery plans, and ongoing support are all designed with one goal — helping people with diabetes live healthier, fuller lives.',
        details: [
            'Patient at the heart of every care decision',
            'Personalised treatment and recovery pathways',
            'Empowering patients with knowledge and support',
            'Helping people with diabetes live healthier lives',
        ],
        icon: 'Heart',
    },
    {
        id: 'respect-compassion',
        number: '02',
        title: 'Respect & Compassion',
        shortTitle: 'Respect & Compassion',
        description:
            'We treat every patient, family member, carer, and staff member with dignity, empathy, and kindness. Compassion is not just a value — it is the foundation of healing.',
        details: [
            'Dignity for patients and families',
            'Empathy in every interaction',
            'Kindness towards carers and staff',
            'Compassion as the foundation of healing',
        ],
        icon: 'HandHeart',
    },
    {
        id: 'quality',
        number: '03',
        title: 'Commitment to Quality',
        shortTitle: 'Quality',
        description:
            'We are committed to the highest standards of patient safety, confidentiality, and continuous improvement. Every process is designed to deliver a reliable, positive patient experience.',
        details: [
            'Patient safety as the highest priority',
            'Strict confidentiality standards',
            'Continuous improvement culture',
            'Reliable, positive patient experience',
        ],
        icon: 'ShieldCheck',
    },
    {
        id: 'excellence-innovation',
        number: '04',
        title: 'Excellence & Innovation',
        shortTitle: 'Innovation',
        description:
            'We pursue innovation in research, technology, and treatment to stay at the forefront of diabetes care. New ideas, holistic approaches, and emerging therapies drive our excellence.',
        details: [
            'Innovation in research and technology',
            'Adoption of emerging therapies',
            'New ideas and holistic approaches',
            'Pioneering treatments for better outcomes',
        ],
        icon: 'Lightbulb',
    },
    {
        id: 'caring-staff',
        number: '05',
        title: 'Caring for Our Staff',
        shortTitle: 'Our People',
        description:
            'We invest in our staff\'s wellbeing, professional growth, and collaborative spirit. When our team thrives, our patients receive the highest quality of care.',
        details: [
            'Staff wellbeing and professional growth',
            'Collaborative teamwork culture',
            'Investment in continuous learning',
            'High-quality patient outcomes through people',
        ],
        icon: 'Users',
    },
];
