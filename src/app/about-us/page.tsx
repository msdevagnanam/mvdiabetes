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
import AboutCTA from '@/components/sections/about/AboutCTA';
import AboutProducts from '@/components/sections/about/AboutProducts';
import { buildPageMetadata } from '@/data/seo';

export const metadata: Metadata = buildPageMetadata('/about-us');

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
            <AboutProducts />
            <AboutCTA />
        </>
    );
}
