export interface NewsGalleryImage {
    src: string;
    alt: string;
}

export interface NewsEvent {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    year: number;
    date: string;
    category: string;
    sourceUrl?: string;
    image: {
        src: string;
        alt: string;
        status: 'available' | 'missing' | 'needs-review';
    };
    /** Additional event photos pulled from the original article body. */
    gallery?: NewsGalleryImage[];
    featured: boolean;
}

export const newsEvents: NewsEvent[] = [
    {
        "id": "news-22474",
        "slug": "diaconnect26-unite-learn-thrive",
        "title": "DiaConnect’26 – Unite.Learn.Thrive",
        "excerpt": "A day filled with smiles, shared experiences, learning, laughter and beautiful memories. From meaningful conversations to amazing talents, every moment reminded us that we’re stronger…",
        "content": "A day filled with smiles, shared experiences, learning, laughter and beautiful memories. From meaningful conversations to amazing talents, every moment reminded us that we’re stronger together.\n\nHere’s to celebrating the journey, spreading awareness and creating memories that last beyond the day.\n\nEvent Details:\n\n‘Diabetes brain battle’ by Mrs. Uma and Mrs. Jayashree\n\n‘Beyond blood sugar’ by Mr. Balamurugan\n\n‘Mind matters’ by Mrs. Manjula\n\n‘Myth or facts’ by Dr. Abhishek\n\n‘The future of diabetes care’ by Dr.Leela\n\nExercise demonstration by Mr. Khan Pump demonstration by Mrs. Priya ( Medtronics ) Craft and create by Ms. Vansika",
        "year": 2026,
        "date": "2026-08-26",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/diaconnect26-unite-learn-thrive/",
        "image": {
            "src": "/images/news/diaconnect26-unite-learn-thrive.jpg",
            "alt": "DiaConnect’26 – Unite.Learn.Thrive",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-1.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.42 PM"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-2.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.43 PM (1)"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-3.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.43 PM (2)"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-4.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.43 PM"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-5.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.44 PM (1)"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-6.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.44 PM"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-7.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.45 PM (1)"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-8.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.45 PM (2)"
            },
            {
                "src": "/images/news/diaconnect26-unite-learn-thrive-9.jpg",
                "alt": "WhatsApp Image 2026-08-25 at 6.29.45 PM"
            }
        ],
        "featured": true
    },
    {
        "id": "news-17954",
        "slug": "39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations",
        "title": "39th Prof.M.Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations",
        "excerpt": "The 39th Prof. M. Viswanathan Gold Medal Oration, organised by M.V. Diabetes and the Prof. M. Viswanathan Diabetes Research Centre in Royapuram, Chennai, featured Prof. Dr.",
        "content": "The 39th Prof. M. Viswanathan Gold Medal Oration, organised by M.V. Diabetes and the Prof. M. Viswanathan Diabetes Research Centre in Royapuram, Chennai, featured Prof. Dr. Frances Game. Clinical Director of R&D at the University Hospitals of Derby and Burton, NHS Foundation Trust, England delivering an insightful address on eliminating preventable amputations worldwide and the latest clinical evidence. Dr. K. Narayanasamy. Vice Chancellor of The Tamil Nadu Dr. MGR Medical University graced the event as the chief guest. Dr. Vijay Viswanathan, Head and Chief Physician of M.V. Diabetes and the Prof. M. Viswanathan Diabetes Research Centre,Royapuram, Chennai, and Dr. S. N. Narasingan, Dean & Dr. jayashree Gopal, Associate Dean of Prof. M Viswanathan Diabetes Research Center, were among the dignitaries who took part in the event.\n\nThe event also witnessed the launch of a white paper on diabetes care, developed by the Research Society for the Study of Diabetes in India (RSSDI), outlining strategic action plans for India. RSSDI is the worlds largest organisation dedicated to diabetes care, comprising 12,000 members across 23 chapters. Dr. Vijay Viswanathan currently serves as its National President. M.V. Diabetes has also conducted the Second School of Podiatry across North Chennai, South Chennai, and Bengaluru from March 20 to 22, 2025.\n\nIn his address, Dr. Vijay Viswanathan emphasised that the oration and the launch of the white paper mark a significant milestone in raising awareness about global best practices in diabetes care in India. He highlighted that greater awareness, coupled with proper training, can help prevent many unnecessary amputations. India has unfortunately earned the dubious distinction of being the diabetes capital of the world, with over 10% of its population affected. Ac-cording to estimates by the Indian Council of Medical Research (ICMR), India has 101 million people living with diabetes. However, for every diagnosed case, another remains undetected. In Tamil Nadu, the prevalence of diabetes is approximately 15-18% in urban areas and 6-8% in rural regions, he noted.",
        "year": 2025,
        "date": "2025-04-02",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations/",
        "image": {
            "src": "/images/news/39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations.png",
            "alt": "39th Prof.M.Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations",
            "status": "available"
        },
        "gallery": [],
        "featured": true
    },
    {
        "id": "news-17937",
        "slug": "mv-diabetes-free-diabetic-camp-health-blessings-adyar",
        "title": "MV Diabetes Free Diabetic Camp Health & Blessings, Adyar",
        "excerpt": "MV Diabetes Free Diabetic Medical Camp at Sri Padmanabhaswamy Temple invites you on Saturday, 29th March 2025, from 8:00 AM to 6:00 PM.",
        "content": "MV Diabetes Free Diabetic Medical Camp at Sri Padmanabhaswamy Temple invites you on Saturday, 29th March 2025, from 8:00 AM to 6:00 PM. Receive expert diabetes care while experiencing divine blessings and serene spirituality.",
        "year": 2025,
        "date": "2025-03-29",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-free-diabetic-camp-health-blessings-adyar/",
        "image": {
            "src": "/images/news/mv-diabetes-free-diabetic-camp-health-blessings-adyar.png",
            "alt": "MV Diabetes Free Diabetic Camp Health & Blessings, Adyar",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-free-diabetic-camp-health-blessings-adyar-1.png",
                "alt": "Adyar Camp (1)"
            },
            {
                "src": "/images/news/mv-diabetes-free-diabetic-camp-health-blessings-adyar-2.png",
                "alt": "Adyar Camp (3)"
            },
            {
                "src": "/images/news/mv-diabetes-free-diabetic-camp-health-blessings-adyar-3.png",
                "alt": "Adyar Camp (4)"
            },
            {
                "src": "/images/news/mv-diabetes-free-diabetic-camp-health-blessings-adyar-4.png",
                "alt": "Adyar Camp"
            }
        ],
        "featured": true
    },
    {
        "id": "news-17891",
        "slug": "free-diabetes-awareness-camp-in-bangalore",
        "title": "Free Diabetes Awareness Camp in Bangalore",
        "excerpt": "Join MV Diabetes for a Free Diabetes Awareness Camp designed to promote health and prevent diabetes.",
        "content": "Join MV Diabetes for a Free Diabetes Awareness Camp designed to promote health and prevent diabetes.\n\n## 📅 Event Details:\n\nDate: Friday, 28th February 2025\n\nTime: 7:00 AM to 12:00 PM\n\nVenue: Ganapathi Seva Samithi, 20th Main, Ganapathi Temple Road, KHB Colony, Koramangala, Bangalore - 95\n\nContact: 25532568\n\n## 🩺 Free Services Offered:\n\nBlood Sugar Check\n\nBlood Pressure & Weight Monitoring\n\nMonofilament Test for Neuropathy\n\nCPR Demonstration\n\nTalk on Diabetes Prevention\n\nFoot Care & Ulcer Prevention Advice\n\n## 🌿 Why Attend?\n\n## Early detection and prevention tips\n\nExpert health advice\n\nPractical diabetes management guidance",
        "year": 2025,
        "date": "2025-02-28",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/free-diabetes-awareness-camp-in-bangalore/",
        "image": {
            "src": "/images/news/free-diabetes-awareness-camp-in-bangalore.jpg",
            "alt": "Free Diabetes Awareness Camp in Bangalore",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-1.jpg",
                "alt": "IMG-20250326-WA0025"
            },
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-2.jpg",
                "alt": "IMG-20250326-WA0024"
            },
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-3.jpg",
                "alt": "IMG-20250326-WA0022"
            },
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-4.jpg",
                "alt": "IMG-20250326-WA0023"
            },
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-5.jpg",
                "alt": "IMG-20250326-WA0021"
            },
            {
                "src": "/images/news/free-diabetes-awareness-camp-in-bangalore-6.jpg",
                "alt": "IMG-20250326-WA0026"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17919",
        "slug": "sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025",
        "title": "Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025",
        "excerpt": "During the World Congress of Nephrology 2025, held at Yashobhoomi, Delhi, from February 6 to 9, a research poster was presented focusing on the prevalence of sarcopenia among…",
        "content": "During the World Congress of Nephrology 2025, held at Yashobhoomi, Delhi, from February 6 to 9, a research poster was presented focusing on the prevalence of sarcopenia among individuals with Type 2 diabetes and Chronic Kidney Disease. The study explored the significant impact of muscle loss in this patient population, shedding light on the intricate relationship between diabetes, kidney function, and muscle health. The findings emphasized the need for early detection, targeted interventions, and multidisciplinary management approaches to improve patient outcomes and quality of life.",
        "year": 2025,
        "date": "2025-02-28",
        "category": "Conference",
        "sourceUrl": "https://mvdiabetes.com/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025/",
        "image": {
            "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025.jpg",
            "alt": "Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-1.jpg",
                "alt": "03"
            },
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-2.jpg",
                "alt": "01"
            },
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-3.jpg",
                "alt": "06"
            },
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-4.jpg",
                "alt": "04"
            },
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-5.jpg",
                "alt": "05"
            },
            {
                "src": "/images/news/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025-6.jpg",
                "alt": "02"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17643",
        "slug": "nurse-training-diabetes-care",
        "title": "Empowering Our Nurses with Expert Diabetes Training",
        "excerpt": "Our nursing team recently completed an in-depth training session led by Ms. Jayashree, our Senior Diabetes Educator.",
        "content": "Our nursing team recently completed an in-depth training session led by Ms. Jayashree, our Senior Diabetes Educator. This valuable session equipped our nurses with advanced knowledge and practical skills to provide exceptional care for diabetes patients. We're committed to continuously enhancing the quality of care at MV Diabetes Hospital!",
        "year": 2025,
        "date": "2025-02-06",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/nurse-training-diabetes-care/",
        "image": {
            "src": "/images/news/nurse-training-diabetes-care.jpg",
            "alt": "Empowering Our Nurses with Expert Diabetes Training",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/nurse-training-diabetes-care-1.jpg",
                "alt": "Empowering Our Nurses with Expert Diabetes Training"
            },
            {
                "src": "/images/news/nurse-training-diabetes-care-2.jpg",
                "alt": "Empowering Our Nurses with Expert Diabetes Training"
            },
            {
                "src": "/images/news/nurse-training-diabetes-care-3.jpg",
                "alt": "Empowering Our Nurses with Expert Diabetes Training"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17590",
        "slug": "diabetes-camp-koramangala-jan-2025",
        "title": "Diabetes Screening Camp | MV Diabetes Hospital Koramangala",
        "excerpt": "At MV Diabetes Hospital, we are dedicated to bringing quality diabetes care to your community! On 26th January 2025 (Sunday), we successfully conducted a Medical Camp for Diabetes at…",
        "content": "At MV Diabetes Hospital, we are dedicated to bringing quality diabetes care to your community! On 26th January 2025 (Sunday), we successfully conducted a Medical Camp for Diabetes at St. Patrick's Church, Bengaluru, Karnataka.\n\nServices Provided:\n\n✅ Free Blood Sugar & BP Checkups\n\n✅ Doctor Consultation & Diabetes Screening\n\n✅ Nutritional & Lifestyle Counseling\n\n✅ Awareness on Diabetes Prevention & Management\n\nEvent Details:\n\n📅 Date: 26th January 2025 (Sunday)\n\n📍 Location: St. Patrick's Church, Bengaluru, Karnataka\n\n🕖 Time: 07:00 AM - 12:30 PM\n\nWe extend our heartfelt gratitude to everyone who participated. Your health is our top priority, and we are committed to providing expert care for diabetes management. Stay connected for more health awareness events!\n\n💙 Your Health, Our Priority!\n\n📞 Contact us for more details: M.V Centre of Diabetes Koramangala Branch No.746, NPR Building, 3rd Floor, 80 Feet Road, Koramangala 4th Block, Bengaluru - 560 034.\n\nCall: 080 - 4151 3333 / 080 - 4146 8686",
        "year": 2025,
        "date": "2025-01-26",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-koramangala-jan-2025/",
        "image": {
            "src": "/images/news/diabetes-camp-koramangala-jan-2025.png",
            "alt": "Diabetes Screening Camp | MV Diabetes Hospital Koramangala",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-1.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            },
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-2.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            },
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-3.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            },
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-4.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            },
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-5.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            },
            {
                "src": "/images/news/diabetes-camp-koramangala-jan-2025-6.jpg",
                "alt": "Medical Camp for Diabetes - Koramangala"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17602",
        "slug": "diabetes-camp-adyar-jan-2025",
        "title": "Medical Camp for Diabetes | MV Diabetes Hospital Adyar",
        "excerpt": "We are proud to have successfully conducted a Medical Camp for Diabetes at Varasiddhi Vinayagar Temple, Besant Nagar, Chennai. on 24th January 2025 (Friday).",
        "content": "We are proud to have successfully conducted a Medical Camp for Diabetes at Varasiddhi Vinayagar Temple, Besant Nagar, Chennai. on 24th January 2025 (Friday).\n\nServices Provided:\n\n✅ Free Blood Sugar & BP Checkups\n\n✅ Doctor Consultation & Diabetes Screening\n\n✅ Nutritional & Lifestyle Counseling\n\n✅ Awareness on Diabetes Prevention & Management\n\nEvent Details:\n\n📅 Date: 24th January 2025 (Friday)\n\n📍 Location: Varasiddhi Vinayagar Temple, Besant Nagar, Chennai\n\n🕘 Morning: 08:00 AM - 11:30 AM\n\n🌇 Evening: 04:00 PM - 07:00 PM\n\nThank you to all the participants who took a step towards better diabetes management and prevention. We remain committed to empowering communities with the right knowledge and medical care. Stay tuned for more such initiatives!\n\n💙 Your Health, Our Priority!\n\n📞 Contact us for more details: M.V Centre of Diabetes Adyar Branch Sreela Terrace, No.105, 3rd Floor, 1st Main Road, Gandhi Nagar, Adyar, Chennai- 600 020 (Opp. Adyar Flyover) Call: 044 - 2442 5213 / 2442 5214",
        "year": 2025,
        "date": "2025-01-24",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-adyar-jan-2025/",
        "image": {
            "src": "/images/news/diabetes-camp-adyar-jan-2025.png",
            "alt": "Medical Camp for Diabetes | MV Diabetes Hospital Adyar",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-1.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            },
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-2.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            },
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-3.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            },
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-4.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            },
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-5.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            },
            {
                "src": "/images/news/diabetes-camp-adyar-jan-2025-6.jpg",
                "alt": "Medical Camp for Diabetes - Adyar"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17577",
        "slug": "diabetes-camp-ramapuram-jan-2025",
        "title": "Medical Camp for Diabetes | MV Diabetes Hospital Ramapuram",
        "excerpt": "We are delighted to have successfully conducted a Medical Camp for Diabetes at Esplanade Apartments, Tondiarpet, Chennai. on 12th January 2025 (Sunday).",
        "content": "We are delighted to have successfully conducted a Medical Camp for Diabetes at Esplanade Apartments, Tondiarpet, Chennai. on 12th January 2025 (Sunday).\n\nServices Provided:\n\n✅ Free Blood Sugar & BP Checkups\n\n✅ Doctor Consultation & Diabetes Screening\n\n✅ Nutritional & Lifestyle Counseling\n\n✅ Awareness on Diabetes Prevention & Management\n\nEvent Details:\n\n📅 Date: 12th January 2025 (Sunday)\n\n📍 Location: Esplanade Apartments, Vaithyanathan Street, Tondiarpet, Chennai\n\n🕘 Time: 09:00 AM - 01:30 PM\n\nA big thank you to all the participants for making this camp a success! Early detection and timely management are key to a healthier life. Stay tuned for more upcoming health camps.\n\n💙 Your Health, Our Priority!\n\n📞 Contact us for more details: M.V. Hospital for Diabetes & Prof. M. Viswanathan Diabetes Research Centre. No.4, West Madha Church Street, Royapuram, Chennai - 600 013. Tamil Nadu, India. Call: 044 - 2595 4913 / 2595 4914 / 2595 4915 / 2595 0711",
        "year": 2025,
        "date": "2025-01-12",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-ramapuram-jan-2025/",
        "image": {
            "src": "/images/news/diabetes-camp-ramapuram-jan-2025.png",
            "alt": "Medical Camp for Diabetes | MV Diabetes Hospital Ramapuram",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-1.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-2.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-3.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-4.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-5.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-6.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            },
            {
                "src": "/images/news/diabetes-camp-ramapuram-jan-2025-7.jpg",
                "alt": "Medical Camp for Diabetes - Royapuram"
            }
        ],
        "featured": false
    },
    {
        "id": "news-17047",
        "slug": "record-breaking-student-yoga-event-raises-diabetes-awareness",
        "title": "Record-Breaking Student Yoga Event Raises Diabetes Awareness",
        "excerpt": "Dr. Vijay Viswanathan of Tamil Nadu, India, set the record for the maximum number of students performing therapeutic yoga asanas to raise diabetes awareness.",
        "content": "Dr. Vijay Viswanathan of Tamil Nadu, India, set the record for the maximum number of students performing therapeutic yoga asanas to raise diabetes awareness. A total of 1011 students performed therapeutic yoga asanas to promote diabetes prevention and healthy living. This initiative aligns with Dr. Vijay Viswanathan’s mission, as the Managing Director & Chief Physician of M.V. Hospital for Diabetes, to instill healthy habits among the younger generation, as confirmed on November 10, 2024.\n\nSource By: Asia Book of Records",
        "year": 2024,
        "date": "2024-11-12",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/record-breaking-student-yoga-event-raises-diabetes-awareness/",
        "image": {
            "src": "/images/news/record-breaking-student-yoga-event-raises-diabetes-awareness.webp",
            "alt": "Record-Breaking Student Yoga Event Raises Diabetes Awareness",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/record-breaking-student-yoga-event-raises-diabetes-awareness-1.png",
                "alt": "MV Diabetes Record-Breaking Student Yoga Event Raises Diabetes Awareness"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16940",
        "slug": "mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care",
        "title": "MV Diabetes’s School of Podiatry to train doctors, paramedics in foot care",
        "excerpt": "MV Diabetes, in collaboration with the Academy of Physicians in Wound Healing from the U.S., is launching a one-of-a-kind School of Podiatry.",
        "content": "MV Diabetes, in collaboration with the Academy of Physicians in Wound Healing from the U.S., is launching a one-of-a-kind School of Podiatry.\n\nThe School, operating under the banner of Diabetic Foot Research India, will provide training for doctors and paramedics on podiatry skills, including nail care and comprehensive diabetic foot care practices currently utilised at MV Diabetes, Royapuram.\n\nAccording to Vijay Viswanathan, chief physician at MV Diabetes, India has 101.4 million people living with diabetes, with Tamil Nadu alone accounting for 7 to 8 million. One serious complication of diabetes is foot problems, which can lead to severe outcomes, including amputations.\n\n\"Foot ulcers are common and can be particularly costly to treat due to their recurring nature, making them more expensive than treatments for complications like retinopathy or kidney transplants. So, preventive care is crucial for avoiding foot complications in diabetic patients,\" says Dr. Viswanathan. He stressed the importance of accessible and customised footwear for patients.\n\nThe inaugural training session to be conducted from Wednesday to Friday will host 25 physicians including a couple of paramedics, from across Tamil Nadu. The three-day course will provide participants with six credits from the Tamil Nadu Medical Council. The curriculum will cover the fundamentals of diabetes, diabetic foot care, surgical interventions for foot issues, and the latest treatment advancements in diabetes management. Antony Irio, Adjunct Professor, New York College of Podiatric Medicine, is one of the faculty in the first programme.\n\nSource By: The Hindu",
        "year": 2024,
        "date": "2024-10-25",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care/",
        "image": {
            "src": "/images/news/mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care.png",
            "alt": "MV Diabetes’s School of Podiatry to train doctors, paramedics in foot care",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care-1.jpg",
                "alt": "MV Diabetes - MV Diabetes's School of Podiatry to train doctors, paramedics in foot care"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16477",
        "slug": "save-the-feet-keep-walking",
        "title": "Save the Feet – Keep Walking",
        "excerpt": "The Save the Feet and Keep Walking campaign all over India involving 54000 patients was published in the British Medical Journal.",
        "content": "The Save the Feet and Keep Walking campaign all over India involving 54000 patients was published in the British Medical Journal.\n\nThis study was conducted by the RSSDI and led by Dr Vijay Viswanathan and the team from MV Diabetes\n\nSource By: The Times Of India",
        "year": 2024,
        "date": "2024-08-12",
        "category": "Publication",
        "sourceUrl": "https://mvdiabetes.com/save-the-feet-keep-walking/",
        "image": {
            "src": "/images/news/save-the-feet-keep-walking.png",
            "alt": "Save the Feet – Keep Walking",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/save-the-feet-keep-walking-1.jpg",
                "alt": "MV Diabetes Save The Feet - Keep Walking"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15833",
        "slug": "dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram",
        "title": "Dr. Vishnu Vijay’s Affordable Diabetic Footwear Innovation at MV Diabetes, Royapuram",
        "excerpt": "Sowing the Seeds of Social Change at MV Diabetes, Royapuram: Dr. Viswanathan Vishnu Vijay Innovates Low Cost Footwear for Diabetic Patients",
        "content": "Sowing the Seeds of Social Change at MV Diabetes, Royapuram: Dr. Viswanathan Vishnu Vijay Innovates Low Cost Footwear for Diabetic Patients\n\nSource By: Daily Thanthi",
        "year": 2024,
        "date": "2024-07-06",
        "category": "News",
        "sourceUrl": "https://mvdiabetes.com/dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram/",
        "image": {
            "src": "/images/news/dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram.png",
            "alt": "Dr. Vishnu Vijay’s Affordable Diabetic Footwear Innovation at MV Diabetes, Royapuram",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram-1.jpg",
                "alt": "Affordable Diabetic Footwear by Dr. Vishnu Vijay at MV Diabetes"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15271",
        "slug": "m-v-publications-2024",
        "title": "M V Publications – 2024",
        "excerpt": "1. New-Onset Diabetes Mellitus in COVID-19: A Scoping Review.Pantea Stoian A, Bica IC, Salmen T, Al Mahmeed W, Al-Rasadi K, Al-Alawi K, Banach M, Banerjee Y, Ceriello A, Cesur M,…",
        "content": "1. New-Onset Diabetes Mellitus in COVID-19: A Scoping Review.Pantea Stoian A, Bica IC, Salmen T, Al Mahmeed W, Al-Rasadi K, Al-Alawi K, Banach M, Banerjee Y, Ceriello A, Cesur M, Cosentino F, Firenze A, Galia M, Goh SY, Janez A, Kalra S, Kapoor N, Kempler P, Lessan N, Lotufo P, Mikhailidis DP, Nibali L, Papanas N, Powell-Wiley T, Rizvi AA, Sahebkar A, Santos RD, Toth PP, Viswanathan V, Rizzo M; Cardiometabolic Panel of International Experts on Syndemic COVID-19 (CAPISCO).Diabetes Ther. 2024 Jan;15(1):33-60. doi: 10.1007/s13300-023-01465-7. Epub 2023 Sep 26.PMID: 37751143\n\n2. Correction to: New-Onset Diabetes Mellitus in COVID-19: A Scoping Review.Pantea Stoian A, Bica IC, Salmen T, Al Mahmeed W, Al-Rasadi K, Al-Alawi K, Banach M, Banerjee Y, Ceriello A, Cesur M, Cosentino F, Firenze A, Galia M, Goh SY, Janez A, Kalra S, Kapoor N, Kempler P, Lessan N, Lotufo P, Mikhailidis DP, Nibali L, Papanas N, Powell-Wiley T, Rizvi AA, Sahebkar A, Santos RD, Toth PP, Viswanathan V, Rizzo M; Cardiometabolic Panel of International Experts on Syndemic COVID-19 (CAPISCO).Diabetes Ther. 2024 Jan;15(1):297-299. doi: 10.1007/s13300-023-01494-2.PMID: 37964156\n\n3. The sound of silent RNA in tuberculosis and the lncRNA role on infection.Rocha EF, Vinhaes CL, Araújo-Pereira M, Mota TF, Gupte AN, Kumar NP, Arriaga MB, Sterling TR, Babu S, Gaikwad S, Karyakarte R, Mave V, Kulkarni V, Paradkar M, Viswanathan V, Kornfeld H, Gupta A, Andrade BB, Queiroz ATL; RePORT Brazil; RePORT India Consortia.iScience. 2023 Dec 8;27(1):108662. doi: 10.1016/j.isci.2023.108662. eCollection 2024 Jan 19.PMID: 38205253\n\n4. Imperatorin from the aerial parts of Cleome viscosa L.: a characterization study and evaluation of the antibacterial activity.Lakshmanan G, Altemimi AB, Sivaraj C, Selvakumari J, Karthik L, Saravanan K, Viswanathan V, Pandian A, Cacciola F, Rashad Ali M, Najm MAA, Gamal Abedelmaksoud T.Nat Prod Res. 2024 Feb-Mar;38(5):848-855. doi: 10.1080/14786419.2023.2190116. Epub 2023 Mar 28.PMID: 36987594\n\n5. Effectiveness of interventions to enhance healing of chronic foot ulcers in diabetes: A systematic review.Chen P, Vilorio NC, Dhatariya K, Jeffcoate W, Lobmann R, McIntosh C, Piaggesi A, Steinberg J, Vas P, Viswanathan V, Wu S, Game F.Diabetes Metab Res Rev. 2024 Mar;40(3):e3786. doi: 10.1002/dmrr.3786.PMID: 38507616\n\n6. Advancing the understanding and management of diabetic peripheral neuropathy Vijay Viswanathan · Reshma Mirshad. International Journal of Diabetes in Developing Countries (January–March 2024) 44(1):1–2\n\n7. A Clinical Study to Evaluate Auto fluorescence Imaging of Diabetic Foot Ulcers Using a Novel Artificial Intelligence Enabled Noninvasive Device.Viswanathan V, Govindan S, Selvaraj B, Rupert S, Kumar R.Int J Low Extrem Wounds. 2024 Mar;23(1):169-176. doi: 10.1177/15347346211047098. PMID: 34617810\n\n8. Prevention of Diabetes from prediabetes in real world setting in South India. Author links open overlay panel Vijay Viswanathan MD, PhD, FICP, FRCP (London), FRCP (Glasgow), Premalatha Murugan M.Sc (Research Associate), Satyavani Kumpatla PhD (Senior Research Scientist), Rizwana Parveen M.Sc (Research Associate), Arutselvi Devarajan PhD (Research Scientist)M.V. Hospital for Diabetes and Prof. M. Viswanathan Diabetes Research Centre (IDF centre for Excellence in Diabetes care), Royapuram, Chennai, Tamil Nadu, IndiaReceived 4 February 2023, Revised 9 May 2024, Accepted 15 May 2024, Available online 17 May 2024.\n\n9. Guidelines on offloading foot ulcers in persons with diabetes (IWGDF 2023 update). Bus SA, Armstrong DG, Crews RT, Gooday C, Jarl G, Kirketerp-Moller K, Viswanathan V, Lazzarini PA. Diabetes Metab Res Rev. 2024 Mar;40(3):e3647. doi: 10.1002/dmrr.3647. Epub 2023 May 25.PMID: 37226568\n\n10. RSSDI endorses the IDF Position Statement on 1 h post load plasma glucose for diagnosis of intermediate hyperglycemia and type 2 diabetes Rakesh Sahay Viswanathan Mohan B. M. Makkar, Review Article, IJDDC.09 May 2024, Vol-44,Pages: 216 – 219.\n\n11. Undernourished Household Contacts Are at Increased Risk of Tuberculosis (TB) Disease, but not TB Infection- a Multicenter Prospective Cohort Analysis.Sinha P, Ezhumalai K, Du X, Ponnuraja C, Dauphinais MR, Gupte N, Sarkar S, Gupta A, Gaikwad S, Thangakunam B, Paradkar M, Christopher DJ, Mave V, Viswanathan V, Ellner JJ, Kornfeld H, Horsburgh CR Jr, Padmapriyadarsini C, Gupte A.Clin Infect Dis. 2024 Apr 23:ciae149. doi: 10.1093/cid/ciae149. Online ahead of print.PMID: 38652286\n\n12. IDF23-0411 Understanding the Link: Hypertension Awareness and Behavior Among Type 2 Diabetes Mellitus Patients S.S. Dariyaa, A. Maheshwarib, V. Viswanathanc, A.K. Virmanid, M. Aslame, A. Kediaf, A. Saxenag, L. Sreenivasamurthyh, B. Patnii, A. Modij, A. Chaturvedik, A. Jagadeesha (Correspondent Author)\n\n## Book Chapter:\n\n1. Chapter 12 - Role of inflammation in the pathogenesis of metabolic syndrome Author links open overlay panel Vijay Viswanathan, Reshma Mirshad, Metabolic Syndrome From Mechanisms to Interventions 2024, Pages 137-141. Available online 17 November 2023, Version of Record 17 November 2023 (Book Chapter)\n\n2. Prediabetes Prediction Using Response Surface Methodology and Probabilistic Neural Networks Model in an Ethnic South Indian Population. Raja Das, Shree G B Bakhya, Vijay Viswanathan, Radha Saraswathy & K.MadhusudhanReddy. Computational Intelligence in Healthcare Informatics (Book Chapter) First Online: 22 February 2024: pg- 75-91.",
        "year": 2024,
        "date": "2024-05-27",
        "category": "Publication",
        "sourceUrl": "https://mvdiabetes.com/m-v-publications-2024/",
        "image": {
            "src": "/images/news/m-v-publications-2024.png",
            "alt": "M V Publications – 2024",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15265",
        "slug": "2023-publications-index-april-to-dec",
        "title": "2023 Publications Index (April to Dec)",
        "excerpt": "1. The Diabetic Crisis in India: Understanding and preventing Diabetic foot Complications. Ms.Bamila Delvaraj, Ms.Seena Rajsekar & Dr.G. Senthil, TAPIJ, Vol-2(2); April-June 2023.",
        "content": "1. The Diabetic Crisis in India: Understanding and preventing Diabetic foot Complications. Ms.Bamila Delvaraj, Ms.Seena Rajsekar & Dr.G. Senthil, TAPIJ, Vol-2(2); April-June 2023.\n\n2. Neutrophilderived IL-17 limits protective host responses and promotes tuberculosis pathogenesis Priya Sharma, Raman Deep Sharma, Mrinmoy Das, Binayak Sarkar, Lakshyaveer Singh, Neharika Jain, Shivam Chaturvedi, Lalita Mehra, Aditya Rathee, Shilpa Sharma, Shihui Foo, Andrea Lee, N Pavan Kumar, Prasenjit Das, Vijay Viswanathan, Hardy Kornfeld, Shanshan W. Howlan, Subash Babu, Vinay Nandicoori, Amit Singhal, Dhiraj Kumar doi: https://doi.org/10.1101/2023.10.05.561061\n\n3. A Pharmaceutical Paradigm for Cardiovascular Composite Risk Assessment Using Novel Radiogenomics Risk Predictors in Precision Explainable Artificial Intelligence Framework: Clinical Trial Tool. Saba L, Maindarkar M, Khanna NN, Johri AM, Mantella L, Laird JR, Paraskevas KI, Ruzsa Z, Kalra MK, Fernandes JFE, Chaturvedi S, Nicolaides A, Rathore V, Singh N, Fouda MM, Isenovic ER, Al-Maini M, Viswanathan V, Suri JS. Front Biosci (Landmark Ed). 2023 Oct 19;28(10):248. doi: 10.31083/j.fbl2810248. PMID: 37919080\n\n4. Prof. M. Viswanathan: The pride of Asia in diabetology. Satyavani Kumpatla, Vijay Viswanathan, Ambady Ramachandran, Viswanathan Mohan. Journal of Diabetology. 14:S2-S4, November 2023.\n\n5. Polygenic Risk Score for Cardiovascular Diseases in Artificial Intelligence Paradigm: A Review. Khanna NN, Singh M, Maindarkar M, Kumar A, Johri AM, Mentella L, Laird JR, Paraskevas KI, Ruzsa Z, Singh N, Kalra MK, Fernandes JFE, Chaturvedi S, Nicolaides A, Rathore V, Singh I, Teji JS, Al-Maini M, Isenovic ER, Viswanathan V, Khanna P, Fouda MM, Saba L, Suri JS.J Korean Med Sci. 2023 Nov 27;38(46):e395. doi: 10.3346/jkms.2023.38.e395.PMID: 38013648\n\n6. Impact of Baseline Nutritional Status on Tuberculosis Severity in India: a multicenter prospective cohort analysis. Xinyi Du, MPH; Chinnaiyan Ponnuraja, PhD; Nikhil Gupte, PhD; Sonali Sarkar, MBBS, MD; Amita Gupta, MD; Devasahayam J. Christopher, DNB, FRCP; Hardy Kornfeld, MD; Vijay Viswanathan, MBBS, MD; Jerrold Ellner, MD; C. Robert Horsburgh Jr., MD; Chandrasekaran Padmapriyadarsini, MBBS, PhD; Pranay Sinha, MD. 1 Boston Medical Center, Boston, MA; 2 Indian Council of Medical Research, National Institute for Research in Tuberculosis, Chennai, Tamil Nadu, India; 3 Johns Hopkins University, Pune, Maharashtra, India; 4 Jawaharlal Institute of Postgraduate Medical Education and Research, Puducherry, Puducherry, India; 5 Johns Hopkins, Baltimore, MD; 6 Christian Medical College, Vellore, Ranipet district, Tamil Nadu, India; 7 Department of Medicine, University of Massachusetts Chan Medical School, Worcester, Massachusetts; 8 Prof. M. Viswanathan Diabetes Research Centre, Chennai, Tamil Nadu, India; 9 Center for Emerging Pathogens, Department of Medicine, New Jersey Medical School, Rutgers Biomedical and Health Sciences, Newark, New Jersey; 10 Boston University, Boston, Massachusetts. November 2023. Open Forum Infectious Diseases 10 (Supplement_2).\n\n7. The sound of silent RNA in Tuberculosis and the lncRNA role on infection. Eduardo Fukutani Rocha, Caian L. Vinhaes, Mariana Araújo-Pereira, Tiago Feitosa Mota, Akshay N. Gupte, Nathella Pavan Kumar, Maria Belen Arriaga, Timothy R. Sterling, Subash Babu, Sanjay Gaikwad, Rajesh Karyakarte, Vidya Mave, Vandana Kulkarni, Mandar Paradkar, Vijay Viswanathan, Hardy Kornfeld, Amita Gupta, Bruno Bezerril Andrade, Artur Trancoso Lopo de Queiroz, RePORT Brazil, RePORT India Consortia. Available online 8 December 2023, 108662. https://doi.org/10.1016/j.isci.2023.108662\n\n## Book Chapter:\n\n8. Epidemiology of Diabetic Foot Infection in India. Vijay Viswanathan, Sivashankari SelvaElavarasan. RSSDI Altas of Diabetic Foot, Book Chapter 1; pg: 1-5; 2023.\n\n9. Save the Feet and Keep Walking Campaign by the RSSDI. Sanjay Agarwal, Ch Vasanth Kumar, Amith Gupta, Vijay Viswanathan, RSSDI Altas of Diabetic Foot,Book Chapter 2; pg: 6-9; 2023.\n\n10. Reduction of Lower Limb Amputations among People with Diabetes in India. Vijay Viswanathna, RSSDI Altas of Diabetic Foot, Book Chapter 4; pg: 14-5; 2023.\n\n11. Management of Peripheral Artery Disease in Diabetes.R.Ravikumar, RSSDI Altas of Diabetic Foot, Book Chapter 5; pg: 17-23; 2023.\n\n12. Surgical Approach to the Management of Diabetic Foot Infections and Complex Diabetic Foot Wounds. Senthil Govindan, RSSDI Altas of Diabetic Foot, Book Chapter 6; pg: 24-37; 2023.\n\n13. Angiosome Concept: The Basics for Every Diabetic Foot Care Specialist, Sivashankari Selva Elavarasan, R.Ravikumar, RSSDI Altas of Diabetic Foot, Book Chapter7; pg: 38-49; 2023.\n\n14. An Insight into the Radio Imaging of Diabetic Foot Infection, Senthil Govindan, Sivashankari SelvaElavarasan, Vijay Viswanathan, RSSDI Altas of Diabetic Foot, Book Chapter 8; pg: 50-60; 2023.\n\n15. The Indispensable Role of Orthotics in the Preventions and Management of Diabetic Foot, Sivashankari SelvaElavarasan, Bamila Selvaraj, Seena Rajsekar, Vijay Viswanathan, RSSDI Altas of Diabetic Foot, Book Chapter 9; pg: 61- 67; 2023.\n\n16. Wound Dressings in the Management of Diabetic Foot Infections, Senthil Govindan, Vijay Viswanathan, RSSDI Altas of Diabetic Foot, Book Chapter 10; pg: 68-75; 2023.",
        "year": 2024,
        "date": "2024-05-25",
        "category": "Publication",
        "sourceUrl": "https://mvdiabetes.com/2023-publications-index-april-to-dec/",
        "image": {
            "src": "/images/news/2023-publications-index-april-to-dec.png",
            "alt": "2023 Publications Index (April to Dec)",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15022",
        "slug": "iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers",
        "title": "IIT-M Unveils Dr. M. Vishwanathan’s Portrait Alongside Medical Research Pioneers",
        "excerpt": "IIT-M unveils portraits of medical research pioneers, including the remarkable Dr. M. Vishwanathan. From freedom fighter to diabetes warrior and social activist, his legacy shines…",
        "content": "## Celebrating a proud moment with MV Diabetes!\n\nIIT-M unveils portraits of medical research pioneers, including the remarkable Dr. M. Vishwanathan. From freedom fighter to diabetes warrior and social activist, his legacy shines bright. Thanks to The Times of India for spotlighting these incredible stories!",
        "year": 2024,
        "date": "2024-05-13",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers/",
        "image": {
            "src": "/images/news/iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers.png",
            "alt": "IIT-M Unveils Dr. M. Vishwanathan’s Portrait Alongside Medical Research Pioneers",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers-1.jpg",
                "alt": "Portrait Alongside Medical Research Pioneers"
            }
        ],
        "featured": false
    },
    {
        "id": "news-14780",
        "slug": "wound-clinic-training-program",
        "title": "Wound Clinic Training Program",
        "excerpt": "38th Prof. M Viswanthan Gold Medal Oration 2024 delivered by Dr. David Armstrong, Professor of Surgery, USA; Director, Kreck School of Medicine of University of Southern California",
        "content": "38th Prof. M Viswanthan Gold Medal Oration 2024 delivered by Dr. David Armstrong, Professor of Surgery, USA; Director, Kreck School of Medicine of University of Southern California\n\nLaunch of Wound Clinic Training Program @ Royapuram by Dr. David Armstrong, Justice Gopinath Menon, Dr. Vijay Viswanathan, Dr. SN Narasingan, Dr. Jayashree Gopal\n\nMr. Murali, Director CFTI, Chennai receiving the First \"Excellence in Diabetic Foot Care\" Award of MV Diabetes Chennai and Bengaluru from Justice Gopinath Menon [Sitting Judge High Court of Kerala]\n\nAlso in the photo [from left to right ] Dr. David Armstrong USA; Dr.Vijay Viswanathan, Chief Physician, MV Diabetes; Dr. SN Narasingan, Dean, MV Diabetes; Dr. Jayshree Gopal, Associate Dean, MV Diabetes\n\n## INDO US CONCLAVE- INAUGURATION & FELICITATIONS\n\n## Felicitation of Justice Gopinath Menon\n\nLifetime Achievement Awards- Dr. A Muruganathan\n\nLifetime Achievement Awards - Dr. P C Manoria\n\n## Felicitations of National RSSDI Members\n\nINDO US CONCLAVE 2024- Prof. M Viswanathan Honour lecture\n\nDr. V. Mohan, Chairman Madras Diabetes Research Center being awarded on March 2024\n\nDr. David Campbell, USA, being awarded on 30 March 2024\n\nDr. Shashank Joshi, Mumbai, being awarded on 31 March 2024\n\nINDO US CONCLAVE 2024- Highlights of the MV Diabetes Mega Event on 30 & 31 March 2024 @ Ramada Plaza, Guindy, Chennai",
        "year": 2024,
        "date": "2024-04-11",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/wound-clinic-training-program/",
        "image": {
            "src": "/images/news/wound-clinic-training-program.jpg",
            "alt": "Wound Clinic Training Program",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/wound-clinic-training-program-1.png",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-2.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-3.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-4.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-5.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-6.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-7.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-8.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-9.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-10.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-11.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-12.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-13.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-14.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-15.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-16.jpg",
                "alt": "Wound Clinic Training Program"
            },
            {
                "src": "/images/news/wound-clinic-training-program-17.jpg",
                "alt": "Wound Clinic Training Program"
            }
        ],
        "featured": false
    },
    {
        "id": "news-14579",
        "slug": "m-v-diabetes-hosts-inspiring-recreation-and-education-program",
        "title": "M V Diabetes Organizes Republic Day 2024 Program for Type 1 Children & Young Adults",
        "excerpt": "On Republic Day, 26 January 2024, M V Diabetes organized a Recreation and Education Program for Type 1 Children & Young Adults.",
        "content": "On Republic Day, 26 January 2024, M V Diabetes organized a Recreation and Education Program for Type 1 Children & Young Adults.\n\nMany of our Type 1 Children & Young Adults participated in this event. The main focus was to motivate them through our “Mind Wellness Clinic.”\n\nMs. Vaishnavi Vijay, Head of the Mind Wellness Clinic and Ms. Manjula also of Mind Wellness Clinic organized this meeting along with other departments.",
        "year": 2024,
        "date": "2024-01-26",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/m-v-diabetes-hosts-inspiring-recreation-and-education-program/",
        "image": {
            "src": "/images/news/m-v-diabetes-hosts-inspiring-recreation-and-education-program.png",
            "alt": "M V Diabetes Organizes Republic Day 2024 Program for Type 1 Children & Young Adults",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16112",
        "slug": "high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru",
        "title": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
        "excerpt": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
        "content": "## High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru\n\nOur CMD, Dr. Vijay Viswanathan, joined the MV Diabetes team for the launch of the High Risk Foot Clinic at MV Diabetes Koramangala, Bengaluru, on December 16, 2023.\n\nThe MV SURGI BOOT is an indigenously developed offloading device in India designed for people with foot ulcers. Manufactured in-house at MV Diabetes, this device offers a low-cost solution with enhanced healing time, making it highly beneficial for the Indian population.",
        "year": 2023,
        "date": "2023-12-16",
        "category": "Launch",
        "sourceUrl": "https://mvdiabetes.com/high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru/",
        "image": {
            "src": "/images/news/high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru.png",
            "alt": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru-1.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru-2.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16096",
        "slug": "m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day",
        "title": "M.V. Diabetes Centre Launches “MV SURGI BOOT” on Disability Day",
        "excerpt": "M.V. Diabetes and Prof. M Viswanathan Diabetes Research Centre Unveil \"MV SURGI BOOT\" on December 12, 2023, in Commemoration of International Day of Persons with Disabilities",
        "content": "M.V. Diabetes and Prof. M Viswanathan Diabetes Research Centre Unveil \"MV SURGI BOOT\" on December 12, 2023, in Commemoration of International Day of Persons with Disabilities\n\nOn December 12, 2023, M.V. Diabetes and Prof. M Viswanathan Diabetes Research Centre unveiled the \"MV SURGI BOOT\" in honor of the International Day of Persons with Disabilities. The event featured Chief Guest Dr. J. Sangumani, Director of Medical Education & Research, Chennai, and Dr. Vijay Viswanathan, Head & Chief Diabetologist at M.V. Diabetes, who launched the MV SURGI BOOT together.\n\nThe MV SURGI BOOT is an indigenously developed offloading device in India designed for people with foot ulcers. Manufactured in-house at MV Diabetes, this device offers a low-cost solution with enhanced healing time, making it highly beneficial for the Indian population.",
        "year": 2023,
        "date": "2023-12-12",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day/",
        "image": {
            "src": "/images/news/m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day.png",
            "alt": "M.V. Diabetes Centre Launches “MV SURGI BOOT” on Disability Day",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day-1.jpg",
                "alt": "Research Centre Unveil \"MV Surgi Boot\""
            },
            {
                "src": "/images/news/m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day-2.png",
                "alt": "Research Centre Unveil \"MV Surgi Boot\""
            }
        ],
        "featured": false
    },
    {
        "id": "news-16129",
        "slug": "dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes",
        "title": "Dr. Vijay Viswanathan Inaugurates “Mind Wellness Clinic” at MV Diabetes",
        "excerpt": "Dr. Vijay Viswanathan Inaugurates \"Mind Wellness Clinic\" at MV Diabetes Royapuram",
        "content": "Dr. Vijay Viswanathan Inaugurates \"Mind Wellness Clinic\" at MV Diabetes Royapuram\n\nDr. Vijay Viswanathan, M.D., Ph.D., FRCP, Chairman & Managing Director of M V Diabetes, inaugurated the \"Mind Wellness Clinic\" at M V Diabetes, Royapuram. He was joined by Ms. Vaishnavi Vijay, M.Sc. in Clinical Psychology, and Ms. Manjula, M.Phil (Applied Psychology).",
        "year": 2023,
        "date": "2023-12-01",
        "category": "Launch",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes/",
        "image": {
            "src": "/images/news/dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes.png",
            "alt": "Dr. Vijay Viswanathan Inaugurates “Mind Wellness Clinic” at MV Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes-1.png",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes-2.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16136",
        "slug": "indias-top-diabetes-experts-moderate-online-series-on-type-1-diabetes-care",
        "title": "India’s Top Diabetes Experts Moderate Online Series on Type 1 Diabetes Care",
        "excerpt": "India's Leading Diabetes Experts Moderate Prof. M. Viswanathan Online Education Series on \"Type 1 Diabetes Care in India\"",
        "content": "India's Leading Diabetes Experts Moderate Prof. M. Viswanathan Online Education Series on \"Type 1 Diabetes Care in India\"\n\nOn the occasion of our Founder's Birth Centenary, India's top diabetes experts, Dr. A. Ramachandran, Dr. V. Mohan, and Dr. Vijay Viswanathan, moderated the Prof. M. Viswanathan Online Education Series 2, focusing on \"Type 1 Diabetes Care in India.\" The event featured Dr. Banshi Saboo, MD, PhD, FACE, as a speaker.",
        "year": 2023,
        "date": "2023-11-30",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/indias-top-diabetes-experts-moderate-online-series-on-type-1-diabetes-care/",
        "image": {
            "src": "/images/news/indias-top-diabetes-experts-moderate-online-series-on-type-1-diabetes-care.png",
            "alt": "India’s Top Diabetes Experts Moderate Online Series on Type 1 Diabetes Care",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16156",
        "slug": "save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram",
        "title": "“Save Your Feet” – World Diabetes Day Campaign at MV Diabetes Royapuram",
        "excerpt": "\"Save Your Feet from Diabetic Foot Complications\" - A World Diabetes Day Campaign at MV Diabetes, Royapuram",
        "content": "\"Save Your Feet from Diabetic Foot Complications\" - A World Diabetes Day Campaign at MV Diabetes, Royapuram\n\nMV Diabetes, Royapuram, conducted a one-day campaign on World Diabetes Day focused on preventing diabetic foot complications. The event featured participation from individuals with diabetes and included valuable advice from the MV Diabetes team.",
        "year": 2023,
        "date": "2023-11-20",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram/",
        "image": {
            "src": "/images/news/save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram.png",
            "alt": "“Save Your Feet” – World Diabetes Day Campaign at MV Diabetes Royapuram",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram-1.png",
                "alt": "On The Occasion Of World Diabetes Day"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16142",
        "slug": "mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day",
        "title": "MV Diabetes Health Conclave: “Healthy Body & Mind” for World Diabetes Day",
        "excerpt": "World Diabetes Day Health Conclave by MV Diabetes Features \"Healthy Body & Mind\" Theme",
        "content": "## World Diabetes Day Health Conclave by MV Diabetes Features \"Healthy Body & Mind\" Theme\n\nOn World Diabetes Day, November 14, 2023, MV Diabetes hosted a Health Conclave focused on “Healthy Body & Mind” at Savera Hotel. The event, led by Managing Director Dr. Vijay Viswanathan, featured Chief Guest Ms. Nina Reddy and Guest Speaker Dr. Hemamalini, Professor and Head of the Department of Clinical Nutrition at SRFAHS, Sri Ramachandra Institute of Higher Education and Research. With 300 attendees from Chennai, the event also saw the launch of “CHENNAI SLIM & FIT 2.0” and included a webinar titled “Can We Reverse Diabetes” at 5:30 PM.",
        "year": 2023,
        "date": "2023-11-14",
        "category": "Conference",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day/",
        "image": {
            "src": "/images/news/mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day.png",
            "alt": "MV Diabetes Health Conclave: “Healthy Body & Mind” for World Diabetes Day",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day-1.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day-2.png",
                "alt": "On The Occasion Of World Diabetes Day"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16170",
        "slug": "primary-prevention-of-diabetes-expert-discussion-on-founders-centenary",
        "title": "“Primary Prevention of Diabetes” – Expert Discussion on Founder’s Centenary",
        "excerpt": "Top Indian Diabetes Experts Discuss \"Primary Prevention of Diabetes: Indian Experience\" on Our Founder’s Birth Centenary",
        "content": "Top Indian Diabetes Experts Discuss \"Primary Prevention of Diabetes: Indian Experience\" on Our Founder’s Birth Centenary\n\nOn our Founder’s Birth Centenary, Dr. A. Ramachandran, Dr. V. Mohan, and Dr. Vijay Viswanathan discussed \"Primary Prevention of Diabetes: Indian Experience,\" sharing insights on diabetes prevention strategies in India.",
        "year": 2023,
        "date": "2023-10-28",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/primary-prevention-of-diabetes-expert-discussion-on-founders-centenary/",
        "image": {
            "src": "/images/news/primary-prevention-of-diabetes-expert-discussion-on-founders-centenary.png",
            "alt": "“Primary Prevention of Diabetes” – Expert Discussion on Founder’s Centenary",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16188",
        "slug": "mv-diabetes-update-on-diabetic-foot-kidney-event-highlights",
        "title": "MV Diabetes Update on Diabetic Foot & Kidney: Event Highlights",
        "excerpt": "On 17 September M V Diabetes organized MV Diabetes Update in Diabetic Foot & Kidney at Hotel Radisson Blu.",
        "content": "On 17 September M V Diabetes organized MV Diabetes Update in Diabetic Foot & Kidney at Hotel Radisson Blu.\n\nKey speakers of the program were Prof. Dr. Andrew Boulton, Immediate Pat President of International Diabetes Federation (IDF) & Dr. Janaka Karallikedde, Clinical Reader (Associate Professor) in Diabetes and Cardiovascular Disease, King’s College London and Consultant, Physician in Diabetes and Endocrinology, Guy’s and St Thomas Hospital London\n\nAround 120 doctors participated.",
        "year": 2023,
        "date": "2023-09-17",
        "category": "News",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights/",
        "image": {
            "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights.jpg",
            "alt": "MV Diabetes Update on Diabetic Foot & Kidney: Event Highlights",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights-1.jpg",
                "alt": "MV Diabetes Update on Diabetic Foot & Kidney : Event Highlights"
            },
            {
                "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights-2.jpg",
                "alt": "MV Diabetes Update on Diabetic Foot & Kidney : Event Highlights"
            },
            {
                "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights-3.jpg",
                "alt": "MV Diabetes Update on Diabetic Foot & Kidney : Event Highlights"
            },
            {
                "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights-4.jpg",
                "alt": "MV Diabetes Update on Diabetic Foot & Kidney : Event Highlights"
            },
            {
                "src": "/images/news/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights-5.jpg",
                "alt": "MV Diabetes Update on Diabetic Foot & Kidney : Event Highlights"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16201",
        "slug": "prof-m-viswanathan-honored-on-100th-birth-centenary",
        "title": "Prof. M. Viswanathan Honored on 100th Birth Centenary",
        "excerpt": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
        "content": "## High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru\n\nOur CMD, Dr. Vijay Viswanathan, joined the MV Diabetes team for the launch of the High Risk Foot Clinic at MV Diabetes Koramangala, Bengaluru, on December 16, 2023.\n\nThe MV SURGI BOOT is an indigenously developed offloading device in India designed for people with foot ulcers. Manufactured in-house at MV Diabetes, this device offers a low-cost solution with enhanced healing time, making it highly beneficial for the Indian population.",
        "year": 2023,
        "date": "2023-09-16",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-honored-on-100th-birth-centenary/",
        "image": {
            "src": "/images/news/prof-m-viswanathan-honored-on-100th-birth-centenary.png",
            "alt": "Prof. M. Viswanathan Honored on 100th Birth Centenary",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/prof-m-viswanathan-honored-on-100th-birth-centenary-1.png",
                "alt": "Launch Of Book And Online Education"
            },
            {
                "src": "/images/news/prof-m-viswanathan-honored-on-100th-birth-centenary-2.png",
                "alt": "Doctor Who Predicted The Diabetes Epidemic in India"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16206",
        "slug": "mv-diabetes-celebrates-national-nutrition-week-2022",
        "title": "MV Diabetes Celebrates National Nutrition Week 2022",
        "excerpt": "M V Diabetes, Chennai & Koramangala celebrated National Nutrition Week from 01 to 07 September 2022. Few glimpses of the activities initiated by MV Koramangala Team and the…",
        "content": "M V Diabetes, Chennai & Koramangala celebrated National Nutrition Week from 01 to 07 September 2022. Few glimpses of the activities initiated by MV Koramangala Team and the Participation of the patients who visited the centre during the week.\n\n## WE WISH EVERYONE A HEALTHY LIFE!!",
        "year": 2023,
        "date": "2023-09-01",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-celebrates-national-nutrition-week-2022/",
        "image": {
            "src": "/images/news/mv-diabetes-celebrates-national-nutrition-week-2022.png",
            "alt": "MV Diabetes Celebrates National Nutrition Week 2022",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-celebrates-national-nutrition-week-2022-1.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/mv-diabetes-celebrates-national-nutrition-week-2022-2.png",
                "alt": "MV Diabetes Healthy Nutrition"
            },
            {
                "src": "/images/news/mv-diabetes-celebrates-national-nutrition-week-2022-3.png",
                "alt": "MV Diabetes Nutrition"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16212",
        "slug": "mv-diabetes-introduces-atheropoint-for-vascular-health",
        "title": "MV Diabetes Introduces Atheropoint for Vascular Health",
        "excerpt": "MV Diabetes presents a diagnostic technique- Atheropoint (a USA Collaboration/ Tech) which predicts changes in the blood vessels of people with Diabetes.",
        "content": "MV Diabetes presents a diagnostic technique- Atheropoint (a USA Collaboration/ Tech) which predicts changes in the blood vessels of people with Diabetes.\n\nThis Diagnostic Test can predict Strokes and blood vessel disease in future also. Result will be available next day.\n\nDr. Jasjit Suri from USA who discovered this technology- Atheropoint is visiting MV Diabetes Royapuram.",
        "year": 2023,
        "date": "2023-08-10",
        "category": "Partnership",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-introduces-atheropoint-for-vascular-health/",
        "image": {
            "src": "/images/news/mv-diabetes-introduces-atheropoint-for-vascular-health.png",
            "alt": "MV Diabetes Introduces Atheropoint for Vascular Health",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-introduces-atheropoint-for-vascular-health-1.png",
                "alt": "Atheropoint"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16218",
        "slug": "oral-health-and-well-being-at-mv-hospital-for-diabetes",
        "title": "Oral Health and Wellbeing at MV Hospital for Diabetes",
        "excerpt": "Oral health is a key indicator of overall health, well-being and quality of life.",
        "content": "Oral health is a key indicator of overall health, well-being and quality of life.\n\nGood oral health is essential for eating, breathing and speaking, and encompasses psychosocial dimensions such as self-confidence, well-being and the ability to socialize and work without pain, discomfort and embarrassment.\n\nAt M V Hospital for Diabetes we consult, educate and treat for various dental problems.",
        "year": 2023,
        "date": "2023-08-03",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/oral-health-and-well-being-at-mv-hospital-for-diabetes/",
        "image": {
            "src": "/images/news/oral-health-and-well-being-at-mv-hospital-for-diabetes.png",
            "alt": "Oral Health and Wellbeing at MV Hospital for Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/oral-health-and-well-being-at-mv-hospital-for-diabetes-1.png",
                "alt": "Why Dental Health Is So Important"
            },
            {
                "src": "/images/news/oral-health-and-well-being-at-mv-hospital-for-diabetes-2.png",
                "alt": "MV Diabetes"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16233",
        "slug": "world-brain-day-zoom-webinar-insights-and-discussions",
        "title": "World Brain Day Zoom Webinar: Insights and Discussions",
        "excerpt": "Zoom webinar. On the occasion of World Brain Day",
        "content": "Zoom webinar. On the occasion of World Brain Day",
        "year": 2023,
        "date": "2023-07-22",
        "category": "Webinar",
        "sourceUrl": "https://mvdiabetes.com/world-brain-day-zoom-webinar-insights-and-discussions/",
        "image": {
            "src": "/images/news/world-brain-day-zoom-webinar-insights-and-discussions.png",
            "alt": "World Brain Day Zoom Webinar: Insights and Discussions",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/world-brain-day-zoom-webinar-insights-and-discussions-1.png",
                "alt": "Train Your Brain"
            },
            {
                "src": "/images/news/world-brain-day-zoom-webinar-insights-and-discussions-2.png",
                "alt": "Sleep And Its Importance Today"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16242",
        "slug": "mv-hospitals-wellbeing-campaign-at-nageswara-rao-park",
        "title": "MV Hospital’s Wellbeing Campaign at Nageswara Rao Park",
        "excerpt": "Few glimpses of a campaign by M V Hospital for Diabetes, under the guidance of Dr. Vijay Viswanathan, to create awareness on General Wellbeing for public on 25 June 2023 at Nageswara…",
        "content": "Few glimpses of a campaign by M V Hospital for Diabetes, under the guidance of Dr. Vijay Viswanathan, to create awareness on General Wellbeing for public on 25 June 2023 at Nageswara Rao Park, Mylapore.\n\nThe program included general health check-up and Yoga sessions for public. from 6:00 – 8:00 AM.\n\nMr. Erode Mahesh, Chief Guest also performed yoga along with the participants.\n\n“Yoga postures done with full awareness provides a gentle massage to all the internal organs, and leads you to a relaxed state of mind.”",
        "year": 2023,
        "date": "2023-06-25",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/mv-hospitals-wellbeing-campaign-at-nageswara-rao-park/",
        "image": {
            "src": "/images/news/mv-hospitals-wellbeing-campaign-at-nageswara-rao-park.png",
            "alt": "MV Hospital’s Wellbeing Campaign at Nageswara Rao Park",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospitals-wellbeing-campaign-at-nageswara-rao-park-1.png",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mv-hospitals-wellbeing-campaign-at-nageswara-rao-park-2.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16227",
        "slug": "mv-hospitals-wellbeing-campaign-yoga-health-check-ups",
        "title": "MV Hospital’s Wellbeing Campaign: Yoga & Health Checkups",
        "excerpt": "Few glimpses of M V Hospital for Diabetes General Wellbeing campaign for public on 25 June 2023 at Anna Park, Royapuram.",
        "content": "Few glimpses of M V Hospital for Diabetes General Wellbeing campaign for public on 25 June 2023 at Anna Park, Royapuram.\n\nTo create awareness among public we included general health check-up and Yoga sessions for public from 6:00 – 8:00 AM, under the guidance of Dr. Vijay Viswanathan, our MD & Head & Chief Diabetologist.\n\nAll the participants performed yoga. The Directors of M V Hospital for Diabetes (Mr. Arun Viswanathan, Mrs. Meena Vijay, Mrs. Vrinda Arun) participated in the Event. Dr. Prashanth Arun, Consultant Diabetologist M V Hospital for Diabetes gave a small awareness talk and spoke to the participants to clear their queries.\n\nYoga helps in maintaining good mental and physical health. Yoga also teaches you to lead your life in discipline.",
        "year": 2023,
        "date": "2023-06-25",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/mv-hospitals-wellbeing-campaign-yoga-health-check-ups/",
        "image": {
            "src": "/images/news/mv-hospitals-wellbeing-campaign-yoga-health-check-ups.png",
            "alt": "MV Hospital’s Wellbeing Campaign: Yoga & Health Checkups",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospitals-wellbeing-campaign-yoga-health-check-ups-1.png",
                "alt": "MV Diabetes Yoga"
            },
            {
                "src": "/images/news/mv-hospitals-wellbeing-campaign-yoga-health-check-ups-2.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-14597",
        "slug": "app-to-help-people-with-diabetic-foot-launched",
        "title": "App to help people with diabetic foot launched",
        "excerpt": "Chennai: The new mobile application launched by the MV hospital for diabetes and Prof M Viswanathan diabetes research centre, Royapuram, will allow people to connect with experts on…",
        "content": "Chennai: The new mobile application launched by the MV hospital for diabetes and Prof M Viswanathan diabetes research centre, Royapuram, will allow people to connect with experts on queries related to diabetic foot and diabetes.\n\nThe app, MV DIABET, available on Play Store, was launched by the hospital on Saturday. Chief diabetologist Dr Vijay Vishwanathan said the app is connected to a WhatsApp number and a multi-disciplinary team at the hospital will give an opinion on diabetic foot and diabetes.\n\nPatients with diabetes have some form of nerve damage or diabetic neuropathy, where uncontrolled high blood sugar levels damage the walls of tiny blood vessels that supply the nerves, especially in the legs.\n\nThis can lead to symptoms such as loss of sensation and means patients feel little pain, so scratches can go unnoticed and become infected, he said on the sidelines of the 37th Prof M Viswanathan DRC Gold Medal Oration.\n\nSource: Times News Network",
        "year": 2023,
        "date": "2023-05-27",
        "category": "Launch",
        "sourceUrl": "https://mvdiabetes.com/app-to-help-people-with-diabetic-foot-launched/",
        "image": {
            "src": "/images/news/app-to-help-people-with-diabetic-foot-launched.png",
            "alt": "App to help people with diabetic foot launched",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/app-to-help-people-with-diabetic-foot-launched-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16239",
        "slug": "inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes",
        "title": "Inauguration of Women’s Wellness Clinic at MV Hospital for Diabetes",
        "excerpt": "We inaugurated a Women’s Wellness Clinic today at M V Hospital for Diabetes.",
        "content": "We inaugurated a Women’s Wellness Clinic today at M V Hospital for Diabetes.\n\nWe will be addressing the problem of stress, Cancer Prevention, Gynaecological issues & other problems in Women in this clinic.",
        "year": 2023,
        "date": "2023-03-24",
        "category": "Launch",
        "sourceUrl": "https://mvdiabetes.com/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes/",
        "image": {
            "src": "/images/news/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes.jpg",
            "alt": "Inauguration of Women’s Wellness Clinic at MV Hospital for Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes-1.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes-2.png",
                "alt": "MV Diabetes Consultation"
            },
            {
                "src": "/images/news/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes-3.png",
                "alt": "Women Wellness Clinic"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16251",
        "slug": "mv-diabetes-3-day-campaign-for-world-kidney-day-2023",
        "title": "MV Diabetes’ 3-Day Campaign for World Kidney Day 2023",
        "excerpt": "MV Diabetes organized a 3 Day campaign to promote awareness on Diabetic Kidney Disease on the occasion of World Kidney Day 2023.",
        "content": "MV Diabetes organized a 3 Day campaign to promote awareness on Diabetic Kidney Disease on the occasion of World Kidney Day 2023.\n\nWe offered special discounts on Kidney filtration test and consultation. MV Diabetes Diet Department reiterated the importance of Healthy Diet and display/ education of tasty diet options for people with Diabetes & kidney disease for 3 days.\n\nWe organized an FB live Event on “Latest Methods to Detect & Prevent Kidney Disease” with all our Diabetologist moderated by Dr. Vijay Viswanathan, our Head & Chief Diabetologist on 09 March at 4:00 PM. Several people participated through FB & Zoom link.\n\nFew glimpses of the entire campaign on World Kidney Day 2023.",
        "year": 2023,
        "date": "2023-03-09",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-3-day-campaign-for-world-kidney-day-2023/",
        "image": {
            "src": "/images/news/mv-diabetes-3-day-campaign-for-world-kidney-day-2023.png",
            "alt": "MV Diabetes’ 3-Day Campaign for World Kidney Day 2023",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-diabetes-3-day-campaign-for-world-kidney-day-2023-1.png",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mv-diabetes-3-day-campaign-for-world-kidney-day-2023-2.png",
                "alt": "MV Diabetes Mobile App"
            },
            {
                "src": "/images/news/mv-diabetes-3-day-campaign-for-world-kidney-day-2023-3.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/mv-diabetes-3-day-campaign-for-world-kidney-day-2023-4.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16258",
        "slug": "free-medical-camp-in-memory-of-prof-m-viswanathan",
        "title": "Free Medical Camp in Memory of Prof. M Viswanathan",
        "excerpt": "In the memory of our Founder (Prof.) Dr. M Viswanathan, a free medical camp was organized by Dr. Vijay Viswanathan, Head & Chief Diabetologist, at Mahalingapuram Sree Guruvayoorappan/…",
        "content": "In the memory of our Founder (Prof.) Dr. M Viswanathan, a free medical camp was organized by Dr. Vijay Viswanathan, Head & Chief Diabetologist, at Mahalingapuram Sree Guruvayoorappan/ Ayyappan Temple today, 01 March 2023.",
        "year": 2023,
        "date": "2023-03-01",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/free-medical-camp-in-memory-of-prof-m-viswanathan/",
        "image": {
            "src": "/images/news/free-medical-camp-in-memory-of-prof-m-viswanathan.jpg",
            "alt": "Free Medical Camp in Memory of Prof. M Viswanathan",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/free-medical-camp-in-memory-of-prof-m-viswanathan-1.png",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/free-medical-camp-in-memory-of-prof-m-viswanathan-2.png",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/free-medical-camp-in-memory-of-prof-m-viswanathan-3.png",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-14608",
        "slug": "mv-hospital-conducts-oration-programmes-launches-app",
        "title": "MV Hospital conducts oration programmes, launches app",
        "excerpt": "The MV Hospital for Diabetes and Prof M Viswanathan Diabetes Research Centre Royapuram organised the 37th Prof M Viswanathan DRC Gold Medal Oration.",
        "content": "The MV Hospital for Diabetes and Prof M Viswanathan Diabetes Research Centre Royapuram organised the 37th Prof M Viswanathan DRC Gold Medal Oration. A new app 'MV DIABEAT' was launched for the convenience of people with diabetic foot infection during this event. Users can consult the multi-disciplinary team at the hospital for any query related to their feet and diabetes treatment. The app is connected to a WhatsApp number and the experts will share their opinion. The app is available in PlayStore. The hospital is also conducting Train the Foot Trainer programme for the first time in India and the South East Asia Region for training doctors in diabetic foot. About 100 doctors from India, Vietnam, Myanmar, Malaysia, and Maldives have been flown in for the same.\n\nSource: The New Indian Express",
        "year": 2023,
        "date": "2023-02-16",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-conducts-oration-programmes-launches-app/",
        "image": {
            "src": "/images/news/mv-hospital-conducts-oration-programmes-launches-app.png",
            "alt": "MV Hospital conducts oration programmes, launches app",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-14621",
        "slug": "7th-train-the-foot-trainer-program-global-collaboration-in-chennai",
        "title": "7th Train the Foot Trainer Program: Global Collaboration in Chennai",
        "excerpt": "7th Train the Foot Trainer (TtFT) Program- Chennai at the MV Diabetes Royapuram and Hyatt Regency, Chennai TTft (Train the Foot Trainer Program) has been done 6 times in South America,…",
        "content": "7th Train the Foot Trainer (TtFT) Program- Chennai at the MV Diabetes Royapuram and Hyatt Regency, Chennai TTft (Train the Foot Trainer Program) has been done 6 times in South America, Africa, Europe, UAE & Western Pacific regions. The 7th Edition was done in Chennai by MV Diabetes under the leadership of Dr. Vijay Viswanathan for Indian doctors. Doctors from other countries like Maldives, Thailand, Indonesia, Myanmar also participated. Both faculty & delegates were from various countries apart from different parts of India.",
        "year": 2023,
        "date": "2023-02-13",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/7th-train-the-foot-trainer-program-global-collaboration-in-chennai/",
        "image": {
            "src": "/images/news/7th-train-the-foot-trainer-program-global-collaboration-in-chennai.png",
            "alt": "7th Train the Foot Trainer Program: Global Collaboration in Chennai",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16268",
        "slug": "7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes",
        "title": "7th Train the Foot Trainer Program in Chennai by MV Diabetes",
        "excerpt": "7th Train the Foot Trainer (TtFT) Program- Chennai at the MV Diabetes Royapuram and Hyatt Regency, Chennai TTft (Train the Foot Trainer Program) has been done 6 times in South America,…",
        "content": "7th Train the Foot Trainer (TtFT) Program- Chennai at the MV Diabetes Royapuram and Hyatt Regency, Chennai TTft (Train the Foot Trainer Program) has been done 6 times in South America, Africa, Europe, UAE & Western Pacific regions. The 7th Edition was done in Chennai by MV Diabetes under the leadership of Dr. Vijay Viswanathan for Indian doctors. Doctors from other countries like Maldives, Thailand, Indonesia, Myanmar also participated. Both faculty & delegates were from various countries apart from different parts of India.\n\nDr. Shashank Joshi, Diabetologist & Endocrinologist, Mumbai being presented with Prof. M Viswanathan Honour Award – 2023.\n\nAn App called MVDiaBeat was launched on this occasion for the convenience of people with Diabetes.\n\nThe doctors were given an overview of how to manage Diabetic Foot in these 2 days. There were also sessions about Diabetes treatment and they visited the facilities in M V Hospital for Diabetes and also interacted with the experts around the world.\n\nThe 37th Edition of Prof. M. Viswanathan Gold Medal Oration Award (Citation & Gold Medal) was presented to Dr. Rodica Pop- Busui (President of American Diabetes Association). Also seen, Dr. Vijay Viswanathan, Dr. Jayashree Gopal (Associate Dean) & Dr. S. N. Narasingan (Dean)",
        "year": 2023,
        "date": "2023-02-09",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes/",
        "image": {
            "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes.jpg",
            "alt": "7th Train the Foot Trainer Program in Chennai by MV Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-1.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-2.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-3.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-4.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-5.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-6.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-7.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-8.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-9.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-10.webp",
                "alt": "MV Diabetes D - Foot International"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-11.webp",
                "alt": "MV Diabetes D - Foot International"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-12.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-13.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-14.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-15.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-16.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-17.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-18.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-19.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-20.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes-21.webp",
                "alt": "MV Diabetes Awards"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16067",
        "slug": "free-health-camp-by-m-v-hospital-for-charity-inmates",
        "title": "Free Health Camp by M V Hospital for Charity Inmates",
        "excerpt": "M V Hospital for Diabetes Royapuram organized a free camp for the inmates of Missionaries of Charity /Nirmala Shishu Bhavan situated in our street.",
        "content": "M V Hospital for Diabetes Royapuram organized a free camp for the inmates of Missionaries of Charity /Nirmala Shishu Bhavan situated in our street. Many sisters and the children took part.",
        "year": 2022,
        "date": "2022-11-29",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/free-health-camp-by-m-v-hospital-for-charity-inmates/",
        "image": {
            "src": "/images/news/free-health-camp-by-m-v-hospital-for-charity-inmates.png",
            "alt": "Free Health Camp by M V Hospital for Charity Inmates",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16076",
        "slug": "blue-lights-of-chennai-raising-diabetes-awareness",
        "title": "Blue Lights of Chennai: Raising Diabetes Awareness",
        "excerpt": "The M.V. Hospital for Diabetes, Royapuram Chennai created a record in India by Blue lighting of all major landmarks in Chennai to mark World Diabetes Day to create awareness of…",
        "content": "The M.V. Hospital for Diabetes, Royapuram Chennai created a record in India by Blue lighting of all major landmarks in Chennai to mark World Diabetes Day to create awareness of Diabetes.\n\nIn 2022 the Garden in Parry’s Corner the commercial hub in Chennai was lit blue. Diabetes is a disorder which can be prevented (Primary Prevention of Diabetes).",
        "year": 2022,
        "date": "2022-11-13",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/blue-lights-of-chennai-raising-diabetes-awareness/",
        "image": {
            "src": "/images/news/blue-lights-of-chennai-raising-diabetes-awareness.jpg",
            "alt": "Blue Lights of Chennai: Raising Diabetes Awareness",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/blue-lights-of-chennai-raising-diabetes-awareness-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/blue-lights-of-chennai-raising-diabetes-awareness-2.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16085",
        "slug": "caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022",
        "title": "Caring for Kids with Type 1 Diabetes: World Diabetes Day 2022",
        "excerpt": "On World Diabetes Day 2022 our focus was on Children with Type 1 Diabetes. We offered them a free check up and taught them specific yoga exercises based on our research in Yoga.",
        "content": "On World Diabetes Day 2022 our focus was on Children with Type 1 Diabetes. We offered them a free check up and taught them specific yoga exercises based on our research in Yoga.\n\nWe offer 360 degree care to children with Type 1 Diabetes.",
        "year": 2022,
        "date": "2022-11-12",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022/",
        "image": {
            "src": "/images/news/caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022.jpg",
            "alt": "Caring for Kids with Type 1 Diabetes: World Diabetes Day 2022",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022-2.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16106",
        "slug": "mv-hospital-wins-award-at-18th-european-diabetic-foot-study",
        "title": "MV Hospital Wins Award at 18th European Diabetic Foot Study",
        "excerpt": "MV Hospital for Diabetes Wins Award at 18th European Diabetic Foot Study Group",
        "content": "MV Hospital for Diabetes Wins Award at 18th European Diabetic Foot Study Group",
        "year": 2022,
        "date": "2022-11-10",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-wins-award-at-18th-european-diabetic-foot-study/",
        "image": {
            "src": "/images/news/mv-hospital-wins-award-at-18th-european-diabetic-foot-study.jpg",
            "alt": "MV Hospital Wins Award at 18th European Diabetic Foot Study",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospital-wins-award-at-18th-european-diabetic-foot-study-1.jpg",
                "alt": "MV Hospital For Diabetes Awarded"
            },
            {
                "src": "/images/news/mv-hospital-wins-award-at-18th-european-diabetic-foot-study-2.jpg",
                "alt": "MV Hospital For Diabetes Awarded"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16095",
        "slug": "press-conference-highlights-dinamalar-and-southern-mail",
        "title": "Press Conference Highlights: Dinamalar and Southern Mail",
        "excerpt": "Press Conference Highlights: Dinamalar and Southern Mail",
        "content": "Press Conference Highlights: Dinamalar and Southern Mail",
        "year": 2022,
        "date": "2022-11-09",
        "category": "Conference",
        "sourceUrl": "https://mvdiabetes.com/press-conference-highlights-dinamalar-and-southern-mail/",
        "image": {
            "src": "/images/news/press-conference-highlights-dinamalar-and-southern-mail.jpg",
            "alt": "Press Conference Highlights: Dinamalar and Southern Mail",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/press-conference-highlights-dinamalar-and-southern-mail-1.jpg",
                "alt": "MV Diabetes - Press Conference Highlights: Dinamalar and Southern Mail"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16090",
        "slug": "dr-n-murugan-honored-highlights-diabetes-related-liver-disease",
        "title": "Dr. N. Murugan Honored: Highlights Diabetes-Related Liver Disease",
        "excerpt": "Dr. N. Murugan, Consultant Liver Specialist Chennai was honoured with the Prof. M. Viswanathan Honour Award on 27 October, 2022.",
        "content": "Dr. N. Murugan, Consultant Liver Specialist Chennai was honoured with the Prof. M. Viswanathan Honour Award on 27 October, 2022. He talked about the importance of liver disease which occurs in people with Diabetes NAFLD [Non alcoholic Fatty liver disease]. This condition leads to fibrosis and finally liver failure. We are happy to inform you that we have started a simple blood test in MV Hospital for Diabetes Royapuram to detect fibrosis in the liver.",
        "year": 2022,
        "date": "2022-10-27",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/dr-n-murugan-honored-highlights-diabetes-related-liver-disease/",
        "image": {
            "src": "/images/news/dr-n-murugan-honored-highlights-diabetes-related-liver-disease.png",
            "alt": "Dr. N. Murugan Honored: Highlights Diabetes-Related Liver Disease",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-16130",
        "slug": "dr-asha-fredrick-wins-prof-m-viswanathan-honour-award",
        "title": "Dr. Asha Fredrick Wins Prof. M. Viswanathan Honour Award",
        "excerpt": "On 09 June 2022, Dr. Asha Fredrick was honoured with Prof. M Viswanathan honour award at M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre, Royapuram Chennai.",
        "content": "On 09 June 2022, Dr. Asha Fredrick was honoured with Prof. M Viswanathan honour award at M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre, Royapuram Chennai.\n\nDr Asha Fredrick highlighted the various measures being taken by the Govt for TB elimination by the year 2025. Dr Vijay Viswanathan spoke on the RePORT India study funded by the Govt of India and Govt of USA where Prof M Viswanathan Diabetes Research Centre is a partner. The study found that people with TB have prolong",
        "year": 2022,
        "date": "2022-06-09",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/dr-asha-fredrick-wins-prof-m-viswanathan-honour-award/",
        "image": {
            "src": "/images/news/dr-asha-fredrick-wins-prof-m-viswanathan-honour-award.jpg",
            "alt": "Dr. Asha Fredrick Wins Prof. M. Viswanathan Honour Award",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/dr-asha-fredrick-wins-prof-m-viswanathan-honour-award-1.jpg",
                "alt": "MV Diabetes Dr. Asha Fredrick Wins Prof. M. Viswanathan Honour Award"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16172",
        "slug": "prof-m-viswanathan-update-2022-awards-new-clinic-launch",
        "title": "Prof. M Viswanathan Update 2022: Awards & New Clinic Launch",
        "excerpt": "Prof. M Viswanathan Diabetes & Diabetic Foot Update 2022 organized by M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre held in Ramada Plaza by Wyndham on 19 &…",
        "content": "Prof. M Viswanathan Diabetes & Diabetic Foot Update 2022 organized by M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre held in Ramada Plaza by Wyndham on 19 & 20 March 2022. Several delegates participated in this event.\n\n36th Edition of Prof. M Viswanathan Gold Medal Oration Award (Citation & Gold Medal) was presented to Dr. Vandana Gopikumar (Co-Founder The Banyan & The Banyan Academy of Leadership in Mental Health). Also seen, Dr. Vijay Viswanathan, Dr. Jayashree Gopal, Justice C V Karthikeyan & Dr. S. N. Narasingan (19 March 2022).\n\nLaunch of “Mind Well Being Clinic” in the M V Hospital For Diabetes, Royapuram, Chennai. Dr. Jayashreee Gopal (Associate Dean, Prof. MV DRC), Dr. Vijay Viswanathan (Head & Chief Diabetologist MV Hospital for Diabetes, President D-Foot International), Justice C V Karthikeyan (Judge Madras High Court), Dr. S. N. Narasingan (Associate Dean, Prof. MV DRC) and Dr. Vandana Gopikumar (Co-Founder The Banyan & The Banyan Academy of Leadership in Mental Health) (L to R) (19 March 2022).",
        "year": 2022,
        "date": "2022-03-19",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-update-2022-awards-new-clinic-launch/",
        "image": {
            "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch.jpg",
            "alt": "Prof. M Viswanathan Update 2022: Awards & New Clinic Launch",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-4.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-5.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-6.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-7.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-8.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-9.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-10.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-11.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-update-2022-awards-new-clinic-launch-12.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16183",
        "slug": "dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022",
        "title": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022",
        "excerpt": "Dr. Vijay Viswanathan, MD PhD FRCP, our Head and Chief Diabetologist was selected by 3 International jury for the Outstanding Researcher Award 2022 from the World India Diabetes…",
        "content": "Dr. Vijay Viswanathan, MD PhD FRCP, our Head and Chief Diabetologist was selected by 3 International jury for the Outstanding Researcher Award 2022 from the World India Diabetes Foundation (WIDF).\n\nThe WIDF is based in Mayo Clinic Rochester USA. The Award consists of a Cash prize, a plaque and delivering a lecture.",
        "year": 2022,
        "date": "2022-01-08",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022/",
        "image": {
            "src": "/images/news/dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022.png",
            "alt": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022-1.png",
                "alt": "WIDF 2022 -Outstanding Investigator Award (08 Jan 2022)"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022-2.jpg",
                "alt": "Award For Chennai Doctor"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16027",
        "slug": "mv-hospital-flu-vaccination-camp-for-amputees",
        "title": "MV Hospital Flu Vaccination Camp for Amputees",
        "excerpt": "M V Hospital for Diabetes held a Flu Vaccination Camp funded by Prof. M Viswanathan & Sarada Viswanathan Trust.",
        "content": "M V Hospital for Diabetes held a Flu Vaccination Camp funded by Prof. M Viswanathan & Sarada Viswanathan Trust.\n\nAmputed Patients, Lower Income group of patients enrolled with Madhaviamma Trust (Mother of Prof. M Viswanathan) were vaccinated.",
        "year": 2021,
        "date": "2021-11-15",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-flu-vaccination-camp-for-amputees/",
        "image": {
            "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees.jpg",
            "alt": "MV Hospital Flu Vaccination Camp for Amputees",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees-1.jpg",
                "alt": "MV Diabetes Treatment"
            },
            {
                "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees-2.jpg",
                "alt": "MV Diabetes Treatment"
            },
            {
                "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees-3.jpg",
                "alt": "MV Diabetes Treatment"
            },
            {
                "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees-4.jpg",
                "alt": "MV Diabetes Treatment"
            },
            {
                "src": "/images/news/mv-hospital-flu-vaccination-camp-for-amputees-5.jpg",
                "alt": "MV Diabetes Treatment"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15996",
        "slug": "highlights-from-world-diabetes-day-events-in-bangalore",
        "title": "Highlights from World Diabetes Day Events in Bangalore",
        "excerpt": "MV Centre for Diabetes Koramangala celebrated World Diabetes Day on Nov 14 by conducting a mini exhibition and a Quiz competition and giving prizes to people with diabetes.",
        "content": "MV Centre for Diabetes Koramangala celebrated World Diabetes Day on Nov 14 by conducting a mini exhibition and a Quiz competition and giving prizes to people with diabetes.",
        "year": 2021,
        "date": "2021-11-14",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/highlights-from-world-diabetes-day-events-in-bangalore/",
        "image": {
            "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore.jpg",
            "alt": "Highlights from World Diabetes Day Events in Bangalore",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore-4.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-world-diabetes-day-events-in-bangalore-5.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16041",
        "slug": "mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021",
        "title": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021",
        "excerpt": "M V Hospital for Diabetes Royapuram has taken up this Flagship project of Blue Lighting several buildings in Chennai for World Diabetes Day We have been doing it for the past 13 years…",
        "content": "M V Hospital for Diabetes Royapuram has taken up this Flagship project of Blue Lighting several buildings in Chennai for World Diabetes Day We have been doing it for the past 13 years continuously This year we lit blue Anna Centenary Library in Chennai which is the second largest library in Asia Followed by a Walkathon",
        "year": 2021,
        "date": "2021-11-13",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021/",
        "image": {
            "src": "/images/news/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021.jpg",
            "alt": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021-4.jpg",
                "alt": "MV Diabetes Hospital"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16056",
        "slug": "dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine",
        "title": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine",
        "excerpt": "Dr. Vijay Viswanathan was made a Faculty of Podiatry Medicine at the prestigious Royal College of Physicians and Surgeons of Glasgow (RSPSG) on 05 Oct 2021 evening at a virtual…",
        "content": "Dr. Vijay Viswanathan was made a Faculty of Podiatry Medicine at the prestigious Royal College of Physicians and Surgeons of Glasgow (RSPSG) on 05 Oct 2021 evening at a virtual function.",
        "year": 2021,
        "date": "2021-10-15",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine/",
        "image": {
            "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine.jpg",
            "alt": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-1.jpg",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-2.jpg",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-3.jpg",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-4.jpg",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-5.jpg",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine-6.jpg",
                "alt": "MV Diabetes Online Education"
            }
        ],
        "featured": false
    },
    {
        "id": "news-16061",
        "slug": "diabetology-fellowship-convocation-2021",
        "title": "Diabetology Fellowship Convocation 2021",
        "excerpt": "Convocation Ceremony of the Fellowship Certificate in Diabetology for the Batch of 2018, 2019 & 2020 was held on 28 Jan 2021 at M V Hospital for Diabetes & Prof.",
        "content": "Convocation Ceremony of the Fellowship Certificate in Diabetology for the Batch of 2018, 2019 & 2020 was held on 28 Jan 2021 at M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre, Royapuram, Chennai.\n\nDr. S. N Narasingan, Dean was the Chief Guest and Dr. Jayashree Gopal Associate Dean, Guest of Honour along with Dr Vijay Viswanathan Head and Chief Diabetologist",
        "year": 2021,
        "date": "2021-01-28",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/diabetology-fellowship-convocation-2021/",
        "image": {
            "src": "/images/news/diabetology-fellowship-convocation-2021.jpg",
            "alt": "Diabetology Fellowship Convocation 2021",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetology-fellowship-convocation-2021-1.jpg",
                "alt": "MV Diabetes"
            },
            {
                "src": "/images/news/diabetology-fellowship-convocation-2021-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/diabetology-fellowship-convocation-2021-3.jpg",
                "alt": "MV Diabetes Event"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15947",
        "slug": "world-diabetes-day-blue-lighting-gold-medal-oration",
        "title": "World Diabetes Day: Blue Lighting & Gold Medal Oration",
        "excerpt": "World Diabetes Events- Blue Lighting, Nurses/ Doctors Pledge",
        "content": "World Diabetes Events- Blue Lighting, Nurses/ Doctors Pledge\n\nProf. M Viswanathan Gold Medal Oration.",
        "year": 2020,
        "date": "2020-11-28",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/world-diabetes-day-blue-lighting-gold-medal-oration/",
        "image": {
            "src": "/images/news/world-diabetes-day-blue-lighting-gold-medal-oration.jpg",
            "alt": "World Diabetes Day: Blue Lighting & Gold Medal Oration",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15952",
        "slug": "mv-hospital-wins-top-prizes-at-48th-rssdi-meeting",
        "title": "MV Hospital Wins Top Prizes at 48th RSSDI Meeting",
        "excerpt": "48th Annual Digital Meeting of RSSDI -2020: MV HOSPITAL FOR DIABETES ROYAPURAM CHENNAI GOT THE FIRST AND SECOND PRIZE AMONG THE POSTERS IN THE NATIONAL DIABETES CONFERENCE OF RSSDI…",
        "content": "48th Annual Digital Meeting of RSSDI -2020: MV HOSPITAL FOR DIABETES ROYAPURAM CHENNAI GOT THE FIRST AND SECOND PRIZE AMONG THE POSTERS IN THE NATIONAL DIABETES CONFERENCE OF RSSDI from NOV 27 TO 29 2020 FOR THEIR TWO IMPORTANT RESEARCH PAPERS.",
        "year": 2020,
        "date": "2020-11-27",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting/",
        "image": {
            "src": "/images/news/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting.jpg",
            "alt": "MV Hospital Wins Top Prizes at 48th RSSDI Meeting",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting-1.png",
                "alt": "Reaching Out To The Unreached For Improving Diabetes Care"
            },
            {
                "src": "/images/news/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting-2.jpg",
                "alt": "Winners Announcement"
            },
            {
                "src": "/images/news/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting-3.jpg",
                "alt": "Poster 1 RSSDI 2020"
            },
            {
                "src": "/images/news/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting-4.jpg",
                "alt": "Nutritional Status Of Diabetes Patients"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15980",
        "slug": "patient-insights-world-diabetes-day-2020-webinar",
        "title": "Patient Insights: World Diabetes Day 2020 Webinar",
        "excerpt": "Our Doctors & Nurses taking a pledge to serve the people living with Diabetes on the occasion of World Diabetes Day which falls on 14 November.",
        "content": "## World Diabetes Day (14 Nov 2020)\n\nOur Doctors & Nurses taking a pledge to serve the people living with Diabetes on the occasion of World Diabetes Day which falls on 14 November.\n\nPatient Webinar- Conquer Diabetes (21 Nov 2020)\n\nOn the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Patient Webinar to solve their queries on Diabetes (Diabetes Control during lockdown, Prevent complications etc.).",
        "year": 2020,
        "date": "2020-11-21",
        "category": "Webinar",
        "sourceUrl": "https://mvdiabetes.com/patient-insights-world-diabetes-day-2020-webinar/",
        "image": {
            "src": "/images/news/patient-insights-world-diabetes-day-2020-webinar.png",
            "alt": "Patient Insights: World Diabetes Day 2020 Webinar",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15988",
        "slug": "mv-hospital-lights-chennai-blue-for-world-diabetes-day",
        "title": "MV Hospital Lights Chennai Blue for World Diabetes Day",
        "excerpt": "The MV Hospital for Diabetes Royapuram a WHO Collaborating Centre for Diabetes, lit Chennai Blue again for the 11’th year.This year we lit blue the famous Thiru Vi Ka Bridge across the…",
        "content": "The MV Hospital for Diabetes Royapuram a WHO Collaborating Centre for Diabetes, lit Chennai Blue again for the 11’th year.This year we lit blue the famous Thiru Vi Ka Bridge across the Adyar River. In the previous years we lit blue the iconic structures Chennai Central Railway Station, Chennai Light House, Ripon Building and so on.",
        "year": 2020,
        "date": "2020-11-12",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-lights-chennai-blue-for-world-diabetes-day/",
        "image": {
            "src": "/images/news/mv-hospital-lights-chennai-blue-for-world-diabetes-day.jpg",
            "alt": "MV Hospital Lights Chennai Blue for World Diabetes Day",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15964",
        "slug": "empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap",
        "title": "Empowering Nurses: MV Hospital’s World Diabetes Day Webinar 2020 Recap",
        "excerpt": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Webinar training programme for nurses regarding the Prevention and Control of Diabetes.",
        "content": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Webinar training programme for nurses regarding the Prevention and Control of Diabetes.\n\n490 nurses from all over India took an active part in this webinar on November 17 2020, and were educated on various aspects of Diabetes including how to take care of people living with Diabetes",
        "year": 2020,
        "date": "2020-10-17",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap/",
        "image": {
            "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap.jpg",
            "alt": "Empowering Nurses: MV Hospital’s World Diabetes Day Webinar 2020 Recap",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-1.png",
                "alt": "NIN National Institute Of Nutrition"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-2.png",
                "alt": "International Diabetes Federation"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-3.png",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-4.png",
                "alt": "International Diabetes Federation"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-5.png",
                "alt": "Effect On Nutrient Intakes Of HFSS Diet"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-6.png",
                "alt": "MV Diabetes Healthy Nutrition"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-7.png",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-8.png",
                "alt": "MV Diabetes Online Education"
            },
            {
                "src": "/images/news/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap-9.png",
                "alt": "MV Diabetes Online Education"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15784",
        "slug": "tamil-language-oratory-and-health-awareness-event",
        "title": "Tamil Language Oratory and Health Awareness Event",
        "excerpt": "Oratorical competition on “Tamil Language is the most classical language”. The participant were from different colleges from Chennai, Trichy, Madurai, Vellore etc.\n- Pattimandram on…",
        "content": "- Oratorical competition on “Tamil Language is the most classical language”. The participant were from different colleges from Chennai, Trichy, Madurai, Vellore etc.\n- Pattimandram on “Whether a Healthy lifestyle is possible in today’s busy schedule”- With Mr. Suki Sivam (Moderator), Mr. Mohanasundaram, Mrs. Shyamala\n- Poster display on Thirukkural & Medicine/ Healthy Living, Healthy lifestyle habits (Diet/ Education/ Footcare tips), Diabetic Footwear display, Special Millet preparation and tips for Diabetic people by M V Hospital for Diabetes team.",
        "year": 2019,
        "date": "2019-11-14",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/tamil-language-oratory-and-health-awareness-event/",
        "image": {
            "src": "/images/news/tamil-language-oratory-and-health-awareness-event.jpg",
            "alt": "Tamil Language Oratory and Health Awareness Event",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-4.jpg",
                "alt": "MV Diabetes Slippers"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-5.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-6.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/tamil-language-oratory-and-health-awareness-event-7.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15805",
        "slug": "valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon",
        "title": "Valluvar Kottam Chariot Turns Blue for Diabetes Awareness Walkathon",
        "excerpt": "Blue lighting of Valluvar Kottam Chairot was done by Hon’ble Minister for Tamil Development, Culture & Archeology and Dr.",
        "content": "- Blue lighting of Valluvar Kottam Chairot was done by Hon’ble Minister for Tamil Development, Culture & Archeology and Dr. Vijay Viswanathan, Head & Chief Diabetologist M V Hospital for Diabetes, Royapuram, Chennai on 13 November 2019.\n- Walkathon around the chariot by all the attendees to promote Healthy lifestyle habit in everyone. Approximately 200 people (MVH Staff, Pharmaceuical companies and Valluvar Kottam staff participated).",
        "year": 2019,
        "date": "2019-11-13",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon/",
        "image": {
            "src": "/images/news/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon.jpg",
            "alt": "Valluvar Kottam Chariot Turns Blue for Diabetes Awareness Walkathon",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon-2.jpg",
                "alt": "MV Diabetes Event"
            },
            {
                "src": "/images/news/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon-3.jpg",
                "alt": "MV Diabetes Centre"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15876",
        "slug": "indo-us-uk-conclave-2019-global-diabetes-summit-highlights",
        "title": "Indo US UK Conclave 2019: Global Diabetes Summit Highlights",
        "excerpt": "Indo US UK Conclave 2019 organized by M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre held in Hyatt Regency on 07 & 08 September 2019.",
        "content": "- Indo US UK Conclave 2019 organized by M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre held in Hyatt Regency on 07 & 08 September 2019. More than 300 delegates participated in this event.\n- Inauguration 1 – Release of the document on “Prevention of Amputation and Kidney Diseases by early Diagnosis for Primary Care Physicians in India” by Dr. Eva Feldman (Past President of American Neurological Association). Also seen Prof. Andrew J. M. Boulton (President Elect-International Diabetes Federation), Dr. Jayashreee Gopal (Associate Dean, Prof. MV DRC), Dr.\n- Vijay Viswanathan (Head & Chief Diabetologist MV Hospital for Diabetes, President-Elect D-Foot International). (07 Sep 2019)\nInauguration 2- Felicitation of the International & National Faculty available at the time of Inauguration. (07 Sep 2019)\n- 34th Edition of Prof. M Viswanathan Gold Medal Oration Award (Citation & Gold Medal) was presented to Prof. Andrew J. M. Boulton, President Elect-International Diabetes Federation. Also seen Dr. Vijay Viswanathan & Dr. Jayashree Gopal (07 Sep 2019)\n- Dr. Jayesh Shah, President of American College of Hyperbaric Medicine being presented with a citation & First DFRI Gold Medal. Also seen Dr. Vijay Viswanathan, Dr. Ashraf & Dr. Venu Kavarthapu (07 Sep 2019)",
        "year": 2019,
        "date": "2019-09-08",
        "category": "Conference",
        "sourceUrl": "https://mvdiabetes.com/indo-us-uk-conclave-2019-global-diabetes-summit-highlights/",
        "image": {
            "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights.jpg",
            "alt": "Indo US UK Conclave 2019: Global Diabetes Summit Highlights",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights-1.jpg",
                "alt": "Release of Document- Inauguration (1)"
            },
            {
                "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights-2.jpg",
                "alt": "Felicitation of International & National Faculty - Inauguration (2)"
            },
            {
                "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights-3.jpg",
                "alt": "Prof. A M Boulton - Gold Medal Oration 2019"
            },
            {
                "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights-4.jpg",
                "alt": "Indo US UK Update Sep 2019"
            },
            {
                "src": "/images/news/indo-us-uk-conclave-2019-global-diabetes-summit-highlights-5.jpg",
                "alt": "Dr. Jayesh Shah- First DFRI Gold Medal"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15883",
        "slug": "founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya",
        "title": "Founders Day Celebration : MV Hospital for Diabetes Supports Karunalaya",
        "excerpt": "Financial support provided by Prof. M Viswanathan & Sarada Viswanathan Memorial Trust to KARUNALAYA, an organization working for Street and Working Children. Also seen Dr.",
        "content": "Financial support provided by Prof. M Viswanathan & Sarada Viswanathan Memorial Trust to KARUNALAYA, an organization working for Street and Working Children. Also seen Dr. Paul Sunder Singh (Founder & Secretary of Karunalaya) And Dr. Vijay Viswanathan, Head & Cheif Diabetologist M V Hospital for Diabetes\n\nMV Hospital for Diabetes Team who have completed 25 years & more in this organization with Dr. Vijay Viswananthan, Head & Cheif Diabetologist.\n\nMV Hospital for Diabetes Team who have completed 15 years & more in this organization with Dr. Vijay Viswananthan, Head & Cheif Diabetologist.",
        "year": 2019,
        "date": "2019-08-27",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya/",
        "image": {
            "src": "/images/news/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya.jpg",
            "alt": "Founders Day Celebration : MV Hospital for Diabetes Supports Karunalaya",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya-1.jpg",
                "alt": "CSR Activity of MVH - Karunalaya"
            },
            {
                "src": "/images/news/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya-2.jpg",
                "alt": "MVH Staff completed 25 years"
            },
            {
                "src": "/images/news/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya-3.jpg",
                "alt": "MVH Staff completed 15 years"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15768",
        "slug": "celebrating-prof-m-viswananthans-96th-birth-anniversary",
        "title": "Celebrating Prof. M Viswananthan’s 96th Birth Anniversary",
        "excerpt": "M V Hospital team paying homage on the 96th Birth Anniversary of our Founder, Prof. M Viswananthan, who is considered as the Father of Diabetology in India.",
        "content": "M V Hospital team paying homage on the 96th Birth Anniversary of our Founder, Prof. M Viswananthan, who is considered as the Father of Diabetology in India.",
        "year": 2019,
        "date": "2019-08-26",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/celebrating-prof-m-viswananthans-96th-birth-anniversary/",
        "image": {
            "src": "/images/news/celebrating-prof-m-viswananthans-96th-birth-anniversary.jpg",
            "alt": "Celebrating Prof. M Viswananthan’s 96th Birth Anniversary",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15869",
        "slug": "honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams",
        "title": "Honoring Dr. Vijay Viswanathan and the Canteen, Security, and Housekeeping Teams",
        "excerpt": "Dr. Vijay Viswanathan, Head & Chief Dicetologist M V Hospital for Diabetes, with the Canteen Service Team (22 Aug 2019).\n- Dr.",
        "content": "- Dr. Vijay Viswanathan, Head & Chief Dicetologist M V Hospital for Diabetes, with the Canteen Service Team (22 Aug 2019).\n- Dr. Vijay Viswanathan, Head & Chief Dicetologist M V Hospital for Diabetes, with the Security Service Team (22 Aug 2019).\n- Dr. Vijay Viswanathan, Head & Chief Dicetologist M V Hospital for Diabetes, with the House Keeping Team (22 Aug 2019).",
        "year": 2019,
        "date": "2019-08-22",
        "category": "News",
        "sourceUrl": "https://mvdiabetes.com/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams/",
        "image": {
            "src": "/images/news/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams.png",
            "alt": "Honoring Dr. Vijay Viswanathan and the Canteen, Security, and Housekeeping Teams",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams-1.jpg",
                "alt": "Class 4 - Security Service Team"
            },
            {
                "src": "/images/news/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams-2.jpg",
                "alt": "Class 4 - House Keeping Team"
            },
            {
                "src": "/images/news/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams-3.jpg",
                "alt": "Canteen Service Team"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15774",
        "slug": "dr-vijay-viswanathan-elected-first-asian-president-of-d-foot-international",
        "title": "Dr. Vijay Viswanathan Elected First Asian President of D-Foot International",
        "excerpt": "Dr. Vijay Viswanathan (Head & Chief Diabetologist, M V Hospital for Diabetes) is elected as the First Asian President of the D Foot International (which represents 193 countries in the…",
        "content": "- Dr. Vijay Viswanathan (Head & Chief Diabetologist, M V Hospital for Diabetes) is elected as the First Asian President of the D Foot International (which represents 193 countries in the world).\n- He was elected unanimously in the elections held on 21 May 2019 late evening at Hague, Holland.",
        "year": 2019,
        "date": "2019-05-21",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-elected-first-asian-president-of-d-foot-international/",
        "image": {
            "src": "/images/news/dr-vijay-viswanathan-elected-first-asian-president-of-d-foot-international.jpg",
            "alt": "Dr. Vijay Viswanathan Elected First Asian President of D-Foot International",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15481",
        "slug": "international-womens-day-celebration-at-m-v-hospital-for-diabetes",
        "title": "International Womens Day Celebration at M V Hospital for Diabetes",
        "excerpt": "As a part of International Womens Day Celebration, we organized a lecture by Dr. Usha Sriram, HoD, TAG VHS Endocrinology and Diabetes Centre, Voluntary Health Services, Taramani.",
        "content": "- As a part of International Womens Day Celebration, we organized a lecture by Dr. Usha Sriram, HoD, TAG VHS Endocrinology and Diabetes Centre, Voluntary Health Services, Taramani. She spoke about “Women & Diabetes”, research, facts, current status, care, education and support required to handle female patients. Few Invited doctors and all the employees of M V Hospital for Diabetes & Branches attended.\n- Group photo of all MV Hospital Female Employees.",
        "year": 2019,
        "date": "2019-03-07",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/international-womens-day-celebration-at-m-v-hospital-for-diabetes/",
        "image": {
            "src": "/images/news/international-womens-day-celebration-at-m-v-hospital-for-diabetes.jpg",
            "alt": "International Womens Day Celebration at M V Hospital for Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/international-womens-day-celebration-at-m-v-hospital-for-diabetes-1.jpg",
                "alt": "M V H Photo"
            },
            {
                "src": "/images/news/international-womens-day-celebration-at-m-v-hospital-for-diabetes-2.jpg",
                "alt": "MV Diabetes Event"
            },
            {
                "src": "/images/news/international-womens-day-celebration-at-m-v-hospital-for-diabetes-3.jpg",
                "alt": "MV Diabetes Event"
            },
            {
                "src": "/images/news/international-womens-day-celebration-at-m-v-hospital-for-diabetes-4.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15845",
        "slug": "remembering-prof-m-viswanathan-community-health-initiatives",
        "title": "Remembering Prof M Viswanathan: Community Health Initiatives",
        "excerpt": "On the occasion of 23rd Death Anniversary of our Founder Prof M Viswanathan on March 1 2019 we organized few social activities in the hospital premises.",
        "content": "On the occasion of 23rd Death Anniversary of our Founder Prof M Viswanathan on March 1 2019 we organized few social activities in the hospital premises.",
        "year": 2019,
        "date": "2019-03-01",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/remembering-prof-m-viswanathan-community-health-initiatives/",
        "image": {
            "src": "/images/news/remembering-prof-m-viswanathan-community-health-initiatives.jpg",
            "alt": "Remembering Prof M Viswanathan: Community Health Initiatives",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15850",
        "slug": "diabetes-tuberculosis-link-dr-vijay-viswanathans-insights",
        "title": "Diabetes-Tuberculosis Link: Dr. Vijay Viswanathan’s Insights",
        "excerpt": "Dr Vijay Viswanathan Head and Chief Diabetologist MV Hospital for Diabetes was invited by the Association of Physicians of India to give a talk at their Annual conference on Feb 8…",
        "content": "- Dr Vijay Viswanathan Head and Chief Diabetologist MV Hospital for Diabetes was invited by the Association of Physicians of India to give a talk at their Annual conference on Feb 8 2019\n- Dr VIjay Viswanathan spoke on the studies done at Prof M Viswanathan Diabetes Research Centre Chennai on the connection between Diabetes and TB",
        "year": 2019,
        "date": "2019-02-08",
        "category": "Conference",
        "sourceUrl": "https://mvdiabetes.com/diabetes-tuberculosis-link-dr-vijay-viswanathans-insights/",
        "image": {
            "src": "/images/news/diabetes-tuberculosis-link-dr-vijay-viswanathans-insights.jpg",
            "alt": "Diabetes-Tuberculosis Link: Dr. Vijay Viswanathan’s Insights",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetes-tuberculosis-link-dr-vijay-viswanathans-insights-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/diabetes-tuberculosis-link-dr-vijay-viswanathans-insights-2.jpg",
                "alt": "Dr. Vijay Vishwanathan"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15475",
        "slug": "mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness",
        "title": "MV Hospital for Diabetes Hosts Free RTO Camp for Road Safety Awareness",
        "excerpt": "Free RTO Camp organized by MV Hospital for Diabetes on 08 Feb 2019 As a part of “Road safety Awareness week” throughout the state, M V Hospital for Diabetes organized a camp in RTO…",
        "content": "Free RTO Camp organized by MV Hospital for Diabetes on 08 Feb 2019 As a part of “Road safety Awareness week” throughout the state, M V Hospital for Diabetes organized a camp in RTO Office at Puliyanthope. The participants were both the office staff as well as general population who were applying for license.",
        "year": 2019,
        "date": "2019-02-08",
        "category": "Camp",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness/",
        "image": {
            "src": "/images/news/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness.jpg",
            "alt": "MV Hospital for Diabetes Hosts Free RTO Camp for Road Safety Awareness",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness-1.jpg",
                "alt": "RTO Camp Feb 2019- 2"
            },
            {
                "src": "/images/news/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness-2.jpg",
                "alt": "RTO Camp Feb 2019 -4"
            },
            {
                "src": "/images/news/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness-3.jpg",
                "alt": "RTO Camp Feb 2019 -5"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15448",
        "slug": "top-honours-at-rssdi-national-conference-2018",
        "title": "Top Honours at RSSDI National Conference 2018",
        "excerpt": "Prof M Viswanathan Diabetes Research Centre and MV Hospital for Diabetes Royapuram won top honours at the biggest Diabetes meeting in India, the RSSDI National Conference, held at…",
        "content": "Prof M Viswanathan Diabetes Research Centre and MV Hospital for Diabetes Royapuram won top honours at the biggest Diabetes meeting in India, the RSSDI National Conference, held at Ahmedabad on Nov 23 and 24 2018. The RSSDI is the biggest Diabetes Association in India with 6000 Diabetologists from all over India.\n\n- MVH and Prof MVDRC got the Best Research Poster Presentation Award.\n- Our Institution presented 7 original Research Papers, the highest number from any Diabetic Centre in India",
        "year": 2018,
        "date": "2018-11-26",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/top-honours-at-rssdi-national-conference-2018/",
        "image": {
            "src": "/images/news/top-honours-at-rssdi-national-conference-2018.jpg",
            "alt": "Top Honours at RSSDI National Conference 2018",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/top-honours-at-rssdi-national-conference-2018-1.jpg",
                "alt": "RSSDI 2018 1(A)"
            },
            {
                "src": "/images/news/top-honours-at-rssdi-national-conference-2018-2.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15470",
        "slug": "m-v-hospital-honors-army-jawans-on-world-diabetes-day",
        "title": "M V Hospital Honors Army Jawans on World Diabetes Day",
        "excerpt": "M V Hospital for Diabetes Royapuram pays Homage to Army Jawans on World Diabetes Day by lighting the War Memorial Blue.",
        "content": "M V Hospital for Diabetes Royapuram pays Homage to Army Jawans on World Diabetes Day by lighting the War Memorial Blue. This is a record 10’th year we are lighting all the iconic buildings blue in Chennai.\n\n- War Memorial is decked up with blue light on the eve of World Diabetes Day.\n- Dr. Vijay Viswanathan, Head & Chief Diabetologist and staff of M V Hospital for Diabetes in front of War Memorial",
        "year": 2018,
        "date": "2018-11-14",
        "category": "Awareness",
        "sourceUrl": "https://mvdiabetes.com/m-v-hospital-honors-army-jawans-on-world-diabetes-day/",
        "image": {
            "src": "/images/news/m-v-hospital-honors-army-jawans-on-world-diabetes-day.jpg",
            "alt": "M V Hospital Honors Army Jawans on World Diabetes Day",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/m-v-hospital-honors-army-jawans-on-world-diabetes-day-1.jpg",
                "alt": "RSSDI 2018 1(A)"
            },
            {
                "src": "/images/news/m-v-hospital-honors-army-jawans-on-world-diabetes-day-2.jpg",
                "alt": "RSSDI 2018 1(A)"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15454",
        "slug": "33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha",
        "title": "33rd Prof. M. Viswanathan Gold Medal Oration Award Presented to Dr. V. Shantha",
        "excerpt": "33rd edition of Prof. M. Viswanathan Gold Medal Oration Award held at a function in Chennai on 13-10-2018",
        "content": "33rd edition of Prof. M. Viswanathan Gold Medal Oration Award held at a function in Chennai on 13-10-2018\n\nWomen Wellness Clinic in M V Hospital for Diabetes, Royapuram\n\nDr. V. Shantha, an eminent Indian oncologist and the chairperson of Adyar Cancer Institute (WIA), Chennai being presented with a Citation and Gold Medal by Dr.Vijay Viswanathan, Head & Chief Diabetologist [Centre], Dr. S. N. Narasingan, Dean [left] & Dr. Jayshree Gopal, Associate Dean, [right] Prof. M.Viswanathan Diabetes Research Centre Royapurm are also seen in the picture.",
        "year": 2018,
        "date": "2018-10-01",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha/",
        "image": {
            "src": "/images/news/33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha.jpg",
            "alt": "33rd Prof. M. Viswanathan Gold Medal Oration Award Presented to Dr. V. Shantha",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha-1.jpg",
                "alt": "MV-THE HINDU PG NO 4 DATE 14-10-18"
            },
            {
                "src": "/images/news/33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha-2.jpg",
                "alt": "MV-NEWS TODAY PG NO.3 DATE 16.10.18"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15443",
        "slug": "dr-anuradha-dhanasekar-receives-prof-m-viswanathan-honour-award-2017",
        "title": "Dr. Anuradha Dhanasekar Receives Prof. M. Viswanathan Honour Award 2017",
        "excerpt": "Prof. M.VISWANATHAN HONOUR AWARD 2017 presented to Dr.Anuradha Dhanasekar Ph.D Director and Head, Center for Biotechnology, Anna University, Chennai on 20-04-17.",
        "content": "Prof. M.VISWANATHAN HONOUR AWARD 2017 presented to Dr.Anuradha Dhanasekar Ph.D Director and Head, Center for Biotechnology, Anna University, Chennai on 20-04-17.",
        "year": 2017,
        "date": "2017-10-20",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/dr-anuradha-dhanasekar-receives-prof-m-viswanathan-honour-award-2017/",
        "image": {
            "src": "/images/news/dr-anuradha-dhanasekar-receives-prof-m-viswanathan-honour-award-2017.jpg",
            "alt": "Dr. Anuradha Dhanasekar Receives Prof. M. Viswanathan Honour Award 2017",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15420",
        "slug": "prof-luigi-gnudi-receives-prof-m-viswanathan-award-at-2016-event",
        "title": "Prof. Luigi Gnudi Receives Prof. M. Viswanathan Award at 2016 Event",
        "excerpt": "Dr.Luigi Gnudi, Professor, Diabetes & Metabolic Medicine, Kings College, London conferred with Prof. M. Viswanathan Honour Award with a citation and a bust. Dr.",
        "content": "DIABETIC NEPHROPATHY UPDATE AND PROF. M. VISWANATHAN HONOUR AWARD-2016 ORGANIZED BY PROF. M. VISWANATHAN DIABETES RESEARCH CENTRE ROYAPURAM ON 11-09-2016.\n\nDr.Luigi Gnudi, Professor, Diabetes & Metabolic Medicine, Kings College, London conferred with Prof. M. Viswanathan Honour Award with a citation and a bust. Dr. Vijay Viswanathan, Head & Chief Diabetologist, M.V.Hospital for Diabetes (right) and Dr. S.N. Narasinghan, Dean, Prof. M. Viswanathan Diabetes Research Centre (left) are also seen.",
        "year": 2016,
        "date": "2016-10-11",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-luigi-gnudi-receives-prof-m-viswanathan-award-at-2016-event/",
        "image": {
            "src": "/images/news/prof-luigi-gnudi-receives-prof-m-viswanathan-award-at-2016-event.jpg",
            "alt": "Prof. Luigi Gnudi Receives Prof. M. Viswanathan Award at 2016 Event",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15427",
        "slug": "gold-medal-oration-award-lifetime-achievement-award-2016",
        "title": "Gold Medal Oration Award & Lifetime Achievement Award 2016",
        "excerpt": "31 st EDITION OF PROF. M. VISWANATHAN GOLD MEDAL ORATION AWARD 2016 & CONFERRING LIFE TIME ACHIEVEMENT AWARD HELD ON SUNDAY, 19 TH JUNE, 2016 IN CHENNAI.",
        "content": "31 st EDITION OF PROF. M. VISWANATHAN GOLD MEDAL ORATION AWARD 2016 & CONFERRING LIFE TIME ACHIEVEMENT AWARD HELD ON SUNDAY, 19 TH JUNE, 2016 IN CHENNAI.\n\nDr. S. Geethalakshmi, Vice Chancellor, The Tamil Nadu DR.M.G.R. Medical University addressing the gathering. From left to right, Dr. Vijay Viswanathan, Head & Chief Diabetologist, M.V.Hospital for Diabetes, Dr. Sunil D. Khaparde, Deputy Director General, Ministry of Health & Family Welfare, Government of India, [Head, Central TB Division] and Dr. S.N.Narasingan, Dean, Prof.M.V.DRC are also seen on the dais.",
        "year": 2016,
        "date": "2016-06-19",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/gold-medal-oration-award-lifetime-achievement-award-2016/",
        "image": {
            "src": "/images/news/gold-medal-oration-award-lifetime-achievement-award-2016.jpg",
            "alt": "Gold Medal Oration Award & Lifetime Achievement Award 2016",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15429",
        "slug": "mou-signing-srm-research-institute-and-prof-m-viswanathan-diabetes-research-centre",
        "title": "MoU Signing: SRM Research Institute and Prof. M. Viswanathan Diabetes Research Centre",
        "excerpt": "An MoU signed between SRM Research Institute, SRM University and Prof. M. Viswanathan Diabetes Research Centre, Royapuram Chennai on 03-05-2016 focusing on ‘advanced research’.",
        "content": "An MoU signed between SRM Research Institute, SRM University and Prof. M. Viswanathan Diabetes Research Centre, Royapuram Chennai on 03-05-2016 focusing on ‘advanced research’.\n\nDr. Dhamodharan Umapathy, Post Doctoral Fellow, SRM Research Institute, Chennai Dr. K.M.Ram Kumar Ph.D, Assistant Professor, SRM Research, Chennai Dr. Vijay Viswanathan, M.D, Ph.D, President, Prof.M. Viswanathan Diabetes Research Centre Mr. Bhaskar, Financial Advisor, Prof.M. Viswanathan Diabetes Research Centre",
        "year": 2016,
        "date": "2016-05-03",
        "category": "Partnership",
        "sourceUrl": "https://mvdiabetes.com/mou-signing-srm-research-institute-and-prof-m-viswanathan-diabetes-research-centre/",
        "image": {
            "src": "/images/news/mou-signing-srm-research-institute-and-prof-m-viswanathan-diabetes-research-centre.jpg",
            "alt": "MoU Signing: SRM Research Institute and Prof. M. Viswanathan Diabetes Research Centre",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15372",
        "slug": "honoring-social-service-prof-m-viswanathan-awards-2015",
        "title": "Honoring Social Service: Prof. M. Viswanathan Awards 2015",
        "excerpt": "Dr. J. Radhakrishnan, IAS Secretary to Govt., Health & Family Welfare Department is presenting a memento to Dr.V.Shanta, Chairperson, Cancer Institute(W.I.A) Adyar. Dr.",
        "content": "PRESENTATION OF PROF. M. VISWANATHAN SELFLESS SERVICE AWARD AND PROF. M. VISWANATHAN OUTSTANDING SOCIAL SERVICE AWARD-2015 ON THE OCCASION OF FOUNDER’S DAY CELEBRATION HELD IN CHENNAI ON 26-08-2015.\n\nDr. J. Radhakrishnan, IAS Secretary to Govt., Health & Family Welfare Department is presenting a memento to Dr.V.Shanta, Chairperson, Cancer Institute(W.I.A) Adyar. Dr. N.Paul Sunder Singh, Founder Director Karunalaya extreme right and Dr.Vijay Viswanathan, Head & Chief Diabetologist, M.V. Hospital for Diabetes, Royapuram extreme left are seen in the picture.",
        "year": 2015,
        "date": "2015-08-26",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/honoring-social-service-prof-m-viswanathan-awards-2015/",
        "image": {
            "src": "/images/news/honoring-social-service-prof-m-viswanathan-awards-2015.jpg",
            "alt": "Honoring Social Service: Prof. M. Viswanathan Awards 2015",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15377",
        "slug": "mou-signing-schizophrenia-and-diabetes-research-collaboration",
        "title": "MoU Signing: Schizophrenia and Diabetes Research Collaboration",
        "excerpt": "SIGNING OF MoU BETWEEN SCHIZOPHRENIA RESEARCH FOUNDATION AND PROF. M. VISWANATHAN DIABETES RESEARCH CENTRE ON THURSDAY 23RD APRIL, 2015 AT THE HOSPITAL AUDITORIUM, ROYAPURAM, CHENNAI.",
        "content": "SIGNING OF MoU BETWEEN SCHIZOPHRENIA RESEARCH FOUNDATION AND PROF. M. VISWANATHAN DIABETES RESEARCH CENTRE ON THURSDAY 23RD APRIL, 2015 AT THE HOSPITAL AUDITORIUM, ROYAPURAM, CHENNAI.\n\nDr. Vijay Viswanathan, Head & Chief Diabetologist, M.V.Hospital for Diabetes and President Prof. M. Viswanthan Diabetes Research Centre Royapuram exchanging the MoU with Dr. V.Sridhar of Schizophrenia Research Foundation. The two WHO Collaborating centers will focus on the psycho social aspects in Diabetes and to develop methods to improve the mental wellbeing in people with Diabetes. Photo(right) Dr. Vijay Viswanathan is presenting a memento to Dr.V. Sridhar.",
        "year": 2015,
        "date": "2015-04-23",
        "category": "Partnership",
        "sourceUrl": "https://mvdiabetes.com/mou-signing-schizophrenia-and-diabetes-research-collaboration/",
        "image": {
            "src": "/images/news/mou-signing-schizophrenia-and-diabetes-research-collaboration.jpg",
            "alt": "MoU Signing: Schizophrenia and Diabetes Research Collaboration",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/mou-signing-schizophrenia-and-diabetes-research-collaboration-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/mou-signing-schizophrenia-and-diabetes-research-collaboration-2.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15385",
        "slug": "a-decade-as-who-collaborating-center-milestones-in-diabetes-care",
        "title": "A Decade as WHO Collaborating Center: Milestones in Diabetes Care",
        "excerpt": "Commemmoration Of ‘One Decade’ As A Who Collaborating Center For Research, Education And Training In Diabetes, Launch Of Diabetes Care In The Elderly People Of Chennai City, Prof M.",
        "content": "Commemmoration Of ‘One Decade’ As A Who Collaborating Center For Research, Education And Training In Diabetes, Launch Of Diabetes Care In The Elderly People Of Chennai City, Prof M. Viswanathan Oration Gold Medal And Drc Oration Gold Medal Held in Chennai.\n\nDr.J.Radhakrishnan, I.A.S., Principal Secretary to Government, Department of Health & Family Welfare, Government of Tamil Nadu 2nd from right releasing the Souvenir on Commemoration of ‘One Decade’ as a WHO collaborating center for Research, Education and Training in Diabetes. Dr.Anil Kapur, Former Managing Director, World Diabetes Foundation extreme left, Dr.Vijay Viswanathan, Head & Chief Diabetologist of the Institute 2nd from left and Dr.Soumya Swaminathan, Director, National Institute for Research in Tuberculosis extreme right getting the Prof.MVDRC Gold Medal-2015.",
        "year": 2015,
        "date": "2015-01-18",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/a-decade-as-who-collaborating-center-milestones-in-diabetes-care/",
        "image": {
            "src": "/images/news/a-decade-as-who-collaborating-center-milestones-in-diabetes-care.jpg",
            "alt": "A Decade as WHO Collaborating Center: Milestones in Diabetes Care",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/a-decade-as-who-collaborating-center-milestones-in-diabetes-care-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15288",
        "slug": "prof-viswanathan-award-2014",
        "title": "Prof Viswanathan Award 2014",
        "excerpt": "PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014.",
        "content": "PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014.\n\nPROF. M. VISWANATHAN HONOUR AWARD CARRYING HIS BUST BEING PRESENTED TO SHRI K. MURALI, DIRECTOR, CENTRAL FOOTWEAR TRAININING INSTITUTE BY DR. VIJAY VISWANATHAN, HEAD & CHIEF DIABETOLOGIST, M.V.HOSPITAL FOR DIABETES, ROYAPURAM. PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014.",
        "year": 2014,
        "date": "2014-08-28",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-viswanathan-award-2014/",
        "image": {
            "src": "/images/news/prof-viswanathan-award-2014.jpg",
            "alt": "Prof Viswanathan Award 2014",
            "status": "available"
        },
        "gallery": [],
        "featured": false
    },
    {
        "id": "news-15257",
        "slug": "indo-us-diabetic-complications-update-2013-dr-seaquist-honored",
        "title": "Indo-US Diabetic Complications Update 2013: Dr. Seaquist Honored",
        "excerpt": "Dr.Elizabeth R. Seaquist, President, American Diabetes Association receiving Citation of the Prof. M. Viswanthan Diabetes Research Centre Gold Medal Oration Award-2013 from Dr. S.M.",
        "content": "INDO US UPDATE ON DIABETIC COMPLICATIONS MARCH 15TH &16TH AT HYATT REGENCY CHENNAI.\n\nDr.Elizabeth R. Seaquist, President, American Diabetes Association receiving Citation of the Prof. M. Viswanthan Diabetes Research Centre Gold Medal Oration Award-2013 from Dr. S.M. Sadikot, President Elect International Diabetes Federation and President of Diabetes India. Dr. Vijay Viswanathan, Head & Chief Diabetologist, M.V.Hospital for Diabetes, Royapuram, Dr. S.N.Narasingan Dean, M.V.Hospital for Diabetes, 2nd from right and Dr. A. Muruganathan, Immediate Past President of API (extreme right) are also seen. Photo right (standing from left Dr. Clinton, Dr.Gojka Roglic, Dr.Nicholas J Lowery, Dr. Vijay Viswanathan, Dr. S.M. Sadikot, Dr.S.N.Narasingan, Dr. A. Muruganathan, Dr.Eva Feldman and Dr. Elizabeth R. Seaquist after being honoured with mementos.",
        "year": 2013,
        "date": "2013-03-15",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/indo-us-diabetic-complications-update-2013-dr-seaquist-honored/",
        "image": {
            "src": "/images/news/indo-us-diabetic-complications-update-2013-dr-seaquist-honored.jpg",
            "alt": "Indo-US Diabetic Complications Update 2013: Dr. Seaquist Honored",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/indo-us-diabetic-complications-update-2013-dr-seaquist-honored-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15251",
        "slug": "drc-40th-anniversary-awards-and-indo-pak-diabetes-program",
        "title": "DRC 40th Anniversary: Awards and Indo-Pak Diabetes Program",
        "excerpt": "On the occasion of the 40 years diabetes research by DRC, Life Time Achievement Award was presented to Prof. Shantharam, Vice Chancellor, Dr. MGR Medical University, Tamil Nadu. Prof.",
        "content": "On the occasion of the 40 years diabetes research by DRC, Life Time Achievement Award was presented to Prof. Shantharam, Vice Chancellor, Dr. MGR Medical University, Tamil Nadu. Prof. M Viswanathan National Award for excellence in medical teaching and medical care was awarded to Prof. K Srinivasan, Consultant Physician & Neurologist, Madurai and Dr. John E. Anderson, President, American Diabetes Association was honoured with the DRC Oration Gold Medal – 2012 and a Citation. Yet another initiative was the launch of Indo-Pakistan Diabetes prevention program with the exchange of MoU between Dr.Vijay Viswanathan, President, Prof. M. Viswanathan Diabetes Research Centre, Chennai, India and Prof. Samad Shera, Director, Secretary General, Diabetes Association of Pakistan and the launch of logo depicting 40 years of diabetes research.",
        "year": 2013,
        "date": "2013-02-03",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/drc-40th-anniversary-awards-and-indo-pak-diabetes-program/",
        "image": {
            "src": "/images/news/drc-40th-anniversary-awards-and-indo-pak-diabetes-program.jpg",
            "alt": "DRC 40th Anniversary: Awards and Indo-Pak Diabetes Program",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/drc-40th-anniversary-awards-and-indo-pak-diabetes-program-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15245",
        "slug": "prof-m-viswanathan-honour-award-2012-at-taj-club-house",
        "title": "Prof. M. Viswanathan Honour Award 2012 at Taj Club House",
        "excerpt": "Dr.Peter Rossing, Head of Research & Chief Physician, Steno Diabetes Center, Denmark receiving annual Prof. M.Viswanathan Honour Award that contains bust and citation from…",
        "content": "PROF. M. VISWANATHAN HONOUR AWARD HELD AT TAJ CLUB HOUSE CHENNAI ON 1ST DECEMBER, 2012.\n\nDr.Peter Rossing, Head of Research & Chief Physician, Steno Diabetes Center, Denmark receiving annual Prof. M.Viswanathan Honour Award that contains bust and citation from Dr.V.Kanagasabai, Dean, Madras Medical College and Rajiv Gandhi Government General Hospital, Chennai. Dr.Vijay Viswanathan, Head & Chief Diabetologist (left) and Dr.Narasinghan, Dean(right) are also seen.",
        "year": 2012,
        "date": "2012-12-01",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-honour-award-2012-at-taj-club-house/",
        "image": {
            "src": "/images/news/prof-m-viswanathan-honour-award-2012-at-taj-club-house.jpg",
            "alt": "Prof. M. Viswanathan Honour Award 2012 at Taj Club House",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/prof-m-viswanathan-honour-award-2012-at-taj-club-house-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15239",
        "slug": "drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012",
        "title": "DRC Gold Medal and Prof. M. Viswanathan Award Ceremony 2012",
        "excerpt": "DRC Gold Medal Oration Award – 2011 & the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care were held at Russian Cultural Centre, Chennai on…",
        "content": "DRC Gold Medal Oration Award – 2011 & the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care were held at Russian Cultural Centre, Chennai on Saturday, 17th of March, 2012. Mr. Mike Nithavrianakis, British Deputy High Commissioner, Chennai was the Chief Guest. He gave away DRC Gold Medal & Citation to Dr. Anoop Misra, Director, Centre of Internal Medicine, Fortis Hospital, Vasant Kunj, New Delhi and the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care to Dr. Ramchandra Dattatraya Lele, Emeritus Professor, National Academy of Medical Sciences, India. A panel discussion on ‘Social Determinants of Diabetes in India’ was also held in which government dignitaries belonged to health departments both Central & State, NGOs, Media, Medical Practitioners, & Educational Institutions also took part. Dr. Gojka Roglic, Responsible Officer, Department of Chronic Diseases & Health Promotion, WHO Geneva was also present on the occasion.\n\nMr. Mike Nithavrianakis, British Deputy High Commissioner, Chennai (2nd from right) presenting a bust and citation of Prof. M.Viswanathan National Award for Excellence in Medical Teaching & Medical Care to Dr. Ramchandra Dattatraya Lele, Emeritus Professor, National Academy of Medical Sciences, India (2nd from left). Dr. Vijay Viswanathan, Managing Director, M.V.Hospital for Diabetes, (2nd from left), Dr.S.N. Narasingan, Dean, Prof. M.Viswanathan Diabetes Research Centre (Extreme Right) & Dr. J.Nagarathnam, Chief Executive, M.V.Hospital for Diabetes (Extreme Left) are also seen.",
        "year": 2012,
        "date": "2012-03-17",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012/",
        "image": {
            "src": "/images/news/drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012.jpg",
            "alt": "DRC Gold Medal and Prof. M. Viswanathan Award Ceremony 2012",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012-2.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15233",
        "slug": "celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights",
        "title": "Celebrating Medical Excellence: 2010 Gold Medal Oration Awards Highlights",
        "excerpt": "Prof. M.Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2010 were held at Taj Connemara on Sunday 13th March, 2011 in the august…",
        "content": "Prof. M.Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2010 were held at Taj Connemara on Sunday 13th March, 2011 in the august presence of Shri Surjit Singh Barnala, His Excellency the Governor of Tamil Nadu and other invitees for the event. The orations were attended by more than 150 invitees. Scientific committee of the Diabetes Research Centre every year confers these awards on doctors with excellent research works in the field of medicine. Prof. M.Viswanathan Gold Medal Oration award for the year 2010 was conferred on Dr. Shanti Mendis, Adviser/Co-ordinator of the WHO cardiovascular program from 2000. Diabetes Research Centre Gold Medal for the year 2010 was conferred on Dr. Shiv Kumar Sarin, Chairman, Board of Governors, Medical Council of India. The scientific meeting was witnessed honouring an eminent scholar in Medicine with Life Time Achievement Award 2010. Dr. Sengamedu Srinivasa Badrinath, Chairman, Emeritus, Sankara Nethralaya was the recipient of this Award.\n\nShri. Surjit Singh Barnala, His Excellency the Governor of Tamil Nadu presented Lifetime Achievement Award – 2010 citation and a plaque to Dr. fSengamedu Srinivasa Badrinath, Chairman, Emeritus, Sankara Nethralaya for his selfless service in the filed of Ophthalmic care and relentless dedication to building an Institution par excellence in Eye Care. Dr. Vijay Viswanathan, Managing Director, M.V.Hospital for Diabetes is seen on the left of His Excellency the Governor of Tamil Nadu along with other dignitaries on the dais.\n\nShri. Surjit Singh Barnala, His Excellency the Governor of Tamil Nadu is addressing the gathering after the presentation ceremony. The medal recipients and other dignitaries are seen on the dais. Shri. Surjit Singh Barnala, His Excellency the Governor of Tamil Nadu presented Prof. M. Viswanathan Gold Medal & citation to Dr. Shanti Mendis, Adviser/Co-ordinator of the WHO cardiovascular program from 2000 & Diabetes Research Centre Gold Medal & Citation to Dr. Shiv Kumar Sarin, Chairman, Board of Governors, Medical Council of India.\n\nDr. Vijay Viswanathan (on the left) presented a Memento to Shri. Surjit Singh Barnala, His Excellency the Governor of Tamil Nadu. He is flanked by the medal recipients and other dignitaries on the dais.",
        "year": 2011,
        "date": "2011-03-13",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights/",
        "image": {
            "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights.jpg",
            "alt": "Celebrating Medical Excellence: 2010 Gold Medal Oration Awards Highlights",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights-4.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights-5.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15227",
        "slug": "diabetic-wound-care-mou-signing-with-southampton-university",
        "title": "Diabetic Wound Care: MoU Signing with Southampton University",
        "excerpt": "Wound Care in Diabetes – An International Perspective – Signing of MoU with Southampton University held at GRT Convention Centre, Chennai from 22/01/2011 to 23/01/2011.",
        "content": "Wound Care in Diabetes – An International Perspective – Signing of MoU with Southampton University held at GRT Convention Centre, Chennai from 22/01/2011 to 23/01/2011.\n\nProf. M.Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2009 were held at Sheraton Chola on Sunday 14th March, 2010 in the august presence of distinguished luminaries from various walk of life. The orations were attended by more than 150 doctors. Scientific committee of the Diabetes Research Centre every year select eminent doctors to confer on these awards. Prof. M.Viswanathan Gold Medal Oration award for the year 2009 was conferred on Dr. Michael M.Engelgau, Senior Public Health Specialist, South Asia Human Development, World Bank, Washington DC. USA. His topic was ‘Diabetes and Chronic Diseases in Indian and South Asia: Beyond the numbers’. Diabetes Research Centre Gold Medal for the year 2009 was conferred on Dr. Rudolf W.Bilous, Professor of Clinical Medicine, Newcastle University, UK. His topic was “Newer Perspectives in Diabetic Nephropathy”. The scientific meeting was witnessed honouring two eminent scholars in Medicine with Life Time Achievements Awards 2009. Padmasri Prof. Mayil Vahanan Natarajan, Vice Chancellor, Dr.M.G.R Medical University, Guindy, Chennai and Prof. V.Seshiah, Chairman, Dr.V.Seshiah Diabetes Research Institute and Dr.Balaji Diabetes Care Centre, Chennai.",
        "year": 2011,
        "date": "2011-01-23",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/diabetic-wound-care-mou-signing-with-southampton-university/",
        "image": {
            "src": "/images/news/diabetic-wound-care-mou-signing-with-southampton-university.jpg",
            "alt": "Diabetic Wound Care: MoU Signing with Southampton University",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/diabetic-wound-care-mou-signing-with-southampton-university-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15213",
        "slug": "infotainment-2010-empowering-youth-with-juvenile-diabetes",
        "title": "Infotainment 2010: Empowering Youth with Juvenile Diabetes",
        "excerpt": "Photo(Left) Dr.Vijay Viswanathan, Managing Director is addressing the gathering at the concluding session of the Infotainment Programme 2010.",
        "content": "INFOTAINMENT 2010 PROGRAMME FOR PEOPLE WITH JUVENILE DIABETES HELD AT THE AUDITORIUM OF THIS INSTITUTE ON SATURDAY, 29TH OF MAY, 2010.\n\nPhoto(Left) Dr.Vijay Viswanathan, Managing Director is addressing the gathering at the concluding session of the Infotainment Programme 2010. Film/TV actress Ms.Janaki Sabesh and Dr.Nagarathnam, Chief Executive of this Institute are seen on the dais. Photo (Right) Ms.Janaki Sabesh giving away the trophies to the winners on ‘Quiz Competition and Speech Competition’. Dr.Vijay Viswanathan and Dr.Nagarathnam are seen in the picture.",
        "year": 2010,
        "date": "2010-05-29",
        "category": "Training",
        "sourceUrl": "https://mvdiabetes.com/infotainment-2010-empowering-youth-with-juvenile-diabetes/",
        "image": {
            "src": "/images/news/infotainment-2010-empowering-youth-with-juvenile-diabetes.png",
            "alt": "Infotainment 2010: Empowering Youth with Juvenile Diabetes",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/infotainment-2010-empowering-youth-with-juvenile-diabetes-1.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15190",
        "slug": "inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010",
        "title": "Inauguration of M.V. Diabetic Foot Care Centre – March 28, 2010",
        "excerpt": "Inauguration of M.V. Centre for Diabetic Foot Care, Podiatry, Research & Management",
        "content": "Inauguration of M.V. Centre for Diabetic Foot Care, Podiatry, Research & Management\n\nHeld at the Royapuram Corporate Office of M.V. Group of Institutions on 28th March, 2010\n\nMr.Prashant, Film Actor (4th from left) declared the new podiatry centre open by cutting the customary ribbon. Thiru S.N.Seshasai, IPS (3rd from left) and Dr.Vijay Viswanathan (2nd from right) are seen in the picture. Photo right Thiru S.N.Seshasai IPS lighting the traditional lamp as part of the inauguration of the new Podiatry centre.Thiru S.N.Seshasai, IPS (Centre) declared the research unit open by cutting the customary ribbon. Mr.Prashant, Film Actor (Left) and Dr.Vijay Viswanathan, Managing Director (Right) are also seen. Photo right Mr. Prashant Film Actor is addressing the gathering after inaugurating the Podiatry Centre. Thiru S.N.Seshasai, IPS and Dr.Vijay Viswanathan, Managing Director are seen on the dais.",
        "year": 2010,
        "date": "2010-03-28",
        "category": "Launch",
        "sourceUrl": "https://mvdiabetes.com/inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010/",
        "image": {
            "src": "/images/news/inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010.png",
            "alt": "Inauguration of M.V. Diabetic Foot Care Centre – March 28, 2010",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010-1.jpg",
                "alt": "Inauguration of M.V. Centre for Diabetic Foot Care"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15220",
        "slug": "highlights-from-the-2009-gold-medal-orations",
        "title": "Highlights from the 2009 Gold Medal Orations",
        "excerpt": "Prof. M.Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2009 were held at Sheraton Chola on Sunday 14th March, 2010 in the august…",
        "content": "## Chennai 14th March, 2010\n\nProf. M.Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2009 were held at Sheraton Chola on Sunday 14th March, 2010 in the august presence of distinguished luminaries from various walk of life. The orations were attended by more than 150 doctors. Scientific committee of the Diabetes Research Centre every year select eminent doctors to confer on these awards. Prof. M.Viswanathan Gold Medal Oration award for the year 2009 was conferred on Dr. Michael M.Engelgau, Senior Public Health Specialist, South Asia Human Development, World Bank, Washington DC. USA. His topic was ‘Diabetes and Chronic Diseases in Indian and South Asia: Beyond the numbers’. Diabetes Research Centre Gold Medal for the year 2009 was conferred on Dr. Rudolf W.Bilous, Professor of Clinical Medicine, Newcastle University, UK. His topic was “Newer Perspectives in Diabetic Nephropathy”. The scientific meeting was witnessed honouring two eminent scholars in Medicine with Life Time Achievements Awards 2009. Padmasri Prof. Mayil Vahanan Natarajan, Vice Chancellor, Dr.M.G.R Medical University, Guindy, Chennai and Prof. V.Seshiah, Chairman, Dr.V.Seshiah Diabetes Research Institute and Dr.Balaji Diabetes Care Centre, Chennai.\n\nProf. S. Thanikachalam, Chairman & Director, Cardiac Care Centre, Sri Ramachandra University, Chennai (2nd from left) releasing the revised Manual on ‘Socio Economics of Diabetes’ and the first copy was received by Padmasri Prof. Mayil Vahanan Natarajan, Vice Chancellor, Dr.M.G.R. Medical University (3rd from Left). Dr.Vijay Viswanathan, Managing Director, M.V.Hospital for Diabetes & Diabetes Research Centre (4th from left) Dr.S.N.Narasingan, Dean of Studies (5th from Left) and Dr.Michael M.Engelgau, Sr.Public Health Specialist, World Bank (Extreme Right) are in the picture.\n\nM.Viswanathan Gold Medial Oration-2009 was presented to Dr.Michael M. Engelgau, Senior Public Health Specialist, South Asia Human Development, World Bank, Washington DC, USA by Padmasri, Prof.Mayil Vahanan Natarajan, Vice Chancellor, Dr.M.G.R. Medical University, Chennai. Prof. S.Thanikachalam (Extreme Left) Dr.Vijay Viswanathan (Centre) and Dr.S.N.Narasingan, Dean of Studies (Extreme Right) are seen in the picture.\n\nDiabetes Research Centre Gold Medal Oration 2009 was presented to Dr.Rudolf W.Bilous, Professor of Clinical Medicine, Newcastle University, UK by Padmasri Prof. Mayil Vahanan Natarajan, Vice Chancellor, Dr. MGR Medical University. Prof. V.Seshiah (1st from left), Prof S.Thanikachalam (2nd from left), Dr.Vijay Viswanathan (5th from left), Dr.S.N.Narasingan (6th from left) and Dr.Michael M. Engelgau are seen in the picture.\n\nLife Time Achievement Award 2009 was presented to Padmasri Prof.Mayil Vahanan Natarajan, Vice Chancellor, Dr. MGR Medical University by Prof. S.Thanikachalam, Chairman & Director Cardiac Care Centre, Sri Ramachandra University, Chennai. Prof. V. Seshiah (1st from left), Dr.Vijay Viswanathan, (4th from left), and Dr.S.N.Narasingan, Dean of Studies (extreme right) are seen in the picture.\n\nLife Time Achievement Award, 2009 was presented to Prof. V.Seshiah, Chairman, Dr. V.Seshiah Diabetes Research Institute by Prof. S.K.Rajan (1st from Left). Prof. S. Thanikachalam (3rd from left), Padmasri Prof. Mayil Vahanan Natarajan (4th from left) and Dr.Vijay Viswanathan (Extreme Right) are also seen in the picture.",
        "year": 2010,
        "date": "2010-03-14",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/highlights-from-the-2009-gold-medal-orations/",
        "image": {
            "src": "/images/news/highlights-from-the-2009-gold-medal-orations.jpg",
            "alt": "Highlights from the 2009 Gold Medal Orations",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/highlights-from-the-2009-gold-medal-orations-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-the-2009-gold-medal-orations-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-the-2009-gold-medal-orations-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/highlights-from-the-2009-gold-medal-orations-4.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15127",
        "slug": "prof-m-viswanathan-gold-medal-oration-award-2008-celebration",
        "title": "Prof. M. Viswanathan Gold Medal Oration Award 2008 Celebration",
        "excerpt": "Celebrating Excellence Prof. M. Viswanathan Gold Medal Oration Award 2008",
        "content": "Celebrating Excellence Prof. M. Viswanathan Gold Medal Oration Award 2008\n\nProf. M. Viswanathan Gold Medal Oration & Diabetes Research Centre Gold Medal Oration Awards for the year 2008 were held at GRT Grand on Sunday, 15th February, 2009. Prof. M.Viswanathan Gold Medal for the year 2008 was conferred on Dr. N.K.Sethi, M.D., Sr. Advisor (Health) Planning Commission of India. Diabetes Research Centre Gold Medal for the year 2008 was conferred on Dr. B. Kasinath, M.D., FASN., Professor of Medicine, University of Texas, San Antonio, USA. The Life Time Achievements Awards 2008 instituted by the DRC were presented to two legends of the time in the field of Diabetology. Dr. Binode Kumar Sahay and Dr. C. Munichoodappa.Dr S. Elango, Director of Public Health (4th from left) and Dr.N.K.Sethi Sr. Advisor (Health) Planning Commission of India [2nd from right] jointly releasing the DRC Report 2007-08. Dr. Vijay Viswanathan, Managing Director, M.V. Hospital for Diabetes & Diabetes Research Centre [3rd from right] and Dr. C. Munichoodappa, Physician & Diabetologist, Bangalore (1st from left) and Dr. Binode Kumar Sahay, Senior Consultant Physician and Diabetologist, Hyderabad (2nd from left), Dr. S.N.Narasingan, Dean of Studies (3rd from left) and Dr. B. Kasinath, Prof. of Medicine, University of Texas, San Antonio, USA, (extreme right) are in the picture above.\n\nProf. M.Viswanathan Gold Medal 2008 was presented to Dr.N.K.Sethi, Sr. Advisor (Health), Planning Commission of India, New Delhi by Dr. S. Elango, Director of Public Health, Govt. of Tamil Nadu. Dr. S.N.Narasingan, Dean of Studies and Dr.Vijay Viswanathan, Managing Director, M.V. Hospitals are seen in the picture above.\n\nDiabetes Research Centre Gold Medal 2008 was presented to Dr. B. Kasinath, M.D., FASN, Prof. of Medicine, University of Texas by Dr. S. Elango, Director of Public Health, Govt. of Tamil Nadu. Dr. S.N.Narasingan, Dean of Studies, Dr.Vijay Viswanathan and Dr.N.K.Sethi, Sr. Advisor (Health), Planning Commission of India, New Delhi are in the picture.\n\nLife Time Achievement Award – 2008, the memento was presented to Dr. C. Munichoodappa, Physician and Diabetologist, Bangalore by Dr. S.K.Rajan, Board of Studies, The Tamil Nadu Dr. MGR Medical University.",
        "year": 2009,
        "date": "2009-02-15",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-gold-medal-oration-award-2008-celebration/",
        "image": {
            "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2008-celebration.jpg",
            "alt": "Prof. M. Viswanathan Gold Medal Oration Award 2008 Celebration",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2008-celebration-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2008-celebration-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2008-celebration-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2008-celebration-4.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    },
    {
        "id": "news-15107",
        "slug": "prof-m-viswanathan-gold-medal-oration-award-2007-celebration",
        "title": "Prof. M. Viswanathan Gold Medal Oration Award 2007 Celebration",
        "excerpt": "Celebrating Excellence: Prof. M. Viswanathan Gold Medal Oration Award 2007",
        "content": "Celebrating Excellence: Prof. M. Viswanathan Gold Medal Oration Award 2007\n\nProf.M.Viswanathan gold medal oration award 2007 was held at Taj Connemara on 20-1-2008. Dr. Gojka Roglic, Responsible Officer, WHO Diabetes Programme, Geneva has been conferred with the award. The event was witnessed honouring Prof. Dr. K. Meer Mustafa Hussain, Vice-Chancellor, Dr. M.G.R. Medical University the Life Time Achievement award along with a citation apart from unveiling a campaign on “Primary Prevention of Diabetes”. Deputy Director General (Medical), Directorate General of Health Services Mr. P.H.Ananthanarayanan and Managing Director of M.V.Hospital for Diabetes, Dr.Vijay Viswanathan also spoke on this occasion.\n\nProf. Dr. K. Meer Mustafa Hussain Vice Chancellor, Dr. MGR Medical University speaking at a function Prof.M.Viswanathan gold medaloration award 2007 held at Taj Connemara on 20-01-2008.\n\nDr. Gojka Roglic, Officer WHO Diabetes Programme Geneva receiving the prestigious Prof.M.Viswanathan gold medal oration award 2007 citation from Prof. Dr. K. Meer Mustafa Hussain, Vice-Chancellor, Dr.MGR Medical University held at Taj Connemara on 20-1-2008.\n\nSchool Minister inaugurates the event.\n\nMinister releasing first copy on the Childhood Obesity & Diabetes Manual to Mr.Jagannathan, Director of School Education, Govt. of Tamil Nadu.\n\nThiru Thangam Thenarasu (Right), Hon’ble School Education Minister, Govt. of Tamil Nadu, presenting DRC Gold Medal, 2007 to Dr. T.Ramasami (Left), Secretary, Department of Science & Technology, Govt of India. Dr. Vijay Viswnathan, Managing Director, M.V.Hospital for Diabetes and Diabetes Research Centre, is at the centre.\n\nProf. Dr. K. Meer Mustafa Hussain Vice Chancellor, Dr. MGR Medical University speaking at a function Prof.M.Viswanathan gold medaloration award 2007 held at Taj Connemara on 20-01-2008.",
        "year": 2008,
        "date": "2008-01-20",
        "category": "Award",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-gold-medal-oration-award-2007-celebration/",
        "image": {
            "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration.jpg",
            "alt": "Prof. M. Viswanathan Gold Medal Oration Award 2007 Celebration",
            "status": "available"
        },
        "gallery": [
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration-1.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration-2.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration-3.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration-4.jpg",
                "alt": "MV Diabetes Events"
            },
            {
                "src": "/images/news/prof-m-viswanathan-gold-medal-oration-award-2007-celebration-5.jpg",
                "alt": "MV Diabetes Events"
            }
        ],
        "featured": false
    }
];

export const newsYears = Array.from(new Set(newsEvents.map((e) => e.year))).sort((a, b) => b - a);

export const newsCategories = Array.from(new Set(newsEvents.map((e) => e.category))).sort();

export const featuredNews = newsEvents.filter((e) => e.featured);

export function getEventBySlug(slug: string): NewsEvent | undefined {
    return newsEvents.find((e) => e.slug === slug);
}
