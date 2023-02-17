import SearchBar from '@/components/SearchBar';
import ContactUsSection from '@/homepage/ContactUsSection';
import FAQSection from '@/homepage/FAQSection';
import HeroSection from '@/homepage/partials/Herosection';
import PartnersSection from '@/homepage/PartnersSection';
import TopOffersSection from '@/homepage/TopOffersSection';
import WhatMakesUsStandOut from '@/homepage/WhatMakesUsStandOut';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <PartnersSection />
      <TopOffersSection />
      <WhatMakesUsStandOut />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
