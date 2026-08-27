export interface Highlight {
  id: string;
  quote: string;
  context: string;
  source: string;
}

/** Real career highlights — drawn from experience, not fabricated testimonials. */
export const highlights: Highlight[] = [
  {
    id: 'vachan-ai',
    quote:
      'Built core user flows for Vachan AI — an AI translation platform with JWT authentication, async job polling, and React/Next.js frontend connected to FastAPI services.',
    context: 'Production full-stack work',
    source: 'Bridge Connectivity Solutions',
  },
  {
    id: 'bible-glyph',
    quote:
      'Developed Bible Glyph publishing pipeline: USFM validation, duplicate-tag detection, Typst template generation, and high-precision PDF rendering for translation teams.',
    context: 'Automated publishing system',
    source: 'Bridge Connectivity Solutions',
  },
  {
    id: 'finance-tracker',
    quote:
      'Shipped a live Personal Finance Tracker with real-time transaction logging, category analytics, and responsive UI — deployed on Vercel with Next.js and TypeScript.',
    context: 'Personal project · Live demo',
    source: 'Self-directed',
  },
];
