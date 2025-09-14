import React from 'react';
import { Cloud, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Cloud className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400 blur-sm opacity-30 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-white">ETH</h1>
            <span className="text-sm text-gray-400 hidden sm:block">Plateforme Cloud Kubernetes</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Tableau de bord</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Environnements</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Marketplace</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Documentation</a>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm text-white">Utilisateur Étudiant</div>
            <div className="text-xs text-gray-400">student@eth.edu</div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">SU</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;