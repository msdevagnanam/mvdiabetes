// ============================================================
// Prof. M. Viswanathan — Legacy Page Content Data
// Source: history.ts, LegacySection.tsx, profmvdrc.com, verified web sources
// No content is invented. All facts are cross-referenced.
// ============================================================

export interface LegacyImage {
    src: string;
    alt: string;
    status: 'available' | 'missing' | 'needs-review';
    caption: string;
}

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: LegacyImage;
}

export interface NavSection {
    id: string;
    label: string;
}

// ── SEO Metadata ──────────────────────────────────────────────
export const seoMetadata = {
    title: 'Prof. M. Viswanathan – Father of Diabetology in India',
    description:
        'Discover the inspiring journey of Prof. M. Viswanathan, the pioneer who established one of India\'s earliest organized diabetes clinics and became known as the Father of Diabetology in India.',
    canonical: '/prof-m-viswanathan',
    keywords: [
        'Father of Diabetology in India',
        'Prof M Viswanathan',
        'M.V. Hospital for Diabetes',
        'diabetes care in India',
        'diabetologist in Chennai',
        'history of diabetology in India',
        'diabetes hospital Chennai',
    ],
};

// ── In-Page Navigation ────────────────────────────────────────
export const pageNavSections: NavSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'early-years', label: 'Early Years' },
    { id: 'milestone-1948', label: '1948' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'hospital', label: 'Hospital' },
    { id: 'research', label: 'Research' },
    { id: 'four-ambitions', label: 'Four Ambitions' },
    { id: 'legacy', label: 'Legacy' },
];

// ── Images ────────────────────────────────────────────────────
export const images: Record<string, LegacyImage> = {
    portrait: {
        src: '/images/about/Dr.viswanathan.png',
        alt: 'Prof. M. Viswanathan — The Father of Diabetology in India',
        status: 'available',
        caption: 'Prof. M. Viswanathan (1923–1996)',
    },
    stanleyMedical: {
        src: '',
        alt: 'Stanley Medical College, Chennai — where Prof. Viswanathan began his medical journey in 1940',
        status: 'missing',
        caption: 'Stanley Medical College, Chennai',
    },
    hospital: {
        src: '',
        alt: 'M.V. Hospital for Diabetes, Royapuram, Chennai',
        status: 'missing',
        caption: 'M.V. Hospital for Diabetes, Royapuram',
    },
    researchCentre: {
        src: '',
        alt: 'Prof. M. Viswanathan Diabetes Research Centre',
        status: 'missing',
        caption: 'Prof. M. Viswanathan Diabetes Research Centre',
    },
};

// ── Hero Section ──────────────────────────────────────────────
export const heroContent = {
    eyebrow: 'THE FATHER OF DIABETOLOGY IN INDIA',
    heading: 'Prof. M. Viswanathan',
    subheading: 'The Visionary Who Helped India Learn How to Think About Diabetes',
    supportingText:
        'Before diabetes became one of India\'s biggest healthcare challenges, one physician recognised that diabetes needed dedicated care, research, education and long-term follow-up.',
    primaryCta: { label: 'Explore His Journey', href: '#early-years' },
    secondaryCta: { label: 'Discover His Legacy', href: '#legacy' },
    lifespan: '1923 — 1996',
};

// ── Introduction Section ──────────────────────────────────────
export const introductionContent = {
    heading: 'A Doctor Who Saw the Future of Diabetes Before India Did',
    paragraphs: [
        'In the mid-twentieth century, diabetes was not yet widely considered a major medical speciality in India. Few physicians saw the need for dedicated diabetes care — most treated it as a secondary concern within general medicine.',
        'Prof. M. Viswanathan was among the first to recognise that diabetes required far more than occasional prescriptions. He understood that people living with diabetes needed long-term follow-up, dedicated research, structured education and comprehensive care that addressed not just blood sugar levels, but the whole person.',
        'This conviction — radical for its time — would lead him to build institutions, generate research, train physicians and ultimately transform the way India thinks about diabetes.',
    ],
    philosophyHighlight:
        'Every person with diabetes deserves the opportunity to live a full, healthy and dignified life.',
    philosophyNote: 'A guiding philosophy that defined his life\'s work',
};

