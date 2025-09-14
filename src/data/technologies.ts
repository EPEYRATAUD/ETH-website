import { Technology } from '../types';

export const technologies: Technology[] = [
  // Languages
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'language',
    icon: '🟢',
    description: 'JavaScript runtime for server-side development',
    version: '20.x'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    icon: '🐍',
    description: 'High-level programming language for versatile development',
    version: '3.11'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    icon: '☕',
    description: 'Enterprise-grade platform for scalable applications',
    version: '17 LTS'
  },
  {
    id: 'go',
    name: 'Go',
    category: 'language',
    icon: '🔷',
    description: 'Fast, compiled language for modern cloud applications',
    version: '1.21'
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'language',
    icon: '🟣',
    description: 'Popular scripting language for web development',
    version: '8.2'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'language',
    icon: '💎',
    description: 'Dynamic programming language focused on simplicity',
    version: '3.2'
  },

  // Load Balancers
  {
    id: 'nginx-lb',
    name: 'Nginx',
    category: 'loadBalancer',
    icon: '🔀',
    description: 'High-performance HTTP load balancer and reverse proxy'
  },
  {
    id: 'haproxy',
    name: 'HAProxy',
    category: 'loadBalancer',
    icon: '⚖️',
    description: 'Reliable, high-performance TCP/HTTP load balancer'
  },
  {
    id: 'traefik',
    name: 'Traefik',
    category: 'loadBalancer',
    icon: '🌐',
    description: 'Modern HTTP reverse proxy and load balancer'
  },

  // Web Servers
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'webServer',
    icon: '🌊',
    description: 'High-performance web server and reverse proxy'
  },
  {
    id: 'apache',
    name: 'Apache',
    category: 'webServer',
    icon: '🪶',
    description: 'World\'s most used web server software'
  },
  {
    id: 'caddy',
    name: 'Caddy',
    category: 'webServer',
    icon: '🔒',
    description: 'Web server with automatic HTTPS'
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: '🐘',
    description: 'Advanced open-source relational database'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: '🐬',
    description: 'Popular open-source relational database'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    icon: '🍃',
    description: 'Document-based NoSQL database'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    icon: '🔴',
    description: 'In-memory data structure store'
  }
];

export const getTechnologiesByCategory = (category: Technology['category']) => 
  technologies.filter(tech => tech.category === category);