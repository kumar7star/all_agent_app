import React from 'react';

const AgentPanel: React.FC = () => {
  return (
    <div className="hidden lg:block w-64 border-l border-gray-200 bg-white p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Agent Panel</h2>
      <p className="text-sm text-gray-600">
        This panel can be used for agent interactions, notifications, or additional tools.
      </p>
    </div>
  );
};

export default AgentPanel;

