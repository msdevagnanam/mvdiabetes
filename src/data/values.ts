export const visionContent = {
    label: 'Our Vision',
    statement: 'To be a compassionate, collaborative healthcare institution dedicated to helping people with diabetes lead healthier, longer lives, supported by world-class care and innovation.',
    description: '',
};

export const missionContent = {
    label: 'Our Mission',
    statement: 'Every person having diabetes should be helped to live his normal span of life in perfect health.',
    description: '',
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
        description: 'We put our patients at the heart of everything we do. From treatment to recovery, our mission is to focus on helping every patient having diabetes live his normal lifespan in perfect health.',
        details: [
            'Patient at the heart of everything we do',
            'Focus on treatment and recovery',
            'Helping every patient',
            'Enabling a normal lifespan in perfect health',
        ],
        icon: 'Heart',
    },
    {
        id: 'respect-compassion',
        number: '02',
        title: 'Respect and Compassion',
        shortTitle: 'Respect & Compassion',
        description: "We treat everyone—patients, families, carers, and staff—with respect, dignity, and compassion. We recognize each person's aspirations, abilities, and limits, and respond with kindness and empathy to their pain, anxiety, or needs.",
        details: [
            'Treating everyone with respect and dignity',
            'Recognizing individual aspirations and limits',
            'Responding with kindness',
            'Showing empathy to pain, anxiety, or needs',
        ],
        icon: 'HandHeart',
    },
    {
        id: 'quality',
        number: '03',
        title: 'Commitment to Quality',
        shortTitle: 'Quality',
        description: 'We are dedicated to delivering high-quality care by ensuring patient safety, maintaining confidentiality, and continuously improving the effectiveness of our services. We build trust by focusing on the basics of care—safety, reliability, and positive patient experiences.',
        details: [
            'Delivering high-quality care',
            'Ensuring patient safety and confidentiality',
            'Continuously improving services',
            'Focusing on safety, reliability, and positive experiences',
        ],
        icon: 'ShieldCheck',
    },
    {
        id: 'excellence-innovation',
        number: '04',
        title: 'Excellence and Innovation',
        shortTitle: 'Innovation',
        description: 'We strive to continuously improve healthcare by embracing innovation, research, and technology. By investing in new ideas, treatments, and holistic approaches, we work to enhance the well-being of our patients and improve health outcomes for all.',
        details: [
            'Embracing innovation, research, and technology',
            'Investing in new ideas and treatments',
            'Taking holistic approaches',
            'Improving health outcomes for all',
        ],
        icon: 'Lightbulb',
    },
    {
        id: 'caring-staff',
        number: '05',
        title: 'Caring for our staff',
        shortTitle: 'Our People',
        description: 'We recognize that our staff are essential to delivering the high-quality care we aspire to provide for our patients. We strive to support, nurture, and collaborate with our staff to ensure their well-being and professional growth. By working together, we ensure the best outcomes for both our staff and our patients.',
        details: [
            'Staff are essential to high-quality care',
            'Supporting and nurturing our staff',
            'Ensuring well-being and professional growth',
            'Working together for the best outcomes',
        ],
        icon: 'Users',
    },
];
