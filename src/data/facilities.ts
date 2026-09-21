// ============================================================
// MV Diabetes Facilities Data
// Source: https://mvdiabetes.com/facilities/
//
// Every title and image below is taken directly from the source
// page. Descriptions are NOT invented — where the source page
// carries only a title and an image, only a title and an image
// are stored here. `sourceNote` values are verbatim quotes from
// the mvdiabetes.com announcement banner.
// ============================================================

export type FacilitySection = 'patient-facility' | 'department';

export type FacilityCategory =
  | 'all'
  | 'patient-care'
  | 'convenience'
  | 'diabetes-support'
  | 'specialized-care';

export type FacilityImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FacilityItem = {
  id: string;
  /** Normalized display title (capitalisation/spacing tidied only). */
  title: string;
  /** Exact string as it appears on mvdiabetes.com/facilities/ */
  sourceTitle: string;
  section: FacilitySection;
  image?: FacilityImage;
  /** Verbatim source quote — never paraphrased, never invented. */
  sourceNote?: string;
  category?: Exclude<FacilityCategory, 'all'>;
  /** Existing route on this site covering the same subject. */
  relatedHref?: string;
  relatedLabel?: string;
  sourceUrl: string;
  sourceStatus: 'verified' | 'needs-review';
};

const SOURCE_URL = 'https://mvdiabetes.com/facilities/';
const UPLOADS = 'https://mvdiabetes.com/wp-content/uploads';

// ============================================================
// UI NAVIGATION CATEGORIES
//
// These groupings exist only to make a 12-item grid easier to
// scan. They are NOT official MV Diabetes classifications and
// the UI states as much.
// ============================================================

export const facilityCategories: { id: FacilityCategory; label: string }[] = [
  { id: 'all', label: 'All Facilities' },
  { id: 'patient-care', label: 'Patient Care' },
  { id: 'convenience', label: 'Convenience' },
  { id: 'diabetes-support', label: 'Diabetes Support' },
  { id: 'specialized-care', label: 'Specialized Care' },
];

// ============================================================
// PATIENT FACILITIES
// Source heading: "MV Hospital for Diabetes facilities"
// Source order preserved exactly.
// ============================================================

