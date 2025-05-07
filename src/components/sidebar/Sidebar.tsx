import React from 'react';
import { Home, FileText, Settings, Users, BarChart2, Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'tasks', icon: <FileText size={24} />, label: 'Tasks' },
    { id: 'analytics', icon: <BarChart2 size={24} />, label: 'Analytics' },
    { id: 'users', icon: <Users size={24} />, label: 'Users' },
    { id: 'search', icon: <Search size={24} />, label: 'Search' },
    { id: 'settings', icon: <Settings size={24} />, label: 'Settings' },
  ];

  return (
    <div className="w-20 h-full bg-white border-r border-gray-200 flex flex-col items-center py-6">
      {/* Logo (circular gradient orb) */}
      <div className="gradient-orb w-12 h-12 flex items-center justify-center mb-2">
        <span className="text-white font-bold text-xl">N</span>
      </div>
      
      {/* Brand name */}
      <div className="text-xs font-semibold text-gray-700 mb-8">Norgren</div>
      
      {/* Navigation icons (vertical stack) */}
      <nav className="flex flex-col items-center space-y-6 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="w-12 h-12 flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

