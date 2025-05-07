import React from 'react';
import { Plus, X } from 'lucide-react';
import { TabItem } from '../layout/Dashboard';

interface TopTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onAddTab: () => void;
  onCloseTab: (tabId: string) => void;
}

const TopTabs: React.FC<TopTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  onAddTab,
  onCloseTab,
}) => {
  return (
    <div className="flex items-center border-b border-gray-200 bg-white h-12">
      <div className="flex-grow flex items-center overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center h-full px-4 border-r border-gray-200 cursor-pointer ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="mr-2">{tab.label}</span>
            {tab.closable && (
              <button
                className="text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(tab.id);
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
      
      {/* Add Tab Button */}
      <button
        className="flex items-center justify-center w-12 h-12 text-gray-500 hover:text-blue-600 hover:bg-gray-50"
        onClick={onAddTab}
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TopTabs;

