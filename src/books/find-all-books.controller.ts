import { Controller, Get, HttpCode } from '@nestjs/common';
import { FindAllBooksService } from './find-all-books.service';

@Controller('/books')
export class FindAllBooksController {
  constructor(private findAllBooksService: FindAllBooksService) {}

  @Get()
  @HttpCode(200)
  async handle() {
    const books = await this.findAllBooksService.execute();

    return {
      books,
    };
  }
}
