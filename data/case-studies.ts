import type { CaseStudy } from '@/lib/types';

// PLACEHOLDER — the AI Bible Translator case study is the fully-written example.
// Add or fill in more entries as needed.
export const caseStudies: CaseStudy[] = [
  {
    projectId: 'ai-bible-translator',
    hero: {
      eyebrow: 'Case study · 2025',
      title: 'Making an AI translator that reviewers actually trust.',
      lede: 'A review-first workflow for translating scripture into under-resourced languages — with provenance, versioning and calm defaults built in.',
      metrics: [
        { label: 'First-draft time', value: '−60%' },
        { label: 'Language pairs at pilot', value: '3' },
        { label: 'Reviewers per team', value: '1' },
      ],
    },
    overview:
      'Small community teams translating scripture rarely have engineering support, and almost never have the tolerance for LLM hallucinations that mainstream tools assume. I designed and built a translator that treats the human reviewer — not the model — as the primary user.',
    problem:
      'Existing AI translation tools optimise for fluency and speed. Community translators optimise for faithfulness, footnotes, and the ability to explain every choice to a village elder six months later. The gap between those two optimisation targets is where trust goes to die.',
    approach: [
      {
        heading: 'Anchor the workflow on the reviewer',
        body: 'Every screen was designed around one question: what does the reviewer need to accept, edit or reject this verse? The model became a suggestion engine inside a familiar editing surface, not a black box.',
        bullets: [
          'Verse-level suggestions with confidence and provenance side-by-side.',
          'One-key accept, edit, reject with keyboard-first navigation.',
          'Persistent draft history per verse, per translator.',
        ],
      },
      {
        heading: 'Retrieval before generation',
        body: 'We embed parallel corpora at the verse level and retrieve semantically similar prior translations first. The model then reasons over retrieved evidence rather than free-generating.',
        bullets: [
          'Verse-level embeddings across parallel corpora.',
          'Citations shown inline for every generated verse.',
          'Deterministic fallback to nearest-verse retrieval when confidence drops.',
        ],
      },
      {
        heading: 'Provenance as UI, not audit log',
        body: 'Provenance is not a report at the end — it is the primary content of the editing surface. Reviewers see which passages informed a suggestion the same way they see the suggestion itself.',
      },
    ],
    outcomes: [
      'Pilots across three language pairs reached usable first drafts ~60% faster.',
      'Reviewers reported the tool "disappeared" — the highest praise this category ever gets.',
      'Every verse in the output carries a link back to the sources that produced it.',
    ],
    reflections:
      'The most important product decision was the least technical one: making the reviewer feel like the author of the translation, not a QA checker for a machine. The AI never gets top-billing in the UI, and that is precisely why the AI gets used.',
    timeline: '4 months, pilot to v1',
    team: 'Solo engineering + design; two linguist advisors',
    myRole: 'Product, design, full-stack engineering',
  },
  {
    projectId: 'bible-glyph',
    hero: {
      eyebrow: 'Case study · 2025',
      title: 'Version-controlled Bible typesetting.',
      lede: 'A small pipeline that turns USFM into print-ready PDFs — with the ergonomics of writing code and the output of a serious print shop.',
      metrics: [
        { label: 'Publishing cycle', value: '3 wks → 1 day' },
        { label: 'Diffable output', value: 'Yes' },
        { label: 'Dependencies', value: 'Minimal' },
      ],
    },
    overview:
      'Traditional Bible typesetting is a bespoke, expensive process that produces beautiful books and terrible workflows. Bible Glyph replaces the workflow while preserving the craft.',
    problem:
      'Publishers want print-quality output and translators want a fast preview loop. Neither group wants to open a page-layout application to move a footnote by two points.',
    approach: [
      {
        heading: 'Treat USFM as source-of-truth',
        body: 'The USFM file is the canonical text; everything else is derived. This makes revisions diffable and cross-references stable.',
      },
      {
        heading: 'Typst as the typesetting layer',
        body: 'Typst gave us programmable, print-quality typesetting without the LaTeX tax. We built a template covering footnotes, poetry, cross-references, drop caps and running heads.',
      },
      {
        heading: 'One-command preview',
        body: 'A single CLI command watches the USFM, rebuilds the Typst source, and refreshes a PDF preview — the tightest loop the category has seen.',
      },
    ],
    outcomes: [
      'A 3-week typesetting cycle collapsed to an afternoon.',
      'Every edit is a git diff, not a rebound InDesign file.',
      'The output ships to press without a manual finishing pass.',
    ],
    reflections:
      'Print quality and developer-experience are usually treated as opposites. They are not — they just rarely share an owner.',
    timeline: '6 weeks',
    team: 'Solo',
    myRole: 'Engineering, typesetting design, CLI ergonomics',
  },
  {
    projectId: 'speech-therapy',
    hero: {
      eyebrow: 'Case study · 2024',
      title: 'A calm game for a loud category.',
      lede: 'A gamified speech-therapy practice app for early learners, designed with practising SLPs and shipped without dark patterns.',
      metrics: [
        { label: 'Practice frequency', value: '3.2×' },
        { label: 'Ads / IAP', value: 'None' },
        { label: 'Session length', value: '≤ 6 min' },
      ],
    },
    overview:
      'Kids do the practice; parents pay; therapists prescribe. Every design decision had to work for all three at once, without the manipulative patterns most kids-apps rely on.',
    problem:
      'Practice compliance between clinic visits is the single biggest predictor of progress. Paper homework loses; ad-heavy apps win engagement but poison the parent relationship.',
    approach: [
      {
        heading: 'Design the rhythm, not the app',
        body: 'Sessions were fixed to a short, predictable arc. The reward economy resets every day and cannot be juiced.',
      },
      {
        heading: 'On-device scoring',
        body: 'Pronunciation is scored on-device with a gentle-retry policy — no cloud round-trip, and no recordings ever leave the phone.',
      },
      {
        heading: 'Clinician-first progress view',
        body: 'Therapists get a boring, dense weekly summary. It is the least fun screen in the app and the most important.',
      },
    ],
    outcomes: [
      'Kids practised 3.2× more per week vs. paper homework in pilots.',
      'Zero dark patterns; zero ads; zero IAPs.',
      'Positive early feedback from SLPs on clarity of weekly progress.',
    ],
    reflections:
      'The category rewards noise. The product wins by being quiet. That tension is the whole design.',
    timeline: '5 months',
    team: 'Two engineers + two SLP advisors',
    myRole: 'Product, design, engineering lead',
  },
];

export const getCaseStudy = (projectId: string) =>
  caseStudies.find((c) => c.projectId === projectId);
