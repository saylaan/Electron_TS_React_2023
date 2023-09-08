/* Thirds-party  Import */
/* Models Import */
const { Timer } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj

export const TimerController = {
  async index(event: any) {
    let timers = null;
    timers = await Timer.findAll({
      limit: 100,
    });
    event.reply('get-timers', timers);
  },
  async createTimer(event: any, timer: any) {
    const newTimer = await Timer.create({ ...timer });
    if (!newTimer) event.reply('send-error', 'An error occur during the creation');
    event.reply('create-timer', 'Timer has been created', newTimer.toJSON());
  },
  async updateTimer(event: any, timer: any) {
    const timerFound = await Timer.findByPk(timer.id);
    if (!timerFound) event.reply('send-error', 'The timer does not exist');
    const updateTimer = await Timer.update(timer, {
      where: {
        id: timer.id,
      },
    });
    event.reply('update-timer', 'Timer had been updated', updateTimer);
  },
  async deleteTimer(event: any, timerId: any) {
    const timerFound = await Timer.findByPk(timerId);
    if (!timerFound) event.reply('send-error', 'The timer does not exist');
    if (timerFound) await timerFound.destroy();
    event.reply('delete-timer', 'Timer has been deleted');
  },
};
