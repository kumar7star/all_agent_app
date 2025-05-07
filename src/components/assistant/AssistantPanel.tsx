import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  useTheme,
  Avatar,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Send as SendIcon,
} from '@mui/icons-material';

interface AssistantPanelProps {
  open: boolean;
  onToggle: () => void;
}

const DRAWER_WIDTH = 320;

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const AssistantPanel: React.FC<AssistantPanelProps> = ({ open, onToggle }) => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! How can I assist you today?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add assistant response (in a real app, this would come from an API)
    const assistantMessage: Message = {
      id: messages.length + 2,
      text: 'I received your message. How can I help with that?',
      sender: 'assistant',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right"
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
            Assistant
          </Typography>
        )}
        <IconButton onClick={onToggle}>
          {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
      <Divider />

      {open && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Chat Messages */}
          <List
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              padding: 2,
            }}
          >
            {messages.map((message) => (
              <ListItem
                key={message.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  padding: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    maxWidth: '80%',
                  }}
                >
                  {message.sender === 'assistant' && (
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        width: 32,
                        height: 32,
                        mr: 1,
                      }}
                    >
                      A
                    </Avatar>
                  )}
                  <Paper
                    elevation={1}
                    sx={{
                      padding: 1.5,
                      backgroundColor:
                        message.sender === 'user'
                          ? theme.palette.primary.light
                          : theme.palette.grey[100],
                      borderRadius: 2,
                      color: message.sender === 'user' ? 'white' : 'inherit',
                    }}
                  >
                    <ListItemText
                      primary={message.text}
                      secondary={
                        message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      }
                      secondaryTypographyProps={{
                        color: message.sender === 'user' ? 'white' : 'text.secondary',
                        opacity: 0.7,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Paper>
                </Box>
              </ListItem>
            ))}
          </List>

          {/* Input Area */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Type a message..."
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                color="primary"
                sx={{ ml: 1 }}
                variant="contained"
                onClick={handleSendMessage}
              >
                <SendIcon />
              </Button>
            </Box>
          </Box>

          {/* Tools Section */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.grey[50],
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Interaction Tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Button size="small" variant="outlined">
                FAQ
              </Button>
              <Button size="small" variant="outlined">
                Help
              </Button>
              <Button size="small" variant="outlined">
                Settings
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

export default AssistantPanel;

