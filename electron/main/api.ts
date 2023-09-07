import { ipcMain } from 'electron';
/* Sequelize Import */
import { sequelizeBuild } from '../db/sequelize.build'; // models folder with index.js file who return a sequelize obj

export const api = (win: Electron.BrowserWindow) => {
  sequelizeBuild
    .sync(/* { force: true } */) // sync sequelize with the server {force : true} = deleting all data
    .then(() => {
      console.log('####################### END INIT DB #######################\n\n');
    })
    .catch((e) => console.log(e));

  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
  });
};
