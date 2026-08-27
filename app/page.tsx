import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { OverviewSection } from '@/components/overview-section';
import { StrategySection } from '@/components/strategy-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { AboutSection } from '@/components/about-section';
import { FaqSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative">
        <HeroSection />
        <OverviewSection />
        <StrategySection />
        <FeaturedProjects />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
