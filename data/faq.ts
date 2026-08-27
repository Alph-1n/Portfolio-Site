import { profile } from './profile';

export interface FaqItem {
  id: string;
  question: string;
  answer: string[];
}

export const faqItems: FaqItem[] = [
  {
    id: 'roles',
    question: 'What roles are you looking for?',
    answer: [
      profile.availability,
      'I focus on full-stack and frontend engineering — building AI-assisted web applications, API integrations, and workflow-driven products with React, Next.js, Python, and FastAPI.',
    ],
  },
  {
    id: 'remote',
    question: 'Do you work remotely or on-site?',
    answer: [
      `I'm based in ${profile.location} and work remotely with distributed teams.`,
      'Open to hybrid or on-site arrangements when the role and location align.',
    ],
  },
  {
    id: 'stack',
    question: "What's your tech stack and tooling?",
    answer: [
      'Frontend: React, Next.js (App Router), TypeScript, Tailwind CSS. Backend: Python, FastAPI, Flask, PostgreSQL, REST APIs, JWT auth.',
      'I also work with AI-assisted development tools (ChatGPT, Codex), Linux environments, Git/GitLab, and Vercel for deployment.',
    ],
  },
  {
    id: 'work',
    question: 'Can I see more of your work?',
    answer: [
      'Explore the projects section above — including a live Finance Tracker demo and production work at Bridge Connectivity Solutions (Vachan AI, Bible Glyph).',
      'Some client work is under NDA and not displayed here. Reach out directly if you want to discuss specific experience in more detail.',
    ],
  },
  {
    id: 'contact',
    question: 'How can I get in touch?',
    answer: [
      `Email me at ${profile.email} with details about the role or project — tech stack, timeline, and scope.`,
      'You can also connect on LinkedIn or explore my code on GitHub.',
    ],
  },
];
