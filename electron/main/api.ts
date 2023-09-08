import { ipcMain } from 'electron';
/* Controllers Import */
import { TimerController } from '../controllers/Timer/timer.controller';

export const api = (win: Electron.BrowserWindow) => {
  // ipcMain.on('ipc-example', async (event, arg) => {
  //   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  //   console.log(msgTemplate(arg));
  //   event.reply('ipc-example', msgTemplate('pong'));
  // });

  ipcMain.on('ipc-example', async (event, arg) => {
    console.log(arg);
    // const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    TimerController.createTimer({ timestamp: 1694187000 });
    event.reply('ipc-example', 'timer created ong');
  });
};