// ── Early Years Section ───────────────────────────────────────
export const earlyYearsContent = {
    heading: 'His Journey Began at Stanley Medical College',
    milestones: [
        {
            year: '1940',
            title: 'Entering Stanley Medical College',
            description:
                'Prof. M. Viswanathan entered Stanley Medical College, Chennai — one of India\'s oldest and most prestigious medical institutions. It was here that the foundation of his lifelong commitment to medicine was laid.',
        },
        {
            year: '1942',
            title: 'The Quit India Movement',
            description:
                'During the Quit India Movement of 1942, the young Viswanathan hoisted the Indian tricolour at Stanley Medical College — an act of courage that led to his removal from the hostel. It was during this period that he came under the mentorship of Professor K.C. Paul, a relationship that profoundly influenced his approach to medical practice and research.',
        },
        {
            year: 'Mid-1940s',
            title: 'Medical Career Begins',
            description:
                'After completing his medical degree, Prof. Viswanathan worked as House Physician at Stanley Medical College and Hospital before joining the Madras Medical Service. He served as Assistant Physician and later as Assistant Professor of Medicine, steadily building the clinical expertise that would define his career.',
        },
    ],
};

// ── 1948 Milestone ────────────────────────────────────────────
export const milestone1948Content = {
    year: '1948',
    heading: 'The Beginning of India\'s Organised Diabetes Care',
    description:
        'In 1948, Prof. Viswanathan helped establish and run what is widely described as the first organised diabetes clinic in India at Government Stanley Medical College and Hospital, Chennai.',
    significance:
        'At a time when diabetes care in India was fragmented and largely unstructured, this clinic introduced a systematic, dedicated approach to diagnosing, treating and following up with patients living with diabetes. It marked the beginning of organised diabetology in the country.',
};

// ── Patient Philosophy Section ────────────────────────────────
export const philosophyContent = {
    heading: 'He Treated the Patient, Not Just the Blood Sugar',
    description:
        'Prof. Viswanathan believed that effective diabetes care required understanding the whole person — not simply managing a laboratory value. His approach was remarkably holistic for his era.',
    pillars: [
        {
            title: 'Family History',
            description: 'Understanding hereditary patterns and genetic predisposition to diabetes within families.',
            icon: 'Users',
        },
        {
            title: 'Lifestyle',
            description: 'Assessing daily habits, diet and physical activity as integral parts of diabetes management.',
            icon: 'Heart',
        },
        {
            title: 'Complications',
            description: 'Proactively screening for and managing diabetic complications across multiple organ systems.',
            icon: 'Shield',
        },
        {
            title: 'Long-Term Follow-Up',
            description: 'Building systems for continuous, lifelong patient monitoring rather than episodic treatment.',
            icon: 'Clock',
        },
        {
            title: 'The Person',
            description: 'Recognising that behind every diagnosis is an individual who deserves to live with dignity and hope.',
            icon: 'UserHeart',
        },
    ],
};

// ── Hospital Timeline Section ─────────────────────────────────
export const hospitalTimelineContent = {
    heading: 'Building a Hospital Dedicated to Diabetes',
    milestones: [
        {
            year: '1950s',
            title: 'M.V. Hospital for Diabetes Founded',
            description:
                'M.V. Hospital for Diabetes began as a general hospital in Royapuram, Chennai — born from the vision of a young doctor determined to serve the community.',
        },
        {
            year: '1971',
            title: 'Exclusively for Diabetes Care',
            description:
                'In a pioneering decision, the hospital became dedicated exclusively to diabetes care. Prof. Viswanathan left government service to focus more fully on diabetes care and research — a decision that would define India\'s diabetes landscape.',
        },
        {
            year: '1972',
            title: 'Diabetes Research Centre Established',
            description:
                'The Prof. M. Viswanathan Diabetes Research Centre was established as a non-profit organisation dedicated to advancing diabetes science and generating evidence to improve patient care.',
        },
        {
            year: '1975',
            title: 'ICMR Recognition',
            description:
                'The Indian Council of Medical Research (ICMR) recognised the Diabetes Research Centre for its outstanding contribution to medical research in diabetes.',
        },
        {
            year: '1983',
            title: 'Department of Science and Technology Recognition',
            description:
                'The Department of Science and Technology, Government of India, recognised the centre — affirming its position as a nationally significant research institution.',
        },
    ],
};

