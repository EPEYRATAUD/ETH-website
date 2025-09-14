import React from 'react';
import { Play, Square, Trash2, ExternalLink, Settings } from 'lucide-react';

const Environments: React.FC = () => {
  const environments = [
    {
      id: '1',
      name: 'my-webapp',
      status: 'en cours',
      uptime: '2j 14h',
      domain: 'my-webapp.eth-cloud.edu',
      stack: ['Node.js', 'MongoDB', 'Nginx'],
      resources: { cpu: 2, ram: 4, storage: 20 }
    },
    {
      id: '2', 
      name: 'api-service',
      status: 'en cours',
      uptime: '1j 8h',
      domain: 'api-service.eth-cloud.edu',
      stack: ['Python', 'PostgreSQL', 'Nginx'],
      resources: { cpu: 1, ram: 2, storage: 15 }
    },
    {
      id: '3',
      name: 'test-env',
      status: 'arrêté',
      uptime: '0h',
      domain: null,
      stack: ['PHP', 'MySQL', 'Apache'],
      resources: { cpu: 1, ram: 1, storage: 10 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'en cours': return 'text-green-400 bg-green-400/20';
      case 'arrêté': return 'text-gray-400 bg-gray-400/20';
      case 'erreur': return 'text-red-400 bg-red-400/20';
      default: return 'text-yellow-400 bg-yellow-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Mes environnements</h1>
            <p className="text-gray-400">Gérez et surveillez vos environnements Kubernetes</p>
          </div>
        </div>

        <div className="grid gap-6">
          {environments.map(env => (
            <div key={env.id} className="bg-gray-900 rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold text-white">{env.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(env.status)}`}>
                    {env.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {env.status === 'en cours' ? (
                    <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                      <Square className="h-4 w-4" />
                    </button>
                  ) : (
                    <button className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                      <Play className="h-4 w-4" />
                    </button>
                  )}
                  
                  <button className="p-2 bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-600 hover:text-white transition-colors">
                    <Settings className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Pile technologique</h4>
                  <div className="flex flex-wrap gap-2">
                    {env.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Ressources</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>CPU :</span>
                      <span>{env.resources.cpu} cœurs</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Mémoire :</span>
                      <span>{env.resources.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Stockage :</span>
                      <span>{env.resources.storage} GB</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Accès</h4>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-300">
                      Temps de fonctionnement : {env.uptime}
                    </div>
                    {env.domain && (
                      <a 
                        href={`https://${env.domain}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        <span>{env.domain}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {environments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">Aucun environnement trouvé</div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
              Créer votre premier environnement
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Environments;