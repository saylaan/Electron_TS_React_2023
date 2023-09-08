/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs'); // node.js module to create file system
const path = require('path'); // app and path, relative path
const Sequelize = require('sequelize'); // connecting to the DB
const dotenv = require('dotenv');

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    username: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PWD || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite'), // give the path to find the .sqlite
    },
  },
  port: process.env.PORT,
};

const db = {};
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options,
  config.db.host,
);

const folderModels = ['Timer'];

const isDirModels = (file) => {
  for (let i = 0; i < folderModels.length; i++) {
    if (folderModels[i] == file) {
      return false;
    }
  }
  return true;
};

console.log('\n\n#################### START INIT MODELS ####################');

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    if (isDirModels(file)) {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
    for (let i = 0; i < folderModels.length; i++) {
      if (!isDirModels(file)) {
        fs.readdirSync(path.join(__dirname, file))
          .filter(() => file !== 'index.js')
          .forEach((tmp) => {
            console.log('######################## File in Folder :', tmp);
            const model = require(path.join(path.join(__dirname, file), tmp))(
              sequelize,
              Sequelize.DataTypes,
            );
            db[model.name] = model;
          });
        break;
      }
    }
  });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

console.log('##################### END INIT MODELS #####################\n\n');

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
