import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Max, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    description: 'Indica el número de registros a omitir',
    required: true,
    type: Number,
    example: 0,
  })
  @Min(0)
  @Type(() => Number)
  skip: number;
  @ApiProperty({
    description: 'Indica el número de registros a mostrar',
    required: true,
    type: Number,
    example: 10,
  })
  @Min(1)
  @Max(30)
  @Type(() => Number)
  limit: number;
}
