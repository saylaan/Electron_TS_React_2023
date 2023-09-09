import { Notification } from 'electron';
import path from 'path';
const schedule = require('node-schedule');
const { Alarm } = require('../../electron/models'); // models folder with index.js file who return a sequelize obj
const sound = require('sound-play');

const NOTIFICATION_TITLE = 'Alarm';
const NOTIFICATION_BODY = 'Wake up ! Your alarm just turn on !';

export const showNotification = async () => {
  const notif = new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
    silent: true,
  });
  notif.show();
  const filePath = path.join(__dirname, '../../public/assets/notif1.mp3');
  try {
    await sound.play(filePath);
    console.log('done');
  } catch (error) {
    console.error(error);
  }
};

export const scheduleAlarms = async () => {
  let alarms = null;
  alarms = await Alarm.findAll({
    limit: 100,
    raw: true,
  });
  if (alarms) {
    alarms.forEach((alarm: any) => {
      if (alarm.is_active === true) {
        const date = new Date(alarm.timestamp);
        const rule = new schedule.RecurrenceRule();
        rule.hour = date.getHours();
        rule.minute = date.getMinutes();
        rule.second = 0;
        rule.tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        schedule.scheduleJob(rule, () => {
          showNotification();
        });
      }
    });
  }
};