// ── Research Section ──────────────────────────────────────────
export const researchContent = {
    heading: 'Research Was Central to His Mission',
    description:
        'Prof. Viswanathan believed that India should not merely adopt Western research findings but should contribute meaningful, original diabetes research of its own. This conviction drove decades of sustained scientific inquiry.',
    stats: {
        papers: '250+',
        papersLabel: 'Peer-reviewed research papers and articles published in prestigious National and International Journals',
    },
    collaborations: [
        { country: 'United Kingdom', institution: 'London University Hospital' },
        { country: 'Sweden', institution: 'Karolinska Institute' },
        { country: 'United States', institution: 'Research collaborations' },
        { country: 'Australia', institution: 'Research collaborations' },
    ],
    preventionResearch:
        'He pioneered primary prevention research, maintaining meticulous family records and collecting long-term data to understand how diabetes develops and how it might be prevented in future generations.',
};

// ── Role Cards Section ────────────────────────────────────────
export const roleCardsContent = {
    heading: 'A Clinician, Teacher, Researcher and Institution Builder',
    roles: [
        {
            number: '01',
            title: 'Clinician',
            description: 'Treating patients with dedication and understanding their individual needs — seeing beyond the diagnosis to the person.',
        },
        {
            number: '02',
            title: 'Teacher',
            description: 'Helping younger doctors understand diabetes as a complex, lifelong condition requiring specialised knowledge and compassion.',
        },
        {
            number: '03',
            title: 'Researcher',
            description: 'Generating scientific evidence, publishing over 250 research papers and advancing diabetes research to international standards.',
        },
        {
            number: '04',
            title: 'Institution Builder',
            description: 'Creating institutions, systems and a research culture that continued to grow and serve long beyond his own lifetime.',
        },
    ],
};

// ── Recognition Section ───────────────────────────────────────
export const recognitionContent = {
    heading: 'Professional Recognition',
    bcRoyAward: {
        title: 'Dr. B.C. Roy Award',
        description:
            'Prof. M. Viswanathan was honoured with the Dr. B.C. Roy Award — one of the most prestigious recognitions in Indian medicine — in acknowledgement of his extraordinary contribution to diabetes care and research.',
    },
    fatherTitle:
        'The medical community and generations of physicians came to refer to him as "The Father of Diabetology in India" — a recognition of his pioneering role in establishing diabetes as a dedicated medical discipline in the country.',
    paulZimmetQuote: {
        text: 'The Diabetes Research Centre is an outstanding example of how pursuit of a dream and excellence produces exotic fruits. There are few centres in the world that can match the all-round capabilities of your Centre in — Care, Education, Research and Prevention. I would say the Diabetes Research Centre in Madras is one of the World\'s finest diabetes establishments and its best-kept secret.',
        author: 'Paul Zimmet',
        role: 'Internationally respected WHO Consultant in Diabetes, Australia',
    },
};

// ── Four Ambitions Section ────────────────────────────────────
export const fourAmbitionsContent = {
    heading: 'Four Ambitions That Defined His Life',
    ambitions: [
        {
            number: '01',
            text: 'Reduce the suffering experienced by people living with diabetes.',
        },
        {
            number: '02',
            text: 'Make diabetology a recognised medical discipline in India.',
        },
        {
            number: '03',
            text: 'Help Indian diabetes research reach international standards.',
        },
        {
            number: '04',
            text: 'Ultimately prevent and conquer diabetes.',
        },
    ],
    closing:
        'During his lifetime, Prof. Viswanathan made remarkable progress toward the first three ambitions. The fourth — preventing and conquering diabetes — remains a challenge that inspires future generations of physicians, researchers and caregivers.',
};

// ── 1996 Passing Section ──────────────────────────────────────
export const passingContent = {
    year: '1996',
    date: '1 March 1996',
    heading: 'A Life Dedicated to Diabetes Care and Research',
    description:
        'Prof. M. Viswanathan passed away on 1 March 1996 after approximately five decades dedicated to diabetes care and research. His vision, institutions and philosophy of care continue to influence how diabetes is understood and treated across India.',
};

