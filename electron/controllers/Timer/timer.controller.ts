/* Thirds-party  Import */
/* Models Import */
import { Timer } from '../../models/Timer/timer.model';

export const TimerController = {
  async index() {
    try {
      let timers = null;
      timers = await Timer.findAll({
        // limit: limit ? (limit as unknown as number) : 100,
        limit: 100,
        // order: ['updated_at', 'DESC']
      });
      // send data ipc
      // res.send(timers);
    } catch (err) {
      // send error ipc
      // res.status(500).send({
      //   err: 'An error has occured while trying to fetch all the admins',
      // });
    }
  },
  async createTimer(timer: any) {
    try {
      const newTimer = await Timer.create(timer);
      // if (!newTimer)
      // send error ipc
      const jsonTimer = newTimer.toJSON();
      // send data ipc
    } catch (err) {
      // send error ipc
    }
  },
  // async getTimer(timerId: number) {
  //   try {
  //     const timer: any = await Timer.findByPk(timerId);
  //     if (!timer)
  //     send error ipc
  //     send data ipc
  //   } catch (err) {
  // send error ipc
  //   }
  // },
  async updateTimer(timerId: number, timer: any) {
    try {
      const timer = await Timer.findByPk(timerId);
      // if (!timer)
      // send error ipc
      const updateTimer = await Timer.update(timer, {
        where: {
          id: timerId,
        },
        individualHooks: true,
      });
      // send data ipc
    } catch (err) {
      // send error ipc
    }
  },
  async deleteTimer(timerId: number) {
    try {
      const foundTimer = await Timer.findByPk(timerId);
      // if (!timer)
      // send error ipc
      await foundTimer.destroy();
      // send data ipc
    } catch (err) {
      // send error ipc
    }
  },
};
