import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Book } from './entities/book.entities';

@Injectable()
export class BooksRepository extends AbstractRepository<Book> {
  protected readonly logger = new Logger(BooksRepository.name);

  constructor(
    @InjectModel(Book.name) orderModel: Model<Book>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }
}
