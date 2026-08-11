import type { SkillCategory } from '@/lib/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'product',
    name: 'Product',
    description: 'Developing experience in turning requirements, workflows, and constraints into usable product features.',
    skills: ['Problem framing', 'User workflows', 'Requirements analysis', 'Feature breakdown', 'UI iteration', 'Product metrics'],
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Interface thinking focused on clarity, workflow fit, and reducing avoidable friction.',
    skills: ['Interaction design', 'Responsive UI', 'Dark-mode considerations', 'Error states', 'Usability improvements'],
  },
  {
    id: 'research',
    name: 'Analysis',
    description: 'Currently exploring product discovery, business analysis, and structured decision-making practices.',
    skills: ['Workflow mapping', 'Functional requirements', 'Process friction', 'User journeys', 'Structured problem solving'],
  },
  {
    id: 'business',
    name: 'Business & Strategy',
    description: 'Interest in applying technical understanding to business, consulting, and product-analysis contexts.',
    skills: ['Business analysis', 'Product strategy', 'Decision support', 'Communication', 'Presentation', 'Structured feedback'],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Full-stack application development across modern web, backend, authentication, and integration work.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'JWT'],
  },
  {
    id: 'ai',
    name: 'AI Workflows',
    description: 'Exposure to AI-assisted development and machine-learning-oriented development workflows.',
    skills: ['AI-assisted workflows', 'Python', 'Keras', 'TensorFlow', 'Matplotlib', 'Research-oriented development'],
  },
  {
    id: 'infra',
    name: 'Tools & Delivery',
    description: 'Practical tooling for building, debugging, integrating, and maintaining software projects.',
    skills: ['Git', 'GitLab', 'Linux / Ubuntu', 'Debugging', 'CORS issues', 'API integration', 'File handling'],
  },
];
