import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import InstitutionalStats from '@/components/sections/about/InstitutionalStats';
import AdvancedDiabetesCare from '@/components/sections/about/AdvancedDiabetesCare';
import LegacySection from '@/components/sections/about/LegacySection';
import HistoryTimeline from '@/components/sections/about/HistoryTimeline';
import DreamContinues from '@/components/sections/about/DreamContinues';
import ResearchLegacy from '@/components/sections/about/ResearchLegacy';
import LeadershipFeature from '@/components/sections/about/LeadershipFeature';
import VisionMission from '@/components/sections/about/VisionMission';
import ValuesExplorer from '@/components/sections/about/ValuesExplorer';
import InsurancePartners from '@/components/sections/about/InsurancePartners';
import TeamDirectory from '@/components/sections/about/TeamDirectory';
import ClinicalLeadership from '@/components/sections/about/ClinicalLeadership';
import ModernInstitution from '@/components/sections/about/ModernInstitution';
import AboutStickyNav from '@/components/sections/about/AboutStickyNav';
import AboutCTA from '@/components/sections/about/AboutCTA';

export const metadata: Metadata = {
    title: 'About Us — MV Diabetes | India\'s First Exclusive Diabetes Hospital',
    description:
        'Discover the legacy of MV Diabetes — India\'s first hospital exclusively for diabetes. Over 60 years of pioneering diabetes care, research, education, and training. 3,50,000+ patients served. Founded by Prof. M. Viswanathan.',
    openGraph: {
        title: 'About Us — MV Diabetes',
        description:
            'India\'s first exclusive diabetes hospital. 60+ years of diabetes care, research, education & prevention. Learn about our legacy, leadership, and patient-first values.',
        type: 'website',
    },
    alternates: {
        canonical: '/about-us',
    },
};

export default function AboutUsPage() {
    return (
        <>
            {/* <AboutStickyNav /> */}
            <AboutHero />
            <InstitutionalStats />
            <AdvancedDiabetesCare />
            <LegacySection />
            <LeadershipFeature />
            {/* <HistoryTimeline /> */}
            {/* <DreamContinues /> */}
            {/* <ResearchLegacy /> */}
            <VisionMission />
            <ValuesExplorer />
            {/* <ModernInstitution /> */}
            {/* <ClinicalLeadership /> */}
            <InsurancePartners />
            {/* <TeamDirectory /> */}
            <AboutCTA />
        </>
    );
}
