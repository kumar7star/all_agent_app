import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import TopTabs from '../tabs/TopTabs';
import MainContent from '../content/MainContent';
import AssistantPanel from '../assistant/AssistantPanel';

// Define tab interfaces
export interface TabItem {
  id: string;
  label: string;
}

// Define sidebar menu item interface
export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // State for sidebar open/close on mobile
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // State for active menu item
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  
  // State for assistant panel open/close
  const [assistantOpen, setAssistantOpen] = useState(!isMobile);

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle assistant panel toggle
  const handleAssistantToggle = () => {
    setAssistantOpen(!assistantOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <CssBaseline />
      
      {/* Left Sidebar Navigation */}
      <Sidebar 
        open={sidebarOpen} 
        onToggle={handleSidebarToggle}
        activeMenuItem={activeMenuItem}
        onMenuItemSelect={setActiveMenuItem}
      />
      
      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Top Tab Navigation */}
        <TopTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {/* Content Area */}
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            overflow: 'hidden',
          }}
        >
          {/* Main Content with Task Options */}
          <MainContent 
            activeTab={activeTab}
            activeMenuItem={activeMenuItem}
          />
          
          {/* Right Assistant Panel with Interaction Tools */}
          <AssistantPanel 
            open={assistantOpen}
            onToggle={handleAssistantToggle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

