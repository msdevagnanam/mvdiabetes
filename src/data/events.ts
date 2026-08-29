export interface NewsEvent {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
    content: string;
    location?: string;
    time?: string;
    registrationEnabled: boolean;
}

export const newsEvents: NewsEvent[] = [
    {
        id: 'e1',
        slug: '39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations',
        title: '39th Prof. M. Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations',
        excerpt: 'The annual oration featured expert discussions on the latest strategies for preventing diabetic foot amputations.',
        date: '2025-06-15',
        category: 'Oration',
        content: 'The 39th Prof. M. Viswanathan Oration brought together leading diabetologists, foot surgeons, and researchers to discuss the latest advances in preventing diabetic foot amputations.\n\nThe annual event, held in honour of our founder Prof. M. Viswanathan, highlighted the hospital\'s ongoing commitment to limb salvage and innovative treatment approaches.\n\nKey topics discussed included:\n- Latest surgical techniques for limb preservation\n- Role of multidisciplinary teams in foot care\n- Early detection and prevention strategies\n- International collaboration in diabetic foot research\n\nThe event reinforced MV Diabetes\'s leadership in the field, with over 90,000 patients saved from prescribed amputation under the guidance of Dr. Vijay Viswanathan.',
        location: 'MV Hospital, Royapuram, Chennai',
        time: '10:00 AM - 4:00 PM',
        registrationEnabled: false,
    },
    {
        id: 'e2',
        slug: 'mv-diabetes-free-diabetic-camp-health-blessings-adyar',
        title: 'MV Diabetes Free Diabetic Camp Health & Blessings, Adyar',
        excerpt: 'Free diabetic screening camp organized at the Adyar branch for community health awareness.',
        date: '2025-05-20',
        category: 'Camp',
        content: 'MV Centre for Diabetes, Adyar organised a free diabetic screening camp as part of our ongoing community health awareness initiatives.\n\nServices provided at the camp:\n- Free blood sugar testing\n- Free HbA1c testing\n- Diabetologist consultation\n- Foot screening\n- Nutritional counselling\n- Health education sessions\n\nThe camp saw enthusiastic participation from the local community and helped identify several new cases of undiagnosed diabetes and pre-diabetes.',
        location: 'MV Centre for Diabetes, Adyar, Chennai',
        time: '9:00 AM - 1:00 PM',
        registrationEnabled: false,
    },
    {
        id: 'e3',
        slug: 'free-diabetes-awareness-camp-in-bangalore',
        title: 'Free Diabetes Awareness Camp in Bangalore',
        excerpt: 'Community outreach diabetes awareness camp conducted at the Koramangala branch.',
        date: '2025-04-10',
        category: 'Camp',
        content: 'MV Centre for Diabetes, Koramangala conducted a free diabetes awareness camp for the Bengaluru community.\n\nThe camp offered:\n- Free blood sugar screening\n- Diabetologist consultation\n- Foot examination\n- Diet counselling\n- Health awareness talks\n\nThe event was part of MV Diabetes\'s commitment to community outreach and early diabetes detection across all our locations.',
        location: 'MV Centre for Diabetes, Koramangala, Bengaluru',
        time: '9:00 AM - 1:00 PM',
        registrationEnabled: false,
    },
    {
        id: 'e4',
        slug: 'sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025',
        title: 'Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025',
        excerpt: 'Research insights on the link between sarcopenia, Type 2 diabetes, and chronic kidney disease.',
        date: '2025-03-28',
        category: 'Research',
        content: 'Research presented at the World Congress of Nephrology (WCN) 2025 explored the important connection between sarcopenia (muscle loss), Type 2 diabetes, and chronic kidney disease (CKD).\n\nKey findings discussed:\n- Prevalence of sarcopenia in diabetes patients with CKD\n- Impact of muscle loss on diabetes outcomes\n- Nutritional and exercise interventions\n- Screening recommendations for at-risk patients\n\nThese insights contribute to MV Diabetes\'s ongoing commitment to research-driven care and comprehensive diabetes management.',
        location: 'International Conference',
        registrationEnabled: false,
    },
    {
        id: 'e5',
        slug: 'honoring-prof-m-viswanathan-the-pioneer-who-transformed-diabetes-care-in-india',
        title: 'Honoring Prof. M. Viswanathan: The Pioneer Who Transformed Diabetes Care in India',
        excerpt: 'A tribute to the founder of MV Hospital and his contributions to diabetes care in India.',
        date: '2025-03-15',
        category: 'Legacy',
        content: 'A special tribute event was held honouring Prof. M. Viswanathan, the visionary founder of MV Hospital for Diabetes, who transformed diabetes care in India.\n\nThe event celebrated his remarkable legacy:\n- Founded India\'s first hospital exclusively for diabetes\n- Established the Diabetes Research Centre\n- Contributed over 250 research publications\n- Built international research collaborations\n- Trained generations of diabetologists\n\nProf. Viswanathan\'s dream of a world without diabetes continues to inspire our work every day.',
        location: 'MV Hospital, Royapuram, Chennai',
        registrationEnabled: false,
    },
    {
        id: 'e6',
        slug: 'nurse-training-diabetes-care',
        title: 'Empowering Our Nurses with Expert Diabetes Training',
        excerpt: 'Specialized diabetes care training program for nursing staff at MV Hospital.',
        date: '2025-02-20',
        category: 'Training',
        content: 'MV Hospital for Diabetes conducted a specialised training program for our nursing staff, enhancing their expertise in diabetes care.\n\nTraining modules covered:\n- Blood sugar monitoring and management\n- Insulin administration best practices\n- Diabetic foot care protocols\n- Patient education techniques\n- Emergency diabetes management\n\nInvesting in our nursing team ensures that every patient receives the highest quality of care at every touchpoint.',
        location: 'MV Hospital, Royapuram, Chennai',
        registrationEnabled: false,
    },
];

export function getEventBySlug(slug: string): NewsEvent | undefined {
    return newsEvents.find((e) => e.slug === slug);
}
