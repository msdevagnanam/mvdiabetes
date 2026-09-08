import { Metadata } from 'next';
import { seoMetadata } from '@/data/prof-viswanathan';
import LegacyPageNav from '@/components/legacy/LegacyPageNav';
import LegacyHero from '@/components/legacy/LegacyHero';
import LegacyIntroduction from '@/components/legacy/LegacyIntroduction';
import LegacyEarlyYears from '@/components/legacy/LegacyEarlyYears';
import LegacyMilestone1948 from '@/components/legacy/LegacyMilestone1948';
import LegacyPhilosophy from '@/components/legacy/LegacyPhilosophy';
import LegacyHospitalTimeline from '@/components/legacy/LegacyHospitalTimeline';
import LegacyResearch from '@/components/legacy/LegacyResearch';
import LegacyRoleCards from '@/components/legacy/LegacyRoleCards';
import LegacyRecognition from '@/components/legacy/LegacyRecognition';
import LegacyFourAmbitions from '@/components/legacy/LegacyFourAmbitions';
import LegacyPassing1996 from '@/components/legacy/LegacyPassing1996';
import LegacyToday from '@/components/legacy/LegacyToday';
import LegacyClosing from '@/components/legacy/LegacyClosing';
import LegacyFullTimeline from '@/components/legacy/LegacyFullTimeline';
import LegacyFinalCTA from '@/components/legacy/LegacyFinalCTA';

export const metadata: Metadata = {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
        canonical: seoMetadata.canonical,
    },
    openGraph: {
        title: seoMetadata.title,
        description: seoMetadata.description,
        url: `https://mvdiabetes.vercel.app${seoMetadata.canonical}`,
        siteName: 'M.V. Hospital for Diabetes',
        images: [
            {
                url: '/images/about/Dr.viswanathan.png',
                width: 800,
                height: 600,
                alt: 'Prof. M. Viswanathan',
            },
        ],
        locale: 'en_IN',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: seoMetadata.title,
        description: seoMetadata.description,
        images: ['/images/about/Dr.viswanathan.png'],
    },
};

export default function ProfViswanathanPage() {
    // Structured Data (JSON-LD)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        'mainEntity': {
            '@type': 'Person',
            'name': 'Prof. M. Viswanathan',
            'alternateName': 'Father of Diabetology in India',
            'description': seoMetadata.description,
            'birthDate': '1923',
            'deathDate': '1996-03-01',
            'alumniOf': {
                '@type': 'CollegeOrUniversity',
                'name': 'Stanley Medical College',
                'location': 'Chennai, India'
            },
            'founder': {
                '@type': 'MedicalOrganization',
                'name': 'M.V. Hospital for Diabetes'
            },
            'award': 'Dr. B.C. Roy Award'
        }
    };

    return (
        <main className="min-h-screen bg-white selection:bg-secondary/30 selection:text-primary-dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <LegacyHero />
            <LegacyPageNav />
            <LegacyIntroduction />
            <LegacyEarlyYears />
            <LegacyMilestone1948 />
            <LegacyPhilosophy />
            <LegacyHospitalTimeline />
            <LegacyResearch />
            <LegacyRoleCards />
            <LegacyRecognition />
            <LegacyFourAmbitions />
            <LegacyPassing1996 />
            <LegacyToday />
            <LegacyClosing />
            <LegacyFullTimeline />
            <LegacyFinalCTA />
        </main>
    );
}
