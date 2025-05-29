import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { HashRouter } from 'react-router-dom'; // ✅ Import HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
