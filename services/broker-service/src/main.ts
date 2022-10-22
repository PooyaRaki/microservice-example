import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppMicroservice } from '@utils/configs/microservice';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    AppMicroservice,
  );

  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
