import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksRepository } from './books.repository';
import { BooksService } from './books.service';
import { Book, BookSchema } from './entities/book.entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./apps/books/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BooksRepository],
})
export class BooksModule {}
