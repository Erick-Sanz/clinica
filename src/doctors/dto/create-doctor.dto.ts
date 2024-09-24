import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'The name must not contain special characters',
  })
  @Length(3, 40)
  name: string;
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'The position must not contain special characters',
  })
  @Length(3, 40)
  position: string;
}
