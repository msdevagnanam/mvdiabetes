// ============================================================
// MV Diabetes Infrastructure Data
// Source: https://mvdiabetes.com/infrastructure/
// ============================================================

export type InfrastructureImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type InfrastructureFacility = {
  id: string;
  title: string;
  slug: string;
  location: 'royapuram' | 'koramangala';
  category: InfrastructureCategory;
  images: InfrastructureImage[];
  description?: string;
};

export type InfrastructureLocation = {
  id: string;
  name: string;
  slug: string;
  city: string;
  description?: string;
  facilities: InfrastructureFacility[];
};

export type InfrastructureCategory =
  | 'all'
  | 'patient-care'
  | 'diagnostics'
  | 'research'
  | 'inpatient'
  | 'clinical-services'
  | 'support-services';

export const infrastructureCategories: { id: InfrastructureCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'patient-care', label: 'Patient Care' },
  { id: 'diagnostics', label: 'Diagnostics' },
  { id: 'research', label: 'Research' },
  { id: 'inpatient', label: 'Inpatient' },
  { id: 'clinical-services', label: 'Clinical Services' },
  { id: 'support-services', label: 'Support Services' },
];

const IMG = 'https://mvdiabetes.com/wp-content/uploads/2023/06';

// ============================================================
// ROYAPURAM FACILITIES
// ============================================================

