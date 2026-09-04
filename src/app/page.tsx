import Hero from '@/components/sections/Hero';
import LegacyFeatureCards from '@/components/sections/LegacyFeatureCards';
import TrustStrip from '@/components/sections/TrustStrip';
import WhyMVDiabetes from '@/components/sections/WhyMVDiabetes';
import CareJourney from '@/components/sections/CareJourney'; // clear cache
import SpecialtyExplorer from '@/components/sections/SpecialtyExplorer';
import SpecialtiesGrid from '@/components/sections/SpecialtiesGrid';
import PackageSection from '@/components/sections/PackageSection';
import CheckupsSection from '@/components/sections/CheckupsSection';
import DoctorSection from '@/components/sections/DoctorSection';
import {
  TestimonialSlider,
  BlogPreview,
  NewsEventsPreview,
  BranchSection,
  AppointmentCTASection,
} from '@/components/sections/HomeSections';
import { StatsCounter, PatientEducation, VideoTestimonials, Accreditations, AwardsAndAchievements, TPAPartnerships } from '@/components/sections/MissingSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LegacyFeatureCards />
      <TrustStrip />
      <WhyMVDiabetes />
      <PackageSection />
      <CareJourney />
      <SpecialtyExplorer />
      <SpecialtiesGrid />
      <StatsCounter />
      <CheckupsSection />
      <DoctorSection />
      <PatientEducation />
      <TestimonialSlider />
      <VideoTestimonials />
      <BlogPreview />
      <NewsEventsPreview />
      <AwardsAndAchievements />
      <TPAPartnerships />
      <BranchSection />
      {/* <Accreditations /> */}
      <AppointmentCTASection />
    </>
  );
}
