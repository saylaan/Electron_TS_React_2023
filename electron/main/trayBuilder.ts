import { app, Tray, Menu, BrowserWindow } from 'electron';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const TrayBuilder = (win: BrowserWindow): void => {
  const tray = new Tray(path.resolve(__dirname, 'assets/volta.png'));
  tray.setTitle('my-alarm');
  tray.setToolTip('Your personal alarm');
  tray.on('click', () => {
    win.isVisible() ? win.hide() : win.show();
  });
  const template = [
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
    {
      label: 'Show App',
      click: () => {
        win.show();
      },
    },
  ];
  const ctxMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(ctxMenu);
};
