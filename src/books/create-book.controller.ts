import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { z } from 'zod';
import { CreateBookService } from './create-book.service';

const createBookBodySchema = z.object({
  title: z.string(),
  author: z.string(),
  publicationYear: z.number(),
  isbn: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createBookBodySchema);

type createBookBodySchema = z.infer<typeof createBookBodySchema>;

@Controller('/books')
export class CreateBookController {
  constructor(private createBook: CreateBookService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body(bodyValidationPipe) body: createBookBodySchema) {
    const { title, author, publicationYear, isbn } = body;

    const book = await this.createBook.execute({
      title,
      author,
      publicationYear,
      isbn,
    });

    return {
      book,
    };
  }
}
