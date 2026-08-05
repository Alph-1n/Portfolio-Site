import { ModeProvider } from '@/components/mode-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/hero-section';
import { IntroSection } from '@/components/intro-section';
import { FeaturedProjects } from '@/components/featured-projects';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';

export const dynamic = 'force-static';

const Page = () => {
  return (
    <ModeProvider>
      <SiteHeader />
      <main id="main" className="relative">
        <HeroSection />
        <div className="hairline mx-auto max-w-6xl" />
        <IntroSection />
        <FeaturedProjects />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </ModeProvider>
  );
};

export default Page;
