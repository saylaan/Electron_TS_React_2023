/* Thirds-party  import */
import { Sequelize } from 'sequelize-typescript';
/* Config Import */
import { config } from '../configurations/config';

console.log('##################### STAR INIT MODELS #####################');
console.log('Loading models...', __dirname + '/../**/*.model.ts');
const sequelizeConfig = new Sequelize({
  database: config.db.database,
  dialect: config.db.options.dialect === 'sqlite' ? 'sqlite' : 'mysql',
  username: config.db.user,
  password: config.db.password,
  modelPaths: [__dirname + '/../**/*.model.ts'],
  models: [__dirname + '/../**/*.model.ts'],
  storage: config.db.options.storage,
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
});
console.log('##################### END INIT MODELS #####################\n\n');
console.log('##################### START INIT DB #######################');

export const sequelizeDev = sequelizeConfig;
