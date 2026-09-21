/**
 * Yoga page content.
 *
 * Every string here comes from the MV Diabetes Yoga page
 * (https://mvdiabetes.com/yoga/). The source hedges its medical wording —
 * "possibly", "might", "can" — and that hedging is load-bearing. Do not
 * upgrade it to "will", "does" or "proven". Source spellings such as
 * "glucagons" and "nor-adrenalin" are reproduced as published.
 */

export interface YogaImage {
    src: string;
    alt: string;
    width: number;
    height: number;
}

/** Source page title concept, kept alongside the modern display heading. */
export const yogaSourceTitle = 'Online yoga classes';
export const yogaSourceTagline =
    '60 years of Diabetes Care, Research, Education & Training in Diabetes';

export const yogaHeroImage: YogaImage = {
    src: '/images/yoga/yoga-hero.png',
    alt: 'Woman practising a seated yoga pose beside a phone streaming an online yoga class',
    width: 720,
    height: 720,
};

// ============================================================
// WHY DO YOGA IN M V DIABETES?
// ============================================================

export const whyYoga = {
    heading: 'Why Do Yoga in M V Diabetes?',
    marker: 'MIND • BODY • MOVEMENT',
    intro:
        "Yoga is a centuries-old practice, which aims to overall improve the individual's body and mind. Diabetes can be controlled and effectively managed by adopting a healthy lifestyle, exercise, diet, as well as by practicing yoga.",
    /** Presented as a quotation because the source itself sets it in quotes. */
    quote:
        'As everyone knows, glucagons secretion is enhanced by stress. Yoga effectively reduces stress, thus reducing glucagons and possibly improving insulin action. Weight loss induced by Yoga is a well-accepted mechanism. Muscular relaxation, development and improved blood supply to muscles might enhance insulin receptor expression on muscles causing increased glucose uptake by muscles and thus reducing blood sugar.',
    bloodPressure:
        'Blood pressure plays a major role in development of diabetic and related complications, which is proven to be benefited by Yoga. The same holds true for increased cholesterol levels, yoga also reduces arteriosclerosis, and it is even effective in blockade of arteries.',
    stressHormones:
        "Yoga reduces adrenaline, nor-adrenalin and cortisol in blood, which are termed as 'stress hormones'. In this way, patients are benefited by the practice of Yoga.",
};

// ============================================================
// SPECIAL CLASSES — "We have special classes for"
// ============================================================

export const specialClassesHeading = 'We have special classes for';

export const yogaSpecialClasses = [
    { id: 'neck-pain', number: '01', title: 'Neck Pain' },
    { id: 'shoulder-pain', number: '02', title: 'Shoulder Pain' },
    { id: 'back-knee-pain', number: '03', title: 'Back and Knee Pain' },
    { id: 'reduce-belly-fat', number: '04', title: 'Reduce Belly Fat' },
];

// ============================================================
// ALL RANGES
// ============================================================

export const allRanges = {
    heading: 'All Ranges',
    body: "Yoga can further boost patients' well-being and health even though medical interventions play a critical role in treating diabetes.",
    image: {
        src: '/images/yoga/yoga-all-ranges.jpg',
        alt: 'Two people seated on yoga mats during a guided stretching class',
        width: 1300,
        height: 867,
    } as YogaImage,
};

// ============================================================
// CLASS LEVELS — Basic / Advanced
// ============================================================

export const yogaClassLevels = [
    {
        id: 'basic-classes',
        label: 'Basic',
        title: 'Basic Classes',
        body: 'A basic yoga class for diabetes can include gentle stretches, breathing exercises, and relaxation techniques to improve blood sugar control and reduce stress.',
        image: {
            src: '/images/yoga/yoga-basic-class.jpg',
            alt: 'Man practising a seated forward stretch on a yoga mat',
            width: 1300,
            height: 867,
        } as YogaImage,
    },
    {
        id: 'advanced-classes',
        label: 'Advanced',
        title: 'Advanced Classes',
        body: 'Experience a transformative journey towards improved health with advanced yoga practices specifically designed for diabetes management.',
        image: {
            src: '/images/yoga/yoga-advanced-class.jpg',
            alt: 'Group of people practising a standing forward fold in a yoga class',
            width: 1300,
            height: 867,
        } as YogaImage,
    },
];

// ============================================================
// POSES CLASS
// ============================================================

export const posesClass = {
    heading: 'Poses Class',
    body: 'Discover yoga poses beneficial for managing diabetes in our class. Join us to improve your health and well-being naturally.',
    image: {
        src: '/images/yoga/yoga-mandala.jpg',
        alt: 'Illustration of a figure seated in meditation in front of a coloured mandala',
        width: 1600,
        height: 1600,
    } as YogaImage,
};

// ============================================================
// INTEGRATING YOGA AT M.V DIABETICS HOSPITAL
// ============================================================

