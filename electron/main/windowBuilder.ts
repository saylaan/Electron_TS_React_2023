/* Thirds-party  Import */
import { app, BrowserWindow } from 'electron';
import path from 'path';
/* Routes Import */
import { routes } from '../routes';

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

const isDev = process.env.NODE_ENV || false;

/**
 * Create main window
 * @returns {BrowserWindow} Main window instance
 */
export const windowBuilder = (): BrowserWindow => {
  let mainWindow: BrowserWindow | null;
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 860,
    backgroundColor: '#202020',
    show: false,
    // ? autoHideMenuBar: true,
    icon: path.resolve(__dirname, 'assets/volta.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
  });

  /**
   * Loading of the renderer html
   */
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}`);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  /**
   * Add devtools to the app in development env (NODE_ENV=development)
   */
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  /**
   * Show window when its ready to
   */
  mainWindow.on('ready-to-show', () => {
    mainWindow && mainWindow.show();
  });

  /**
   * Close all windows when main window is closed
   */
  mainWindow.on('close', () => {
    mainWindow = null;
    app.quit();
  });

  /**
   * Initialize the routes
   */
  routes();

  return mainWindow;
};
