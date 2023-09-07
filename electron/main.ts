/* Thirds-party  Import */
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
/* Sequelize Import */
import { sequelize } from './db/sequelize'; // models folder with index.js file who return a sequelize obj

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const isDev = process.env.NODE_ENV || false;

const handleSetTitle = (event: any, title: any) => {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win && win.setTitle(title);
};

// Responsable for the UI of the app with all the events necessary
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  });

  sequelize
    .sync(/* { force: true } */) // sync sequelize with the server {force : true} = deleting all data
    .then(() => {
      console.log('####################### END INIT DB #######################\n\n');
    })
    .catch((e) => console.log(e));

  if (isDev) {
    // mainWindow.loadURL(`${process.env.SERVER_URL}`);
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, `./index.html`));
  }

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/index.html`);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  ipcMain.on('request-alarm', (event) => {
    const result = 'I am a response from the main process';
    event.sender.send('response-alarm', result);
    return result;
  });

  ipcMain.on('set-title', handleSetTitle);

  mainWindow.on('close', () => {
    mainWindow.close();
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
