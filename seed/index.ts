/* Thirds-party  Import */
const { sequelize, Timer } = require('../electron/models');
import Bluebird from 'bluebird';
/* JSON Data Import */
import timers from './Timer/timers.json';

sequelize.sync({ force: true }).then(async function () {
  /* ####################################################################### */
  /* TIMER */
  await Bluebird.all(
    timers.map((el) => {
      Timer.create(el);
    }),
  );
  /* ####################################################################### */
});
