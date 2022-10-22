import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ValidationConfig } from '@utils/configs';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppServiceConfig } from '@utils/configs/microservice';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    AppServiceConfig,
  );

  app.useGlobalPipes(new ValidationPipe(ValidationConfig));
  await app.listen();
}
bootstrap();