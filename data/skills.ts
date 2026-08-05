import type { SkillCategory } from '@/lib/types';

// PLACEHOLDER — grouped so role modes can highlight a subset.
export const skillCategories: SkillCategory[] = [
  {
    id: 'product',
    name: 'Product',
    description: 'Discovery, framing, roadmapping and shipping — the parts that hold the team together.',
    skills: ['Problem framing', 'User research', 'Roadmap shaping', 'Writing specs', 'Prioritisation', 'Launch craft'],
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Interaction, systems and typographic craft — with an eye on quiet detail.',
    skills: ['Interaction design', 'Design systems', 'Typography', 'Motion (restrained)', 'Prototyping'],
  },
  {
    id: 'research',
    name: 'Research',
    description: 'Understanding people, markets and the seams where the two disagree.',
    skills: ['User interviews', 'Diary studies', 'Competitive teardown', 'Market shaping'],
  },
  {
    id: 'business',
    name: 'Business & Strategy',
    description: 'Operating cadence, positioning, and pricing that survive contact with the roadmap.',
    skills: ['Positioning', 'Pricing', 'GTM', 'Operating rhythm', 'Executive comms'],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Full-stack TypeScript and Python, biased toward boring, correct code.',
    skills: ['TypeScript', 'Next.js', 'Node', 'Python', 'Postgres', 'CLI ergonomics'],
  },
  {
    id: 'ai',
    name: 'AI Workflows',
    description: 'Retrieval, provenance and evaluation for AI systems that need to be trustworthy.',
    skills: ['LLM orchestration', 'RAG', 'Embeddings', 'Evals', 'Prompt design', 'Provenance UX'],
  },
  {
    id: 'infra',
    name: 'Infra',
    description: 'Small, observable systems that hold up under weight.',
    skills: ['Vercel / Cloudflare', 'Docker', 'Observability', 'CI/CD', 'Static-first delivery'],
  },
];
