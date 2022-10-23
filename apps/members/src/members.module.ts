import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_AUTH',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4001,
        },
      },
      {
        name: 'SERVICE_BOOKS',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4002,
        },
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: `./apps/members/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    // DatabaseModule,
  ],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
