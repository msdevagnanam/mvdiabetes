/**
 * CSR Activity page content.
 *
 * Every string here comes from the MV Diabetes CSR Activity page
 * (https://mvdiabetes.com/csr-activity/).
 *
 * Two rules govern this file:
 *  1. The statistics in `historicalContext` are figures the source page cites
 *     against 1995/2007/2025 baselines. They are NOT current data and must
 *     always be rendered behind their historical label. Never refresh them
 *     from an outside source.
 *  2. The fund's wording is conditional — support "would either be part or
 *     full funding", and depends "entirely on the decision of the trustees".
 *     Never restate it as guaranteed assistance.
 */

export interface CSRImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Source-page caption, where one exists. */
    caption?: string;
}

export const csrSourceTitle = 'MV Diabetes Hospital CSR Activity';

// ============================================================
// DIABETES AMPUTATION SUPPORT FUND — opening narrative
// ============================================================

export const amputationFund = {
    heading: 'Diabetes Amputation Support Fund',
    opening:
        'Calling India the diabetes capital of the world, the International Journal of Diabetes in Developing Countries says that there is alarming rise in prevalence of diabetes, which has gone beyond epidemic form to a pandemic one.',
};

/**
 * Figures quoted on the source page. Displayed only under an explicit
 * "historical context" label — see the rule at the top of this file.
 */
export const historicalContext = {
    label: 'Historical figures cited on the original CSR page',
    paragraphs: [
        "The number of diabetic patients in India more than doubled from 19 million in 1995 to 40.9 million in 2007. It is projected to increase to 69.9 million by 2025. Currently, up to 11 per cent of India's urban population and 3 per cent of rural population above the age of 15 have diabetes. Diabetes affects all people in the society, not just those who live with it.",
        'Various studies have shown that the high incidence of diabetes in India is mainly because of sedentary lifestyle, lack of physical activity, obesity, stress and consumption of diets rich in fat, sugar and calories.',
        'The most prevalent is the Type 2 diabetes, which constitutes 95 per cent of the diabetic population in the country. In this, patients are non-insulin dependent and they can control the glucose in their blood by eating measured diet, taking regular exercise and oral medication. Worldwide, millions of people have Type 2 diabetes without even knowing it and if not diagnosed and treated, it can develop serious complications.',
        'Type 1 diabetes (insulin dependent), however, is not preventable. Globally, diabetes affects 246 million people, which is about 6 per cent of the total adult population. It is the fourth leading cause of death by disease and every 10 seconds a person dies from diabetes-related causes in the world. Each year, over three million deaths worldwide are tied directly to diabetes and even greater number die from cardiovascular disease. Modification in lifestyle and proper medication can delay and prevent diabetes in highrisk groups. Eating whole grain carbohydrates and moderate exercise and avoiding excessive weight gain can eliminate over eighty per cent of Type-2 diabetes.',
    ],
};

// ============================================================
// DR. MADHAVIAMMA CHARITABLE TRUST
// ============================================================

/**
 * The source heading reads "Dr. MADHAVIAMMA CHARTIABLE TRUST" — a typo for
 * "Charitable", which the source's own body text spells correctly. The
 * correct spelling is used here.
 */
export const madhaviammaTrust = {
    heading: 'Dr. Madhaviamma Charitable Trust',
    established: '1989',
    body: 'Prof. M. Viswanathan established Dr. Madhaviamma Charitable Trust in March 1989 in memory of his mother, Late Dr. (Mrs) Madhaviamma. The major objective is to ensure that individuals suffering from diabetes and belonging to the underprivileged and economically disadvantaged segment of the society receive modern diabetic care. The Dr. Madhaviamma Free Diabetic Clinic has grown rapidly and more than thousand patients attending the clinic receive the same treatment as the other patients who can afford to pay. The necessary laboratory investigations and drugs including insulin are provided free of cost to the poor patients. The entire expenditure is met by the Dr. Madhaviamma Charitable Trust.',
    image: {
        // 156x176 is the only size WordPress holds for this archival portrait —
        // it is framed at native size rather than upscaled.
        src: '/images/csr/trust/madhaviamma.jpg',
        alt: 'Archival portrait of Late Dr. (Mrs) Madhaviamma',
        width: 156,
        height: 176,
    } as CSRImage,
};

