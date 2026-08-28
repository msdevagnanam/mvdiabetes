import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import WhyMVDiabetes from '@/components/sections/WhyMVDiabetes';
import CareJourney from '@/components/sections/CareJourney';
import SpecialtyExplorer from '@/components/sections/SpecialtyExplorer';
import PackageSection from '@/components/sections/PackageSection';
import DoctorSection from '@/components/sections/DoctorSection';
import {
  TestimonialSlider,
  BlogPreview,
  NewsEventsPreview,
  BranchSection,
  AppointmentCTASection,
} from '@/components/sections/HomeSections';
import { StatsCounter, PatientEducation, VideoTestimonials, Accreditations } from '@/components/sections/MissingSections';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyMVDiabetes />
      <PackageSection />
      <CareJourney />
      <SpecialtyExplorer />
      <StatsCounter />
      <DoctorSection />
      <PatientEducation />
      <TestimonialSlider />
      <VideoTestimonials />
      <BlogPreview />
      <NewsEventsPreview />
      <BranchSection />
      <Accreditations />
      <AppointmentCTASection />
    </>
  );
}
