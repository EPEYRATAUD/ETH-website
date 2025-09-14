import React from 'react';
import { 
  Home, 
  Plus, 
  Layers, 
  Activity, 
  Settings, 
  BookOpen, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'create', icon: Plus, label: 'Create Environment' },
    { id: 'environments', icon: Layers, label: 'My Environments' },
    { id: 'monitoring', icon: Activity, label: 'Monitoring' },
  ];

  const secondaryItems = [
    { id: 'settings', icon: Settings, label: 'Settings' },
    { id: 'docs', icon: BookOpen, label: 'Documentation' },
    { id: 'support', icon: HelpCircle, label: 'Support' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-700
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex-1 px-4 py-6 space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Main Navigation
            </div>
            
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  onClose();
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                  ${activeSection === item.id 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {activeSection === item.id && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </button>
            ))}
          </div>

          <div className="px-4 py-4 border-t border-gray-700">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Resources
            </div>
            
            {secondaryItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  onClose();
                }}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
          
          <div className="px-4 py-4 border-t border-gray-700">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Resource Usage</div>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>CPU</span>
                    <span>2/4 cores</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>RAM</span>
                    <span>4/8 GB</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-1.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;