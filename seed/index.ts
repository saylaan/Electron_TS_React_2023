/* Thirds-party  Import */
const { sequelize, Alarm } = require('../electron/models');
import Bluebird from 'bluebird';
/* JSON Data Import */
import alarms from './Alarm/alarms.json';

sequelize.sync({ force: true }).then(async function () {
  /* ####################################################################### */
  /* TIMER */
  await Bluebird.all(
    alarms.map((el) => {
      Alarm.create(el);
    }),
  );
  /* ####################################################################### */
});
