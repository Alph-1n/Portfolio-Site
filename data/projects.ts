import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'finance-tracker',
    slug: 'finance-tracker',
    title: 'Personal Finance Tracker',
    subtitle: 'Dynamic web application for real-time expense tracking, category analytics, and financial management.',
    description:
      'A sleek, responsive personal finance platform built with Next.js, React, and Tailwind CSS. Features dynamic transaction logging, real-time balance calculations, spending breakdown visualizations, and intuitive budget categorization designed for seamless everyday tracking.',
    year: '2026',
    featured: true,
    category: 'Full-Stack',
    accent: 'from-emerald-500/20 via-cyan-500/15 to-blue-600/20',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Responsive UI', 'State Management'],
    highlights: [
      'Built a modern, responsive web application for real-time personal income and expenditure management.',
      'Designed interactive transaction entry with category-based filtering, instant balance updates, and spending summaries.',
      'Implemented clean client-side state handling and deployed seamlessly to Vercel for fast edge delivery.',
    ],
    liveUrl: 'https://finance-tracker-app-lime.vercel.app/',
    githubUrl: 'https://github.com/Alph-1n',
    isWorkingDemo: true,
  },
  {
    id: 'vachan-ai',
    slug: 'vachan-ai',
    title: 'Vachan AI — Translation Platform',
    subtitle: 'AI-assisted translation platform with async job polling, JWT authentication, and role-based workflows.',
    description:
      'Full-stack AI translation product built at Bridge Connectivity Solutions. Features React/Next.js frontend user flows connected to FastAPI backend services and PostgreSQL database, handling user authentication, asynchronous translation job queues, project assignments, and resilient error states.',
    year: '2025 – Present',
    featured: true,
    category: 'Full-Stack',
    accent: 'from-purple-500/20 via-indigo-500/15 to-blue-500/20',
    technologies: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'REST APIs', 'Async Polling'],
    highlights: [
      'Engineered React/Next.js frontend flows for authentication, project dashboards, and translation review workspaces.',
      'Integrated REST APIs with FastAPI backend, implementing JWT session security and asynchronous job status polling.',
      'Handled client-side state persistence, complex edge-case validation, and robust API error recovery.',
    ],
    githubUrl: 'https://github.com/Alph-1n',
  },
  {
    id: 'bible-glyph',
    slug: 'bible-glyph',
    title: 'Bible Glyph / Publishing Pipeline',
    subtitle: 'High-precision automated publishing system converting structured USFM Bible content into publication-ready PDFs.',
    description:
      'A Python-based specialist publishing application used by translation and publication teams. Validates structured USFM files, detects duplicate/missing field syntax errors before publication, and renders high-quality typography PDFs through Typst integration with client-configurable template workflows.',
    year: '2025 – Present',
    featured: true,
    category: 'Backend & AI',
    accent: 'from-blue-500/20 via-sky-500/15 to-teal-500/20',
    technologies: ['Python', 'Typst', 'USFM Parser', 'PDF Engine', 'Validation Algorithms', 'Linux', 'GitLab'],
    highlights: [
      'Developed file/folder processing workflows, duplicate-tag detection, and required-field validation for USFM syntax.',
      'Implemented a client-configurable template engine in Typst for custom margins, multi-column verse layouts, and font rendering.',
      'Streamlined upload restrictions, file management, error diagnostics, and rendering pipeline reliability.',
    ],
    githubUrl: 'https://github.com/Alph-1n',
  },
  {
    id: 'fluent-mobile',
    slug: 'fluent-mobile',
    title: 'Fluent Mobile & Audio Processing',
    subtitle: 'Mobile application workflows with audio capture and cross-platform API integration.',
    description:
      'Mobile client application supporting digital translation workflows and audio processing. Explored modern audio-recording solutions including Expo Audio, evaluating migration paths following FFmpeg Kit deprecation, and connecting mobile interfaces to backend endpoints.',
    year: '2025',
    featured: false,
    category: 'Mobile & Audio',
    accent: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
    technologies: ['Flutter', 'React Native', 'Expo Audio', 'Python', 'REST APIs', 'Mobile UX'],
    highlights: [
      'Built mobile interface flows and integrated API services for translation data and audio recording.',
      'Researched and benchmarked mobile audio alternatives after FFmpeg Kit deprecation, documenting findings for team implementation.',
      'Ensured seamless cross-platform performance across Android and iOS environments.',
    ],
    githubUrl: 'https://github.com/Alph-1n',
  },
  {
    id: 'speech-therapy',
    slug: 'speech-therapy',
    title: 'Gamified Speech Therapy App',
    subtitle: 'Speech rehabilitation platform using acoustic MFCC analysis and Levenshtein phonetics.',
    description:
      'Academic capstone project designing a therapist-led speech therapy application. Enables therapists to assign pronunciation exercises, while evaluating patient speech attempts via Speech-to-Text (STT), Levenshtein string distance, and Mel-Frequency Cepstral Coefficients (MFCC) feature extraction.',
    year: '2024 – 2025',
    featured: false,
    category: 'Academic / ML',
    accent: 'from-pink-500/20 via-rose-500/15 to-purple-500/20',
    technologies: ['Python', 'Flask', 'Speech-to-Text (STT)', 'MFCC Audio Analysis', 'Levenshtein Distance', 'Keras'],
    highlights: [
      'Implemented acoustic signal processing pipeline using MFCC extraction to measure pronunciation fidelity.',
      'Developed therapist dashboard for tracking patient rehabilitation metrics, error patterns, and session history.',
      'Engineered an automated scoring engine combining phonetic Levenshtein distance with spectral acoustic matching.',
    ],
    githubUrl: 'https://github.com/Alph-1n',
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

