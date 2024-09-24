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
import { SafeMongoIdTransform } from 'src/common/helpers/cast-id-mongo';

export class CreateMedicalHistoryDto {
  @IsNotEmpty()
  @Length(24)
  @IsMongoId()
  @Transform((value) => SafeMongoIdTransform(value))
  patientId: string;
  @IsNotEmpty()
  @Length(3, 50)
  status: string;
  @IsNotEmpty()
  @Length(3, 500)
  changes: string;
  @IsNotEmpty()
  @Length(3, 1000)
  observations: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  treatments: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  medicalInterventions: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  references: string[];
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(0)
  adverseReactions: string[];
}
