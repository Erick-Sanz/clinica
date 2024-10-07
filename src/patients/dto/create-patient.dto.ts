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
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @IsNotEmpty()
  @Length(3, 40)
  @ApiProperty({ example: 'Calle 1', required: true })
  street: string;
  @IsNotEmpty()
  @Length(1, 6)
  @ApiProperty({ example: '1234', required: true })
  number: string;
  @IsNotEmpty()
  @Length(1, 5)
  @ApiProperty({ example: 'Piso 1', required: true })
  postalCode: string;
  @IsNotEmpty()
  @Length(3, 40)
  @ApiProperty({ example: 'Ciudad', required: true })
  state: string;
  @IsNotEmpty()
  @Length(3, 40)
  @ApiProperty({ example: 'Provincia', required: true })
  neighborhood: string;
}

export class CreatePatientDto {
  @IsNotEmpty()
  @Length(3, 40)
  @ApiProperty({ example: 'Juan', required: true })
  name: string;
  @IsNotEmpty()
  @Length(3, 40)
  @ApiProperty({ example: 'Perez', required: true })
  paternalSurname: string;
  @IsOptional()
  @Length(3, 40)
  @ApiProperty({ example: 'Perez', required: false })
  maternalSurname: string;
  @IsNotEmpty()
  @Length(10)
  @ApiProperty({ example: '2222222222', required: true })
  phoneNumber: string;
  @IsNotEmpty()
  @Length(3, 40)
  @IsEmail()
  @ApiProperty({ example: 'juan.perez@gmail.com', required: true })
  email: string;
  @IsNotEmpty()
  @IsEnum(Gender)
  @ApiProperty({ example: Gender.MALE, required: true, enum: Gender })
  gender: Gender;
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha debe estar en el formato YYYY-MM-DD',
  })
  @ApiProperty({ example: '1990-01-01', required: true })
  dateOfBirth: Date;
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ApiProperty({ required: true, type: AddressDto })
  @Type(() => AddressDto)
  address: AddressDto;
}
