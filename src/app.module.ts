import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './database/movies/movies.module';
import { KnexDBModule } from './database/knex/modules/knex.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {appconfig} from "./config/config"
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: [appconfig],
    
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({ 
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/database/graphql/schema.gql')
  }),
 MoviesModule,
 KnexDBModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
