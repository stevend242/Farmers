import { FAQAccordion } from './_components/FAQAccordion';
import { FarmerOfTheDay } from './_components/FarmerOfTheDay';
import { FeatureSection } from './_components/FeatureSection';
import { HeroSection } from './_components/HeroSection';
import { LatestNews } from './_components/LatestNews';
import { MostSellingCrops } from './_components/MostSellingCrops';
import { StatisticsSection } from './_components/StatisticsSection';
import { Testimonials } from './_components/Testimonials';

export default function HomePage() {
  return (
    <div className='p-8'>
      <HeroSection />
      <FeatureSection />
      <FarmerOfTheDay />
      <MostSellingCrops />
      <StatisticsSection />
      <LatestNews />
      <Testimonials />
      <FAQAccordion />
    </div>
  );
}
