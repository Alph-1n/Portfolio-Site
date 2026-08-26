import type { WorkExperience } from '@/lib/types';

export const experience: WorkExperience[] = [
  {
    id: 'bridge-connectivity-solutions',
    role: 'Junior Software Developer',
    company: 'Bridge Connectivity Solutions Pvt. Ltd.',
    location: 'New Delhi, India',
    start: 'May 2025',
    end: 'Present',
    summary:
      'Developing AI-assisted, workflow-driven software products, automated digital publishing pipelines, and mobile audio applications across web and backend stacks.',
    highlights: [
      'Contributed to Bible Glyph (Python publishing engine): built file/folder handling, duplicate tag and required-field validation, upload restrictions, and custom Typst template generation.',
      'Developed core user flows for Vachan AI (AI translation platform): implemented authentication, API-connected processing, asynchronous job polling, and client-side state handling.',
      'Created and maintained comprehensive technical documentation for workflows, system architecture, integration decisions, and troubleshooting guides.',
      'Researched modern mobile audio processing alternatives after FFmpeg Kit deprecation, evaluating Expo Audio implementations for the engineering team.',
      'Leveraged ChatGPT & Codex for rapid prototyping, troubleshooting edge cases, code verification, and automating unit test construction.',
    ],
    tags: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Typst', 'REST APIs', 'JWT', 'GitLab', 'Linux / Ubuntu'],
  },
  {
    id: 'elkanio-research-labs',
    role: 'Machine Learning & Development Intern',
    company: 'Elkanio Research Labs',
    location: 'Kochi, India',
    start: '2024',
    end: 'Completed',
    summary:
      'Gained hands-on experience in machine learning pipelines, Python data processing, and research-oriented application development.',
    highlights: [
      'Built neural network prototypes using Python, Keras, and TensorFlow for predictive classification tasks.',
      'Created data visualization dashboards using Matplotlib and Pandas for exploratory data analysis.',
      'Collaborated on code review, algorithmic optimization, and experimental tracking.',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'Matplotlib', 'Data Analysis'],
  },
];

