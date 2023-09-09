/* Models Import */
const { Alarm } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj
import { showNotification } from '../../main/notification';

export const AlarmController = {
  async index(event: any) {
    let alarms = null;
    alarms = await Alarm.findAll({
      limit: 100,
      raw: true,
    });
    event.reply('get-alarms', alarms);
  },
  async createAlarm(event: any, alarm: any) {
    const newAlarm = await Alarm.create({ ...alarm });
    if (!newAlarm) event.reply('send-error', 'An error occur during the creation');
    event.reply('create-alarm', newAlarm.toJSON());
  },
  async updateAlarm(event: any, alarm: any) {
    const alarmFound = await Alarm.findOne({
      where: {
        id: alarm.id,
      },
    });
    if (!alarmFound) event.reply('send-error', 'The alarm does not exist');
    await Alarm.update(alarm.data, {
      where: {
        id: alarm.id,
      },
    });
    event.reply('update-alarm', 'Alarm had been updated');
  },
  async deleteAlarm(event: any, alarmId: any) {
    const alarmFound = await Alarm.findOne({
      where: {
        id: alarmId,
      },
    });
    if (!alarmFound) event.reply('send-error', 'The Alarm does not exist');
    if (alarmFound) await alarmFound.destroy();
    showNotification();
    event.reply('delete-alarm', 'Alarm has been deleted');
  },
};
