import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

export interface ConfigProps {
  postgres: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    ssl: {
      sslRejectUnauthorized: boolean;
      ca: string;
    };
  };
}

export interface ConfigProps {
  omdbApiKey: string;
}
const sslCertPath = process.env.DB_SSL;

export const appconfig = (): ConfigProps => ({
  postgres: {
    //uri: process.env.DATABASE_SERVICE_URI,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      sslRejectUnauthorized: true,
      ca: fs.readFileSync(sslCertPath, { encoding: 'utf8' }),
    },
  },
  omdbApiKey: process.env.OMDB_API_KEY,
});
