import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BooksModule } from './books.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4002,
    },
  });
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
  Logger.log('Books microservice running');
}
bootstrap();
