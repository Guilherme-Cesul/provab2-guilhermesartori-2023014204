import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './books.repository';

interface EditBookServiceRequest {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
}

@Injectable()
export class EditBookService {
  constructor(private bookRepository: BookRepository) {}

  async execute({
    id,
    title,
    author,
    publicationYear,
    isbn,
  }: EditBookServiceRequest): Promise<void> {
    const book = await this.bookRepository.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found.');
    }

    await this.bookRepository.save({
      id,
      title,
      author,
      publicationYear,
      isbn,
    });
  }
}
