import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Search for doctors, specialties, treatments, blog articles, and events at MV Diabetes.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
