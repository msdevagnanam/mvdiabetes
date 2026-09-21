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
      {
        source: '/bmw-data-2021',
        destination: '/bmw-data',
        permanent: true,
      },
      {
        source: '/bmw-data-2022',
        destination: '/bmw-data',
        permanent: true,
      },
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
    ];
  },
};

export default nextConfig;
