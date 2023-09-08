import { ipcMain } from 'electron';
/* Controllers Import */
import { AlarmController } from '../controllers/Alarm/alarm.controller';
/* Utils Imports */
import { tryCatch } from '../utils/helpers';

console.log('\n\n####n################ START INIT ROUTES ###################');
console.log('###############  Route  ###############');
export const routes = () => {
  ipcMain.on('get-alarms', async (event) => tryCatch(AlarmController.index(event), event));
  ipcMain.on('create-alarm', async (event, arg) =>
    tryCatch(AlarmController.createAlarm(event, arg), event),
  );
  ipcMain.on('delete-alarm', async (event, arg) =>
    tryCatch(AlarmController.deleteAlarm(event, arg), event),
  );
  ipcMain.on('update-alarm', async (event, arg) =>
    tryCatch(AlarmController.updateAlarm(event, arg), event),
  );
};
console.log('##################### END INIT ROUTES #####################\n\n');
