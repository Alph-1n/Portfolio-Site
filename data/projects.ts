import type { Project } from '@/lib/types';

// PLACEHOLDER — replace with your real project entries and images in /public/projects/*.
export const projects: Project[] = [
  {
    id: 'bible-glyph',
    slug: 'bible-glyph',
    title: 'Bible Glyph',
    subtitle: 'USFM → Typst → print-ready PDF publishing pipeline.',
    year: 2025,
    featured: true,
    accent: 'from-[hsl(220_90%_60%)] via-[hsl(260_80%_60%)] to-[hsl(190_90%_60%)]',
    images: [
      { src: '/projects/bible-glyph/cover.svg', alt: 'Bible Glyph typesetting sample', width: 1600, height: 1000 },
      { src: '/projects/bible-glyph/detail.svg', alt: 'Bible Glyph verse layout detail', width: 1600, height: 1000 },
    ],
    technologies: ['TypeScript', 'Node.js', 'Typst', 'USFM', 'PDF', 'CLI'],
    responsibilities: [
      'Designed the USFM parsing model and typesetting grammar.',
      'Built the Typst template system for footnotes, cross-refs and poetry.',
      'Owned CLI ergonomics and the publishing preview loop.',
    ],
    results: [
      'Reproducible, diff-friendly Bible typesetting.',
      'Cut a 3-week typesetting cycle to a single afternoon.',
      'Print-quality PDF output with proper hanging indents and drop caps.',
    ],
    sourceCodeUrl: 'https://github.com/yourname/bible-glyph',
    liveUrl: 'https://bibleglyph.example.com',
    links: [
      { label: 'Case study', href: '/projects/bible-glyph' },
      { label: 'Source', href: 'https://github.com/yourname/bible-glyph' },
    ],
    roleSummaries: {
      product: {
        summary:
          'Reframed "digital typesetting" as a developer-experience problem, then shipped a template system publishers can actually version-control.',
        relevance: 78,
      },
      business: {
        summary:
          'Turns a bespoke, month-long publishing engagement into a repeatable weekend workflow — margin, speed and correctness in one motion.',
        relevance: 72,
      },
      development: {
        summary:
          'A small, well-typed TypeScript pipeline that composes a USFM parser, a Typst template layer, and a deterministic PDF build step.',
        relevance: 96,
      },
    },
  },
  {
    id: 'ai-bible-translator',
    slug: 'ai-bible-translator',
    title: 'AI Bible Translator',
    subtitle: 'Full-stack AI translation workflow for under-resourced languages.',
    year: 2025,
    featured: true,
    accent: 'from-[hsl(280_80%_60%)] via-[hsl(220_90%_60%)] to-[hsl(190_90%_60%)]',
    images: [
      { src: '/projects/ai-bible-translator/cover.svg', alt: 'AI Bible Translator workspace', width: 1600, height: 1000 },
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'LLMs', 'Postgres', 'Vector search'],
    responsibilities: [
      'Designed the review-first translator UX for community linguists.',
      'Built the retrieval + reasoning pipeline over parallel corpora.',
      'Shipped versioned draft history and per-verse provenance.',
    ],
    results: [
      'Cut first-draft translation time by ~60% in pilots.',
      'Every verse output is auditable back to source citations.',
      'Handled 3 language pairs at pilot with a single reviewer per team.',
    ],
    sourceCodeUrl: 'https://github.com/yourname/ai-bible-translator',
    links: [{ label: 'Case study', href: '/projects/ai-bible-translator' }],
    roleSummaries: {
      product: {
        summary:
          'Product-led AI: I anchored the workflow on the reviewer, not the model, and made confidence and provenance first-class UI.',
        relevance: 98,
      },
      business: {
        summary:
          'A defensible workflow product for a niche where accuracy, provenance and community trust are the moat — not raw model quality.',
        relevance: 88,
      },
      development: {
        summary:
          'Retrieval-augmented translation with strict provenance: parallel corpora, verse-level embeddings, and a review-first editing surface.',
        relevance: 90,
      },
    },
  },
  {
    id: 'speech-therapy',
    slug: 'speech-therapy',
    title: 'Gamified Speech Therapy',
    subtitle: 'A playful practice app for early-childhood speech goals.',
    year: 2024,
    featured: true,
    accent: 'from-[hsl(20_90%_60%)] via-[hsl(340_80%_60%)] to-[hsl(280_80%_60%)]',
    images: [
      { src: '/projects/speech-therapy/cover.svg', alt: 'Speech therapy app screen', width: 1600, height: 1000 },
    ],
    technologies: ['React Native', 'TypeScript', 'On-device ML', 'Speech APIs'],
    responsibilities: [
      'Co-designed the therapist-parent-child loop with practising SLPs.',
      'Built the pronunciation scoring and gentle-retry system.',
      'Shipped the reward economy without dark patterns.',
    ],
    results: [
      'Kids practised 3.2× more per week vs. paper homework.',
      'Therapists reported clearer progress signals week-over-week.',
      'No IAP, no ads — a calm alternative in a noisy category.',
    ],
    links: [{ label: 'Case study', href: '/projects/speech-therapy' }],
    roleSummaries: {
      product: {
        summary:
          'A rare category where the primary user is neither the buyer nor the payer — the design work was almost entirely about trust and rhythm.',
        relevance: 92,
      },
      business: {
        summary:
          'Positioned against ad-heavy incumbents: fewer sessions, higher completion, calmer parents. A wedge into clinic-led distribution.',
        relevance: 90,
      },
      development: {
        summary:
          'On-device speech scoring, a small state machine for the reward loop, and a boring-in-a-good-way sync layer for therapists.',
        relevance: 74,
      },
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const orderedFeaturedProjects = (ids: string[]) =>
  ids.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as Project[];
