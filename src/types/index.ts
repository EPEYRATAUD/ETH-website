export interface Technology {
  id: string;
  name: string;
  category: 'language' | 'loadBalancer' | 'webServer' | 'database';
  icon: string;
  description: string;
  version?: string;
}

export interface ResourceConfig {
  cpu: number;
  ram: number;
  storage: number;
}

export interface Environment {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'deploying' | 'error';
  stack: Technology[];
  resources: ResourceConfig;
  createdAt: string;
  domain?: string;
}

export interface EnvironmentTemplate {
  id: string;
  name: string;
  description: string;
  stack: Technology[];
  resources: ResourceConfig;
  category: 'web' | 'api' | 'fullstack' | 'database' | 'ai';
}

export interface MonitoringData {
  timestamp: string;
  cpu: number;
  memory: number;
  network: number;
}