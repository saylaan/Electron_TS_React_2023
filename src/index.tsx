/* Thirds-party Imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
/* Electron Imports */
import { ElectronHandler } from '../electron/preload/preload';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

postMessage({ payload: 'removeLoading' }, '*');

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}