export const integration = {
    /** Source heading, including its own spelling of "Diabetics". */
    heading: 'Integrating Yoga at M.V Diabetics Hospital',
    paragraphs: [
        'M V Hospital for Diabetes has seamlessly integrated yoga into its healthcare services, ensuring patients receive comprehensive care. The hospital offers dedicated yoga classes led by experienced instructors who understand the specific needs and limitations of individuals with diabetes. These classes focus on gentle asanas, breathing exercises, and guided meditation, creating a safe and supportive environment for patients to practice yoga.',
        "Yoga's ability to improve physical fitness, reduce stress, enhance insulin sensitivity, and strengthen the mind-body connection makes it a valuable tool for individuals with diabetes.",
    ],
    highlights: [
        'Dedicated yoga classes',
        'Experienced instructors',
        'Gentle asanas',
        'Breathing exercises',
        'Guided meditation',
        'Safe and supportive environment',
    ],
};

// ============================================================
// YOGA'S ROLE IN MANAGING DIABETES
// ============================================================

export const rolesIntro = {
    heading: "Yoga's Role in Managing Diabetes",
    body: 'M V Hospital for Diabetes recognizes that yoga is not merely an exercise regimen but a comprehensive mind-body practice. Here are some ways yoga contributes to the management and prevention of diabetes:',
    image: {
        src: '/images/yoga/yoga-woman-cutout.png',
        alt: 'Woman seated cross-legged with her palms joined above her head',
        width: 800,
        height: 1198,
    } as YogaImage,
};

export interface YogaRole {
    id: string;
    number: string;
    title: string;
    body: string;
    icon: string;
}

export const yogaRoles: YogaRole[] = [
    {
        id: 'physical-fitness',
        number: '01',
        title: 'Physical Fitness',
        body: 'The physical benefits are precious for individuals with diabetes, as they can help in maintaining a healthy weight, improving cardiovascular health, and increasing insulin sensitivity.',
        icon: '/images/yoga/icons/yoga-8.png',
    },
    {
        id: 'insulin-sensitivity',
        number: '02',
        title: 'Improved Insulin Sensitivity',
        body: 'Enhanced insulin sensitivity enables better glucose utilization by the body, thus aiding in diabetes management.',
        icon: '/images/yoga/icons/yoga-2.png',
    },
    {
        id: 'mind-body-connection',
        number: '03',
        title: 'Mind-Body Connection',
        body: 'By cultivating mindfulness and self-awareness, individuals with diabetes can better understand their bodies, recognize the early signs of blood sugar imbalances, and make timely adjustments in their management routine.',
        icon: '/images/yoga/icons/yoga-9.png',
    },
    {
        id: 'stress-reduction',
        number: '04',
        title: 'Stress Reduction',
        body: 'Stress has a direct impact on blood sugar levels. Yoga incorporates various relaxation techniques, deep breathing exercises, and meditation, which promote relaxation and reduce stress levels.',
        icon: '/images/yoga/icons/yoga-4.png',
    },
    {
        id: 'enhanced-circulation',
        number: '05',
        title: 'Enhanced Circulation',
        body: 'Yoga postures, combined with controlled breathing, improve blood circulation throughout the body.',
        icon: '/images/yoga/icons/yoga-7.png',
    },
    {
        id: 'better-sleep',
        number: '06',
        title: 'Yoga for Better Sleep',
        body: 'By incorporating yoga into your daily routine, you can create a calming and soothing environment for your mind and body, paving the way for a restful night’s sleep.',
        icon: '/images/yoga/icons/yoga-1.png',
    },
];

// ============================================================
// GET STARTED
// ============================================================

/**
 * The source lists four membership names and no prices, durations, class
 * counts or benefits — only "Free" carries any prose, and that prose is about
 * the hospital's integration of yoga rather than the tier itself, so it runs
 * as the section intro. Nothing here may be padded out with invented detail.
 */
export const getStarted = {
    heading: 'Get Started',
    intro: "We explore how M V Hospital for Diabetes has integrated yoga into its healthcare services, acknowledging its positive impact on patients' lives.",
    buttonLabel: 'Start Now',
    tiers: [
        { id: 'free', title: 'Free', icon: null },
        { id: 'single-classes', title: 'Single Classes', icon: '/images/yoga/icons/yoga-3.png' },
        { id: 'monthly-membership', title: 'Monthly Membership', icon: '/images/yoga/icons/yoga-6.png' },
        { id: 'yearly-membership', title: 'Yearly Membership', icon: '/images/yoga/icons/yoga-5.png' },
    ],
};

/**
 * The source "Start Now" button is a placeholder (href="#") with no
 * destination, so it points at the site's real appointment route rather than
 * an invented booking endpoint.
 */
export const yogaAppointmentHref = '/appointment?service=yoga';
