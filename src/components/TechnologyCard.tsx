import React from 'react';
import { Technology } from '../types';
import { Check } from 'lucide-react';

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onToggle: () => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology, isSelected, onToggle }) => {
  return (
    <div 
      className={`
        relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
        ${isSelected 
          ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shadow-lg shadow-cyan-500/20' 
          : 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-700'
        }
      `}
      onClick={onToggle}
    >
      {isSelected && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-gray-900" />
        </div>
      )}
      
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-2xl">{technology.icon}</div>
        <div>
          <h3 className="font-semibold text-white">{technology.name}</h3>
          {technology.version && (
            <span className="text-xs text-gray-400">{technology.version}</span>
          )}
        </div>
      </div>
      
      <p className="text-sm text-gray-300 leading-relaxed">{technology.description}</p>
      
      <div className={`
        absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
        ${isSelected ? 'opacity-100' : 'hover:opacity-100'}
        bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5
      `} />
    </div>
  );
};

export default TechnologyCard;