import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  imports: [
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
