import { NestFactory } from '@nestjs/core';
import { MembersModule } from './members.module';

async function bootstrap() {
  const app = await NestFactory.create(MembersModule);
  await app.listen(3000);
}
bootstrap();
