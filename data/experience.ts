import type { WorkExperience } from '@/lib/types';

// PLACEHOLDER
export const experience: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Founding Engineer & Product',
    company: 'Independent',
    location: 'Remote',
    start: '2024',
    end: 'Present',
    summary:
      'Building small, deliberate products at the intersection of AI, publishing, and accessible learning.',
    highlights: [
      'Shipped AI Bible Translator to pilot across 3 language pairs.',
      'Built Bible Glyph, a USFM-to-PDF publishing pipeline used for real print runs.',
      'Advised two early-stage teams on 0-to-1 product shape.',
    ],
    tags: ['Product', 'AI', 'TypeScript', 'Python'],
  },
  {
    id: 'exp-2',
    role: 'Product Lead',
    company: 'Placeholder Health-Tech Co.',
    location: 'Hybrid',
    start: '2022',
    end: '2024',
    summary:
      'Led a small product team building the gamified speech-therapy application from concept through clinic pilots.',
    highlights: [
      'Owned discovery with practising SLPs across three clinics.',
      'Set the north-star metric around weekly practice frequency.',
      'Shipped the v1 without ads, IAP, or manipulative loops.',
    ],
    tags: ['Product', 'Design', 'Healthcare'],
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'Placeholder Studio',
    location: 'On-site',
    start: '2020',
    end: '2022',
    summary:
      'Full-stack engineering across data-heavy internal tools and customer-facing SaaS.',
    highlights: [
      'Rebuilt a monolith\'s billing surface with zero downtime.',
      'Introduced trunk-based deployment and observability.',
      'Mentored two juniors into mid-level roles.',
    ],
    tags: ['TypeScript', 'Postgres', 'Infra'],
  },
];
