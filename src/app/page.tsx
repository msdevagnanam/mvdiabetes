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
import { buildPageMetadata, siteUrl } from '@/data/seo';
import { siteConfig } from '@/data/site';

export const metadata = buildPageMetadata('/');

// Organization + WebSite structured data, mirroring what mvdiabetes.com publishes on its home page.
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalOrganization', 'Hospital'],
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.fullName,
      url: `${siteConfig.url}/`,
      logo: `${siteUrl}/images/logo/mv-logo.png`,
      image: `${siteUrl}/images/og/home-card.jpg`,
      description: siteConfig.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      medicalSpecialty: 'Endocrine',
      sameAs: Object.values(siteConfig.social),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/search?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, '\\u003c') }}
      />
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
