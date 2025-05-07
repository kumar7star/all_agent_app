import React, { useState } from 'react';

// Define the interactive chip/button types
interface ChipButton {
  id: string;
  label: string;
  onClick: () => void;
}

const AgentPanel: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample interactive chips/buttons
  const chipButtons: ChipButton[] = [
    { id: 'google', label: 'Google Search', onClick: () => console.log('Google Search clicked') },
    { id: 'linkedin', label: 'LinkedIn', onClick: () => console.log('LinkedIn clicked') },
    { id: 'gartner', label: 'Gartner', onClick: () => console.log('Gartner clicked') },
    { id: 'reports', label: 'Reports', onClick: () => console.log('Reports clicked') },
    { id: 'analytics', label: 'Analytics', onClick: () => console.log('Analytics clicked') },
  ];

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="hidden lg:flex flex-col w-80 border-l border-gray-700 bg-gray-900 text-gray-100">
      {/* Header with user dropdown */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Assistant</h2>
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:bg-gray-800 rounded-xl px-3 py-2 transition-colors"
          >
            <span>Analyst Sam</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg z-10">
              <ul className="py-1">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Sign out</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Interactive chips/buttons */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex flex-wrap gap-2">
          {chipButtons.map((chip) => (
            <button
              key={chip.id}
              onClick={chip.onClick}
              className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-3 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chat greeting */}
      <div className="p-4 flex-grow">
        <p className="text-gray-300 mb-4">
          Hello! How can I assist you today?
        </p>
        
        {/* Chat input area (placeholder) */}
        <div className="mt-auto pt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full bg-gray-800 text-gray-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPanel;

