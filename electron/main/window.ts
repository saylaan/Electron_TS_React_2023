/* Thirds-party  Import */
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { api } from './api';

const isDev = process.env.NODE_ENV || false;

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};

/**
 * Create main window
 * @returns {BrowserWindow} Main window instance
 */
export function createMainWindow() {
  let mainWindow: BrowserWindow | null;
  mainWindow = new BrowserWindow({
    width: 860,
    height: 600,
    backgroundColor: '#202020',
    show: false,
    // autoHideMenuBar: true,
    icon: getAssetPath('icon.svg'),
    webPreferences: {
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      nodeIntegration: true,
      contextIsolation: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}`);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  isDev && mainWindow.webContents.openDevTools();

  // Show window when its ready to
  mainWindow.on('ready-to-show', () => {
    if (mainWindow) mainWindow.show();
  });

  // Close all windows when main window is closed
  mainWindow.on('close', () => {
    mainWindow = null;
    app.quit();
  });

  if (mainWindow) api(mainWindow);

  return mainWindow;
}
