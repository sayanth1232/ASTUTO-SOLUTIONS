import { useEffect } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { CommitmentSection } from '@/components/home/CommitmentSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ExpertInsights } from '@/components/home/ExpertInsights';
import { FAQSection } from '@/components/home/FAQSection';
import { BlogSection } from '@/components/home/BlogSection';
import { ContactSection } from '@/components/home/ContactSection';

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <ServicesGrid />
      <CommitmentSection />
      <TestimonialsSection />
      <ExpertInsights />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
