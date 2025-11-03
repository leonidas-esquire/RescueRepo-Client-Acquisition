import React, { useState } from 'react';
import Analytics from './Analytics';
import Team from './Team';
import Reports from './Reports';
import Settings from './Settings';
import Notifications from './Notifications';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Analytics');

  const renderTab = () => {
    switch (activeTab) {
      case 'Analytics': return <Analytics />;
      case 'Team': return <Team />;
      case 'Reports': return <Reports />;
      case 'Settings': return <Settings />;
      case 'Notifications': return <Notifications />;
      default: return <Analytics />;
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '20px', borderBottom: '2px solid #ccc' }}>
        {['Analytics', 'Team', 'Reports', 'Settings', 'Notifications'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              border: 'none',
              background: activeTab === tab ? '#007BFF' : 'transparent',
              color: activeTab === tab ? 'white' : '#333',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '5px 5px 0 0'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {renderTab()}
      </div>
    </div>
  );
};

export default Tabs;
