import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MembersModule } from './members.module';

async function bootstrap() {
  const app = await NestFactory.create(MembersModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4003,
    },
  });
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
  Logger.log('Members microservice running');
}
bootstrap();
