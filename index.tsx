// Entry point: Mounts the app to the root DOM element
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  // You really don't want to ever hit this, but if so: fail fast
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  // React.StrictMode does double-invocation in dev to catch side-effects
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
