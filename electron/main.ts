/* Thirds-party  Import */
import { app, BrowserWindow } from 'electron';
/* Models Import */
const { sequelize } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj
/* Main Import */
import { windowBuilder } from './main/windowBuilder';
import { TrayBuilder } from './main/trayBuilder';
import MenuBuilder from './main/menuBuilder';
/* Services Import */
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
    const win = windowBuilder();

    /**
     * Emitted when the application is activated.
     */
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        windowBuilder();
      }
    });

    /**
     * Set up the system tray app
     */
    TrayBuilder(win);

    /**
     * Set up the menu of the window
     */
    new MenuBuilder(win).buildMenu();

    /**
     * Schedule the cron alarm
     */
    scheduleAlarms();
  })
  .catch(console.log);

/**
 * Sync sequelize with the server and schedule cron alarm
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
