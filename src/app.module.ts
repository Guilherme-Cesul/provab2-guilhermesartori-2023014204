import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateBookController } from './books/create-book.controller';
import { DeleteBookController } from './books/delete-book.controller';
import { EditBookController } from './books/edit-book.controller';
import { FindAllBooksController } from './books/find-all-books.controller';
import { GetBookByIdController } from './books/find-by-id.controller';
import { BookRepository } from './books/books.repository';
import { CreateBookService } from './books/create-book.service';
import { DeleteBookService } from './books/delete-book.service';
import { EditBookService } from './books/edit-book.service';
import { FindAllBooksService } from './books/find-all-books.service';
import { GetBookByIdService } from './books/find-by-id.service';
import { PrismaService } from 'prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CreateBookController,
    DeleteBookController,
    EditBookController,
    FindAllBooksController,
    GetBookByIdController,
  ],
  providers: [
    AppService,
    PrismaService,
    BookRepository,
    CreateBookService,
    DeleteBookService,
    EditBookService,
    FindAllBooksService,
    GetBookByIdService,
  ],
})
export class AppModule {}
