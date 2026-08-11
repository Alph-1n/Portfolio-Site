import type { WorkExperience } from '@/lib/types';

export const experience: WorkExperience[] = [
  {
    id: 'bridge-connectivity-solutions',
    role: 'Software / Product Development',
    company: 'Bridge Connectivity Solutions Pvt. Ltd.',
    start: '2025',
    end: 'Present',
    summary:
      'Software and product-development work involving internal and specialised tools, full-stack implementation, UI iteration, debugging, and integration.',
    highlights: [
      'Worked across React, Next.js, Tailwind CSS, Python, FastAPI, PostgreSQL, REST APIs, and JWT authentication.',
      'Contributed to application workflows involving frontend/backend integration, product/UI iteration, and technical constraints.',
      'Used Git, GitLab, and Linux/Ubuntu workflows while debugging application and API-related issues.',
    ],
    tags: ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'REST APIs', 'GitLab'],
  },
  {
    id: 'elkanio-research-labs',
    role: 'Intern',
    company: 'Elkanio Research Labs',
    start: 'Internship',
    end: 'Completed',
    summary:
      'Machine-learning and research-oriented development exposure using Python and common ML/data-visualisation tools.',
    highlights: [
      'Worked with Python, Keras, TensorFlow, and Matplotlib.',
      'Gained exposure to research-oriented software development and experimentation workflows.',
    ],
    tags: ['Python', 'Keras', 'TensorFlow', 'Matplotlib'],
  },
];
