import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signup(@Body(ValidationPipe) dto: AuthCredentialsDto) {
    return this.userService.signup(dto);
  }

  @Post('/login')
  login(@Body(ValidationPipe) dto: AuthCredentialsDto) {
    return this.userService.login(dto);
  }
}
