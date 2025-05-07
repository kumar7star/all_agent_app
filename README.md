# Dashboard Web Interface

A modern dashboard-style web interface with a responsive layout featuring:

- Left sidebar navigation
- Top tab navigation
- Main content area with task options
- Right assistant panel with interaction tools

## Features

- **Responsive Layout**: Adapts to different screen sizes
- **Collapsible Sidebar**: Toggle sidebar visibility for more space
- **Tab Navigation**: Switch between different sections
- **Task Management**: View and manage tasks
- **Assistant Panel**: Interactive chat interface with tools

## Tech Stack

- React
- TypeScript
- Material-UI (MUI)
- Create React App

## Project Structure

```
src/
├── components/
│   ├── assistant/     # Right sidebar assistant panel
│   ├── content/       # Main content area
│   ├── layout/        # Main layout components
│   ├── sidebar/       # Left navigation sidebar
│   └── tabs/          # Top navigation tabs
├── App.tsx            # Main application component
└── index.tsx          # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/kumar7star/all_agent_app.git
cd all_agent_app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

- Click on sidebar items to navigate between main sections
- Use the top tabs to switch between different views
- The main content area displays tasks and actions
- The right sidebar provides an assistant interface for help

## Customization

- Edit theme settings in `App.tsx`
- Modify navigation items in the respective component files
- Add new components to extend functionality

## License

MIT

