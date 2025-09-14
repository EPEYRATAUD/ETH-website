import { EnvironmentTemplate } from '../types';
import { technologies } from './technologies';

export const environmentTemplates: EnvironmentTemplate[] = [
  {
    id: 'mern-stack',
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js full-stack application',
    category: 'fullstack',
    stack: [
      technologies.find(t => t.id === 'nodejs')!,
      technologies.find(t => t.id === 'mongodb')!,
      technologies.find(t => t.id === 'nginx')!
    ],
    resources: { cpu: 2, ram: 4, storage: 20 }
  },
  {
    id: 'django-postgres',
    name: 'Django + PostgreSQL',
    description: 'Python web framework with PostgreSQL database',
    category: 'web',
    stack: [
      technologies.find(t => t.id === 'python')!,
      technologies.find(t => t.id === 'postgresql')!,
      technologies.find(t => t.id === 'nginx')!
    ],
    resources: { cpu: 1, ram: 2, storage: 15 }
  },
  {
    id: 'laravel-mysql',
    name: 'Laravel + MySQL',
    description: 'PHP framework with MySQL database',
    category: 'web',
    stack: [
      technologies.find(t => t.id === 'php')!,
      technologies.find(t => t.id === 'mysql')!,
      technologies.find(t => t.id === 'nginx')!
    ],
    resources: { cpu: 1, ram: 2, storage: 10 }
  },
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    description: 'Load-balanced microservices with Redis cache',
    category: 'api',
    stack: [
      technologies.find(t => t.id === 'go')!,
      technologies.find(t => t.id === 'haproxy')!,
      technologies.find(t => t.id === 'redis')!,
      technologies.find(t => t.id === 'postgresql')!
    ],
    resources: { cpu: 4, ram: 8, storage: 40 }
  }
];