import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma.service';

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    book: Prisma.BookUncheckedCreateInput,
  ): Promise<Prisma.BookUncheckedCreateInput> {
    return await this.prisma.book.create({
      data: book,
    });
  }

  async findAll(): Promise<Prisma.BookUncheckedCreateInput[] | null> {
    return await this.prisma.book.findMany();
  }

  async findById(id: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async findByTitle(
    title: string,
  ): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: { title },
    });
  }

  async findByISBN(
    isbn: string,
  ): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: { isbn },
    });
  }

  async save(data: Prisma.BookUncheckedUpdateInput): Promise<void> {
    await this.prisma.book.update({
      where: { id: data!.toString() },
      data: data,
    });
  }

  async delete(book: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.delete({
      where: { id: book.id?.toString() },
    });
  }
}