// ── Legacy Today Section ──────────────────────────────────────
export const legacyTodayContent = {
    heading: 'A Legacy That Continues at M.V. Hospital for Diabetes',
    paragraphs: [
        'M.V. Hospital for Diabetes continues the legacy that Prof. Viswanathan built over five decades. The Prof. M. Viswanathan Diabetes Research Centre remains actively involved in research, education and prevention — carrying forward his scientific vision.',
        'The hospital has grown into a major referral centre for diabetes and its complications, serving patients from across India and beyond.',
    ],
    thenAndNow: {
        then: {
            year: '1948',
            label: 'Organised Diabetes Care',
            description: 'India\'s first organised diabetes clinic at Stanley Medical College and Hospital, Chennai.',
        },
        now: {
            year: 'Today',
            label: 'Advanced Diabetes Care',
            description: 'Advanced medicines, CGM sensors, diabetic-foot care, kidney screening, retinal evaluation and improved research technologies.',
        },
    },
    centralPhilosophy:
        'While the tools and technologies have evolved dramatically, the central philosophy remains unchanged — helping every person with diabetes live a healthier, longer and more dignified life.',
};

// ── Closing Section ───────────────────────────────────────────
export const closingContent = {
    heading: 'More Than the Father of Diabetology',
    values: [
        {
            title: 'Foresight',
            description: 'He saw the importance of diabetes before it became one of India\'s biggest health challenges.',
        },
        {
            title: 'Courage',
            description: 'He chose to build a speciality when very few people were thinking about diabetes in that way.',
        },
        {
            title: 'Compassion',
            description: 'He believed treatment should help patients live longer and better, not simply lower a laboratory value.',
        },
        {
            title: 'Legacy',
            description: 'The institutions, research culture and philosophy of care continue to influence diabetes care across India.',
        },
    ],
    finalStatement:
        'Prof. M. Viswanathan did not simply treat diabetes. He helped India learn how to think about diabetes.',
};

// ── Final CTA Section ─────────────────────────────────────────
export const finalCtaContent = {
    heading: 'His Vision Continues.',
    description:
        'M.V. Hospital for Diabetes carries forward Prof. Viswanathan\'s unwavering commitment to diabetes care, research, education and prevention — ensuring that his dream of better outcomes for every person with diabetes remains alive.',
    primaryCta: { label: 'Explore MV Diabetes', href: '/' },
    secondaryCta: { label: 'Book an Appointment', href: '/appointment' },
};

// ── Full Timeline ─────────────────────────────────────────────
export const fullTimeline: TimelineItem[] = [
    {
        year: '1940',
        title: 'Entered Stanley Medical College',
        description: 'Prof. M. Viswanathan entered Stanley Medical College, Chennai — the beginning of a remarkable medical journey.',
    },
    {
        year: '1942',
        title: 'Quit India Movement',
        description: 'During the Quit India Movement, the young Viswanathan hoisted the Indian tricolour at Stanley Medical College — an act of courage mentored by Prof. K.C. Paul.',
    },
    {
        year: '1948',
        title: 'First Organised Diabetes Clinic in India',
        description: 'Helped establish and run what is widely described as the first organised diabetes clinic in India at Government Stanley Medical College and Hospital, Chennai.',
    },
    {
        year: '1950s',
        title: 'M.V. Hospital Founded',
        description: 'M.V. Hospital for Diabetes began as a general hospital in Royapuram, Chennai.',
    },
    {
        year: '1971',
        title: 'Exclusive Diabetes Focus',
        description: 'The hospital became dedicated exclusively to diabetes care. Prof. Viswanathan left government service to focus on diabetes care and research.',
    },
    {
        year: '1972',
        title: 'Diabetes Research Centre Established',
        description: 'The Prof. M. Viswanathan Diabetes Research Centre was established as a non-profit organisation.',
    },
    {
        year: '1975',
        title: 'ICMR Recognition',
        description: 'The Indian Council of Medical Research recognised the Diabetes Research Centre for its outstanding contribution.',
    },
    {
        year: '1983',
        title: 'DST Recognition',
        description: 'The Department of Science and Technology, Government of India, recognised the centre as a nationally significant research institution.',
    },
    {
        year: '1996',
        title: 'A Legacy Immortalised',
        description: 'Prof. M. Viswanathan passed away on 1 March 1996 — leaving behind an unparalleled legacy and an unfinished dream of a world without diabetes.',
    },
    {
        year: 'Today',
        title: 'The Legacy Continues',
        description: 'M.V. Hospital for Diabetes and the Prof. M. Viswanathan Diabetes Research Centre continue to advance diabetes care, research, education and prevention.',
    },
];
