import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  useTheme,
  Typography,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { MenuItem } from '../layout/Dashboard';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  activeMenuItem: string;
  onMenuItemSelect: (id: string) => void;
}

const DRAWER_WIDTH = 240;

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: <DashboardIcon /> },
  { id: 'tasks', label: 'Tasks', icon: <AssignmentIcon /> },
  { id: 'analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
  { id: 'team', label: 'Team', icon: <PeopleIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  open,
  onToggle,
  activeMenuItem,
  onMenuItemSelect,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? DRAWER_WIDTH : theme.spacing(7),
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? DRAWER_WIDTH : theme.spacing(7),
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
      open={open}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'space-between' : 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
        }}
      >
        {open && (
          <Typography variant="h6" noWrap component="div" sx={{ ml: 2 }}>
            Agent App
          </Typography>
        )}
        <IconButton onClick={onToggle}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: activeMenuItem === item.id ? 'rgba(0, 0, 0, 0.08)' : 'transparent',
              }}
              onClick={() => onMenuItemSelect(item.id)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: activeMenuItem === item.id ? theme.palette.primary.main : 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  opacity: open ? 1 : 0,
                  color: activeMenuItem === item.id ? theme.palette.primary.main : 'inherit',
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

