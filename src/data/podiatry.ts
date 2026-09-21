/**
 * Podiatry page content.
 *
 * Every string in this file is taken from the MV Diabetes Podiatry page
 * (https://mvdiabetes.com/podiatry/). Medical wording — in particular the
 * qualifications on Ozone and Magneto therapy — is reproduced as published and
 * must not be strengthened, shortened or rephrased into a stronger claim.
 */

export interface PodiatryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface PodiatryService {
    id: string;
    number: string;
    title: string;
    description: string;
    /** Source caveat that must stay visible and readable alongside the description. */
    caveat?: string;
    image: PodiatryImage;
}

export const podiatryIntro =
    'Podiatry is a medical specialty focused on foot, ankle, and lower extremity conditions. Podiatrists diagnose, treat, and prevent foot-related issues including injuries, deformities, skin and nail conditions, sports-related injuries, and diabetic foot care.';

/** The areas the source introduction names as part of podiatry practice. */
export const podiatryScope = [
    'Injuries',
    'Deformities',
    'Skin and nail conditions',
    'Sports-related injuries',
    'Diabetic foot care',
];

export const podiatryHeroImage: PodiatryImage = {
    src: '/images/care/podiatry/podiatry-main.jpg',
    alt: 'MV Centre for Diabetic Footcare, Podiatry, Research and Management',
    width: 1600,
    height: 1067,
};

/**
 * Displayed on the signage inside the MV Centre for Diabetic Footcare in the
 * page's own photograph — kept as the centre's wording, not restated as a
 * years-of-experience statistic.
 */
export const podiatryBadge = {
    label: 'Celebrating',
    value: '25 Years of Saving Legs',
    note: 'As displayed at the MV Centre for Diabetic Footcare',
};

export const podiatryPillars = [
    {
        id: 'awareness',
        number: '01',
        title: 'Awareness',
        statement:
            'MV Diabetes aims to create awareness on amputation prevention among the diabetic population.',
    },
    {
        id: 'assessment',
        number: '02',
        title: 'Assessment',
        statement:
            'Podiatrists assess the complexities of the foot and its associated structures.',
    },
    {
        id: 'limb-salvage',
        number: '03',
        title: 'Limb Salvage',
        statement: '…to plan corrective procedures for limb salvage.',
    },
];

export const footClinicStatement =
    'Sophisticated facilities for Diagnosis and customized treatments as per the condition of Foot, ankle etc. are provided in our in house Foot Clinic & Podiatry unit.';

export const limbSalvageStatement =
    'Podiatrists assess the complexities of the foot and its associated structures to plan CORRECTIVE PROCEDURES FOR LIMB SALVAGE.';

export const podiatryServices: PodiatryService[] = [
    {
        id: 'ozone-therapy',
        number: '01',
        title: 'Ozone Therapy',
        description:
            'Podiatry ozone therapy utilizes ozone gas for wound healing, infections, pain management, and joint/soft tissue conditions. Podiatrists receive specialized training for safe administration.',
        caveat:
            'Consultation with a podiatrist is important to determine its suitability.',
        image: {
            src: '/images/care/podiatry/podiatry-ozone-therapy.jpg',
            alt: 'MV Diabetes podiatry ozone therapy facility',
            width: 1600,
            height: 1067,
        },
    },
    {
        id: 'magneto-therapy',
        number: '02',
        title: 'Magneto Therapy',
        description:
            'Podiatry magneto therapy involves using magnetic fields to potentially relieve pain, promote healing, and manage foot conditions.',
        caveat: 'Scientific evidence is limited, and professional consultation is advised.',
        image: {
            src: '/images/care/podiatry/podiatry-magneto-therapy.jpg',
            alt: 'MV Diabetes podiatry treatment facility',
            width: 1600,
            height: 1067,
        },
    },
    {
        id: 'foot-education',
        number: '03',
        title: 'Foot Education',
        description:
            'Podiatry foot education aims to raise awareness and knowledge about foot health, including anatomy, common conditions, preventive measures, and self-care techniques.',
        image: {
            src: '/images/care/podiatry/podiatry-foot-education.jpg',
            alt: 'MV Diabetes foot education and patient care area',
            width: 1600,
            height: 1067,
        },
    },
    {
        id: 'procedure-room',
        number: '04',
        title: 'Procedure Room',
        description:
            'A podiatry procedure room is a specialized facility in a clinic where diagnostic assessments, treatments for nails/skin/wounds, biomechanical assessments, and minor surgical procedures are performed in a sterile and safe environment.',
        image: {
            src: '/images/care/podiatry/podiatry-procedure-room.jpg',
            alt: 'MV Diabetes podiatry procedure room',
            width: 1600,
            height: 1067,
        },
    },
];

export const podiatryCta = {
    heading: 'Step into Foot Health',
    subheading: 'Comprehensive Care, Innovative Therapies, Expert Guidance',
    buttonLabel: 'Get Appointment',
    href: '/appointment?service=podiatry',
};
