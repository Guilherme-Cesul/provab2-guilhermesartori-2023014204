import { ConflictException, Injectable } from '@nestjs/common';
import { BookRepository } from './books.repository';

interface CreateBookServiceRequest {
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
}

@Injectable()
export class CreateBookService {
  constructor(private bookRepository: BookRepository) {}

  async execute({
    title,
    author,
    publicationYear,
    isbn,
  }: CreateBookServiceRequest): Promise<void> {
    const bookWithSameName = await this.bookRepository.findByTitle(title);
    if (bookWithSameName) {
      throw new ConflictException(`Book with title "${title}" already exists.`);
    }
    const bookWithSameISBN = await this.bookRepository.findByISBN(isbn);
    if (bookWithSameISBN) {
      throw new ConflictException(`Book with ISBN "${isbn}" already exists.`);
    }
    await this.bookRepository.create({
      title,
      author,
      publicationYear,
      isbn,
    });
  }
}
