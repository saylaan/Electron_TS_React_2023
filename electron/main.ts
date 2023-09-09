/* Thirds-party  Import */
import { app, BrowserWindow } from 'electron';
/* Models Import */
const { sequelize } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj
/* Main Import */
import { createMainWindow } from './main/main-window';
import { scheduleAlarms } from './services/alarm.service';

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
    if (process.platform === 'win32') {
      app.setAppUserModelId('my-alarm');
    }
    createMainWindow();
    /**
     * Emitted when the application is activated.
     */
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
    scheduleAlarms();
  })
  .catch(console.log);

/**
 * Sync sequelize with the server
 * {force : true} = deleting all data
 */
sequelize
  .sync(/* { force: true } */)
  .then(() => {
    setInterval(() => scheduleAlarms(), 10000);
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
