/* Thirds-party  Import */
import { sequelizeDev } from '../electron/db/sequelize.dev'; // models folder with index.js file who return a sequelize obj
import Bluebird from 'bluebird';
/* Models Import */
import { Timer } from '../electron/models/Timer/timer.model';
/* JSON Data Import */
import timers from './Timer/timers.json';

sequelizeDev.sync({ force: true }).then(async function () {
  /* ####################################################################### */
  /* TIMER */
  await Bluebird.all(
    timers.map((el) => {
      Timer.create(el);
    }),
  );
  /* ####################################################################### */
});
