import type { CaseStudy } from '@/lib/types';

export const caseStudies: CaseStudy[] = [
  {
    projectId: 'bible-glyph',
    hero: {
      eyebrow: 'Case study - specialist publishing workflow',
      title: 'Improving the path from structured Bible content to publication-ready PDFs.',
      lede: 'Bible Glyph / Bible Grace is a specialist publishing application that transforms USFM files through processing and Typst rendering into generated PDF output.',
      metrics: [
        { label: 'Source format', value: 'USFM' },
        { label: 'Rendering layer', value: 'Typst' },
        { label: 'Output', value: 'PDF' },
      ],
    },
    overview:
      'The project sits at the intersection of content structure, file management, rendering technology, and publishing workflow design. The goal is to make specialist Bible publishing tasks more understandable and controllable without hiding the complexity that matters for final output.',
    problem:
      'A publishing workflow can become difficult when users need to import structured files, manage supporting images and fonts, configure layout behaviour, understand errors, and still trust that the generated PDF matches the intended output.',
    approach: [
      {
        heading: 'Map the workflow from import to output',
        body: 'The core workflow starts with USFM files, moves through processing/conversion, passes into Typst, and ends with generated PDFs. Treating that sequence as a product workflow made it easier to identify where users need clearer actions, status, and recovery paths.',
        bullets: [
          'USFM file handling and multiple-file import.',
          'Project-level file organisation and image handling.',
          'Conversion actions, rendering controls, and PDF/layout configuration.',
        ],
      },
      {
        heading: 'Reduce friction in specialist file management',
        body: 'Publishing tools need both control and clarity. Requirements considered or worked on included a collapsible files area, search, import project actions, drag-and-drop imports, automatic file organisation, and clearer file-add flows.',
      },
      {
        heading: 'Design around constraints and error states',
        body: 'Rendering constraints shaped product decisions around template controls, font controls, dark-mode compatibility, long error messages, poetry formatting, footnote markers, verse numbering, intro-page behaviour, and heading/layout rendering.',
      },
    ],
    outcomes: [
      'The project now has a clearer product frame: improving a specialist workflow from uploaded structured content to readable generated output.',
      'Key requirements are organised around file management, conversion status, rendering controls, template configuration, and output parity.',
      'The strongest next step is to turn this into a fuller Product/APM case study with context, friction points, decisions, trade-offs, current state, learnings, and next steps.',
    ],
    reflections:
      'The product challenge is not just generating a PDF. It is helping a user understand what the system is doing between upload, conversion, rendering, errors, configuration, and final output.',
    timeline: '2025',
    team: 'Software/product development work',
    myRole: 'Technical contributor with product workflow involvement',
  },
  {
    projectId: 'ai-bible-translator',
    hero: {
      eyebrow: 'Case study - full-stack workflow application',
      title: 'Building translation workflows around roles, assignments, and access.',
      lede: 'A full-stack application involving translation workflows, authentication, role-based behaviour, project assignments, and frontend/backend integration.',
      metrics: [
        { label: 'Frontend', value: 'React / Next.js' },
        { label: 'Backend', value: 'FastAPI' },
        { label: 'Database', value: 'PostgreSQL' },
      ],
    },
    overview:
      'AI Bible Translator involved building and integrating application flows for translation work. The project required thinking through how users move through projects and assignments while the software handles authentication, access, persistence, and API-backed behaviour.',
    problem:
      'Translation workflows involve multiple roles, project structures, assignment states, authentication, and backend data. The challenge was to translate those requirements into usable application behaviour while working within technical constraints.',
    approach: [
      {
        heading: 'Understand roles and journeys',
        body: 'From a product perspective, the useful learning was understanding how different users move through projects, assignments, authentication, and access-controlled parts of the application.',
      },
      {
        heading: 'Connect frontend and backend behaviour',
        body: 'The software work involved React/Next.js interfaces integrated with FastAPI endpoints, PostgreSQL-backed workflows, JWT authentication, REST APIs, and client-side state persistence.',
      },
      {
        heading: 'Debug integration issues',
        body: 'A meaningful part of the work involved backend/frontend integration, authentication flows, CORS/API debugging, and making application behaviour match functional requirements.',
      },
    ],
    outcomes: [
      'The project strengthened full-stack implementation experience across frontend, backend, database, and authentication surfaces.',
      'It also developed product thinking around user roles, access, workflow structure, requirements, and interface iteration.',
      'No public usage metrics or performance claims are included here because they were not provided as factual source material.',
    ],
    reflections:
      'This project is best presented as product thinking gained through technical contribution: understanding the workflow deeply enough to build the right behaviour.',
    timeline: '2025',
    team: 'Software/product development work',
    myRole: 'Technical contributor',
  },
  {
    projectId: 'adaptive-portfolio',
    hero: {
      eyebrow: 'Case study - personal portfolio as product',
      title: 'One portfolio that changes emphasis without becoming three identities.',
      lede: 'A static portfolio structured around shared content and role-based viewing modes for Product/APM, Business/Consulting, and Software Development audiences.',
      metrics: [
        { label: 'Modes', value: '3 role views' },
        { label: 'Content source', value: 'Local data' },
        { label: 'Backend', value: 'None' },
      ],
    },
    overview:
      'The portfolio is intentionally designed as a product. Instead of creating separate websites for each role, the same underlying projects and experience can be reorganised depending on the visitor context.',
    problem:
      'Early-career positioning can become fragmented when product, business, and software audiences expect different evidence. The goal is to change emphasis without hiding relevant work or presenting disconnected professional identities.',
    approach: [
      {
        heading: 'Keep one shared source of truth',
        body: 'Projects, experience, skills, and profile information remain in local data files. The selected mode changes framing, ordering, highlighted skills, CTAs, and resume links without duplicating the underlying work.',
      },
      {
        heading: 'Use relevance as emphasis, not disappearance',
        body: 'The information architecture supports prominent, normal, and secondary emphasis. Work that is less relevant to a selected mode should move lower or receive lighter framing rather than vanish.',
      },
      {
        heading: 'Stay static and maintainable',
        body: 'The current implementation uses Next.js, TypeScript, Tailwind CSS, reusable components, and a simple mode selector. It does not require a database or backend.',
      },
    ],
    outcomes: [
      'The site now has a clearer content foundation for Product/APM, Business/Consulting, and Software Development modes.',
      'The central positioning remains technical foundation plus structured problem-solving plus growing product/business orientation.',
      'Future role-specific URLs can be added later without changing the core content model.',
    ],
    reflections:
      'The portfolio itself is a useful product exercise: clarify the audience, keep the evidence shared, and change the emphasis with as little complexity as possible.',
    timeline: '2026',
    team: 'Personal project',
    myRole: 'Product thinking, content architecture, and frontend implementation',
  },
];

export const getCaseStudy = (projectId: string) =>
  caseStudies.find((c) => c.projectId === projectId);
