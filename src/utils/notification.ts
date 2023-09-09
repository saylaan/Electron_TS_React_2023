import notif1 from '../../assets/notif1.mp3';

export const notify = (title: string, msg: string): void => {
  new Notification(title, {
    body: msg,
    silent: true,
  });
  new Audio(notif1).play();
};
