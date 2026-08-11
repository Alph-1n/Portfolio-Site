import type { RoleMode } from '@/lib/types';

export const modes: RoleMode[] = [
  {
    id: 'product',
    label: 'Product / APM',
    shortLabel: 'Product',
    tagline: 'Technical foundation, structured product thinking, and clear communication.',
    heroKicker: 'Product / APM direction',
    heroHeadline: 'Improve digital products with technical clarity and structured problem-solving.',
    introduction:
      'I am a technically grounded early-career professional building experience in product workflows, requirements, user journeys, and interface iteration. I do not approach product as a title I already hold, but as a discipline I am actively developing through real software work.',
    featuredProjectIds: ['bible-glyph', 'ai-bible-translator', 'adaptive-portfolio'],
    highlightedSkillCategories: ['product', 'research', 'design'],
    resumeUrl: '/resume/your-name-product.pdf',
    primaryCta: { label: 'View featured work', href: '#work' },
    secondaryCta: { label: 'Read Bible Glyph', href: '/projects/bible-glyph' },
  },
  {
    id: 'business',
    label: 'Business / Consulting',
    shortLabel: 'Business',
    tagline: 'Workflow analysis, structured thinking, and practical technology judgment.',
    heroKicker: 'Business / Consulting direction',
    heroHeadline: 'Translate complex workflows into clear product and business decisions.',
    introduction:
      'I am interested in business and consulting roles where technical understanding helps clarify requirements, map workflows, identify friction, and support better decisions. My strongest work sits where application behaviour, user needs, and operating constraints meet.',
    featuredProjectIds: ['bible-glyph', 'ai-bible-translator', 'adaptive-portfolio'],
    highlightedSkillCategories: ['business', 'product', 'research'],
    resumeUrl: '/resume/your-name-consulting.pdf',
    primaryCta: { label: 'See work examples', href: '#work' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
  },
  {
    id: 'development',
    label: 'Software Development',
    shortLabel: 'Engineering',
    tagline: 'Full-stack implementation across React, Next.js, FastAPI, PostgreSQL, and APIs.',
    heroKicker: 'Full-stack Engineer',
    heroHeadline: 'Build practical software systems that support real workflows.',
    introduction:
      'I work across frontend, backend, integration, and debugging tasks, with exposure to React, Next.js, Tailwind CSS, Python, FastAPI, PostgreSQL, JWT authentication, REST APIs, Git, GitLab, and Linux/Ubuntu workflows.',
    featuredProjectIds: ['ai-bible-translator', 'bible-glyph', 'adaptive-portfolio'],
    highlightedSkillCategories: ['engineering', 'ai', 'infra'],
    resumeUrl: '/resume/your-name-engineering.pdf',
    primaryCta: { label: 'See engineering work', href: '#work' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
  },
];

export const getMode = (id?: string | null): RoleMode => {
  const found = modes.find((m) => m.id === id);
  return found ?? modes[0];
};
