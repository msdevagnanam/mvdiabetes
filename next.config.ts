import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'mvdiabetes.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async redirects() {
    return [
      // WordPress published one BMW page per year; each lands on that year of the dashboard.
      ...[2021, 2022, 2023, 2024, 2025, 2026].map(year => ({
        source: `/bmw-data-${year}`,
        destination: `/bmw-data?year=${year}`,
        permanent: true,
      })),
      // BMW workbooks, now served from /public/reports/bmw (byte-identical copies).
      { source: '/wp-content/uploads/2023/05/bmw-report2021.xls', destination: '/reports/bmw/bmw-report2021.xls', permanent: true },
      { source: '/wp-content/uploads/2023/05/bmw-report2022.xls', destination: '/reports/bmw/bmw-report2022.xls', permanent: true },
      { source: '/jobs/cashier', destination: '/careers/cashier', permanent: true },
      { source: '/jobs/electrician', destination: '/careers/electrician', permanent: true },
      { source: '/jobs/housekeeping-ward-boys-ward-ayahs', destination: '/careers/housekeeping-ward-boys-ward-ayahs', permanent: true },
      { source: '/jobs/non-regd-staff-nurses-nursing-assts', destination: '/careers/non-regd-staff-nurses-nursing-assts', permanent: true },
      { source: '/jobs/footwear-coordinator', destination: '/careers/footwear-coordinator', permanent: true },
      { source: '/jobs/dietician-cum-counsellor', destination: '/careers/dietician-cum-counsellor', permanent: true },
      { source: '/jobs/receptionist', destination: '/careers/receptionist', permanent: true },
      { source: '/jobs/physician-assistant', destination: '/careers/pharmacist', permanent: true },
      { source: '/jobs/tn-regd-staff-nurses', destination: '/careers/tn-regd-staff-nurses', permanent: true },
      { source: '/academic-courses', destination: '/academics', permanent: true },
      { source: '/academic-courses/', destination: '/academics', permanent: true },
      { source: '/facilities', destination: '/about/facilities', permanent: true },
      { source: '/facilities/', destination: '/about/facilities', permanent: true },
      { source: '/podiatry', destination: '/care/podiatry', permanent: true },
      { source: '/podiatry/', destination: '/care/podiatry', permanent: true },
      { source: '/yoga', destination: '/care/yoga', permanent: true },
      { source: '/yoga/', destination: '/care/yoga', permanent: true },
      { source: '/csr-activity', destination: '/csr', permanent: true },
      { source: '/csr-activity/', destination: '/csr', permanent: true },
      { source: '/research-publications', destination: '/research', permanent: true },
      { source: '/research-publications/', destination: '/research', permanent: true },
      // Superseded in-site legal routes
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/terms', destination: '/terms-and-condition', permanent: true },
    ];
  },
};

export default nextConfig;
