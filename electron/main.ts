/* Thirds-party  Import */
import { app, BrowserWindow, Tray, Menu, shell } from 'electron';
import path from 'path';
/* Models Import */
const { sequelize } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj
/* Main Import */
import { createMainWindow } from './main/main-window';
import MenuBuilder from './main/menu';
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
    const win = createMainWindow();
    /**
     * Emitted when the application is activated.
     */
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });

    const tray = new Tray(path.resolve(__dirname, 'assets/volta.png'));
    tray.setTitle('my-alarm');
    tray.setToolTip('Your personal alarm');
    tray.on('click', () => {
      win.isVisible() ? win.hide() : win.show();
    });
    const template = [{ label: 'Quit' }];
    const ctxMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(ctxMenu);

    const menuBuilder = new MenuBuilder(win);
    menuBuilder.buildMenu();

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
