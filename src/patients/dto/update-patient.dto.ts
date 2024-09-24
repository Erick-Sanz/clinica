import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientDto } from './create-patient.dto';
import { IsEmpty } from 'class-validator';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  @IsEmpty()
  email: string;
  @IsEmpty()
  phoneNumber: string;
}
