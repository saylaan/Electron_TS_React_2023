/* Thirds-party  Import */
import { app, BrowserWindow } from 'electron';
const { sequelize } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj

import { createMainWindow } from './main/main-window';

/** Handle creating/removing shortcuts on Windows when installing/uninstalling. */
if (require('electron-squirrel-startup')) {
  app.quit();
}

/**
 * This method will be called when Electron has finished
 */
app
  .whenReady()
  .then(() => {
    createMainWindow();
    /**
     * Emitted when the application is activated.
     */
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
  })
  .catch(console.log);

/**
 * Sync sequelize with the server
 * {force : true} = deleting all data
 */
sequelize
  .sync(/* { force: true } */)
  .then(() => {
    console.log('####################### END INIT DB #######################\n\n');
  })
  .catch((e: Error) => console.log(e));

/**
 * Emitted when all windows have been closed.
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
