import SearchBar from '@/components/SearchBar';
import HeroSection from '@/homepage/partials/Herosection';
import PartnersSection from '@/homepage/PartnersSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <PartnersSection />
    </>
  );
}
