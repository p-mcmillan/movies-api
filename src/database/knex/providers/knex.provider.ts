//https://dev.to/nestjs/build-a-nestjs-module-for-knex-js-or-other-resource-based-libraries-in-5-minutes-12an

import knex from 'knex';
import knexFile from '../knexfile';

export const KNEX_CONNECTION = 'KNEX_CONNECTION';

export const knexProvider = {
  provide: KNEX_CONNECTION,
  useFactory: async () => {
    return knex(knexFile);
  },
};