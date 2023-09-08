import { ipcMain } from 'electron';
/* Controllers Import */
import { TimerController } from '../controllers/Timer/timer.controller';
/* Utils Imports */
import { tryCatch } from '../utils/helpers';

console.log('\n\n####n################ START INIT ROUTES ###################');
console.log('###############  Route  ###############');
export const routes = () => {
  ipcMain.on('get-timers', async (event) => tryCatch(TimerController.index(event), event));
  ipcMain.on('create-timer', async (event, arg) =>
    tryCatch(TimerController.createTimer(event, arg), event),
  );
  ipcMain.on('delete-timer', async (event, arg) =>
    tryCatch(TimerController.deleteTimer(event, arg), event),
  );
  ipcMain.on('update-timer', async (event, arg) =>
    tryCatch(TimerController.updateTimer(event, arg), event),
  );
};
console.log('##################### END INIT ROUTES #####################\n\n');
