import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './books.repository';

interface DeleteBookServiceRequest {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
}

@Injectable()
export class DeleteBookService {
  constructor(private bookRepository: BookRepository) {}

  async execute({ id }: DeleteBookServiceRequest): Promise<void> {
    const book = await this.bookRepository.findById(id);

    if (!book) {
      throw new NotFoundException('Book not found');
    }
    await this.bookRepository.delete(book);
  }
}
