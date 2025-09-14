import React from 'react';
import { Plus, Activity, Zap, Database, Globe } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Running Environments', value: '3', icon: Activity, color: 'text-green-400' },
    { label: 'CPU Usage', value: '45%', icon: Zap, color: 'text-cyan-400' },
    { label: 'Storage Used', value: '12 GB', icon: Database, color: 'text-purple-400' },
    { label: 'Active Domains', value: '2', icon: Globe, color: 'text-orange-400' },
  ];

  const recentEnvironments = [
    { name: 'my-webapp', status: 'running', uptime: '2d 14h' },
    { name: 'api-service', status: 'running', uptime: '1d 8h' },
    { name: 'test-env', status: 'stopped', uptime: '0h' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Student!</h1>
          <p className="text-gray-400">Manage your Kubernetes environments and monitor resource usage</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Environments */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Environments</h2>
            <div className="space-y-4">
              {recentEnvironments.map((env, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${env.status === 'running' ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                    <span className="font-medium text-white">{env.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{env.uptime}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Start */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Start</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:from-cyan-500/20 hover:to-blue-500/20 transition-all">
                <Plus className="h-6 w-6 text-cyan-400" />
                <div className="text-left">
                  <div className="font-semibold text-white">Create New Environment</div>
                  <div className="text-sm text-gray-400">Set up a new Kubernetes environment</div>
                </div>
              </button>
              
              <button className="w-full flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Database className="h-6 w-6 text-purple-400" />
                <div className="text-left">
                  <div className="font-semibold text-white">Browse Templates</div>
                  <div className="text-sm text-gray-400">Start with pre-configured stacks</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Resource Usage Chart */}
        <div className="mt-8 bg-gray-900 rounded-xl border border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Resource Usage (Last 24h)</h2>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Resource usage chart visualization would go here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;