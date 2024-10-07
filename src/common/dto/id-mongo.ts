import { Transform } from 'class-transformer';
import { IsMongoId } from 'class-validator';
import { SafeMongoIdTransform } from '../helpers/cast-id-mongo';
import { ApiProperty } from '@nestjs/swagger';

export class MongoId {
  @ApiProperty({
    description: 'Id del documento',
    required: true,
    type: String,
    example: '66f1c1d11cd28a5fae803716',
  })
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  id: string;
}
