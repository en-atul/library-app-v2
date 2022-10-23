import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(): string {
    return this.booksService.create();
  }
}
