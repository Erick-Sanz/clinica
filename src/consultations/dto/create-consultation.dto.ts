import { Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { SafeMongoIdTransform } from '../../common/helpers/cast-id-mongo';

export class CreateConsultationDto {
  @IsNotEmpty()
  @Length(24)
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  patientId: string;
  @IsNotEmpty()
  @Length(24)
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  doctorId: string;
  @IsNotEmpty()
  @Length(3, 500)
  reason: string;
  @IsNotEmpty()
  @Length(3, 500)
  diagnosis: string;
  @IsNotEmpty()
  @Type(() => Number)
  @Min(0)
  total: number;
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  treatment: string[];
  @IsNotEmpty()
  @IsDateString()
  followUpDate: string;
}
