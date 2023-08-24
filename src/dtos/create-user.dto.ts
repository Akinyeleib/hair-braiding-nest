import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsStringNotEmpty } from 'src/utils/helper';

export class CreateUserDTO {
  @IsStringNotEmpty() username: string;
  @IsEmail() email: string;
  @IsStringNotEmpty() address: string;
  @IsStringNotEmpty() phone_number: string;
  @IsStringNotEmpty() state: string;
  @IsStringNotEmpty() country: string;
  @IsStringNotEmpty() role: string;
  @IsStringNotEmpty() gender: string;
  @IsStringNotEmpty() password1: string;
  @IsStringNotEmpty() password2: string;
}
