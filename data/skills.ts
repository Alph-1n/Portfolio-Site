import type { SkillCategory } from '@/lib/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Building fast, accessible, and reactive user interfaces with modern web standards.',
    skills: ['React', 'Next.js (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design', 'State Management'],
    highlight: true,
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Robust server-side endpoints, authentication, database persistence, and asynchronous processing.',
    skills: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'RESTful APIs', 'JWT Authentication', 'Async Job Polling', 'CORS / Security'],
    highlight: true,
  },
  {
    id: 'ai-prototyping',
    name: 'AI & Rapid Prototyping',
    description: 'Accelerating development, proof-of-concepts, test cases, and code exploration with AI.',
    skills: ['ChatGPT & Codex', 'AI-assisted Development', 'Rapid Prototyping', 'Code Analysis & Debugging', 'Technical Documentation'],
    highlight: true,
  },
  {
    id: 'mobile-media',
    name: 'Mobile & Audio Processing',
    description: 'Cross-platform mobile applications, audio pipelines, and signal analysis.',
    skills: ['Flutter', 'React Native', 'Expo Audio', 'Speech-to-Text (STT)', 'MFCC Audio Analysis', 'Levenshtein Distance'],
    highlight: false,
  },
  {
    id: 'tools-devops',
    name: 'DevOps, Tools & Systems',
    description: 'Development environments, version control, deployment platforms, and debugging workflows.',
    skills: ['Linux (Ubuntu)', 'Git', 'GitLab', 'GitHub', 'Vercel', 'Postman', 'Agile / Scrum', 'CI/CD Pipelines'],
    highlight: false,
  },
];

