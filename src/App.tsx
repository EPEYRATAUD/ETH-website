import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EnvironmentCreator from './pages/EnvironmentCreator';
import Environments from './pages/Environments';
import Monitoring from './pages/Monitoring';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'create':
        return <EnvironmentCreator />;
      case 'environments':
        return <Environments />;
      case 'monitoring':
        return <Monitoring />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header onMenuToggle={toggleSidebar} />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 lg:ml-64">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
}

export default App;