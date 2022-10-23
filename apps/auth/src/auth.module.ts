import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './entities/auth.entities';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS_CLIENT',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4002,
        },
      },
      {
        name: 'MEMBERS_CLIENT',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4003,
        },
      },
    ]),
    ConfigModule.forRoot({
      envFilePath: `./apps/auth/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    DatabaseModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        // signOptions: {
        //   expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        // },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}
