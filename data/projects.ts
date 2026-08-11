import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'bible-glyph',
    slug: 'bible-glyph',
    title: 'Bible Glyph / Bible Grace',
    subtitle: 'Specialist publishing workflow for transforming structured Bible content into publication-ready PDFs.',
    year: 2025,
    featured: true,
    categories: ['product', 'business', 'development'],
    accent: 'from-[hsl(220_90%_60%)] via-[hsl(260_80%_60%)] to-[hsl(190_90%_60%)]',
    images: [
      { src: '/projects/bible-glyph/cover.svg', alt: 'Bible Glyph typesetting sample', width: 1600, height: 1000 },
      { src: '/projects/bible-glyph/detail.svg', alt: 'Bible Glyph verse layout detail', width: 1600, height: 1000 },
    ],
    technologies: ['Python', 'Typst', 'USFM', 'PDF generation', 'File uploads', 'Templates', 'Search'],
    responsibilities: [
      'Worked on USFM file handling, processing, Typst integration, and PDF generation workflows.',
      'Improved specialist publishing interactions around project imports, files, templates, fonts, and rendering controls.',
      'Considered product requirements such as clearer error states, dark-mode compatibility, layout controls, and conversion feedback.',
    ],
    results: [
      'Structured the path from USFM files through conversion and Typst rendering into generated PDFs.',
      'Supported a more understandable workflow for managing files, imports, rendering options, and output configuration.',
      'Identified product trade-offs around configurability, error handling, layout parity, and specialist publishing needs.',
    ],
    links: [{ label: 'Case study', href: '/projects/bible-glyph' }],
    roleSummaries: {
      product: {
        summary:
          'A strong product case study about improving a specialist publishing workflow: file management, conversion actions, error states, template controls, and PDF output readability.',
      },
      business: {
        summary:
          'A workflow-analysis project focused on translating publishing requirements into clear application behaviour, configuration needs, and edge-case handling.',
      },
      development: {
        summary:
          'A technical publishing system involving USFM processing, Typst integration, file handling, PDF generation, rendering configuration, and debugging compile/rendering issues.',
      },
    },
  },
  {
    id: 'ai-bible-translator',
    slug: 'ai-bible-translator',
    title: 'AI Bible Translator',
    subtitle: 'Full-stack translation workflow application with authentication, assignments, and role-based behaviour.',
    year: 2025,
    featured: true,
    categories: ['product', 'business', 'development'],
    accent: 'from-[hsl(280_80%_60%)] via-[hsl(220_90%_60%)] to-[hsl(190_90%_60%)]',
    images: [
      { src: '/projects/ai-bible-translator/cover.svg', alt: 'AI Bible Translator workspace', width: 1600, height: 1000 },
    ],
    technologies: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'JWT', 'REST APIs'],
    responsibilities: [
      'Worked on React/Next.js frontend flows connected to a FastAPI backend and PostgreSQL database.',
      'Handled authentication flows, JWT-based access, role-based behaviour, and project/assignment workflows.',
      'Integrated REST APIs, client-side state persistence, and debugging around CORS and API behaviour.',
    ],
    results: [
      'Built and connected database-backed translation workflows across frontend and backend surfaces.',
      'Mapped project, assignment, authentication, and role-based requirements into application behaviour.',
      'Developed product thinking through workflow interpretation, interface iteration, and technical constraints.',
    ],
    links: [{ label: 'Case study', href: '/projects/ai-bible-translator' }],
    roleSummaries: {
      product: {
        summary:
          'Product thinking as a technical contributor: understanding translation workflows, user roles, project journeys, authentication, access, and feature requirements.',
      },
      business: {
        summary:
          'A structured workflow project involving user roles, functional requirements, application behaviour, and process friction across translation assignments.',
      },
      development: {
        summary:
          'Full-stack implementation across React/Next.js, FastAPI, PostgreSQL, JWT authentication, REST API integration, state persistence, and debugging.',
      },
    },
  },
  {
    id: 'adaptive-portfolio',
    slug: 'adaptive-portfolio',
    title: 'Adaptive Portfolio Website',
    subtitle: 'One personal portfolio designed to shift emphasis across product, business, and software roles.',
    year: 2026,
    featured: true,
    categories: ['product', 'business', 'development'],
    accent: 'from-[hsl(165_70%_45%)] via-[hsl(210_80%_55%)] to-[hsl(330_75%_58%)]',
    images: [],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Local data files', 'Responsive UI'],
    responsibilities: [
      'Structured one shared portfolio around role-based modes instead of separate role-specific sites.',
      'Kept project and experience data shared while allowing hero copy, project ordering, highlighted skills, CTAs, and resume links to change by mode.',
      'Used a simple local-data architecture without introducing a backend or database.',
    ],
    results: [
      'Created a maintainable foundation for Product/APM, Business/Consulting, and Software Development portfolio views.',
      'Preserved a single professional identity built around technical foundation, structured problem-solving, and growing product/business orientation.',
    ],
    links: [{ label: 'Case study', href: '/projects/adaptive-portfolio' }],
    roleSummaries: {
      product: {
        summary:
          'A portfolio treated as a product: one shared information architecture with role-based emphasis for different visitor intents.',
      },
      business: {
        summary:
          'A positioning and information-architecture exercise around tailoring the same evidence for product, business, and software audiences.',
      },
      development: {
        summary:
          'A static Next.js portfolio using typed local data, reusable components, responsive styling, and a lightweight mode selector.',
      },
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const orderedFeaturedProjects = (ids: string[]) =>
  ids.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as Project[];