export const trustees = {
    heading: 'Trustees',
    names: ['Mrs. Sarada Viswanathan', 'Mr. Arun Viswanathan', 'Dr. Vijay Viswanathan'],
};

// ============================================================
// LEG AMPUTATIONS IN PERSONS WITH DIABETES
// ============================================================

export const legAmputations = {
    heading: 'Leg Amputations in Persons with Diabetes',
    paragraphs: [
        'Diabetes is the most common cause of amputation which is not the result of road traffic accident, and is responsible for over one million amputations each year. People with diabetes are 15 to 40 times more likely to require a lower limb amputation compared in the general population. Every 30 seconds a person with diabetes loses a leg somewhere in the world.',
        'In India patients with diabetic foot infection requiring an amputation usually have to pay Rs. 20,000 to Rs. 30,000. Further the cost of an artificial limb is Rs.5,000 to Rs.10,000.',
    ],
};

// ============================================================
// CREATION OF DIABETIC AMPUTATION SUPPORT FUND
// ============================================================

export const supportFund = {
    heading: 'Creation of Diabetic Amputation Support Fund',
    intro:
        'The Trustees of the Dr. Madhaviamma Charitable Trust have decided to create a separate fund for helping people who have undergone amputation of the leg due to diabetes. This financial support would either be part or full funding of providing an artificial limb to some patients or for the treatment of subsequent infection in the other leg in some patients.',
    /** Source purposes of the fund — not guaranteed benefits. */
    purposes: [
        {
            title: 'Artificial Limb Support',
            body: 'Part or full funding of providing an artificial limb to some patients.',
        },
        {
            title: 'Treatment Support',
            body: 'Treatment of subsequent infection in the other leg in some patients.',
        },
    ],
    /** Must stay visible — it qualifies everything above it. */
    qualification:
        'The financial support will depend entirely on the decision of the trustees or the committee appointed by them to scrutinize applications.',
    section80G:
        'Contributions to Dr. Madhaviamma Charitable Trust are exempted under Section 80G of I.T. Act.',
    contribution:
        'Contributions to the Amputation Fund could be sent in favour of Dr.Madhaviamma Charitable Trust - Diabetic Amputation Support (DAS) Fund.',
    closing:
        'The Trustees of this Charitable Trust hope that this initiative will help some people with diabetes from a lower socio-economic background get proper care for their diabetes and support when they get into complication like an amputation.',
};

// ============================================================
// CSR ACTIVITY TIMELINE
// ============================================================

export interface CSREvent {
    id: string;
    /** Date exactly as the source page labels the activity. */
    date: string;
    year: number;
    /** Sort key only — never displayed. */
    sortKey: string;
    title: string;
    location?: string;
    paragraphs: string[];
    /** Numbered sub-activities, where the source lists them. */
    activities?: string[];
    images: CSRImage[];
    /** Set where the source itself is inconsistent or ambiguous. */
    note?: string;
}

