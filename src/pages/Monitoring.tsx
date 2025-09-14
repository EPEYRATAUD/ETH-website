import React from 'react';
import { Activity, Cpu, HardDrive, Wifi } from 'lucide-react';

const Monitoring: React.FC = () => {
  const metrics = [
    { label: 'Utilisation CPU', value: '42%', icon: Cpu, color: 'text-cyan-400' },
    { label: 'Utilisation mémoire', value: '68%', icon: Activity, color: 'text-purple-400' },
    { label: 'Utilisation disque', value: '35%', icon: HardDrive, color: 'text-green-400' },
    { label: 'E/S réseau', value: '1.2MB/s', icon: Wifi, color: 'text-orange-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Surveillance des ressources</h1>
          <p className="text-gray-400">Surveillez l'utilisation des ressources dans vos environnements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`h-8 w-8 ${metric.color}`} />
                <span className="text-sm text-gray-400">{metric.label}</span>
              </div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Utilisation CPU dans le temps</h2>
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Le graphique d'utilisation CPU serait affiché ici</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Utilisation mémoire</h2>
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Le graphique d'utilisation mémoire serait affiché ici</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;