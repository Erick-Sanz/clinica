import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Gender } from '../enums/gender';

export class AddressDto {
  @IsNotEmpty()
  @Length(3, 40)
  street: string;
  @IsNotEmpty()
  @Length(1, 6)
  number: string;
  @IsNotEmpty()
  @Length(1, 5)
  postalCode: string;
  @IsNotEmpty()
  @Length(3, 40)
  state: string;
  @IsNotEmpty()
  @Length(3, 40)
  neighborhood: string;
}

export class CreatePatientDto {
  @IsNotEmpty()
  @Length(3, 40)
  name: string;
  @IsNotEmpty()
  @Length(3, 40)
  paternalSurname: string;
  @IsOptional()
  @Length(3, 40)
  maternalSurname: string;
  @IsNotEmpty()
  @Length(10)
  phoneNumber: string;
  @IsNotEmpty()
  @Length(3, 40)
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha debe estar en el formato YYYY-MM-DD',
  })
  dateOfBirth: Date;
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  address: AddressDto;
}
