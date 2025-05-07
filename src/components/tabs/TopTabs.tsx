import React from 'react';
import { Tabs, Tab, Box, useTheme, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { TabItem } from '../layout/Dashboard';

interface TopTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: TabItem[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'projects', label: 'Projects' },
  { id: 'reports', label: 'Reports' },
  { id: 'calendar', label: 'Calendar' },
];

const TopTabs: React.FC<TopTabsProps> = ({ activeTab, onTabChange }) => {
  const theme = useTheme();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onTabChange(newValue);
  };

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={0}
      sx={{ 
        borderBottom: `1px solid ${theme.palette.divider}`,
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' }, mr: 4 }}
        >
          Agent Dashboard
        </Typography>
        
        <Tabs 
          value={activeTab} 
          onChange={handleChange} 
          aria-label="navigation tabs"
          sx={{ 
            flexGrow: 1,
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 120,
              fontWeight: theme.typography.fontWeightRegular,
              fontSize: theme.typography.pxToRem(15),
              '&.Mui-selected': {
                fontWeight: theme.typography.fontWeightMedium,
              },
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.id} label={tab.label} value={tab.id} />
          ))}
        </Tabs>
        
        <Box sx={{ display: 'flex' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopTabs;

