import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { GetBookByIdService } from './find-by-id.service';

@Controller('/books')
export class GetBookByIdController {
  constructor(private getBookByIdService: GetBookByIdService) {}

  @Get()
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    const book = await this.getBookByIdService.execute({
      id,
    });

    return {
      book,
    };
  }
}
