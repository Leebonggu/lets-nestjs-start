import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  // 영어, 숫자만 허용
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'PASSWORD ONLY ENGLISH AND NUMBER',
  })
  password: string;
}
