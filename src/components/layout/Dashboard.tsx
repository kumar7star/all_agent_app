import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import TopTabs from '../tabs/TopTabs';
import MainContent from '../content/MainContent';
import AgentPanel from '../assistant/AgentPanel';

// Define tab interface
export interface TabItem {
  id: string;
  label: string;
  closable?: boolean;
}

// Define card interface for main content
export interface CardItem {
  id: string;
  title: string;
  subtitle: string;
}

const Dashboard: React.FC = () => {
  // State for active tab
  const [tabs, setTabs] = useState<TabItem[]>([
    { id: 'new-task', label: 'New Task', closable: true }
  ]);
  const [activeTab, setActiveTab] = useState('new-task');

  // Handle adding a new tab
  const handleAddTab = () => {
    const newTabId = `tab-${tabs.length + 1}`;
    const newTab = { id: newTabId, label: `Tab ${tabs.length + 1}`, closable: true };
    setTabs([...tabs, newTab]);
    setActiveTab(newTabId);
  };

  // Handle closing a tab
  const handleCloseTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    // If the active tab was closed, set the first available tab as active
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  return (
    <div className="flex h-full w-full bg-gray-50">
      {/* Left Sidebar - Fixed width */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Top Navigation Tabs */}
        <TopTabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onAddTab={handleAddTab}
          onCloseTab={handleCloseTab}
        />
        
        {/* Content Area */}
        <div className="flex flex-grow overflow-hidden">
          {/* Main Content */}
          <MainContent activeTab={activeTab} />
          
          {/* Agent Panel */}
          <AgentPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

