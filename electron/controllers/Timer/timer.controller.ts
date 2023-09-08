/* Thirds-party  Import */
/* Models Import */
const { Alarm } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj

export const TimerController = {
  async index(event: any) {
    let timers = null;
    timers = await Alarm.findAll({
      limit: 100,
    });
    event.reply('get-alarms', timers);
  },
  async createTimer(event: any, timer: any) {
    const newAlarm = await Alarm.create({ ...timer });
    if (!newAlarm) event.reply('send-error', 'An error occur during the creation');
    event.reply('create-alarm', 'Timer has been created', newAlarm.toJSON());
  },
  async updateTimer(event: any, alarm: any) {
    const alarmFound = await Alarm.findByPk(alarm.id);
    if (!alarmFound) event.reply('send-error', 'The timer does not exist');
    const updateTimer = await Alarm.update(alarm, {
      where: {
        id: Alarm.id,
      },
    });
    event.reply('update-alarm', 'Timer had been updated', updateTimer);
  },
  async deleteTimer(event: any, timerId: any) {
    const alarmFound = await Alarm.findByPk(timerId);
    if (!alarmFound) event.reply('send-error', 'The timer does not exist');
    if (alarmFound) await alarmFound.destroy();
    event.reply('delete-alarm', 'Timer has been deleted');
  },
};
