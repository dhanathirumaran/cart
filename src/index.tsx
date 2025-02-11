import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Renders the main application component into the root element.
 * @returns {void}
 */
const renderApp = (): void => {
  const rootElement = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(rootElement);

  root.render(
      <App />
  );
};
renderApp();