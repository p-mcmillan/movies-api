import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MoviesModule } from "./database/movies/movies.module";
import { KnexDBModule } from "./database/knex/modules/knex.module";
import { GraphQLModule } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { appconfig } from "./config/config";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";

import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [appconfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      autoSchemaFile: join(__dirname, "database/graphql/schema.gql"),
      sortSchema: true,
      introspection: true,
      playground: true,
      path: "",
    }),
    MoviesModule,
    KnexDBModule,
  ],

  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
