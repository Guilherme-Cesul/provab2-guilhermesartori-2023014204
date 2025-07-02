import { BadRequestException, Injectable } from '@nestjs/common';
import { BookRepository } from './books.repository';

export interface Book {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
  createdAt: string | Date | undefined;
  updatedAt: string | Date | null | undefined;
}

type FindAllBooksServiceResponse = {
  books: Book[];
};

@Injectable()
export class FindAllBooksService {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<FindAllBooksServiceResponse> {
    const books = await this.bookRepository.findAll();

    const newBooks: Book[] = [];

    if (!books) {
      throw new BadRequestException('Books not found');
    }

    for (const book of books) {
      newBooks.push({
          id: book.id?.toString() || '',
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          publicationYear: book.publicationYear,
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
      });
    }
    return {
      books: newBooks,
    };
  }
}
