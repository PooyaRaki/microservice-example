import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ValidationConfig } from '@utils/configs';
import { AppServiceConfig } from '@utils/configs/microservice';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    AppServiceConfig,
  );

  app.useGlobalPipes(new ValidationPipe(ValidationConfig));
  await app.listen();
}
bootstrap();
