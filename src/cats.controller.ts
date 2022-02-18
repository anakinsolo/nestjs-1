import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':cat_id')
  findOne(@Param() params): string {
    return `Cat ID ${params.cat_id}`;
  }
}
