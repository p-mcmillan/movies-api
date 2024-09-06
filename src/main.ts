//https://docs.nestjs.com/middleware

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(new LoggerMiddleware().use);

  // CORS settings //
  app.enableCors({
    origin: "*",
    methods: ["POST"],
    allowedHeaders: "Content-Type, application/json",
    credentials: true,
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>("APP_PORT");

  await app.listen(port);
  console.log(`running on: ${await app.getUrl()}`);
}
bootstrap();
