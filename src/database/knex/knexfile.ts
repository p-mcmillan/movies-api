import { appconfig } from '../../config/config';
import * as path from 'path';
import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

//idk some sort of bug with knex when i pass the data in this way here it wont let me run migrations/seeds but one read when its not a function    
// had to manually enter credentials for to seed...

const configfile = appconfig();

const connexxt = configfile.postgres;
 
const config: Knex.Config = {
  client: 'postgresql',
  connection: 
  connexxt,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
    tableName: 'knex_migrations',
  },
};

export default config;


