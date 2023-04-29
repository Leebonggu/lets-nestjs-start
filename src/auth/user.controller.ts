import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  createUser(@Body() dto: AuthCredentialsDto) {
    this.userService.createUser(dto);
  }
}
