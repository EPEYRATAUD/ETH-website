import React from 'react';

interface ResourceSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  color: 'cyan' | 'purple' | 'green';
  onChange: (value: number) => void;
}

const ResourceSlider: React.FC<ResourceSliderProps> = ({
  label,
  value,
  min,
  max,
  step,
  unit,
  color,
  onChange
}) => {
  const colorClasses = {
    cyan: 'from-cyan-400 to-blue-500',
    purple: 'from-purple-400 to-pink-500',
    green: 'from-green-400 to-emerald-500'
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-semibold text-white bg-gray-800 px-2 py-1 rounded">
          {value} {unit}
        </span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, rgb(75 85 99) 0%, rgb(75 85 99) ${percentage}%, rgb(55 65 81) ${percentage}%, rgb(55 65 81) 100%)`
          }}
        />
        
        <div 
          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${colorClasses[color]} rounded-lg transition-all duration-200`}
          style={{ width: `${percentage}%` }}
        />
        
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${colorClasses[color]} rounded-full border-2 border-gray-900 shadow-lg transition-all duration-200`}
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
};

export default ResourceSlider;