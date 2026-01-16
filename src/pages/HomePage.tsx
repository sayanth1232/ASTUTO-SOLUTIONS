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
import { ParallaxSection } from '@/components/ParallaxSection';

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="parallax-container">
      <ParallaxSection index={0} speed={0.2}>
        <HeroSection />
      </ParallaxSection>
      <ParallaxSection index={1} speed={0.25}>
        <ServicesOverview />
      </ParallaxSection>
      <ParallaxSection index={2} speed={0.3}>
        <ServicesGrid />
      </ParallaxSection>
      <ParallaxSection index={3} speed={0.25}>
        <CommitmentSection />
      </ParallaxSection>
      <ParallaxSection index={4} speed={0.3}>
        <TestimonialsSection />
      </ParallaxSection>
      <ParallaxSection index={5} speed={0.25}>
        <ExpertInsights />
      </ParallaxSection>
      <ParallaxSection index={6} speed={0.3}>
        <FAQSection />
      </ParallaxSection>
      <ParallaxSection index={7} speed={0.25}>
        <BlogSection />
      </ParallaxSection>
      <ParallaxSection index={8} speed={0.2}>
        <ContactSection />
      </ParallaxSection>
    </main>
  );
}
