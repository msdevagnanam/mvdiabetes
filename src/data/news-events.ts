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
    featured: boolean;
}

export const newsEvents: NewsEvent[] = [
    {
        "id": "news-5",
        "title": "39th Prof.M.Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations",
        "slug": "39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations",
        "year": 2025,
        "date": "2025-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/39th-prof-m-viswanathan-oration-highlights-strategies-to-prevent-diabetic-foot-amputations/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/04/Frame-1-1.png",
            "alt": "39th Prof.M.Viswanathan Oration Highlights Strategies to Prevent Diabetic Foot Amputations",
            "status": "available"
        },
        "featured": true
    },
    {
        "id": "news-6",
        "title": "MV Diabetes Free Diabetic Camp Health & Blessings, Adyar",
        "slug": "mv-diabetes-free-diabetic-camp-health-blessings-adyar",
        "year": 2025,
        "date": "2025-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-free-diabetic-camp-health-blessings-adyar/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/03/Adyar-Camp-2.png",
            "alt": "MV Diabetes Free Diabetic Camp Health & Blessings, Adyar",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-7",
        "title": "Free Diabetes Awareness Camp in Bangalore",
        "slug": "free-diabetes-awareness-camp-in-bangalore",
        "year": 2025,
        "date": "2025-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/free-diabetes-awareness-camp-in-bangalore/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/02/IMG-20250326-WA0027.jpg",
            "alt": "Free Diabetes Awareness Camp in Bangalore",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-8",
        "title": "Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025",
        "slug": "sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025",
        "year": 2025,
        "date": "2025-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/sarcopenia-in-type-2-diabetes-and-ckd-insights-from-wcn-2025/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/02/04.jpg",
            "alt": "Sarcopenia in Type 2 Diabetes and CKD: Insights from WCN 2025",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-13",
        "title": "Record-Breaking Student Yoga Event Raises Diabetes Awareness",
        "slug": "record-breaking-student-yoga-event-raises-diabetes-awareness",
        "year": 2024,
        "date": "2024-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/record-breaking-student-yoga-event-raises-diabetes-awareness/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/11/Maximum-Students-Performed-Therapeutic-Yoga-Asanas-to-Raise-Diabetes-Awareness-1-768x513-1.webp",
            "alt": "Record-Breaking Student Yoga Event Raises Diabetes Awareness",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-15",
        "title": "Save the Feet – Keep Walking",
        "slug": "save-the-feet-keep-walking",
        "year": 2024,
        "date": "2024-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/save-the-feet-keep-walking/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/08/Save-the-feet-and-keep-walking.png",
            "alt": "Save the Feet – Keep Walking",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-17",
        "title": "M V Publications – 2024",
        "slug": "m-v-publications-2024",
        "year": 2024,
        "date": "2024-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/m-v-publications-2024/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "M V Publications – 2024",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-18",
        "title": "2023 Publications Index (April to Dec)",
        "slug": "2023-publications-index-april-to-dec",
        "year": 2024,
        "date": "2024-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/2023-publications-index-april-to-dec/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "2023 Publications Index (April to Dec)",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-20",
        "title": "Wound Clinic Training Program",
        "slug": "wound-clinic-training-program",
        "year": 2024,
        "date": "2024-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/wound-clinic-training-program/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/04/image-003.jpg",
            "alt": "Wound Clinic Training Program",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-29",
        "title": "MV Diabetes Update on Diabetic Foot & Kidney: Event Highlights",
        "slug": "mv-diabetes-update-on-diabetic-foot-kidney-event-highlights",
        "year": 2023,
        "date": "2023-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-update-on-diabetic-foot-kidney-event-highlights/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/17-sep-pic5.jpg",
            "alt": "MV Diabetes Update on Diabetic Foot & Kidney: Event Highlights",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-30",
        "title": "Prof. M. Viswanathan Honored on 100th Birth Centenary",
        "slug": "prof-m-viswanathan-honored-on-100th-birth-centenary",
        "year": 2023,
        "date": "2023-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-honored-on-100th-birth-centenary/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture29.png",
            "alt": "Prof. M. Viswanathan Honored on 100th Birth Centenary",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-39",
        "title": "MV Diabetes' 3-Day Campaign for World Kidney Day 2023",
        "slug": "mv-diabetes-3-day-campaign-for-world-kidney-day-2023",
        "year": 2023,
        "date": "2023-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-3-day-campaign-for-world-kidney-day-2023/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/03/MV-Post-featured-image-3.png",
            "alt": "MV Diabetes' 3-Day Campaign for World Kidney Day 2023",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-31",
        "title": "MV Diabetes Celebrates National Nutrition Week 2022",
        "slug": "mv-diabetes-celebrates-national-nutrition-week-2022",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-celebrates-national-nutrition-week-2022/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture27.png",
            "alt": "MV Diabetes Celebrates National Nutrition Week 2022",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-32",
        "title": "MV Diabetes Introduces Atheropoint for Vascular Health",
        "slug": "mv-diabetes-introduces-atheropoint-for-vascular-health",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-introduces-atheropoint-for-vascular-health/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture24.png",
            "alt": "MV Diabetes Introduces Atheropoint for Vascular Health",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-33",
        "title": "Oral Health and Well-being at MV Hospital for Diabetes",
        "slug": "oral-health-and-well-being-at-mv-hospital-for-diabetes",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/oral-health-and-well-being-at-mv-hospital-for-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture20.png",
            "alt": "Oral Health and Well-being at MV Hospital for Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-34",
        "title": "World Brain Day Zoom Webinar: Insights and Discussions",
        "slug": "world-brain-day-zoom-webinar-insights-and-discussions",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/world-brain-day-zoom-webinar-insights-and-discussions/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture19.png",
            "alt": "World Brain Day Zoom Webinar: Insights and Discussions",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-35",
        "title": "MV Hospital's Wellbeing Campaign at Nageswara Rao Park",
        "slug": "mv-hospitals-wellbeing-campaign-at-nageswara-rao-park",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospitals-wellbeing-campaign-at-nageswara-rao-park/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture12.png",
            "alt": "MV Hospital's Wellbeing Campaign at Nageswara Rao Park",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-36",
        "title": "MV Hospital's Wellbeing Campaign: Yoga & Health Check-ups",
        "slug": "mv-hospitals-wellbeing-campaign-yoga-health-check-ups",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospitals-wellbeing-campaign-yoga-health-check-ups/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Picture15.png",
            "alt": "MV Hospital's Wellbeing Campaign: Yoga & Health Check-ups",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-37",
        "title": "App to help people with diabetic foot launched",
        "slug": "app-to-help-people-with-diabetic-foot-launched",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/app-to-help-people-with-diabetic-foot-launched/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/05/Frame-14-1.png",
            "alt": "App to help people with diabetic foot launched",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-38",
        "title": "Inauguration of Women's Wellness Clinic at MV Hospital for Diabetes",
        "slug": "inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/inauguration-of-womens-wellness-clinic-at-mv-hospital-for-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/03/MV-Post-featured-image-8.jpg",
            "alt": "Inauguration of Women's Wellness Clinic at MV Hospital for Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-40",
        "title": "Free Medical Camp in Memory of Prof. M Viswanathan",
        "slug": "free-medical-camp-in-memory-of-prof-m-viswanathan",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/free-medical-camp-in-memory-of-prof-m-viswanathan/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-9.jpg",
            "alt": "Free Medical Camp in Memory of Prof. M Viswanathan",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-41",
        "title": "MV Hospital conducts oration programmes, launches app",
        "slug": "mv-hospital-conducts-oration-programmes-launches-app",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-conducts-oration-programmes-launches-app/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Frame-15.png",
            "alt": "MV Hospital conducts oration programmes, launches app",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-51",
        "title": "Prof. M Viswanathan Update 2022: Awards & New Clinic Launch",
        "slug": "prof-m-viswanathan-update-2022-awards-new-clinic-launch",
        "year": 2022,
        "date": "2022-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-update-2022-awards-new-clinic-launch/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/DSC_7462-scaled.jpg",
            "alt": "Prof. M Viswanathan Update 2022: Awards & New Clinic Launch",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-43",
        "title": "7th Train the Foot Trainer Program in Chennai by MV Diabetes",
        "slug": "7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/7th-train-the-foot-trainer-program-in-chennai-by-mv-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/05/24.jpg",
            "alt": "7th Train the Foot Trainer Program in Chennai by MV Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-44",
        "title": "Free Health Camp by M V Hospital for Charity Inmates",
        "slug": "free-health-camp-by-m-v-hospital-for-charity-inmates",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/free-health-camp-by-m-v-hospital-for-charity-inmates/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "Free Health Camp by M V Hospital for Charity Inmates",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-45",
        "title": "Blue Lights of Chennai: Raising Diabetes Awareness",
        "slug": "blue-lights-of-chennai-raising-diabetes-awareness",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/blue-lights-of-chennai-raising-diabetes-awareness/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/IMG-20221113-WA0009.jpg",
            "alt": "Blue Lights of Chennai: Raising Diabetes Awareness",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-48",
        "title": "Press Conference Highlights: Dinamalar and Southern Mail",
        "slug": "press-conference-highlights-dinamalar-and-southern-mail",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/press-conference-highlights-dinamalar-and-southern-mail/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/banner15.jpg",
            "alt": "Press Conference Highlights: Dinamalar and Southern Mail",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-50",
        "title": "Dr. Asha Fredrick Wins Prof. M. Viswanathan Honour Award",
        "slug": "dr-asha-fredrick-wins-prof-m-viswanathan-honour-award",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Camp",
        "excerpt": "On 09 June 2022, Dr. Asha Fredrick was honoured with Prof. M Viswanathan honour award at M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre, Royapuram Chennai....",
        "content": "On 09 June 2022, Dr. Asha Fredrick was honoured with Prof. M Viswanathan honour award at M V Hospital for Diabetes & Prof. M Viswanathan Diabetes Research Centre, Royapuram Chennai.\n\nDr Asha Fredrick highlighted the various measures being taken by the Govt for TB elimination by the year 2025. Dr Vijay Viswanathan spoke on the RePORT India study funded by the Govt of India and Govt of USA where Prof M Viswanathan Diabetes Research Centre is a partner. The study found that people with TB have prolong\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:",
        "sourceUrl": "https://mvdiabetes.com/dr-asha-fredrick-wins-prof-m-viswanathan-honour-award/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2022/06/banner16.jpg",
            "alt": "Dr. Asha Fredrick Wins Prof. M. Viswanathan Honour Award",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-57",
        "title": "Diabetology Fellowship Convocation 2021",
        "slug": "diabetology-fellowship-convocation-2021",
        "year": 2021,
        "date": "2021-01-01",
        "category": "Training",
        "excerpt": "Diabetology Fellowship Convocation 2021",
        "content": "Diabetology Fellowship Convocation 2021. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/diabetology-fellowship-convocation-2021/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/IMG_20190103_161453.jpg",
            "alt": "Diabetology Fellowship Convocation 2021",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-53",
        "title": "MV Hospital Flu Vaccination Camp for Amputees",
        "slug": "mv-hospital-flu-vaccination-camp-for-amputees",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "MV Hospital Flu Vaccination Camp for Amputees",
        "content": "MV Hospital Flu Vaccination Camp for Amputees. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-flu-vaccination-camp-for-amputees/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-6.jpg",
            "alt": "MV Hospital Flu Vaccination Camp for Amputees",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-54",
        "title": "Highlights from World Diabetes Day Events in Bangalore",
        "slug": "highlights-from-world-diabetes-day-events-in-bangalore",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Awareness",
        "excerpt": "Highlights from World Diabetes Day Events in Bangalore",
        "content": "Highlights from World Diabetes Day Events in Bangalore. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/highlights-from-world-diabetes-day-events-in-bangalore/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/20211115_122039.jpg",
            "alt": "Highlights from World Diabetes Day Events in Bangalore",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-56",
        "title": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine",
        "slug": "dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Training",
        "excerpt": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine",
        "content": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-joins-rspsg-as-faculty-of-podiatry-medicine/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/Award-Ceremony-6.jpg",
            "alt": "Dr. Vijay Viswanathan Joins RSPSG as Faculty of Podiatry Medicine",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-58",
        "title": "World Diabetes Day: Blue Lighting & Gold Medal Oration",
        "slug": "world-diabetes-day-blue-lighting-gold-medal-oration",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "World Diabetes Events- Blue Lighting, Nurses/ Doctors Pledge...",
        "content": "World Diabetes Events- Blue Lighting, Nurses/ Doctors Pledge\n\nProf. M Viswanathan Gold Medal Oration.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:",
        "sourceUrl": "https://mvdiabetes.com/world-diabetes-day-blue-lighting-gold-medal-oration/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/P1110141-scaled.jpg",
            "alt": "World Diabetes Day: Blue Lighting & Gold Medal Oration",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-59",
        "title": "MV Hospital Wins Top Prizes at 48th RSSDI Meeting",
        "slug": "mv-hospital-wins-top-prizes-at-48th-rssdi-meeting",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-wins-top-prizes-at-48th-rssdi-meeting/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-4.jpg",
            "alt": "MV Hospital Wins Top Prizes at 48th RSSDI Meeting",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-60",
        "title": "Patient Insights: World Diabetes Day 2020 Webinar",
        "slug": "patient-insights-world-diabetes-day-2020-webinar",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Patient Webinar to solve their queries on Diabetes (Diabetes Control during lockdown, Prevent complications et...",
        "content": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Patient Webinar to solve their queries on Diabetes (Diabetes Control during lockdown, Prevent complications etc.).\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/patient-insights-world-diabetes-day-2020-webinar/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "Patient Insights: World Diabetes Day 2020 Webinar",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-61",
        "title": "MV Hospital Lights Chennai Blue for World Diabetes Day",
        "slug": "mv-hospital-lights-chennai-blue-for-world-diabetes-day",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-lights-chennai-blue-for-world-diabetes-day/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/IMG-20201112-WA0031.jpg",
            "alt": "MV Hospital Lights Chennai Blue for World Diabetes Day",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-62",
        "title": "Empowering Nurses: MV Hospital's World Diabetes Day Webinar 2020 Recap",
        "slug": "empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap",
        "year": 2020,
        "date": "2020-01-01",
        "category": "Camp",
        "excerpt": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Webinar training programme for nurses regarding the Prevention and Control of Diabetes....",
        "content": "On the occasion of the World Diabetes Day, MV Hospital for Diabetes Royapuram conducted a Webinar training programme for nurses regarding the Prevention and Control of Diabetes.\n\n490 nurses from all over India took an active part in this webinar on November 17 2020, and were educated on various aspects of Diabetes including how to take care of people living with Diabetes\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:",
        "sourceUrl": "https://mvdiabetes.com/empowering-nurses-mv-hospitals-world-diabetes-day-webinar-2020-recap/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-5.jpg",
            "alt": "Empowering Nurses: MV Hospital's World Diabetes Day Webinar 2020 Recap",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-63",
        "title": "Tamil Language Oratory and Health Awareness Event",
        "slug": "tamil-language-oratory-and-health-awareness-event",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/tamil-language-oratory-and-health-awareness-event/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/11/DSC_1976-1-scaled.jpg",
            "alt": "Tamil Language Oratory and Health Awareness Event",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-64",
        "title": "Valluvar Kottam Chariot Turns Blue for Diabetes Awareness Walkathon",
        "slug": "valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/valluvar-kottam-chariot-turns-blue-for-diabetes-awareness-walkathon/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image.jpg",
            "alt": "Valluvar Kottam Chariot Turns Blue for Diabetes Awareness Walkathon",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-65",
        "title": "Indo US UK Conclave 2019: Global Diabetes Summit Highlights",
        "slug": "indo-us-uk-conclave-2019-global-diabetes-summit-highlights",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/indo-us-uk-conclave-2019-global-diabetes-summit-highlights/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-1-1.jpg",
            "alt": "Indo US UK Conclave 2019: Global Diabetes Summit Highlights",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-66",
        "title": "Founders Day Celebration : MV Hospital for Diabetes Supports Karunalaya",
        "slug": "founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/founders-day-celebration-mv-hospital-for-diabetes-supports-karunalaya/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-2.jpg",
            "alt": "Founders Day Celebration : MV Hospital for Diabetes Supports Karunalaya",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-67",
        "title": "Celebrating Prof. M Viswananthan's 96th Birth Anniversary",
        "slug": "celebrating-prof-m-viswananthans-96th-birth-anniversary",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/celebrating-prof-m-viswananthans-96th-birth-anniversary/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care.jpg",
            "alt": "Celebrating Prof. M Viswananthan's 96th Birth Anniversary",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-68",
        "title": "Honoring Dr. Vijay Viswanathan and the Canteen, Security, and Housekeeping Teams",
        "slug": "honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/honoring-dr-vijay-viswanathan-and-the-canteen-security-and-housekeeping-teams/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-1.png",
            "alt": "Honoring Dr. Vijay Viswanathan and the Canteen, Security, and Housekeeping Teams",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-69",
        "title": "Dr. Vijay Viswanathan Elected First Asian President of D-Foot International",
        "slug": "dr-vijay-viswanathan-elected-first-asian-president-of-d-foot-international",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-elected-first-asian-president-of-d-foot-international/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care-1.jpg",
            "alt": "Dr. Vijay Viswanathan Elected First Asian President of D-Foot International",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-70",
        "title": "International Womens Day Celebration at M V Hospital for Diabetes",
        "slug": "international-womens-day-celebration-at-m-v-hospital-for-diabetes",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/international-womens-day-celebration-at-m-v-hospital-for-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2019/03/MV-Post-featured-image-3.jpg",
            "alt": "International Womens Day Celebration at M V Hospital for Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-71",
        "title": "Remembering Prof M Viswanathan: Community Health Initiatives",
        "slug": "remembering-prof-m-viswanathan-community-health-initiatives",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "On the occasion of 23rd Death Anniversary of our Founder Prof M Viswanathan on March 1 2019 we organized few social activities in the hospital premises....",
        "content": "On the occasion of 23rd Death Anniversary of our Founder Prof M Viswanathan on March 1 2019 we organized few social activities in the hospital premises.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/remembering-prof-m-viswanathan-community-health-initiatives/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/Security-Camera-2-scaled.jpg",
            "alt": "Remembering Prof M Viswanathan: Community Health Initiatives",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-72",
        "title": "Diabetes-Tuberculosis Link: Dr. Vijay Viswanathan's Insights",
        "slug": "diabetes-tuberculosis-link-dr-vijay-viswanathans-insights",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/diabetes-tuberculosis-link-dr-vijay-viswanathans-insights/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-1.jpg",
            "alt": "Diabetes-Tuberculosis Link: Dr. Vijay Viswanathan's Insights",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-73",
        "title": "MV Hospital for Diabetes Hosts Free RTO Camp for Road Safety Awareness",
        "slug": "mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness",
        "year": 2019,
        "date": "2019-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-for-diabetes-hosts-free-rto-camp-for-road-safety-awareness/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/RTO-Camp-Feb-2019-3.jpg",
            "alt": "MV Hospital for Diabetes Hosts Free RTO Camp for Road Safety Awareness",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-74",
        "title": "Top Honours at RSSDI National Conference 2018",
        "slug": "top-honours-at-rssdi-national-conference-2018",
        "year": 2018,
        "date": "2018-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/top-honours-at-rssdi-national-conference-2018/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/RSSDI-2018-e1697702616741.jpg",
            "alt": "Top Honours at RSSDI National Conference 2018",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-75",
        "title": "M V Hospital Honors Army Jawans on World Diabetes Day",
        "slug": "m-v-hospital-honors-army-jawans-on-world-diabetes-day",
        "year": 2018,
        "date": "2018-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/m-v-hospital-honors-army-jawans-on-world-diabetes-day/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/Pic-7.jpg",
            "alt": "M V Hospital Honors Army Jawans on World Diabetes Day",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-76",
        "title": "33rd Prof. M. Viswanathan Gold Medal Oration Award Presented to Dr. V. Shantha",
        "slug": "33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha",
        "year": 2018,
        "date": "2018-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/33rd-prof-m-viswanathan-gold-medal-oration-award-presented-to-dr-v-shantha/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/DSC_4292-scaled.jpg",
            "alt": "33rd Prof. M. Viswanathan Gold Medal Oration Award Presented to Dr. V. Shantha",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-77",
        "title": "Dr. Anuradha Dhanasekar Receives Prof. M. Viswanathan Honour Award 2017",
        "slug": "dr-anuradha-dhanasekar-receives-prof-m-viswanathan-honour-award-2017",
        "year": 2017,
        "date": "2017-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/dr-anuradha-dhanasekar-receives-prof-m-viswanathan-honour-award-2017/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/1.jpg",
            "alt": "Dr. Anuradha Dhanasekar Receives Prof. M. Viswanathan Honour Award 2017",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-78",
        "title": "Prof. Luigi Gnudi Receives Prof. M. Viswanathan Award at 2016 Event",
        "slug": "prof-luigi-gnudi-receives-prof-m-viswanathan-award-at-2016-event",
        "year": 2016,
        "date": "2016-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/prof-luigi-gnudi-receives-prof-m-viswanathan-award-at-2016-event/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/2.jpg",
            "alt": "Prof. Luigi Gnudi Receives Prof. M. Viswanathan Award at 2016 Event",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-79",
        "title": "Gold Medal Oration Award & Lifetime Achievement Award 2016",
        "slug": "gold-medal-oration-award-lifetime-achievement-award-2016",
        "year": 2016,
        "date": "2016-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/gold-medal-oration-award-lifetime-achievement-award-2016/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/3.jpg",
            "alt": "Gold Medal Oration Award & Lifetime Achievement Award 2016",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-80",
        "title": "MoU Signing: SRM Research Institute and Prof. M. Viswanathan Diabetes Research Centre",
        "slug": "mou-signing-srm-research-institute-and-prof-m-viswanathan-diabetes-research-centre",
        "year": 2016,
        "date": "2016-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mou-signing-srm-research-institute-and-prof-m-viswanathan-diabetes-research-centre/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/4.jpg",
            "alt": "MoU Signing: SRM Research Institute and Prof. M. Viswanathan Diabetes Research Centre",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-81",
        "title": "Honoring Social Service: Prof. M. Viswanathan Awards 2015",
        "slug": "honoring-social-service-prof-m-viswanathan-awards-2015",
        "year": 2015,
        "date": "2015-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/honoring-social-service-prof-m-viswanathan-awards-2015/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/5.jpg",
            "alt": "Honoring Social Service: Prof. M. Viswanathan Awards 2015",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-82",
        "title": "MoU Signing: Schizophrenia and Diabetes Research Collaboration",
        "slug": "mou-signing-schizophrenia-and-diabetes-research-collaboration",
        "year": 2015,
        "date": "2015-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mou-signing-schizophrenia-and-diabetes-research-collaboration/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2015/04/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care.jpg",
            "alt": "MoU Signing: Schizophrenia and Diabetes Research Collaboration",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-83",
        "title": "A Decade as WHO Collaborating Center: Milestones in Diabetes Care",
        "slug": "a-decade-as-who-collaborating-center-milestones-in-diabetes-care",
        "year": 2015,
        "date": "2015-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/a-decade-as-who-collaborating-center-milestones-in-diabetes-care/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/10.jpg",
            "alt": "A Decade as WHO Collaborating Center: Milestones in Diabetes Care",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-84",
        "title": "Prof Viswanathan Award 2014",
        "slug": "prof-viswanathan-award-2014",
        "year": 2014,
        "date": "2014-01-01",
        "category": "Camp",
        "excerpt": "PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014....",
        "content": "PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014.\n\nPROF. M. VISWANATHAN HONOUR AWARD CARRYING HIS BUST BEING PRESENTED TO SHRI K. MURALI, DIRECTOR, CENTRAL FOOTWEAR TRAININING INSTITUTE BY DR. VIJAY VISWANATHAN, HEAD & CHIEF DIABETOLOGIST, M.V.HOSPITAL FOR DIABETES, ROYAPURAM. PROF.M. VISWANATHAN HONOUR AWARD FUNCTION HELD AT M.V.HOSPITAL FOR DIABETES ROYAPURAM ON THURSDAY 28TH AUGUST, 2014.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:",
        "sourceUrl": "https://mvdiabetes.com/prof-viswanathan-award-2014/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/12.jpg",
            "alt": "Prof Viswanathan Award 2014",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-85",
        "title": "Indo-US Diabetic Complications Update 2013: Dr. Seaquist Honored",
        "slug": "indo-us-diabetic-complications-update-2013-dr-seaquist-honored",
        "year": 2013,
        "date": "2013-01-01",
        "category": "Camp",
        "excerpt": "INDO US UPDATE ON DIABETIC COMPLICATIONS MARCH 15TH &16TH AT HYATT REGENCY CHENNAI....",
        "content": "INDO US UPDATE ON DIABETIC COMPLICATIONS MARCH 15TH &16TH AT HYATT REGENCY CHENNAI.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/indo-us-diabetic-complications-update-2013-dr-seaquist-honored/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care-1.jpg",
            "alt": "Indo-US Diabetic Complications Update 2013: Dr. Seaquist Honored",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-86",
        "title": "DRC 40th Anniversary: Awards and Indo-Pak Diabetes Program",
        "slug": "drc-40th-anniversary-awards-and-indo-pak-diabetes-program",
        "year": 2012,
        "date": "2012-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/drc-40th-anniversary-awards-and-indo-pak-diabetes-program/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/15.jpg",
            "alt": "DRC 40th Anniversary: Awards and Indo-Pak Diabetes Program",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-87",
        "title": "Prof. M. Viswanathan Honour Award 2012 at Taj Club House",
        "slug": "prof-m-viswanathan-honour-award-2012-at-taj-club-house",
        "year": 2012,
        "date": "2012-01-01",
        "category": "Camp",
        "excerpt": "PROF. M. VISWANATHAN HONOUR AWARD HELD AT TAJ CLUB HOUSE CHENNAI ON 1ST DECEMBER, 2012....",
        "content": "PROF. M. VISWANATHAN HONOUR AWARD HELD AT TAJ CLUB HOUSE CHENNAI ON 1ST DECEMBER, 2012.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-honour-award-2012-at-taj-club-house/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/16.jpg",
            "alt": "Prof. M. Viswanathan Honour Award 2012 at Taj Club House",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-88",
        "title": "DRC Gold Medal and Prof. M. Viswanathan Award Ceremony 2012",
        "slug": "drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012",
        "year": 2012,
        "date": "2012-01-01",
        "category": "Camp",
        "excerpt": "DRC Gold Medal Oration Award – 2011 & the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care were held at Russian Cultural Centre, Chennai on Saturday, 17th of...",
        "content": "DRC Gold Medal Oration Award – 2011 & the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care were held at Russian Cultural Centre, Chennai on Saturday, 17th of March, 2012. Mr. Mike Nithavrianakis, British Deputy High Commissioner, Chennai was the Chief Guest. He gave away DRC Gold Medal & Citation to Dr. Anoop Misra, Director, Centre of Internal Medicine, Fortis Hospital, Vasant Kunj, New Delhi and the first Prof. M. Viswanathan National Award for Excellence in Medical Teaching & Medical Care to Dr. Ramchandra Dattatraya Lele, Emeritus Professor, National Academy of Medical Sciences, India. A panel discussion on ‘Social Determinants of Diabetes in India’ was also held in which government dignitaries belonged to health departments both Central & State, NGOs, Media, Medical Practitioners, & Educational Institutions also took part. Dr. Gojka Roglic, Responsible Officer, Department of Chronic Diseases & Health Promotion, WHO Geneva was also present on the occasion.\n\nMr. Mike Nithavrianakis, British Deputy High Commissioner, Chennai (2nd from right) presenting a bust and citation of Prof. M.Viswanathan National Award for Excellence in Medical Teaching & Medical Care to Dr. Ramchandra Dattatraya Lele, Emeritus Professor, National Academy of Medical Sciences, India (2nd from left). Dr. Vijay Viswanathan, Managing Director, M.V.Hospital for Diabetes, (2nd from left), Dr.S.N. Narasingan, Dean, Prof. M.Viswanathan Diabetes Research Centre (Extreme Right) & Dr. J.Nagarathnam, Chief Executive, M.V.Hospital for Diabetes (Extreme Left) are also seen.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:",
        "sourceUrl": "https://mvdiabetes.com/drc-gold-medal-and-prof-m-viswanathan-award-ceremony-2012/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care.jpg",
            "alt": "DRC Gold Medal and Prof. M. Viswanathan Award Ceremony 2012",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-89",
        "title": "Celebrating Medical Excellence: 2010 Gold Medal Oration Awards Highlights",
        "slug": "celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights",
        "year": 2010,
        "date": "2010-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/celebrating-medical-excellence-2010-gold-medal-oration-awards-highlights/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/6-1.jpg",
            "alt": "Celebrating Medical Excellence: 2010 Gold Medal Oration Awards Highlights",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-90",
        "title": "Diabetic Wound Care: MoU Signing with Southampton University",
        "slug": "diabetic-wound-care-mou-signing-with-southampton-university",
        "year": 2010,
        "date": "2010-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/diabetic-wound-care-mou-signing-with-southampton-university/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/7-1.jpg",
            "alt": "Diabetic Wound Care: MoU Signing with Southampton University",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-91",
        "title": "Infotainment 2010: Empowering Youth with Juvenile Diabetes",
        "slug": "infotainment-2010-empowering-youth-with-juvenile-diabetes",
        "year": 2010,
        "date": "2010-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/infotainment-2010-empowering-youth-with-juvenile-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care.png",
            "alt": "Infotainment 2010: Empowering Youth with Juvenile Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-93",
        "title": "Inauguration of M.V. Diabetic Foot Care Centre – March 28, 2010",
        "slug": "inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010",
        "year": 2010,
        "date": "2010-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/inauguration-of-m-v-diabetic-foot-care-centre-march-28-2010/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2010/03/Inauguration-of-M.V.-Centre-for-Diabetic-Foot-Care.png",
            "alt": "Inauguration of M.V. Diabetic Foot Care Centre – March 28, 2010",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-92",
        "title": "Highlights from the 2009 Gold Medal Orations",
        "slug": "highlights-from-the-2009-gold-medal-orations",
        "year": 2009,
        "date": "2009-01-01",
        "category": "Camp",
        "excerpt": "Prof. S. Thanikachalam, Chairman & Director, Cardiac Care Centre, Sri Ramachandra University, Chennai (2nd from left) releasing the revised Manual on ‘Socio Economics of Diabetes’ and the first copy w...",
        "content": "Prof. S. Thanikachalam, Chairman & Director, Cardiac Care Centre, Sri Ramachandra University, Chennai (2nd from left) releasing the revised Manual on ‘Socio Economics of Diabetes’ and the first copy was received by Padmasri Prof. Mayil Vahanan Natarajan, Vice Chancellor, Dr.M.G.R. Medical University (3rd from Left). Dr.Vijay Viswanathan, Managing Director, M.V.Hospital for Diabetes & Diabetes Research Centre (4th from left) Dr.S.N.Narasingan, Dean of Studies (5th from Left) and Dr.Michael M.Engelgau, Sr.Public Health Specialist, World Bank (Extreme Right) are in the picture.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/highlights-from-the-2009-gold-medal-orations/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/external-img5.jpg",
            "alt": "Highlights from the 2009 Gold Medal Orations",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-1",
        "title": "DiaConnect’26 – Unite.Learn.Thrive",
        "slug": "diaconnect26-unite-learn-thrive",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Conference",
        "excerpt": "DiaConnect’26 – Unite.Learn.Thrive",
        "content": "DiaConnect’26 – Unite.Learn.Thrive. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/diaconnect26-unite-learn-thrive/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-25-at-6.29.46-PM.jpeg",
            "alt": "DiaConnect’26 – Unite.Learn.Thrive",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-2",
        "title": "Honoring Prof. M. Viswanathan: The Pioneer Who Transformed Diabetes Care in India",
        "slug": "honoring-prof-m-viswanathan-the-pioneer-who-transformed-diabetes-care-in-india",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/honoring-prof-m-viswanathan-the-pioneer-who-transformed-diabetes-care-in-india/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-at-17.12.16_1621b407.jpg",
            "alt": "Honoring Prof. M. Viswanathan: The Pioneer Who Transformed Diabetes Care in India",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-3",
        "title": "Celebrating Nutrition Week at MV Hospital for Diabetes: Nourishing Health, Empowering Lives",
        "slug": "celebrating-nutrition-week-at-mv-hospital-for-diabetes-nourishing-health-empowering-lives",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/celebrating-nutrition-week-at-mv-hospital-for-diabetes-nourishing-health-empowering-lives/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-at-17.13.38_fda4c219.jpg",
            "alt": "Celebrating Nutrition Week at MV Hospital for Diabetes: Nourishing Health, Empowering Lives",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-4",
        "title": "Why Diabetes Is a Major Alarming Factor in India and How Hospitals Like MV Diabetes Are Changing the Dynamics",
        "slug": "why-diabetes-is-a-major-alarming-factor-in-india-and-how-hospitals-like-mv-diabetes-are-changing-the-dynamics",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/why-diabetes-is-a-major-alarming-factor-in-india-and-how-hospitals-like-mv-diabetes-are-changing-the-dynamics/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/08/Short-Review-Package-min-scaled.jpg",
            "alt": "Why Diabetes Is a Major Alarming Factor in India and How Hospitals Like MV Diabetes Are Changing the Dynamics",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-9",
        "title": "Empowering Our Nurses with Expert Diabetes Training",
        "slug": "nurse-training-diabetes-care",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/nurse-training-diabetes-care/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/02/Training-02.jpg",
            "alt": "Empowering Our Nurses with Expert Diabetes Training",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-10",
        "title": "Diabetes Screening Camp | MV Diabetes Hospital Koramangala",
        "slug": "diabetes-camp-koramangala-jan-2025",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-koramangala-jan-2025/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/01/Medical-Camp-for-Diabetes-@-Koramangala.png",
            "alt": "Diabetes Screening Camp | MV Diabetes Hospital Koramangala",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-11",
        "title": "Medical Camp for Diabetes | MV Diabetes Hospital Adyar",
        "slug": "diabetes-camp-adyar-jan-2025",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-adyar-jan-2025/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/02/Medical-Camp-for-Diabetes-@-Adyar.png",
            "alt": "Medical Camp for Diabetes | MV Diabetes Hospital Adyar",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-12",
        "title": "Medical Camp for Diabetes | MV Diabetes Hospital Ramapuram",
        "slug": "diabetes-camp-ramapuram-jan-2025",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/diabetes-camp-ramapuram-jan-2025/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2025/01/Medical-Camp-for-Diabetes-@-Royapuram.png",
            "alt": "Medical Camp for Diabetes | MV Diabetes Hospital Ramapuram",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-14",
        "title": "MV Diabetes's School of Podiatry to train doctors, paramedics in foot care",
        "slug": "mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetess-school-of-podiatry-to-train-doctors-paramedics-in-foot-care/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/10/MVDiabetes.png",
            "alt": "MV Diabetes's School of Podiatry to train doctors, paramedics in foot care",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-16",
        "title": "Dr. Vishnu Vijay's Affordable Diabetic Footwear Innovation at MV Diabetes, Royapuram",
        "slug": "dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/dr-vishnu-vijays-affordable-diabetic-footwear-innovation-at-mv-diabetes-royapuram/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/Untitled-design-10.png",
            "alt": "Dr. Vishnu Vijay's Affordable Diabetic Footwear Innovation at MV Diabetes, Royapuram",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-19",
        "title": "IIT-M Unveils Dr. M. Vishwanathan's Portrait Alongside Medical Research Pioneers",
        "slug": "iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/iit-m-unveils-dr-m-vishwanathans-portrait-alongside-medical-research-pioneers/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/IIT-M.png",
            "alt": "IIT-M Unveils Dr. M. Vishwanathan's Portrait Alongside Medical Research Pioneers",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-21",
        "title": "M V Diabetes Organizes Republic Day 2024 Program for Type 1 Children & Young Adults",
        "slug": "m-v-diabetes-hosts-inspiring-recreation-and-education-program",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/m-v-diabetes-hosts-inspiring-recreation-and-education-program/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/01/Frame-14.png",
            "alt": "M V Diabetes Organizes Republic Day 2024 Program for Type 1 Children & Young Adults",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-22",
        "title": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
        "slug": "high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/high-risk-foot-clinic-launched-at-mv-diabetes-koramangala-bengaluru/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/High-Risk-Foot-Clinic.png",
            "alt": "High Risk Foot Clinic Launched at MV Diabetes Koramangala, Bengaluru",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-23",
        "title": "M.V. Diabetes Centre Launches \"MV SURGI BOOT\" on Disability Day",
        "slug": "m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/m-v-diabetes-centre-launches-mv-surgi-boot-on-disability-day/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/MV-SURGI-BOOT.png",
            "alt": "M.V. Diabetes Centre Launches \"MV SURGI BOOT\" on Disability Day",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-24",
        "title": "Dr. Vijay Viswanathan Inaugurates \"Mind Wellness Clinic\" at MV Diabetes",
        "slug": "dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-inaugurates-mind-wellness-clinic-at-mv-diabetes/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/12/Mind-Wellness-Clinic.png",
            "alt": "Dr. Vijay Viswanathan Inaugurates \"Mind Wellness Clinic\" at MV Diabetes",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-25",
        "title": "India's Top Diabetes Experts Moderate Online Series on Type 1 Diabetes Care",
        "slug": "indias-top-diabetes-experts-moderate-online-series-on-type-1-diabetes-care",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/indias-top-diabetes-experts-moderate-online-series-on-type-1-diabetes-care/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/11/Prof.-M.-Viswanathan-Online-Education-Series.png",
            "alt": "India's Top Diabetes Experts Moderate Online Series on Type 1 Diabetes Care",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-26",
        "title": "\"Save Your Feet\" – World Diabetes Day Campaign at MV Diabetes Royapuram",
        "slug": "save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/save-your-feet-world-diabetes-day-campaign-at-mv-diabetes-royapuram/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/11/World-Diabetes-Day-Campaign.png",
            "alt": "\"Save Your Feet\" – World Diabetes Day Campaign at MV Diabetes Royapuram",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-27",
        "title": "MV Diabetes Health Conclave: \"Healthy Body & Mind\" for World Diabetes Day",
        "slug": "mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-diabetes-health-conclave-healthy-body-mind-for-world-diabetes-day/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/11/CHENNAI-SLIM-FIT-2.0.png",
            "alt": "MV Diabetes Health Conclave: \"Healthy Body & Mind\" for World Diabetes Day",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-28",
        "title": "\"Primary Prevention of Diabetes\" – Expert Discussion on Founder’s Centenary",
        "slug": "primary-prevention-of-diabetes-expert-discussion-on-founders-centenary",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/primary-prevention-of-diabetes-expert-discussion-on-founders-centenary/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/Expert-Discussion-on-Founders-Centenary.png",
            "alt": "\"Primary Prevention of Diabetes\" – Expert Discussion on Founder’s Centenary",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-42",
        "title": "7th Train the Foot Trainer Program: Global Collaboration in Chennai",
        "slug": "7th-train-the-foot-trainer-program-global-collaboration-in-chennai",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/7th-train-the-foot-trainer-program-global-collaboration-in-chennai/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "7th Train the Foot Trainer Program: Global Collaboration in Chennai",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-46",
        "title": "Caring for Kids with Type 1 Diabetes: World Diabetes Day 2022",
        "slug": "caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/caring-for-kids-with-type-1-diabetes-world-diabetes-day-2022/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/DSC_8106-scaled.jpg",
            "alt": "Caring for Kids with Type 1 Diabetes: World Diabetes Day 2022",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-47",
        "title": "MV Hospital Wins Award at 18th European Diabetic Foot Study",
        "slug": "mv-hospital-wins-award-at-18th-european-diabetic-foot-study",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-wins-award-at-18th-european-diabetic-foot-study/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/07/MV-Post-featured-image-7.jpg",
            "alt": "MV Hospital Wins Award at 18th European Diabetic Foot Study",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-49",
        "title": "Dr. N. Murugan Honored: Highlights Diabetes-Related Liver Disease",
        "slug": "dr-n-murugan-honored-highlights-diabetes-related-liver-disease",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Consultant Physician and Diabetologist...",
        "content": "Consultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention\n\nMinimally invasive surgical methods",
        "sourceUrl": "https://mvdiabetes.com/dr-n-murugan-honored-highlights-diabetes-related-liver-disease/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/02/Blog-Image.png",
            "alt": "Dr. N. Murugan Honored: Highlights Diabetes-Related Liver Disease",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-52",
        "title": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022",
        "slug": "dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Award",
        "excerpt": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022",
        "content": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/dr-vijay-viswanathan-awarded-widf-outstanding-researcher-2022/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/WIDF-2022-08-Jan-2022.png",
            "alt": "Dr. Vijay Viswanathan Awarded WIDF Outstanding Researcher 2022",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-55",
        "title": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021",
        "slug": "mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Awareness",
        "excerpt": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021",
        "content": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021. This article is part of the MV Diabetes historical archive.",
        "sourceUrl": "https://mvdiabetes.com/mv-hospital-lights-up-anna-centenary-library-for-world-diabetes-day-2021/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2023/10/DSC_5190.jpg",
            "alt": "MV Hospital Lights Up Anna Centenary Library for World Diabetes Day 2021",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-94",
        "title": "Prof. M. Viswanathan Gold Medal Oration Award 2008 Celebration",
        "slug": "prof-m-viswanathan-gold-medal-oration-award-2008-celebration",
        "year": 2008,
        "date": "2008-01-01",
        "category": "Camp",
        "excerpt": "Prof. M.Viswanathan Gold Medal 2008 was presented to Dr.N.K.Sethi, Sr. Advisor (Health), Planning Commission of India, New Delhi by Dr. S. Elango, Director of Public Health, Govt. of Tamil Nadu. Dr. S...",
        "content": "Prof. M.Viswanathan Gold Medal 2008 was presented to Dr.N.K.Sethi, Sr. Advisor (Health), Planning Commission of India, New Delhi by Dr. S. Elango, Director of Public Health, Govt. of Tamil Nadu. Dr. S.N.Narasingan, Dean of Studies and Dr.Vijay Viswanathan, Managing Director, M.V. Hospitals are seen in the picture above.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-gold-medal-oration-award-2008-celebration/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/MV-Diabetes-News-and-Events-thumbnail-2.jpg",
            "alt": "Prof. M. Viswanathan Gold Medal Oration Award 2008 Celebration",
            "status": "available"
        },
        "featured": false
    },
    {
        "id": "news-95",
        "title": "Prof. M. Viswanathan Gold Medal Oration Award 2007 Celebration",
        "slug": "prof-m-viswanathan-gold-medal-oration-award-2007-celebration",
        "year": 2007,
        "date": "2007-01-01",
        "category": "Camp",
        "excerpt": "Prof.M.Viswanathan gold medal oration award 2007 was held at Taj Connemara on 20-1-2008. Dr. Gojka Roglic, Responsible Officer, WHO Diabetes Programme, Geneva has been conferred with the award. The ev...",
        "content": "Prof.M.Viswanathan gold medal oration award 2007 was held at Taj Connemara on 20-1-2008. Dr. Gojka Roglic, Responsible Officer, WHO Diabetes Programme, Geneva has been conferred with the award. The event was witnessed honouring Prof. Dr. K. Meer Mustafa Hussain, Vice-Chancellor, Dr. M.G.R. Medical University the Life Time Achievement award along with a citation apart from unveiling a campaign on “Primary Prevention of Diabetes”. Deputy Director General (Medical), Directorate General of Health Services Mr. P.H.Ananthanarayanan and Managing Director of M.V.Hospital for Diabetes, Dr.Vijay Viswanathan also spoke on this occasion.\n\nConsultant Physician and Diabetologist\n\nDr. B S Sanjay is a Consultant Physician and Diabetologist at MV centre for Diabetes with over 19 years of clinical experience. He holds an PG Diploma in Diabetology from Amrita Institute of Medical science, cochin. Passionate about holistic diabetes care, Dr. Sanjay has been with MV centre since 2009, providing outpatient care.\n\n19 years of experience in Internal Medicine and Diabetology\n\nSpecial focus on managing complex diabetes cases and complications\n\nLifetime Member – RSSDI and IMA\n\nResearch & Public Engagement\n\nInvolved in study -Diabetic Foot offloading effectiveness to heal foot ulcers\n\nInvolved in studies involving triple oral antiglycemic versus single drug initiation In newly detected diabetes\n\nInvolved in public awareness activities regarding Diabetes and its complications prevention\n\nHead and Chief Physician MV Diabetes North and South Chennai and Bengaluru.\n\n      Completed 34 years of practice.\n\nPresident RSSDI [Research Society for Study of Diabetes in India] 2025.\n\nHonorary President D Foot International based in Belgium overseeing 193 countries.\n\nHon Gen Secretary Association of Physicians [API] Chennai.\n\nResearch Interests: Diabetic Foot: Limb Salvage\n\nDiabetes and Kidney [Did his PhD in this field in 1999]\n\nDiabetes and TB [PI in RePORT India]\n\nOver 300 Research Publications in peer reviewed journals\n\nSenior Consultant Surgeon\n\nDr. G. Senthil is a Senior Consultant Surgeon specializing in Diabetic Foot Surgery, Plastic & Reconstructive Surgery, and General Surgery at MV Hospital for Diabetes. With over 25 years of experience, Dr. Senthil is a pioneer in conservative and limb-saving surgical approaches for complex diabetic foot complications. He holds an MBBS, MS in General Surgery, and MCh in Plastic Surgery. Known for his patient-centric and empathetic care, Dr. Senthil combines surgical expertise with global best practices to offer personalized, minimally invasive treatments for limb preservation.\n\n25+ years of clinical and surgical experience\n\nSpecialized Expertise:\n\nDiabetic foot surgery\n\nPlastic and reconstructive surgery\n\nPreventive and deformity-corrective foot surgeries\n\nConservative limb-saving surgical techniques\n\nMultidisciplinary team approach to complex diabetic foot cases\n\n      Distinguished Approach:\n\nFocus on limb salvage and amputation prevention",
        "sourceUrl": "https://mvdiabetes.com/prof-m-viswanathan-gold-medal-oration-award-2007-celebration/",
        "image": {
            "src": "https://mvdiabetes.com/wp-content/uploads/2024/05/MV-Diabetes-News-and-Events-thumbnail.jpg",
            "alt": "Prof. M. Viswanathan Gold Medal Oration Award 2007 Celebration",
            "status": "available"
        },
        "featured": false
    }
];

export function getEventBySlug(slug: string): NewsEvent | undefined {
    return newsEvents.find((e) => e.slug === slug);
}
