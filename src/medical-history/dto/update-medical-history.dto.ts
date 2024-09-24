import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalHistoryDto } from './create-medical-history.dto';
import {
  ArrayMinSize,
  IsArray,
  IsEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMedicalHistoryDto extends PartialType(
  CreateMedicalHistoryDto,
) {
  @IsEmpty()
  patientId: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  testResult: string[];
}
