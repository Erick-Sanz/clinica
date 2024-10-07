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
import { ApiProperty } from '@nestjs/swagger';

export class CreateConsultationDto {
  @IsNotEmpty()
  @Length(24)
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  @ApiProperty({
    example: '66f338832f9fad87c6b3df53',
    required: true,
    description: 'Id of the patient',
  })
  patientId: string;
  @IsNotEmpty()
  @Length(24)
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  @ApiProperty({
    example: '66f338832f9fad87c6b3df53',
    required: true,
    description: 'Id of the doctor',
  })
  doctorId: string;
  @IsNotEmpty()
  @Length(3, 500)
  @ApiProperty({ example: 'se redacta el motivo', required: true })
  reason: string;
  @IsNotEmpty()
  @Length(3, 500)
  @ApiProperty({ example: 'se redacta el diagnóstico', required: true })
  diagnosis: string;
  @IsNotEmpty()
  @Type(() => Number)
  @Min(0)
  @ApiProperty({ example: 1000, required: true })
  total: number;
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ApiProperty({ example: ['tratamiento1', 'tratamiento2'], required: true })
  treatment: string[];
  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ example: '2024-09-25T17:32:21', required: true })
  followUpDate: string;
}
