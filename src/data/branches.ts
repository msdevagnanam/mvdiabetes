export interface Branch {
    id: string;
    name: string;
    shortName: string;
    city: string;
    address: string;
    phones: string[];
    email: string;
    mapUrl: string;
    isMainBranch?: boolean;
}

export const branches: Branch[] = [
    {
        id: 'royapuram',
        name: 'M.V. Hospital for Diabetes & Prof. M. Viswanathan Diabetes Research Centre',
        shortName: 'Royapuram (Main Hospital)',
        city: 'Chennai',
        address:
            'No.4, West Madha Church Street, Royapuram, Chennai - 600 013, Tamil Nadu, India.',
        phones: [
            '044-2595 4913',
            '044-2595 4914',
            '044-2595 4915',
            '044-2595 0711',
        ],
        email: 'appointments@mvdiabetes.com',
        mapUrl: 'https://maps.app.goo.gl/ARJiXKqgbyHD6MRK6',
        isMainBranch: true,
    },
    {
        id: 'adyar',
        name: 'M.V Centre of Diabetes, Adyar',
        shortName: 'Adyar Branch',
        city: 'Chennai',
        address:
            'Sreela Terrace, No.105, 3rd Floor, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600 020 (Opp. Adyar Flyover)',
        phones: ['044-2442 5213', '044-2442 5214'],
        email: 'adyar@mvdiabetes.com',
        mapUrl: 'https://maps.app.goo.gl/GLNhceZe6VTb9Pa3A',
    },
    {
        id: 'velachery',
        name: 'M.V Centre of Diabetes, Velachery',
        shortName: 'Velachery Branch',
        city: 'Chennai',
        address:
            '2/22, Venkateswara Nagar 2nd Main Road, Velachery West, Chennai - 600 042 (Above Lawrance & Mayo showroom)',
        phones: ['044-2259 2209', '044-4206 7555', '+91-93451 84574'],
        email: 'velachery@mvdiabetes.com',
        mapUrl: 'https://maps.app.goo.gl/ARJiXKqgbyHD6MRK6',
    },
    {
        id: 'koramangala',
        name: 'M.V Centre of Diabetes, Koramangala',
        shortName: 'Koramangala Branch',
        city: 'Bengaluru',
        address:
            'No.746, NPR Building, 3rd Floor, 80 Feet Road, Koramangala 4th Block, Bengaluru - 560 034.',
        phones: ['080-4151 3333', '080-4146 8686', '9066077051'],
        email: 'appointments@mvdiabetes.co.in',
        mapUrl: 'https://maps.app.goo.gl/AkYZpPFS6gbxPwci8',
    },
];
