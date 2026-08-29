export interface Specialty {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    icon: string;
    description: string;
    conditions: string[];
    approach: string;
    relatedSpecialties: string[];
    faqs: { question: string; answer: string }[];
}

export const specialties: Specialty[] = [
    {
        id: 'diabetes-care',
        slug: 'diabetes-care',
        name: 'Diabetes Care',
        shortDescription: 'Comprehensive outpatient and inpatient services for Type 1, Type 2, and gestational diabetes with personalized treatment plans.',
        icon: 'Activity',
        description: 'MV Diabetes provides comprehensive diabetes care covering the full spectrum of diabetes management — from initial diagnosis through advanced complication management. Our multidisciplinary team delivers personalised treatment plans tailored to each patient\'s unique health profile.',
        conditions: ['Type 1 Diabetes', 'Type 2 Diabetes', 'Gestational Diabetes', 'Pre-Diabetes', 'LADA', 'MODY', 'Secondary Diabetes'],
        approach: 'Our approach combines advanced diagnostics, personalised medication management, lifestyle counselling, and regular monitoring to achieve optimal glycaemic control while minimising complications.',
        relatedSpecialties: ['diabetic-foot-care', 'kidney-care', 'nutrition', 'diabetic-eye-care'],
        faqs: [
            { question: 'What types of diabetes do you treat?', answer: 'We treat all types of diabetes including Type 1, Type 2, Gestational Diabetes, Pre-Diabetes, LADA, MODY, and secondary diabetes.' },
            { question: 'How often should I visit for a diabetes review?', answer: 'We recommend a comprehensive review every 3 months, with HbA1c testing and periodic complication screening as advised by your diabetologist.' },
            { question: 'Do you offer insulin pump therapy?', answer: 'Yes, we offer advanced diabetes technologies including insulin pump therapy and continuous glucose monitoring (CGM) with trained specialists.' },
        ],
    },
    {
        id: 'diabetic-foot',
        slug: 'diabetic-foot-care',
        name: 'Diabetic Foot Care',
        shortDescription: 'Advanced limb salvage and amputation prevention. Over 90,000 patients saved from prescribed amputation.',
        icon: 'Footprints',
        description: 'MV Diabetes is India\'s leading centre for diabetic foot care and amputation prevention. Under the leadership of Dr. Vijay Viswanathan, our team has saved over 90,000 patients from prescribed amputation through conservative, limb-saving surgical techniques and comprehensive wound care.',
        conditions: ['Diabetic Foot Ulcers', 'Peripheral Neuropathy', 'Peripheral Vascular Disease', 'Charcot Foot', 'Gangrene', 'Foot Infections', 'Non-Healing Wounds'],
        approach: 'Our approach focuses on limb salvage through multidisciplinary care — combining diabetology, vascular surgery, plastic surgery, wound care, and rehabilitation to save limbs that other centres may prescribe for amputation.',
        relatedSpecialties: ['podiatry', 'diabetes-care'],
        faqs: [
            { question: 'What is amputation prevention?', answer: 'Amputation prevention involves saving diabetic patients\' limbs through conservative surgical techniques, wound care, and vascular interventions — even when amputation has been prescribed elsewhere.' },
            { question: 'How many patients have been saved from amputation?', answer: 'Over 90,000 patients have been saved from prescribed amputation at MV Diabetes through our specialised diabetic foot care program.' },
            { question: 'When should I seek diabetic foot care?', answer: 'Seek immediate care if you notice numbness, tingling, burning, colour changes, swelling, ulcers, or any wound on your foot that is not healing.' },
        ],
    },
    {
        id: 'podiatry',
        slug: 'podiatry',
        name: 'Podiatry',
        shortDescription: 'Specialized foot, ankle, and lower extremity care including corrective procedures, ozone therapy, and magneto therapy.',
        icon: 'HeartPulse',
        description: 'Our podiatry department provides specialised foot, ankle, and lower extremity care for diabetes patients. Services include biomechanical assessment, corrective procedures, therapeutic interventions, and preventive foot care.',
        conditions: ['Foot Deformities', 'Calluses & Corns', 'Ingrown Toenails', 'Plantar Fasciitis', 'Flat Feet', 'Diabetic Foot Complications'],
        approach: 'We combine biomechanical assessment with therapeutic interventions including ozone therapy, magneto therapy, and custom orthotic solutions for comprehensive foot health.',
        relatedSpecialties: ['diabetic-foot-care', 'diabetes-care'],
        faqs: [
            { question: 'What does a podiatrist do?', answer: 'A podiatrist specialises in the diagnosis, treatment, and prevention of foot and lower limb conditions — particularly important for diabetes patients.' },
            { question: 'How often should diabetics see a podiatrist?', answer: 'Diabetes patients should have a podiatric assessment at least once a year, or more frequently if they have existing foot complications.' },
        ],
    },
    {
        id: 'kidney-care',
        slug: 'kidney-care',
        name: 'Kidney Care',
        shortDescription: 'Comprehensive diabetic nephropathy management and kidney health monitoring for diabetes patients.',
        icon: 'Stethoscope',
        description: 'Diabetic nephropathy is one of the most serious complications of diabetes. Our kidney care program provides early detection, monitoring, and management of diabetes-related kidney disease to slow progression and preserve kidney function.',
        conditions: ['Diabetic Nephropathy', 'Chronic Kidney Disease', 'Microalbuminuria', 'Proteinuria', 'Kidney Failure Risk Assessment'],
        approach: 'Early detection through regular urine microalbumin screening combined with blood pressure management, glycaemic control optimisation, and lifestyle modifications to protect kidney function.',
        relatedSpecialties: ['diabetes-care', 'nutrition'],
        faqs: [
            { question: 'How does diabetes affect the kidneys?', answer: 'Prolonged high blood sugar damages the tiny blood vessels in the kidneys, reducing their ability to filter waste. This is called diabetic nephropathy.' },
            { question: 'How early can kidney damage be detected?', answer: 'Early kidney damage can be detected through a urine microalbumin test, which identifies small amounts of protein in the urine before symptoms appear.' },
        ],
    },
    {
        id: 'obesity',
        slug: 'obesity-management',
        name: 'Obesity Management',
        shortDescription: 'Weight management and lifestyle counseling programs designed specifically for individuals with or at risk of diabetes.',
        icon: 'Scale',
        description: 'Obesity is a major risk factor for Type 2 diabetes. Our comprehensive obesity management program combines nutritional counselling, exercise planning, behavioural therapy, and where appropriate, medical interventions to achieve sustainable weight loss.',
        conditions: ['Obesity', 'Overweight', 'Metabolic Syndrome', 'Insulin Resistance'],
        approach: 'Personalised weight management incorporating diet planning, physical activity guidance, behavioural modification, and medical management tailored specifically for people with or at risk of diabetes.',
        relatedSpecialties: ['diabetes-care', 'nutrition', 'yoga'],
        faqs: [
            { question: 'How does obesity relate to diabetes?', answer: 'Obesity is one of the strongest risk factors for Type 2 diabetes. Excess body fat, especially around the abdomen, increases insulin resistance.' },
            { question: 'What weight loss approach do you recommend?', answer: 'We recommend a comprehensive approach combining personalised diet plans, guided exercise, and behavioural changes — tailored for people with or at risk of diabetes.' },
        ],
    },
    {
        id: 'urology',
        slug: 'urology',
        name: 'Urology',
        shortDescription: 'Specialized urological care for diabetes-related complications and conditions.',
        icon: 'Shield',
        description: 'Diabetes can affect urological health in multiple ways. Our urology department provides specialised care for diabetes-related urological complications including urinary tract infections, bladder dysfunction, and kidney stones.',
        conditions: ['Urinary Tract Infections', 'Diabetic Bladder Dysfunction', 'Kidney Stones', 'Erectile Dysfunction'],
        approach: 'Comprehensive urological assessment and treatment integrated with diabetes management for optimal outcomes.',
        relatedSpecialties: ['diabetes-care', 'kidney-care'],
        faqs: [
            { question: 'How does diabetes affect urological health?', answer: 'Diabetes can cause nerve damage affecting bladder function, increase risk of urinary infections, and contribute to kidney stones and other urological complications.' },
        ],
    },
    {
        id: 'nutrition',
        slug: 'nutrition',
        name: 'Nutrition & Dietetics',
        shortDescription: 'Personalized diet planning and nutritional counseling for optimal diabetes management.',
        icon: 'Apple',
        description: 'Nutrition is fundamental to diabetes management. Our qualified nutritionists and dieticians create personalised meal plans that help control blood sugar, manage weight, and reduce complication risks while ensuring balanced, enjoyable eating.',
        conditions: ['Diabetes Diet Planning', 'Weight Management', 'Kidney Diet', 'Gestational Diabetes Diet'],
        approach: 'Individualised meal planning based on your diabetes type, medications, lifestyle, and food preferences — focused on sustainable, practical dietary changes.',
        relatedSpecialties: ['diabetes-care', 'obesity-management'],
        faqs: [
            { question: 'Can diet really help control diabetes?', answer: 'Yes, dietary management is one of the most powerful tools for blood sugar control. The right diet can significantly reduce HbA1c and medication requirements.' },
            { question: 'Do you provide customised meal plans?', answer: 'Yes, our nutritionists create personalised meal plans tailored to your diabetes type, medications, lifestyle, and food preferences.' },
        ],
    },
    {
        id: 'yoga',
        slug: 'yoga',
        name: 'Yoga for Diabetes',
        shortDescription: 'Guided yoga classes designed to improve insulin sensitivity, reduce stress, and support diabetes management.',
        icon: 'Leaf',
        description: 'Our yoga program is specifically designed for diabetes patients. Regular yoga practice has been shown to improve insulin sensitivity, reduce stress hormones, lower blood pressure, and support overall diabetes management.',
        conditions: ['Diabetes Stress Management', 'Insulin Sensitivity', 'Blood Pressure Management', 'General Wellness'],
        approach: 'Guided yoga sessions specifically designed for diabetes patients, focusing on asanas and breathing techniques that improve metabolic health and reduce stress.',
        relatedSpecialties: ['diabetes-care', 'nutrition', 'obesity-management'],
        faqs: [
            { question: 'Is yoga safe for diabetics?', answer: 'Yes, our yoga program is specifically designed for diabetes patients and supervised by trained instructors who understand diabetes management.' },
            { question: 'How often should I attend yoga classes?', answer: 'We recommend attending yoga sessions at least 3 times a week for optimal benefits in diabetes management.' },
        ],
    },
    {
        id: 'eye-care',
        slug: 'diabetic-eye-care',
        name: 'Diabetic Eye Care',
        shortDescription: 'Screening and treatment for diabetic retinopathy and other diabetes-related eye conditions.',
        icon: 'Eye',
        description: 'Diabetic retinopathy is a leading cause of preventable blindness. Our eye care program provides regular screening, early detection, and management of diabetes-related eye conditions to protect your vision.',
        conditions: ['Diabetic Retinopathy', 'Diabetic Macular Edema', 'Cataracts in Diabetes', 'Glaucoma Risk'],
        approach: 'Regular fundus screening combined with timely intervention and coordination with ophthalmology services for advanced treatment when needed.',
        relatedSpecialties: ['diabetes-care'],
        faqs: [
            { question: 'How often should diabetics get an eye check?', answer: 'All diabetes patients should have a comprehensive dilated eye examination at least once a year, or more frequently if retinopathy is detected.' },
            { question: 'Can diabetic eye damage be reversed?', answer: 'Early stages of diabetic retinopathy can be slowed or stabilised with good blood sugar control. Advanced stages may require laser treatment or other interventions.' },
        ],
    },
    {
        id: 'cardiology',
        slug: 'cardiology',
        name: 'Cardiology',
        shortDescription: 'Heart health assessment and care for patients with diabetes-related cardiovascular complications.',
        icon: 'Heart',
        description: 'Diabetes significantly increases the risk of cardiovascular disease. Our cardiology services provide comprehensive cardiac risk assessment, monitoring, and management specifically for diabetes patients.',
        conditions: ['Coronary Artery Disease', 'Heart Failure', 'Hypertension', 'Peripheral Artery Disease', 'Cardiac Arrhythmias'],
        approach: 'Integrated cardiac care with diabetes management — including ECG, echocardiography, cardiac risk assessment, and ongoing monitoring.',
        relatedSpecialties: ['diabetes-care'],
        faqs: [
            { question: 'Why are diabetics at higher risk for heart disease?', answer: 'High blood sugar damages blood vessels and nerves that control the heart, significantly increasing the risk of heart attack, stroke, and other cardiovascular conditions.' },
        ],
    },
    {
        id: 'dental',
        slug: 'dental-care',
        name: 'Dental Care',
        shortDescription: 'Oral health services addressing the connection between diabetes and dental conditions.',
        icon: 'Smile',
        description: 'Diabetes and oral health are closely connected. Our dental care services address the specific oral health challenges faced by diabetes patients, including increased risk of gum disease, infections, and delayed healing.',
        conditions: ['Periodontal Disease', 'Gum Infections', 'Oral Candidiasis', 'Dry Mouth', 'Delayed Healing'],
        approach: 'Preventive and therapeutic dental care integrated with diabetes management for comprehensive oral health.',
        relatedSpecialties: ['diabetes-care'],
        faqs: [
            { question: 'How does diabetes affect dental health?', answer: 'Diabetes reduces your body\'s resistance to infection and slows healing, increasing the risk of gum disease, oral infections, and other dental problems.' },
        ],
    },
    {
        id: 'gastro',
        slug: 'gastrointestinal',
        name: 'Gastrointestinal',
        shortDescription: 'Management of gastrointestinal complications associated with diabetes.',
        icon: 'Pill',
        description: 'Diabetes can affect the gastrointestinal system in various ways. Our GI care addresses diabetes-related digestive complications including gastroparesis, diarrhoea, and liver conditions.',
        conditions: ['Gastroparesis', 'Diabetic Diarrhoea', 'Non-Alcoholic Fatty Liver Disease', 'Digestive Complications'],
        approach: 'Comprehensive GI assessment and management integrated with your diabetes care plan.',
        relatedSpecialties: ['diabetes-care', 'nutrition'],
        faqs: [
            { question: 'What is diabetic gastroparesis?', answer: 'Gastroparesis is a condition where the stomach empties too slowly due to nerve damage from diabetes, causing nausea, bloating, and unpredictable blood sugar levels.' },
        ],
    },
];

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
    return specialties.find((s) => s.slug === slug);
}
