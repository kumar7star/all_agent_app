import React from 'react';
import { CardItem } from '../layout/Dashboard';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  // Sample cards for the grid
  const cards: CardItem[] = [
    { id: 'card1', title: 'Create New Project', subtitle: 'Start a fresh project from scratch' },
    { id: 'card2', title: 'Analyze Data', subtitle: 'Review and analyze your data' },
    { id: 'card3', title: 'Manage Team', subtitle: 'Add or remove team members' },
    { id: 'card4', title: 'Generate Report', subtitle: 'Create detailed reports' },
    { id: 'card5', title: 'Schedule Meeting', subtitle: 'Set up team meetings' },
    { id: 'card6', title: 'View Statistics', subtitle: 'Check your performance metrics' },
  ];

  return (
    <div className="flex-grow p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Gradient orb icon centered at the top */}
        <div className="gradient-orb w-16 h-16 mb-6"></div>
        
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          What you want to do today?
        </h1>
        
        {/* Grid of 6 interactive cards (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <h3 className="text-lg font-medium text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

