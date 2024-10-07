import { Transform } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { SafeMongoIdTransform } from '../../common/helpers/cast-id-mongo';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalHistoryDto {
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
  @Length(3, 50)
  @ApiProperty({
    example: 'estado actual',
    required: true,
    description: 'se redacta el estado',
  })
  status: string;
  @IsNotEmpty()
  @Length(3, 500)
  @ApiProperty({
    example: 'cambios 1',
    required: true,
    description: 'se redactan los cambios o evolución',
  })
  changes: string;
  @IsNotEmpty()
  @Length(3, 1000)
  @ApiProperty({
    example: 'observacion 1',
    required: true,
    description: 'se redacta la observacion',
  })
  observations: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  @ApiProperty({
    example: ['tratamiento de observacion 1', 'tratamiento de observacion 2'],
    required: false,
    description: 'se redacta tratamientos que requieren observacion',
  })
  treatments: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  @ApiProperty({
    example: ['intervencion 1', 'intervencion 2'],
    required: false,
    description: 'se redactan las intervenciones',
  })
  medicalInterventions: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  @ApiProperty({
    example: ['referencia 1', 'referencia 2'],
    required: false,
    description: 'se redactan las referencias',
  })
  references: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  @ApiProperty({
    example: ['reacciones adversas 1', 'reacciones adversas 2'],
    required: false,
    description: 'se redactan las reacciones adversas',
  })
  adverseReactions: string[];
  @ApiProperty({
    description: 'Archivos adjuntos (PDF o imágenes)',
    required: false,
    type: 'array',
    items: {
      type: 'string',
      format: 'binary',
    },
  })
  @IsOptional()
  @IsArray()
  files?: any[];
}
