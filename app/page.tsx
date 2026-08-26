import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative">
        <HeroSection />
        <div className="hairline mx-auto max-w-6xl" />
        <FeaturedProjects />
        <div className="hairline mx-auto max-w-6xl" />
        <SkillsSection />
        <div className="hairline mx-auto max-w-6xl" />
        <ExperienceSection />
        <div className="hairline mx-auto max-w-6xl" />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

