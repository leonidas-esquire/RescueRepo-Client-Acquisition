import "./styles.scss";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root element not found. Make sure <div id='root'></div> exists in index.html");
}
const root = createRoot(container);
root.render(<App />);
