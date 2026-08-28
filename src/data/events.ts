export interface NewsEvent {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

export const newsEvents: NewsEvent[] = [
    {
        id: 'e1',
        slug: '39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations',
        title: '39th Prof. M. Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations',
        excerpt: 'The annual oration featured expert discussions on the latest strategies for preventing diabetic foot amputations.',
        date: '2025-06-15',
        category: 'Oration',
    },
    {
        id: 'e2',
        slug: 'mv-diabetes-free-diabetic-camp-health-blessings-adyar',
        title: 'MV Diabetes Free Diabetic Camp Health & Blessings, Adyar',
        excerpt: 'Free diabetic screening camp organized at the Adyar branch for community health awareness.',
        date: '2025-05-20',
        category: 'Camp',
    },
    {
        id: 'e3',
        slug: 'free-diabetes-awareness-camp-in-bangalore',
        title: 'Free Diabetes Awareness Camp in Bangalore',
        excerpt: 'Community outreach diabetes awareness camp conducted at the Koramangala branch.',
        date: '2025-04-10',
        category: 'Camp',
    },
    {
        id: 'e4',
        slug: 'sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025',
        title: 'Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025',
        excerpt: 'Research insights on the link between sarcopenia, Type 2 diabetes, and chronic kidney disease.',
        date: '2025-03-28',
        category: 'Research',
    },
    {
        id: 'e5',
        slug: 'honoring-prof-m-viswanathan-the-pioneer-who-transformed-diabetes-care-in-india',
        title: 'Honoring Prof. M. Viswanathan: The Pioneer Who Transformed Diabetes Care in India',
        excerpt: 'A tribute to the founder of MV Hospital and his contributions to diabetes care in India.',
        date: '2025-03-15',
        category: 'Legacy',
    },
    {
        id: 'e6',
        slug: 'nurse-training-diabetes-care',
        title: 'Empowering Our Nurses with Expert Diabetes Training',
        excerpt: 'Specialized diabetes care training program for nursing staff at MV Hospital.',
        date: '2025-02-20',
        category: 'Training',
    },
];
