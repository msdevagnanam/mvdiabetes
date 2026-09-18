export type JobOpening = {
    slug: string;
    title: string;
    category: string;
    location: string;
    employmentType?: string;
    experience?: string;
    qualification?: string;
    openings?: number;
    responsibilities: string[];
    preferredSkills?: string[];
    additionalRequirements?: string[];
    sourceUrl: string;
    status?: "open" | "needs-review";
};

export const careers: JobOpening[] = [
    {
        slug: 'cashier',
        title: 'Cashier',
        category: 'Accounts and Administration',
        location: 'Royapuram - chennai',
        experience: '0-2yrs',
        qualification: 'B.Com',
        openings: 1,
        responsibilities: [
            'Preferably Hindi-speaking candidates.',
            'Willing for shift duty between 7:00 AM to 9:30 PM.',
            'Able to interact with patients and collect cash for various investigations and procedures.',
            'Responsible for reconciling daily accounts and handing over cash to the Accountant.',
            'Clearing any pending dues or advances for IP patients.',
            'Maintaining all relevant files and registers.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/cashier/',
        status: 'open'
    },
    {
        slug: 'electrician',
        title: 'Electrician',
        category: 'Facility services',
        location: 'Royapuram - chennai',
        experience: '5-10yrs',
        qualification: "ITI/DEEE with 'B' License or 'C' License",
        openings: 1,
        responsibilities: [
            'Willing to do rotational duty, including night duty/Sunday duty.',
            'Able to communicate in English and Tamil.',
            'Able to handle electrical work and work on preventive maintenance in a hospital.',
            'Minimal networking skills needed.',
            'Able to handle patient complaints in IP and other department complaints.',
            'Maintaining relevant documents and log records, etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/electrician/',
        status: 'open'
    },
    {
        slug: 'housekeeping-ward-boys-ward-ayahs',
        title: 'Housekeeping – Ward Boys/Ward Ayahs',
        category: 'Facility services',
        location: 'Royapuram - chennai',
        experience: 'Freshers or experienced',
        qualification: 'Min education or Uneducated',
        openings: 2,
        responsibilities: [
            'Rotational shift duty including night duty.',
            'Able to speak to patients and help them.',
            'To do routine housekeeping work like taking patients in wheelchair.',
            'Cleaning washrooms, daily dusting and mopping.',
            'Uneducated/Educated willing to do the housekeeping work can apply.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/housekeeping-ward-boys-ward-ayahs/',
        status: 'open'
    },
    {
        slug: 'non-regd-staff-nurses-nursing-assts',
        title: 'Non Regd Staff Nurses/Nursing Assts',
        category: 'Clinical Services',
        location: 'Koramangala - Bengaluru',
        experience: 'Freshers or experienced',
        qualification: 'ANM B.SC Nursing DGNM DNA',
        openings: 1,
        responsibilities: [
            'Duty time from 7am to 3pm.',
            'Good communication skills in Kannada and English.',
            'Able to handle computers.',
            'Able to take ECG for patients.',
            'To do Footcare tests like doppler,BT,MFT.',
            'To do pedicure for patients.',
            'To talk about various Diabetic footwear and promote the footwear sales etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/non-regd-staff-nurses-nursing-assts/',
        status: 'open'
    },
    {
        slug: 'footwear-coordinator',
        title: 'Footwear Coordinator',
        category: 'Administration services',
        location: 'Royapuram - chennai',
        experience: '1-3Yrs',
        qualification: 'B.COM with Tally',
        openings: 1,
        responsibilities: [
            'Duty time 9am to 6pm.',
            'Good Communication skills in English and Tamil.',
            'Able to handle Tally s/w.',
            'To maintain inventory and procure of raw footwear materials.',
            'To promote footwear sales to patients and generate the bills.',
            'Able to handle cash on a daily basis.',
            'To handle the footwear techs on a daily basis and allot work.',
            'To do the external purchase work etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/footwear-coordinator/',
        status: 'open'
    },
    {
        slug: 'dietician-cum-counsellor',
        title: 'Dietician cum Counsellor',
        category: 'Patient Care services',
        location: 'Royapuram - chennai',
        experience: 'Freshers or min 1yrs exp as Dietician',
        qualification: 'M.Sc Clinical Nutrition/FSM',
        openings: 1,
        responsibilities: [
            'Duty time from 7am to 4pm.',
            'Excellent Communication skills in English and Hindi.',
            'Taking patient history.',
            'Diet Counselling and Diabetes Education to patients.',
            'Assisting Consultants in typing prescriptions.',
            'Explaining prescription to patients.',
            'Handling patient queries on whatsapp official phone.',
            'Promoting sale of Dietary items to patients etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/dietician-cum-counsellor/',
        status: 'open'
    },
    {
        slug: 'receptionist',
        title: 'Receptionist',
        category: 'Patient Care services',
        location: 'Koramangala - Bengaluru',
        experience: 'Min 1yr receptionist exp in Healthcare',
        qualification: '-Any Graduate',
        openings: 1,
        responsibilities: [
            'Duty time from 7am to 3pm.',
            'Excellent communication skills in English and Kannada.',
            'Computer skills needed.',
            'Fixing appointments for patients.',
            'To do telecalling to increase patient footfalls.',
            'To take care of patients needs within the clinic.',
            'To handle all patients complaints.',
            'Coordination with doctors and patients etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/receptionist/',
        status: 'open'
    },
    {
        slug: 'pharmacist',
        title: 'Pharmacist',
        category: 'Paramedical',
        location: 'Royapuram - chennai',
        experience: '2-5yrs',
        qualification: 'D-Pharm/B-Pharm',
        openings: 2,
        responsibilities: [
            'Willing for shift duty between 8:00 AM to 9:30 PM.',
            'TN registered Pharmacist needed.',
            'Good communication skills in English, Tamil/Telugu/Hindi.',
            'Basic computer skills needed.',
            'Able to disburse medicines as per prescription.',
            'Maintaining the minimum re-order level and handling the stock of medications.',
            'Interaction with patients regarding various medications and increasing sales in the pharmacy, etc.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/physician-assistant/', 
        // Note: Preserving the source URL here as per the prompt's finding that this URL resolves to the Pharmacist job.
        status: 'open'
    },
    {
        slug: 'tn-regd-staff-nurses',
        title: 'TN Regd Staff Nurses',
        category: 'Clinical Services',
        location: 'Royapuram - chennai',
        experience: 'Freshers/ Experienced',
        qualification: 'B.SC Nursing DGNM',
        openings: 4,
        responsibilities: [
            'Willing to do rotational shift duty including night duty.',
            'Able to communicate in English and Tamil.',
            'Able to handle basic nursing skills independently.',
            'Minimal computer knowledge.',
            'Coordinating with doctors for all tests and procedures.',
            'Taking care and handling patient requirements.',
            'Food and Accommodation free.'
        ],
        sourceUrl: 'https://mvdiabetes.com/jobs/tn-regd-staff-nurses/',
        status: 'open'
    }
];

export function getCareerBySlug(slug: string): JobOpening | undefined {
    return careers.find((c) => c.slug === slug);
}
