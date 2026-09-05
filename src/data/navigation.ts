export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export const navigation: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '/about-us',
        children: [
            { label: 'Our Story', href: '/about-us' },
            { label: 'Vision, Mission & Values', href: '/about-us#vision-mission' },
            { label: 'Branches', href: '/about/branches' },
            { label: 'Facilities', href: '/about/facilities' },
            { label: 'Infrastructure', href: '/about/infrastructure' },
            { label: 'CSR Activities', href: '/csr' },
        ],
    },
    {
        label: 'Care',
        href: '/care',
        children: [
            { label: 'Diabetes Care', href: '/care/diabetes-care' },
            { label: 'Diabetic Foot Care', href: '/care/diabetic-foot-care' },
            { label: 'Podiatry', href: '/care/podiatry' },
            { label: 'Kidney Care', href: '/care/kidney-care' },
            { label: 'Obesity Management', href: '/care/obesity-management' },
            { label: 'Diabetic Eye Care', href: '/care/diabetic-eye-care' },
            { label: 'Cardiology', href: '/care/cardiology' },
            { label: 'Nutrition & Dietetics', href: '/care/nutrition' },
            { label: 'Yoga for Diabetes', href: '/care/yoga' },
            { label: 'Urology', href: '/care/urology' },
        ],
    },
    { label: 'Doctors', href: '/doctors' },
    {
        label: 'Packages & Checkups',
        href: '/packages',
        children: [
            { label: 'Health Packages', href: '/packages' },
            { label: 'Recommended Checkups', href: '/checkups' },
        ],
    },
    {
        label: 'Academics',
        href: '/academics',
        children: [
            { label: 'Academic Courses', href: '/academics' },
            { label: 'Research Publications', href: '/research' },
        ],
    },
    {
        label: 'Insights',
        href: '/blog',
        children: [
            { label: 'Blog & Articles', href: '/blog' },
            { label: 'News & Events', href: '/news' },
            { label: 'Videos', href: '/videos' },
        ],
    },
    {
        label: 'Careers',
        href: '/careers',
        children: [
            { label: 'Why MV Diabetes', href: '/careers/why-mv' },
            { label: 'Grow with Us', href: '/careers/grow-with-us' },
            { label: 'Current Vacancies', href: '/careers' },
        ],
    },
    { label: 'Our Products', href: '/our-products' },
    { label: 'Contact', href: '/contact' },
];
