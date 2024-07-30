import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {appconfig} from "./config/config"
import { MoviesModule } from './database/movies/movies.module';
import { join } from 'path';
import { KnexDBModule } from './database/knex/modules/knex.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: [appconfig],
   // envFilePath: '.env',
    
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