export const patientFacilities: FacilityItem[] = [
  {
    id: 'diabetes-footwear-unit',
    title: 'Diabetes Footwear Unit',
    sourceTitle: 'Diabetes Footwear Unit',
    section: 'patient-facility',
    category: 'specialized-care',
    image: {
      src: `${UPLOADS}/2023/07/c8-1.png`,
      alt: 'Diabetes Footwear Unit at MV Hospital for Diabetes — display of diabetic and orthopaedic footwear',
      width: 1200,
      height: 1200,
    },
    relatedHref: '/our-products',
    relatedLabel: 'View diabetic footwear',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'diabetes-awareness',
    title: 'Diabetes Awareness',
    sourceTitle: 'Diabetes Awareness',
    section: 'patient-facility',
    category: 'diabetes-support',
    image: {
      src: `${UPLOADS}/2023/07/c1.png`,
      alt: 'Diabetes Awareness activity at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'counselling',
    title: 'Counselling',
    sourceTitle: 'Counselling',
    section: 'patient-facility',
    category: 'diabetes-support',
    // Source image https://mvdiabetes.com/wp-content/uploads/2023/05/11.png
    // returns HTTP 404 on the original site. No substitute has been
    // invented — the UI renders a branded placeholder instead.
    sourceUrl: SOURCE_URL,
    sourceStatus: 'needs-review',
  },
  {
    id: 'online-consultation',
    title: 'Online Consultation',
    sourceTitle: 'Online Consultation',
    section: 'patient-facility',
    category: 'convenience',
    image: {
      src: `${UPLOADS}/2023/07/C2.png`,
      alt: 'Online Consultation service at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    sourceNote:
      'Tele-consultation is available with our Senior Diabetologist. Please send a WhatsApp message to 9344396997.',
    relatedHref: '/appointment',
    relatedLabel: 'Book a consultation',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'home-blood-collection',
    title: 'Home Blood Collection',
    sourceTitle: 'Home blood Collection',
    section: 'patient-facility',
    category: 'convenience',
    image: {
      src: `${UPLOADS}/2023/07/c3.png`,
      alt: 'Home Blood Collection service at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    sourceNote:
      'Home collection services are available on request. Contact: +91 9841516318, +91 93443 96997.',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'medicine-home-delivery',
    title: 'Medicine Home Delivery',
    sourceTitle: 'Medicine Home Delivery',
    section: 'patient-facility',
    category: 'convenience',
    image: {
      src: `${UPLOADS}/2023/07/c4.png`,
      alt: 'Medicine Home Delivery from the pharmacy at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'medicine-insurance-tie-ups',
    title: 'Medicine Insurance Tie-ups',
    sourceTitle: 'Medicine Insurance Tie-ups',
    section: 'patient-facility',
    category: 'convenience',
    image: {
      src: `${UPLOADS}/2023/07/c6.png`,
      alt: 'Medicine Insurance Tie-ups at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    sourceNote: 'MV Hospital for Diabetes offers several cashless schemes for treatment.',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'free-diabetes-clinic',
    title: 'Free Diabetes Clinic',
    sourceTitle: 'Free Diabetes Clinic',
    section: 'patient-facility',
    category: 'patient-care',
    image: {
      src: `${UPLOADS}/2023/07/c7.png`,
      alt: 'Free Diabetes Clinic at MV Hospital for Diabetes — blood glucose check',
      width: 1200,
      height: 1200,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'weight-management-clinic',
    title: 'Weight Management Clinic',
    sourceTitle: 'Weight management Clinic',
    section: 'patient-facility',
    category: 'specialized-care',
    image: {
      src: `${UPLOADS}/2023/07/c5.png`,
      alt: 'Weight Management Clinic at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    relatedHref: '/care/obesity-management',
    relatedLabel: 'Obesity management',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'obesity-and-lifestyle-counseling',
    title: 'Obesity and Lifestyle Counseling',
    sourceTitle: 'Obesity and Lifestyle Counseling',
    section: 'patient-facility',
    category: 'diabetes-support',
    image: {
      src: `${UPLOADS}/2023/05/18.png`,
      alt: 'Obesity and Lifestyle Counseling at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    relatedHref: '/care/obesity-management',
    relatedLabel: 'Obesity management',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'yoga-clinic',
    title: 'Yoga Clinic',
    sourceTitle: 'Yoga Clinic',
    section: 'patient-facility',
    category: 'diabetes-support',
    image: {
      src: `${UPLOADS}/2023/05/14.png`,
      alt: 'Yoga Clinic at MV Hospital for Diabetes — seated meditation posture',
      width: 1200,
      height: 1200,
    },
    sourceNote:
      'We have online yoga sessions covering special yoga for Diabetes and healthy lungs.',
    relatedHref: '/care/yoga',
    relatedLabel: 'Yoga for diabetes',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'diabetic-eye-care',
    title: 'Diabetic Eye Care',
    sourceTitle: 'Diabetic Eye Care',
    section: 'patient-facility',
    category: 'specialized-care',
    image: {
      src: `${UPLOADS}/2023/05/17.png`,
      alt: 'Diabetic Eye Care facility at MV Hospital for Diabetes',
      width: 1200,
      height: 1200,
    },
    relatedHref: '/care/diabetic-eye-care',
    relatedLabel: 'Diabetic eye care',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
];

// ============================================================
// OUR DEPARTMENTS
// Source heading: "Our Departments"
// Source order preserved exactly (images d1 … d9).
// The source page lists a title and an image only — no
// department descriptions exist and none have been written.
// ============================================================

export const departments: FacilityItem[] = [
  {
    id: 'clinical-laboratory',
    title: 'Clinical Laboratory',
    sourceTitle: 'Clinical Laboratory',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d1.jpg`,
      alt: 'Clinical Laboratory at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'biochemistry',
    title: 'Biochemistry',
    sourceTitle: 'Biochemistry',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d2.jpg`,
      alt: 'Biochemistry department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'epidemiology',
    title: 'Epidemiology',
    sourceTitle: 'Epidemiology ',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d3.jpg`,
      alt: 'Epidemiology department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'medical-records',
    title: 'Medical Records',
    sourceTitle: 'Medical Records',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d4.jpg`,
      alt: 'Medical Records department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'social-education',
    title: 'Social Education',
    sourceTitle: 'Social Education',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d5.jpg`,
      alt: 'Social Education department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'inpatient-and-outpatient',
    title: 'InPatient and Out Patient',
    sourceTitle: 'InPatient and Out Patient',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d6.jpg`,
      alt: 'InPatient and Out Patient department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'primary-prevention-of-diabetes',
    title: 'Primary Prevention of Diabetes',
    sourceTitle: 'Primary Prevention of Diabetes',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d7.jpg`,
      alt: 'Primary Prevention of Diabetes department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'prevention-of-diabetes-kidney-disease',
    title: 'Prevention of Diabetes Kidney Disease',
    sourceTitle: 'Prevention of Diabetes Kidney Disease',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d8.jpg`,
      alt: 'Prevention of Diabetes Kidney Disease department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    relatedHref: '/care/kidney-care',
    relatedLabel: 'Kidney care',
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
  {
    id: 'electronic-data-processing',
    title: 'Electronic Data Processing',
    sourceTitle: 'Electronic Data processing',
    section: 'department',
    image: {
      src: `${UPLOADS}/2023/05/d9.jpg`,
      alt: 'Electronic Data Processing department at MV Hospital for Diabetes',
      width: 500,
      height: 300,
    },
    sourceUrl: SOURCE_URL,
    sourceStatus: 'verified',
  },
];

// ============================================================
// FEATURED FACILITY
// First item in source order. "Featured" is an editorial layout
// choice only — facilities are not ranked.
// ============================================================

export const featuredFacilityId = 'diabetes-footwear-unit';

export const featuredFacility =
  patientFacilities.find((f) => f.id === featuredFacilityId) ?? patientFacilities[0];

// ============================================================
// HERO COLLAGE — real source images only
// ============================================================

export const heroCollage: FacilityImage[] = [
  'diabetes-footwear-unit',
  'diabetic-eye-care',
  'yoga-clinic',
  'home-blood-collection',
]
  .map((id) => patientFacilities.find((f) => f.id === id)?.image)
  .filter((img): img is FacilityImage => Boolean(img));

/** Landscape source image used for Open Graph (PNGs here are transparent). */
export const facilitiesOgImage = departments[0].image!;

// ============================================================
// DERIVED COUNTS — never hard-coded
// ============================================================

export function getFacilitiesStats() {
  const all = [...patientFacilities, ...departments];

  return {
    patientFacilities: patientFacilities.length,
    departments: departments.length,
    sourceImages: all.filter((item) => Boolean(item.image)).length,
    needsReview: all.filter((item) => item.sourceStatus === 'needs-review').length,
  };
}

export function getFacilityCategoryCounts() {
  return facilityCategories
    .map((cat) => ({
      ...cat,
      count:
        cat.id === 'all'
          ? patientFacilities.length
          : patientFacilities.filter((f) => f.category === cat.id).length,
    }))
    .filter((cat) => cat.count > 0);
}