const royapuramFacilities: InfrastructureFacility[] = [
  {
    id: 'royapuram-entrance',
    title: 'M.V. Hospital for Diabetes Entrance',
    slug: 'entrance',
    location: 'royapuram',
    category: 'patient-care',
    images: [
      { src: `${IMG}/mv1-scaled.jpg`, alt: 'M.V. Hospital for Diabetes entrance, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv2-scaled.jpg`, alt: 'M.V. Hospital for Diabetes entrance view, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv4-scaled.jpg`, alt: 'M.V. Hospital for Diabetes building entrance, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-reception',
    title: 'M.V. Hospital for Diabetes Reception',
    slug: 'reception',
    location: 'royapuram',
    category: 'patient-care',
    images: [
      { src: `${IMG}/mv4-scaled.jpg`, alt: 'M.V. Hospital for Diabetes Reception desk', width: 2560, height: 1707 },
      { src: `${IMG}/mv5-scaled.jpg`, alt: 'Reception area at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv6-scaled.jpg`, alt: 'Reception desk at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv7-scaled.jpg`, alt: 'Reception lobby at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-waiting-hall',
    title: 'Waiting Hall / Out Patient',
    slug: 'waiting-hall',
    location: 'royapuram',
    category: 'patient-care',
    images: [
      { src: `${IMG}/mv5-scaled.jpg`, alt: 'Reception area at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv6-scaled.jpg`, alt: 'Reception desk at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv7-scaled.jpg`, alt: 'Reception lobby at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-biochemistry',
    title: 'Department of Biochemistry',
    slug: 'biochemistry',
    location: 'royapuram',
    category: 'diagnostics',
    images: [
      { src: `${IMG}/mv15-scaled.jpg`, alt: 'Waiting hall and outpatient area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv16-scaled.jpg`, alt: 'Outpatient waiting area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv17-scaled.jpg`, alt: 'Patient waiting hall at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv18-scaled.jpg`, alt: 'Waiting area seating at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-lab',
    title: 'Lab and Machines',
    slug: 'lab-machines',
    location: 'royapuram',
    category: 'diagnostics',
    images: [
      { src: `${IMG}/mv10-scaled.jpg`, alt: 'Department of Biochemistry at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv11-scaled.jpg`, alt: 'Biochemistry lab equipment at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv13-scaled.jpg`, alt: 'Biochemistry department workspace at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv14-scaled.jpg`, alt: 'Laboratory analysis area in Biochemistry department', width: 2560, height: 1707 },
      { src: `${IMG}/mv12-scaled.jpg`, alt: 'Biochemistry instruments at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv9-scaled.jpg`, alt: 'Biochemistry department overview at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-diet-nutrition',
    title: 'Diet and Nutrition Counselling',
    slug: 'diet-nutrition',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv23-scaled.jpg`, alt: 'Laboratory machines at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv25-scaled.jpg`, alt: 'Diagnostic lab equipment at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-patient-education',
    title: 'Patient Education Department',
    slug: 'patient-education',
    location: 'royapuram',
    category: 'patient-care',
    images: [
      { src: `${IMG}/mv21-scaled.jpg`, alt: 'Diet and nutrition counselling area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv19-scaled.jpg`, alt: 'Nutrition counselling room at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv20-scaled.jpg`, alt: 'Diet counselling department at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv22-scaled.jpg`, alt: 'Nutrition department workspace at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-research-prevention',
    title: 'Research Department for Primary Prevention of Diabetes',
    slug: 'research-prevention',
    location: 'royapuram',
    category: 'research',
    images: [
      { src: `${IMG}/mv26-scaled.jpg`, alt: 'Patient education department at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-weight-management',
    title: 'Weight Management Clinic',
    slug: 'weight-management',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv27-220x280.jpg`, alt: 'Research department for primary prevention of diabetes at M.V. Hospital', width: 220, height: 280 },
    ],
  },
  {
    id: 'royapuram-research-kidney',
    title: 'Research Department for Diabetes Kidney Disease',
    slug: 'research-kidney',
    location: 'royapuram',
    category: 'research',
    images: [
      { src: `${IMG}/mv29-scaled.jpg`, alt: 'Weight management clinic at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv30-scaled.jpg`, alt: 'Weight management facility at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-lifestyle-counselling',
    title: 'Lifestyle Counselling',
    slug: 'lifestyle-counselling',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv8-scaled.jpg`, alt: 'Research department for diabetes kidney disease at M.V. Hospital', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-clinical-trial',
    title: 'Department of Clinical Trial',
    slug: 'clinical-trial',
    location: 'royapuram',
    category: 'research',
    images: [
      { src: `${IMG}/mv39-220x280.jpg`, alt: 'Lifestyle counselling area at M.V. Hospital for Diabetes, Royapuram', width: 220, height: 280 },
    ],
  },
  {
    id: 'royapuram-inpatient',
    title: 'In Patient',
    slug: 'inpatient',
    location: 'royapuram',
    category: 'inpatient',
    images: [
      { src: `${IMG}/mv50-scaled.jpg`, alt: 'Department of clinical trial at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv51-scaled.jpg`, alt: 'Clinical trial workspace at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv47-scaled.jpg`, alt: 'Clinical trial department at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-nurses-desk',
    title: 'Nurses Desk',
    slug: 'nurses-desk',
    location: 'royapuram',
    category: 'inpatient',
    images: [
      { src: `${IMG}/mv31-scaled.jpg`, alt: 'Inpatient ward at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv38-scaled.jpg`, alt: 'Inpatient room at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-deluxe-ward',
    title: 'Deluxe Ward',
    slug: 'deluxe-ward',
    location: 'royapuram',
    category: 'inpatient',
    images: [
      { src: `${IMG}/mv33-scaled.jpg`, alt: 'Nurses desk at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv36-scaled.jpg`, alt: 'Nursing station at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-presidential-suite',
    title: 'Presidential Suite',
    slug: 'presidential-suite',
    location: 'royapuram',
    category: 'inpatient',
    images: [
      { src: `${IMG}/mv41-scaled.jpg`, alt: 'Deluxe ward at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv35-scaled.jpg`, alt: 'Deluxe ward room at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv44-scaled.jpg`, alt: 'Deluxe ward interior at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv45-scaled.jpg`, alt: 'Deluxe ward facilities at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-operation-room',
    title: 'Operation Room',
    slug: 'operation-room',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv32-scaled.jpg`, alt: 'Presidential suite at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv34-scaled.jpg`, alt: 'Presidential suite room at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-cath-lab',
    title: 'Cath Lab',
    slug: 'cath-lab',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/Cath-Lab-1.jpg`, alt: 'Operation room at M.V. Hospital for Diabetes, Royapuram', width: 1200, height: 800 },
      { src: `${IMG}/Cathlab-2.jpg`, alt: 'Operation theatre at M.V. Hospital for Diabetes', width: 1200, height: 800 },
    ],
  },
  {
    id: 'royapuram-icu',
    title: 'Intensive Care Units (ICUs)',
    slug: 'icu',
    location: 'royapuram',
    category: 'inpatient',
    images: [
      { src: `${IMG}/mv48-scaled.jpg`, alt: 'Cath lab at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-footcare',
    title: 'Footcare and Podiatry',
    slug: 'footcare-podiatry',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv56-scaled.jpg`, alt: 'Intensive care unit at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv55-scaled.jpg`, alt: 'ICU equipment at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv60-scaled.jpg`, alt: 'ICU monitoring area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv59-scaled.jpg`, alt: 'Intensive care facilities at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-research-amputation',
    title: 'Research Department for Prevention of Diabetic Amputation',
    slug: 'research-amputation',
    location: 'royapuram',
    category: 'research',
    images: [
      { src: `${IMG}/mv58-scaled.jpg`, alt: 'Footcare and podiatry department at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv57-scaled.jpg`, alt: 'Podiatry clinic at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/Magneto-Therapy-Room-Treatment-scaled.jpg`, alt: 'Magneto therapy room at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/Ozone-Therapy-scaled.jpg`, alt: 'Ozone therapy facility at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-hyperbaric',
    title: 'Hyperbaric Medicine Advanced Wound Care',
    slug: 'hyperbaric-medicine',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv62-scaled.jpg`, alt: 'Research for prevention of diabetic amputation at M.V. Hospital', width: 2560, height: 1707 },
      { src: `${IMG}/mv63-scaled.jpg`, alt: 'Diabetic amputation prevention research facility', width: 2560, height: 1707 },
      { src: `${IMG}/mv64-scaled.jpg`, alt: 'Research department workspace at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv65-scaled.jpg`, alt: 'Research equipment for diabetic amputation prevention', width: 2560, height: 1707 },
      { src: `${IMG}/mv66-scaled.jpg`, alt: 'Prevention research lab at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-annexe',
    title: 'Annexe Block (Institute for Advanced Diabetes Care)',
    slug: 'annexe-block',
    location: 'royapuram',
    category: 'patient-care',
    images: [
      { src: `${IMG}/mv79-scaled.jpg`, alt: 'Hyperbaric medicine facility at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv80-scaled.jpg`, alt: 'Advanced wound care department at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv82-scaled.jpg`, alt: 'Hyperbaric chamber at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/IMG_20210202_131238-scaled.jpg`, alt: 'Wound care treatment area at M.V. Hospital for Diabetes', width: 2560, height: 1920 },
      { src: `${IMG}/IMG_20210202_130413-scaled.jpg`, alt: 'Hyperbaric medicine equipment at M.V. Hospital for Diabetes', width: 2560, height: 1920 },
      { src: `${IMG}/mv85-scaled.jpg`, alt: 'Advanced wound care facility at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-footwear',
    title: 'Footwear Unit',
    slug: 'footwear-unit',
    location: 'royapuram',
    category: 'support-services',
    images: [
      { src: `${IMG}/mv76-scaled.jpg`, alt: 'Annexe block at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv77-scaled.jpg`, alt: 'Institute for advanced diabetes care at M.V. Hospital', width: 2560, height: 1707 },
      { src: `${IMG}/mv75-scaled.jpg`, alt: 'Annexe block exterior at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv72-scaled.jpg`, alt: 'Advanced diabetes care institute at M.V. Hospital', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-dental',
    title: 'Dental Clinic',
    slug: 'dental-clinic',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv86-scaled.jpg`, alt: 'Footwear unit at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-yoga',
    title: 'Yoga Clinic',
    slug: 'yoga-clinic',
    location: 'royapuram',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/mv88-scaled.jpg`, alt: 'Dental clinic at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv89-scaled.jpg`, alt: 'Dental treatment area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv90-scaled.jpg`, alt: 'Dental clinic equipment at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-pharmacy',
    title: 'Pharmacy',
    slug: 'pharmacy',
    location: 'royapuram',
    category: 'support-services',
    images: [
      { src: `${IMG}/mv67-scaled.jpg`, alt: 'Yoga clinic at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv68-scaled.jpg`, alt: 'Yoga therapy area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-medical-records',
    title: 'Medical Records (Patients Data Collection)',
    slug: 'medical-records',
    location: 'royapuram',
    category: 'support-services',
    images: [
      { src: `${IMG}/mv70-scaled.jpg`, alt: 'Pharmacy at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv69-scaled.jpg`, alt: 'Pharmacy counter at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
      { src: `${IMG}/mv71-scaled.jpg`, alt: 'Hospital pharmacy at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'royapuram-canteen',
    title: 'Canteen',
    slug: 'canteen',
    location: 'royapuram',
    category: 'support-services',
    images: [
      { src: `${IMG}/mv53-scaled.jpg`, alt: 'Canteen exterior at M.V. Hospital for Diabetes, Royapuram', width: 2560, height: 1707 },
      { src: `${IMG}/mv54-scaled.jpg`, alt: 'Canteen interior dining area at M.V. Hospital for Diabetes', width: 2560, height: 1707 },
    ],
  },
];

// ============================================================
// KORAMANGALA FACILITIES
// ============================================================

const koramangalaFacilities: InfrastructureFacility[] = [
  {
    id: 'koramangala-reception',
    title: 'M.V. Hospital for Diabetes Reception',
    slug: 'reception',
    location: 'koramangala',
    category: 'patient-care',
    images: [
      { src: `${IMG}/koramangala1.jpg`, alt: 'Reception at M.V. Hospital for Diabetes, Koramangala', width: 1200, height: 800 },
    ],
  },
  {
    id: 'koramangala-waiting-hall',
    title: 'Waiting Hall',
    slug: 'waiting-hall',
    location: 'koramangala',
    category: 'patient-care',
    images: [
      { src: `${IMG}/koramangala5-scaled.jpg`, alt: 'Waiting hall at M.V. Hospital for Diabetes, Koramangala', width: 2560, height: 1707 },
      { src: `${IMG}/SAVE_20230602_140602-min-min-scaled.jpg`, alt: 'Patient waiting area at M.V. Hospital Koramangala', width: 2560, height: 1920 },
    ],
  },
  {
    id: 'koramangala-biochemistry',
    title: 'Department of Biochemistry',
    slug: 'biochemistry',
    location: 'koramangala',
    category: 'diagnostics',
    images: [
      { src: `${IMG}/koramangala8-scaled.jpg`, alt: 'Department of Biochemistry at M.V. Hospital, Koramangala', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'koramangala-footcare',
    title: 'Foot Care Department',
    slug: 'foot-care',
    location: 'koramangala',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/koramangala7-scaled.jpg`, alt: 'Foot care department at M.V. Hospital, Koramangala', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'koramangala-eye-clinic',
    title: 'Eye Clinic',
    slug: 'eye-clinic',
    location: 'koramangala',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/koramangala6.jpg`, alt: 'Eye clinic at M.V. Hospital for Diabetes, Koramangala', width: 1200, height: 800 },
    ],
  },
  {
    id: 'koramangala-dental',
    title: 'Dental Clinic',
    slug: 'dental-clinic',
    location: 'koramangala',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/koramangala3-scaled.jpg`, alt: 'Dental clinic at M.V. Hospital for Diabetes, Koramangala', width: 2560, height: 1707 },
      { src: `${IMG}/koramangala4-scaled.jpg`, alt: 'Dental treatment room at M.V. Hospital Koramangala', width: 2560, height: 1707 },
    ],
  },
  {
    id: 'koramangala-consultation',
    title: 'Consultation for Diabetes',
    slug: 'consultation',
    location: 'koramangala',
    category: 'patient-care',
    images: [
      { src: `${IMG}/SAVE_20230602_140617-min-min-scaled.jpg`, alt: 'Diabetes consultation room at M.V. Hospital, Koramangala', width: 2560, height: 1920 },
    ],
  },
  {
    id: 'koramangala-treatments',
    title: 'Treatments and Lifestyle Counselling',
    slug: 'treatments-counselling',
    location: 'koramangala',
    category: 'clinical-services',
    images: [
      { src: `${IMG}/koramangala1.jpg`, alt: 'M.V. Hospital for Diabetes, Koramangala', width: 1200, height: 800 },
    ],
  },
];

// ============================================================
// LOCATIONS
// ============================================================

export const infrastructureLocations: InfrastructureLocation[] = [
  {
    id: 'royapuram',
    name: 'Royapuram',
    slug: 'royapuram',
    city: 'Chennai',
    facilities: royapuramFacilities,
  },
  {
    id: 'koramangala',
    name: 'Koramangala',
    slug: 'koramangala',
    city: 'Bengaluru',
    facilities: koramangalaFacilities,
  },
];

// ============================================================
// HERO IMAGE (Hospital entrance)
// ============================================================

export const infrastructureHeroImage = `${IMG}/mv1-scaled.jpg`;

// ============================================================
// COMPUTED STATS
// ============================================================

export function getInfrastructureStats() {
  const allFacilities = infrastructureLocations.flatMap(l => l.facilities);
  const allImages = allFacilities.flatMap(f => f.images);
  return {
    locations: infrastructureLocations.length,
    facilities: allFacilities.length,
    images: allImages.length,
  };
}