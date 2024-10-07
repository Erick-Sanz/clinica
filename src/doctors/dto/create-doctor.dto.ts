import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/, {
    message: 'The name must not contain special characters',
  })
  @Length(3, 40)
  @ApiProperty({ example: 'John Doe', required: true })
  name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Doctor', required: true })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'The position must not contain special characters',
  })
  @Length(3, 40)
  position: string;
}
