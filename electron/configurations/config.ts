/* Thirds-party Import */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

export const config = {
  env: process.env.NODE_ENV,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PWD || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite'), // give the path to find the .sqlite
    },
  },
  port: process.env.PORT,
};
