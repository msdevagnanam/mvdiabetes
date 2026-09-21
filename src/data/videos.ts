export type VideoCategory = 
    | 'Patient Stories' 
    | 'Education' 
    | 'Legacy & History' 
    | 'Media Coverage' 
    | 'Events' 
    | 'MV Diabetes'
    | 'Other';

export type VideoProvider = 'youtube' | 'vimeo' | 'other';

export interface VideoItem {
    id: string;
    title: string;
    category: VideoCategory;
    provider: VideoProvider;
    youtubeUrl: string;
    thumbnailUrl: string;
    isFeatured?: boolean;
}

export const videos: VideoItem[] = [
    {
        id: 'cZ6jddmqUGY',
        title: 'Seeking World-Class HBOT? Hear From Our Patients Who Travelled to Find It',
        category: 'Patient Stories',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/cZ6jddmqUGY?si=y3YObEBUojodHI3j',
        thumbnailUrl: 'https://img.youtube.com/vi/cZ6jddmqUGY/hqdefault.jpg',
        isFeatured: true
    },
    {
        id: 'aSYcnHoS9gI',
        title: 'Hyperbaric Oxygen Therapy Testimonials: Real Patients Share Their Recovery Stories',
        category: 'Patient Stories',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/aSYcnHoS9gI?si=GZ0d8-dtcYsWXCMW',
        thumbnailUrl: 'https://img.youtube.com/vi/aSYcnHoS9gI/hqdefault.jpg'
    },
    {
        id: 'oW8rgO55FHg',
        title: 'Prof. M. Viswanathan: Legacy and His Contribution to MV Hospital for Diabetes',
        category: 'Legacy & History',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/oW8rgO55FHg?si=wSlBmL7vDHZ-EpPu',
        thumbnailUrl: 'https://img.youtube.com/vi/oW8rgO55FHg/hqdefault.jpg'
    },
    {
        id: 'Q3Ur-hqjoQ0',
        title: 'The Legacy of Prof. M. Viswanathan: The Father of Diabetology & MV Hospital for Diabetes',
        category: 'Legacy & History',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/Q3Ur-hqjoQ0?si=fSRDAl_J98gNwEvN',
        thumbnailUrl: 'https://img.youtube.com/vi/Q3Ur-hqjoQ0/hqdefault.jpg'
    },
    {
        id: '25v9mVSXawQ',
        title: 'M.V. Diabetes made Valluvar Kottam turns into Blue on the eve of World Diabetes Day : FACE NEWS TV',
        category: 'Events',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/25v9mVSXawQ',
        thumbnailUrl: 'https://img.youtube.com/vi/25v9mVSXawQ/hqdefault.jpg'
    },
    {
        id: 'Pp7Rf2EVduk',
        title: 'High level of Distress Affect Women Diabetic patients than men in South India',
        category: 'Education',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/Pp7Rf2EVduk',
        thumbnailUrl: 'https://img.youtube.com/vi/Pp7Rf2EVduk/hqdefault.jpg'
    },
    {
        id: 'sZtOFw-GIaM',
        title: 'M.V.Hospital for Diabetes Royapuram Celebrate World Diabetes Day 2017 | Express News',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/sZtOFw-GIaM',
        thumbnailUrl: 'https://img.youtube.com/vi/sZtOFw-GIaM/hqdefault.jpg'
    },
    {
        id: 'yGK5gcB9lgA',
        title: 'MV Hospitals Record Light up Swami Vivekananda house 2017 | NEWSBOOK center',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/yGK5gcB9lgA',
        thumbnailUrl: 'https://img.youtube.com/vi/yGK5gcB9lgA/hqdefault.jpg'
    },
    {
        id: 'u13yp8DWaDo',
        title: 'M.V.Hospital for Diabetes Royapuram Celebrate World Diabetes Day 2017 | Thulir TV',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/u13yp8DWaDo',
        thumbnailUrl: 'https://img.youtube.com/vi/u13yp8DWaDo/hqdefault.jpg'
    },
    {
        id: '-XnynHMWP2o',
        title: 'Record breaking ninth consecutive year World Diabetes Day by M.V.HOSPITALS | B4UMedia',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/-XnynHMWP2o',
        thumbnailUrl: 'https://img.youtube.com/vi/-XnynHMWP2o/hqdefault.jpg'
    },
    {
        id: 'hZYrlo8aYtc',
        title: 'Dr.Vijay Viswanathan shares information about diabetes | News7 Tamil',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/hZYrlo8aYtc',
        thumbnailUrl: 'https://img.youtube.com/vi/hZYrlo8aYtc/hqdefault.jpg'
    },
    {
        id: '8mHy9vsNKz8',
        title: 'Dr.Vijay Viswanathan shares information about diabetes | News7 Tamil',
        category: 'Media Coverage',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/8mHy9vsNKz8',
        thumbnailUrl: 'https://img.youtube.com/vi/8mHy9vsNKz8/hqdefault.jpg'
    },
    {
        id: 'wF1wTKOOAZQ',
        title: 'Diamond Jubilee Celebrations',
        category: 'Events',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/wF1wTKOOAZQ',
        thumbnailUrl: 'https://img.youtube.com/vi/wF1wTKOOAZQ/hqdefault.jpg'
    },
    {
        id: '3PEutcVgie8',
        title: 'M.V.Centre For Hyperbaric Medicine And Advanced Wound Care',
        category: 'MV Diabetes',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/3PEutcVgie8',
        thumbnailUrl: 'https://img.youtube.com/vi/3PEutcVgie8/hqdefault.jpg'
    },
    {
        id: '0zcoWbXaJms',
        title: 'M.V.Hospital for Diabetes',
        category: 'MV Diabetes',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/0zcoWbXaJms',
        thumbnailUrl: 'https://img.youtube.com/vi/0zcoWbXaJms/hqdefault.jpg'
    },
    {
        id: 'OkBm-Za0CMw',
        title: 'M.V.Hospital for Diabetes',
        category: 'MV Diabetes',
        provider: 'youtube',
        youtubeUrl: 'https://youtu.be/OkBm-Za0CMw',
        thumbnailUrl: 'https://img.youtube.com/vi/OkBm-Za0CMw/hqdefault.jpg'
    },
    {
        id: '25v9mVSXawQ_dup',
        title: 'M.V. Hospital for Diabetes lighting up Valluvar Kottam on the eve of World Diabetes Day - Expressnews',
        category: 'Events',
        provider: 'youtube',
        youtubeUrl: 'https://www.youtube.com/watch?v=25v9mVSXawQ',
        thumbnailUrl: 'https://img.youtube.com/vi/25v9mVSXawQ/hqdefault.jpg'
    },
    {
        id: 'ZVEU2QhPoZI',
        title: 'M.V. Diabetes made Valluvar Kottam turns into Blue on the eve of World Diabetes Day : FACE NEWS TV',
        category: 'Events',
        provider: 'youtube',
        youtubeUrl: 'https://www.youtube.com/watch?v=ZVEU2QhPoZI',
        thumbnailUrl: 'https://img.youtube.com/vi/ZVEU2QhPoZI/hqdefault.jpg'
    }
];
