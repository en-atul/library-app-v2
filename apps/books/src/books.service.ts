import { Injectable } from '@nestjs/common';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}
  create(): string {
    return 'Hello World!';
  }
}
