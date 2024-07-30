import { Global, Module } from '@nestjs/common';
import { knexProvider } from '../providers/knex.provider'; 

@Global()
@Module({
  providers: [knexProvider],
  exports: [knexProvider],
})
export class KnexDBModule {}