export const csrEvents: CSREvent[] = [
    {
        id: 'missionaries-of-charity-2022',
        date: '29 November 2022',
        year: 2022,
        sortKey: '2022-11-29',
        title: 'Free Camp at Missionaries of Charity / Nirmala Shishu Bhavan',
        paragraphs: [
            'M V Hospital for Diabetes Royapuram organized a free camp for the inmates of Missionaries of Charity /Nirmala Shishu Bhavan situated in our street. Many sisters and the children took part.',
        ],
        note: 'The source page places this activity after its 2018 entries despite the 2022 date. The source date is kept and the entry is ordered chronologically here.',
        images: [
            {
                src: '/images/csr/2022/missionaries-of-charity-01.jpg',
                alt: 'Free camp conducted by MV Hospital for Diabetes at Missionaries of Charity, Nirmala Shishu Bhavan',
                width: 1600,
                height: 720,
            },
            {
                src: '/images/csr/2022/missionaries-of-charity-02.jpg',
                alt: 'Sisters and children taking part in the free camp at Nirmala Shishu Bhavan',
                width: 1600,
                height: 2133,
            },
            {
                src: '/images/csr/2022/missionaries-of-charity-03.jpg',
                alt: 'Medical team screening participants at the Nirmala Shishu Bhavan camp',
                width: 1600,
                height: 2133,
            },
            {
                src: '/images/csr/2022/missionaries-of-charity-04.jpg',
                alt: 'Participants at the free camp organised at Missionaries of Charity',
                width: 1600,
                height: 2133,
            },
        ],
    },
    {
        id: 'free-diabetic-checkup-2022',
        date: '20 August 2022',
        year: 2022,
        sortKey: '2022-08-20',
        title: 'Free Diabetic Check-up Camp',
        location: 'Royapuram, Tondiarpet and Mannady',
        paragraphs: [
            'On the occasion of 75th Independence Year, 15 Aug 2022 & 99th Birth Anniversary of our Founder Prof M Viswanathan on 26 August 2022 we organized a Free Diabetic Check-up camp for the people in Royapuram, Tondiarpet and Mannady.',
        ],
        images: [],
    },
    {
        id: 'cctv-security-2021',
        date: '01 December 2021',
        year: 2021,
        sortKey: '2021-12-01',
        title: 'CCTV Security Initiative',
        location: 'Royapuram',
        paragraphs: [
            'Our Medical Administrator Dr. Viswanathan Vishnu Vijay handed over CC-TV Security cameras to the Deputy Commissioner of Police Mr. R. Shiva Prasad (IPS), redoubling the security of the high crime areas in and around Royapuram.',
            'M V Hospital for Diabetes aims to make Royapuram safe for everyone, through such CSR activities.',
        ],
        images: [
            {
                src: '/images/csr/2021/cctv-handover-dec-2021.jpg',
                alt: 'CCTV security cameras handed over to the Deputy Commissioner of Police for Royapuram',
                width: 1284,
                height: 2778,
            },
        ],
    },
    {
        id: 'flu-vaccination-2021',
        date: '15 November 2021',
        year: 2021,
        sortKey: '2021-11-15',
        title: 'Flu Vaccination Camp',
        paragraphs: [
            'M V Hospital for Diabetes held a Flu Vaccination Camp on 15 Nov as a part of World Diabetes Day activity funded by Prof. M Viswanathan & Sarada Viswanathan Trust. Amputed Patients, Lower Income group of patients enrolled with Madhaviamma Trust (Started by Prof. M Viswanathan in the honor of his Mother) were vaccinated.',
        ],
        images: [
            {
                src: '/images/csr/2021/flu-vaccination-01.jpg',
                alt: 'Flu vaccination camp held by MV Hospital for Diabetes on World Diabetes Day',
                width: 1280,
                height: 958,
            },
            {
                src: '/images/csr/2021/flu-vaccination-02.jpg',
                alt: 'Patient receiving a flu vaccination at the MV Hospital for Diabetes camp',
                width: 958,
                height: 1280,
            },
            {
                src: '/images/csr/2021/flu-vaccination-03.jpg',
                alt: 'Nursing staff administering flu vaccination to a patient',
                width: 1280,
                height: 958,
            },
            {
                src: '/images/csr/2021/flu-vaccination-04.jpg',
                alt: 'Patients enrolled with the Madhaviamma Trust attending the flu vaccination camp',
                width: 1600,
                height: 900,
            },
            {
                src: '/images/csr/2021/flu-vaccination-05.jpg',
                alt: 'Flu vaccination camp funded by the Prof. M Viswanathan & Sarada Viswanathan Trust',
                width: 1600,
                height: 900,
            },
        ],
    },
    {
        id: 'pneumococcal-vaccination-2020',
        date: '06 February 2020',
        year: 2020,
        sortKey: '2020-02-06',
        title: 'Free Pneumococcal Vaccination for Elderly Diabetic Patients',
        paragraphs: [
            'Prof. M Viswanathan & Sarada Viswanathan Memorial Trust started by Dr. Vijay Viswanathan in the memory of his parents, has been funding several social activities for the benefit of some special patients (like amputees, low socio-economic status and needy patients.',
            'Pneumococcal Vaccine prevents severe conditions like pneumonia, Bacteremia and Meningitis which often requires hospitalization and can be deadly too. In Feb 2020 the trust decided to give free Pneumococcal Vaccine to the Elderly Diabetic patients who seem to be at a greater risk.',
            'We initiated the campaign on 06 Feb 2020 by Vaccinating Leg Amputated patients having Diabetes.',
        ],
        images: [
            {
                src: '/images/csr/2020/pneumococcal-vaccination-01.webp',
                alt: 'Leg-amputated patient with diabetes receiving a free pneumococcal vaccination under the Prof. M Viswanathan and Sarada Viswanathan Memorial Trust',
                width: 6000,
                height: 4000,
            },
            {
                src: '/images/csr/2020/pneumococcal-vaccination-02.webp',
                alt: 'Nursing staff administering the free pneumococcal vaccine to an elderly patient with diabetes',
                width: 6000,
                height: 4000,
            },
            {
                src: '/images/csr/2020/pneumococcal-vaccination-03.webp',
                alt: 'Pneumococcal vaccination campaign for elderly patients with diabetes at MV Hospital for Diabetes',
                width: 6000,
                height: 4000,
            },
        ],
    },
    {
        id: 'karunalaya-2019',
        date: '27 August 2019',
        year: 2019,
        sortKey: '2019-08-27',
        title: 'Support for Karunalaya',
        paragraphs: [
            'Financial support provided by Prof. M Viswanathan & Sarada Viswanathan Memorial Trust to KARUNALAYA, an organization working for Street and Working Children. Also seen Dr. Paul Sunder Singh (Founder & Secretary of Karunalaya) And Dr. Vijay Viswanathan, Head & Cheif Diabetologist M V Hospital for Diabetes.',
        ],
        note: 'The source page carries this activity twice — once as "27 AUGUST 2019" with the description, and again as a "27 Aug 2019 (Founders Day Celebration)" heading carrying the photograph. Both have been consolidated into this single entry.',
        images: [
            {
                src: '/images/csr/2019/karunalaya-support.jpg',
                alt: 'Financial support handed over to Karunalaya, an organisation working for street and working children',
                width: 1600,
                height: 1067,
            },
        ],
    },
    {
        id: 'founders-anniversary-2019',
        date: '01 March 2019',
        year: 2019,
        sortKey: '2019-03-01',
        title: 'Social Activities on the Founder’s Death Anniversary',
        location: 'Royapuram, West Madha Church Street',
        paragraphs: [
            'On the occasion of Death Anniversary of our Founder Prof M Viswanathan on 01 March 2019 we organized few social activities in the hospital premises.',
        ],
        activities: [
            'Officially handed over the CC-TV Security camera’s to be installed in Royapuram, West Madha Church Street to the Mr. C Kalaichelvam (DCP)',
            'Launched the North Chennai Police men Diabetes Prevention Programme as a part of the COPS Phase 2 study.',
            'Conducted Free Diabetic Check-up camp for the underprivileged people.',
        ],
        images: [
            {
                src: '/images/csr/2019/security-camera-handover.jpg',
                alt: 'CCTV security cameras officially handed over for installation in Royapuram, West Madha Church Street',
                width: 1600,
                height: 900,
            },
        ],
    },
    {
        id: 'rto-camp-2019',
        date: 'February 2019',
        year: 2019,
        sortKey: '2019-02-08',
        title: 'Helping Staff of RTO',
        location: 'RTO Office, Puliyanthope',
        paragraphs: [
            'Free RTO Camp organized by MV Hospital for Diabetes on 08 Feb 2019 As a part of “Road safety Awareness week” throughout the state, M V Hospital for Diabetes organized a camp in RTO Office at Puliyanthope. The participants were both the office staff as well as general population who were applying for license.',
        ],
        images: [
            {
                src: '/images/csr/2019/rto-camp-01.jpg',
                alt: 'Free RTO health camp organised by MV Hospital for Diabetes at the RTO Office, Puliyanthope',
                width: 1080,
                height: 810,
            },
            {
                src: '/images/csr/2019/rto-camp-02.jpg',
                alt: 'RTO office staff being screened at the MV Hospital for Diabetes camp',
                width: 1080,
                height: 810,
            },
            {
                src: '/images/csr/2019/rto-camp-03.jpg',
                alt: 'Participants at the RTO camp held during Road Safety Awareness Week',
                width: 1080,
                height: 810,
            },
            {
                src: '/images/csr/2019/rto-camp-04.jpg',
                alt: 'Medical team conducting screening at the RTO Office, Puliyanthope',
                width: 1080,
                height: 810,
            },
            {
                src: '/images/csr/2019/rto-camp-05.jpg',
                alt: 'Licence applicants attending the free RTO health camp',
                width: 1080,
                height: 810,
            },
        ],
    },
    {
        id: 'royapuram-beautiful-safe-2019',
        date: 'January 2019',
        year: 2019,
        sortKey: '2019-01-01',
        title: 'Making Royapuram Beautiful and Safe',
        location: 'West Madha Street, Royapuram',
        paragraphs: [
            'Started Upgrading West Madha Street, Royapuram by installation of CCTV Cameras along the Street Maintenance of the Median is also done by M V Hospital for Diabetes.',
        ],
        images: [
            {
                src: '/images/csr/2019/royapuram-cctv.jpg',
                alt: 'CCTV cameras installed along West Madha Street, Royapuram',
                width: 1600,
                height: 3200,
            },
            {
                src: '/images/csr/2019/royapuram-median-01.jpg',
                alt: 'Median along West Madha Street maintained by MV Hospital for Diabetes',
                width: 1600,
                height: 1200,
            },
            {
                src: '/images/csr/2019/royapuram-median-02.jpg',
                alt: 'Upgraded street median in Royapuram maintained by MV Hospital for Diabetes',
                width: 1600,
                height: 1200,
            },
        ],
    },
    {
        id: 'foot-checkup-camp-2018',
        date: 'December 2018',
        year: 2018,
        sortKey: '2018-12-03',
        title: 'Free Foot Check-up Camp',
        location: 'Adyar, Velachery and Koramangala',
        paragraphs: [
            'M.V. Hospital for Diabetes and its branches (Adyar, Velachery & Koramangala) conducted Free foot check up camp, an initiative for prevention of Diabetic Amputation as a part of International Day of Persons with Disabilities campaign from 03 -08 Dec 2018.',
        ],
        images: [],
    },
    {
        id: 'mahabalipuram-camp-2018',
        date: '28 October 2018',
        year: 2018,
        sortKey: '2018-10-28',
        title: 'Free Diabetes Check-up Camp at Mamallapuram',
        location: 'Govt. Adidravidar Higher Secondary School, Pattipulam Post, Mamallapuram, Kanchipuram',
        paragraphs: [
            'MV Hospital for Diabetes conducted a Free Diabetes check -up camp at a Remote area (Govt. Adidravidar Higher Secondary School, Pattipulam Post, Mamallapuram, Kanchipuram) on 28 Oct 2018.',
        ],
        images: [
            {
                src: '/images/csr/2018/mahabalipuram-camp.jpg',
                alt: 'Free diabetes check-up camp conducted at a government school near Mamallapuram',
                width: 1080,
                height: 606,
            },
        ],
    },
    {
        id: 'freedom-trust-2018',
        date: '24 August 2018',
        year: 2018,
        sortKey: '2018-08-24',
        title: 'Support for Freedom Trust',
        paragraphs: [
            'Financial support provided to Freedom Trust on the occasion of Founders Day Celebration (24th Aug 2018), which provides artificial prosthesis to deserving amputees. Photograph attached.',
        ],
        images: [
            {
                src: '/images/csr/2018/freedom-trust-01.jpg',
                alt: 'Memento handed over to Freedom Trust at the Founders Day Celebration',
                width: 1600,
                height: 1067,
                caption:
                    'Dr. Vijay Viswanathan, Head and Chief Diabetologist, M V Hospital for Diabetes, handing over the Memento to Freedom Trust.',
            },
            {
                src: '/images/csr/2018/freedom-trust-02.jpg',
                alt: 'Cheque handed over to Freedom Trust at the Founders Day Celebration',
                width: 1600,
                height: 1067,
                caption:
                    'Dr. Vijay Viswanathan, Head and Chief Diabetologist, M V Hospital for Diabetes, handing over the cheque to Freedom Trust',
            },
        ],
    },
    {
        id: 'dinakaran-camp-2010',
        date: '13 February 2010',
        year: 2010,
        sortKey: '2010-02-13',
        title: 'Diabetes Awareness and Detection Camp for Dinakaran Tamil Daily',
        location: 'Mylapore Corporate Office, Chennai',
        paragraphs: [
            'Diabetes awareness and detection camp held for the corporate office of Dinakaran Tamil Daily on Saturday, 13th February, 2010 at their Mylapore corporate office, Chennai.',
        ],
        images: [],
    },
    {
        id: 'sowcarpet-camp-2010',
        date: '26 January 2010',
        year: 2010,
        sortKey: '2010-01-26',
        title: 'Diabetes Awareness and Detection Camp at Sowcarpet',
        location: 'Sivanji Jain Bhawan, Thirupalli Street, Sowcarpet, Chennai',
        paragraphs: [
            'Diabetes awareness and detection camp held by M.V.Hospital for Diabetes in association with Sree Shakdwepiya Brahaman Kalyan Trust at Sivanji Jain Bhawan, Thirupalli Street, Sowcarpet, Chennai on Tuesday 26th January, 2010.',
        ],
        note: 'The source page places a single photograph after both 2010 camp headings, so it is shown with this entry, which it directly follows.',
        images: [
            {
                src: '/images/csr/2010/awareness-detection-camp.jpg',
                alt: 'Participants being tested by the medical team at a diabetes awareness and detection camp',
                width: 502,
                height: 187,
                caption:
                    'Participants in the camp being tested by medical team from M.V.Hospital for Diabetes, Royapuram.',
            },
        ],
    },
];

/** Years present in the archive, newest first — derived, never hard-coded. */
export const csrYears = [...new Set(csrEvents.map(e => e.year))].sort((a, b) => b - a);

/** Every event image, flattened for the gallery, with its event for the caption. */
export const csrGallery = csrEvents.flatMap(event =>
    event.images.map(image => ({ ...image, eventId: event.id, eventTitle: event.title, date: event.date })),
);

// ============================================================
// FINAL CTA
// ============================================================

export const csrCta = {
    heading: 'Interested in Collaboration?',
    /** Source line: "We Are Available. Interested in Collaboration?" */
    eyebrow: 'We Are Available',
    buttonLabel: 'Get Appointment',
    href: '/appointment',
};
