import { Technology } from '../types';

export const technologies: Technology[] = [
  // Languages
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'language',
    icon: '🟢',
    description: 'Runtime JavaScript pour le développement côté serveur',
    version: '20.x'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    icon: '🐍',
    description: 'Langage de programmation haut niveau pour un développement polyvalent',
    version: '3.11'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    icon: '☕',
    description: 'Plateforme de niveau entreprise pour applications évolutives',
    version: '17 LTS'
  },
  {
    id: 'go',
    name: 'Go',
    category: 'language',
    icon: '🔷',
    description: 'Langage compilé rapide pour applications cloud modernes',
    version: '1.21'
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'language',
    icon: '🟣',
    description: 'Langage de script populaire pour le développement web',
    version: '8.2'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'language',
    icon: '💎',
    description: 'Langage de programmation dynamique axé sur la simplicité',
    version: '3.2'
  },

  // Load Balancers
  {
    id: 'nginx-lb',
    name: 'Nginx',
    category: 'loadBalancer',
    icon: '🔀',
    description: 'Répartiteur de charge HTTP haute performance et proxy inverse'
  },
  {
    id: 'haproxy',
    name: 'HAProxy',
    category: 'loadBalancer',
    icon: '⚖️',
    description: 'Répartiteur de charge TCP/HTTP fiable et haute performance'
  },
  {
    id: 'traefik',
    name: 'Traefik',
    category: 'loadBalancer',
    icon: '🌐',
    description: 'Proxy inverse HTTP moderne et répartiteur de charge'
  },

  // Web Servers
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'webServer',
    icon: '🌊',
    description: 'Serveur web haute performance et proxy inverse'
  },
  {
    id: 'apache',
    name: 'Apache',
    category: 'webServer',
    icon: '🪶',
    description: 'Logiciel de serveur web le plus utilisé au monde'
  },
  {
    id: 'caddy',
    name: 'Caddy',
    category: 'webServer',
    icon: '🔒',
    description: 'Serveur web avec HTTPS automatique'
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: '🐘',
    description: 'Base de données relationnelle open-source avancée'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: '🐬',
    description: 'Base de données relationnelle open-source populaire'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    icon: '🍃',
    description: 'Base de données NoSQL basée sur les documents'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    icon: '🔴',
    description: 'Magasin de structures de données en mémoire'
  }
];

export const getTechnologiesByCategory = (category: Technology['category']) => 
  technologies.filter(tech => tech.category === category);