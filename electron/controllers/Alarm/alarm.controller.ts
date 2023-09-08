/* Thirds-party  Import */
/* Models Import */
const { Alarm } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj

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
    event.reply('create-alarm', 'Alarm has been created', newAlarm.toJSON());
  },
  async updateAlarm(event: any, alarm: any) {
    const alarmFound = await Alarm.findByPk(alarm.id);
    if (!alarmFound) event.reply('send-error', 'The alarm does not exist');
    const updateAlarm = await Alarm.update(alarm, {
      where: {
        id: Alarm.id,
      },
    });
    event.reply('update-alarm', 'Alarm had been updated', updateAlarm);
  },
  async deleteAlarm(event: any, alarmId: any) {
    console.log('id la', alarmId);
    const alarmFound = await Alarm.findOne({
      where: {
        id: alarmId,
      },
    });
    if (!alarmFound) event.reply('send-error', 'The Alarm does not exist');
    console.log(alarmFound);
    if (alarmFound) await alarmFound.destroy();
    event.reply('delete-alarm', 'Alarm has been deleted');
  },
};
