import React from 'react';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        minHeight: '100vh',
        color: '#fff',
        padding: '40px'
      }}
    >
      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem', fontWeight: 700 }}>
        🚀 RescueRepo Client System
      </h1>
      <Tabs />
      <footer style={{ marginTop: '60px', fontSize: '0.9rem', opacity: 0.8 }}>
        Built with ❤️ by Leonidas Esquire
      </footer>
    </div>
  );
}
