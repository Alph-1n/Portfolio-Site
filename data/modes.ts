import type { RoleMode } from '@/lib/types';

// PLACEHOLDER — replace hero copy per role.
export const modes: RoleMode[] = [
  {
    id: 'product',
    label: 'Product / APM',
    shortLabel: 'Product',
    tagline: 'Ship the smallest thing that changes behaviour.',
    heroKicker: 'Product Manager · APM',
    heroHeadline: 'Products that feel inevitable in hindsight.',
    introduction:
      'I lead 0-to-1 product work — from problem framing and research to launch. I care about the details that make a product feel obvious once it exists, and I write specs the whole team actually wants to read.',
    featuredProjectIds: ['ai-bible-translator', 'speech-therapy', 'bible-glyph'],
    highlightedSkillCategories: ['product', 'research', 'design'],
    resumeUrl: '/resume/your-name-product.pdf',
    primaryCta: { label: 'View featured work', href: '#work' },
    secondaryCta: { label: 'Read a case study', href: '/projects/ai-bible-translator' },
  },
  {
    id: 'business',
    label: 'Business / Consulting',
    shortLabel: 'Business',
    tagline: 'Strategy that survives contact with the roadmap.',
    heroKicker: 'Strategy · Consulting',
    heroHeadline: 'Turn hard problems into calm, compounding decisions.',
    introduction:
      'I partner with founders and operating teams to reduce ambiguity — market shaping, GTM, and operating cadences that quietly compound. I sit close to the numbers and closer to the customer.',
    featuredProjectIds: ['speech-therapy', 'ai-bible-translator', 'bible-glyph'],
    highlightedSkillCategories: ['business', 'product', 'research'],
    resumeUrl: '/resume/your-name-consulting.pdf',
    primaryCta: { label: 'See engagements', href: '#work' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
  },
  {
    id: 'development',
    label: 'Software Development',
    shortLabel: 'Engineering',
    tagline: 'Boring code, delightful products.',
    heroKicker: 'Full-stack Engineer',
    heroHeadline: 'Build quiet systems that hold up under weight.',
    introduction:
      'I write full-stack TypeScript and Python for products that need to be correct, observable and pleasant to work in. Comfortable across data pipelines, AI workflows, and print-quality typesetting.',
    featuredProjectIds: ['bible-glyph', 'ai-bible-translator', 'speech-therapy'],
    highlightedSkillCategories: ['engineering', 'ai', 'infra'],
    resumeUrl: '/resume/your-name-engineering.pdf',
    primaryCta: { label: 'See engineering work', href: '#work' },
    secondaryCta: { label: 'View source', href: 'https://github.com/yourname' },
  },
];

export const getMode = (id?: string | null): RoleMode => {
  const found = modes.find((m) => m.id === id);
  return found ?? modes[0];
};
