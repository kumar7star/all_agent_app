import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardHeader, Button, Divider } from '@mui/material';

interface MainContentProps {
  activeTab: string;
  activeMenuItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, activeMenuItem }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        overflow: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Typography variant="h4" gutterBottom>
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} / {activeMenuItem.charAt(0).toUpperCase() + activeMenuItem.slice(1)}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Task Options Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Task Options
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary">
                  Create New Task
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Import Tasks
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Export Data
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Generate Report
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        {/* Task Cards */}
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="Pending Tasks" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                You have 5 pending tasks that require your attention.
              </Typography>
              <Button sx={{ mt: 2 }} size="small">
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="In Progress" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                3 tasks are currently in progress.
              </Typography>
              <Button sx={{ mt: 2 }} size="small">
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader title="Completed" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                12 tasks have been completed this week.
              </Typography>
              <Button sx={{ mt: 2 }} size="small">
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Recent Activity */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1">
                Task "Update user documentation" was completed by John Doe
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Today at 2:30 PM
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1">
                New task "Implement API authentication" was assigned to you
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Today at 11:15 AM
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                You commented on "Fix navigation bug in mobile view"
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Yesterday at 4:45 PM
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;

