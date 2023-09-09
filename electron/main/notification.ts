import { Notification } from 'electron';
import path from 'path';
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
