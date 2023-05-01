import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport'; // jwtStrategy의 리턴값을 넣어줌
import { GetUser } from './get-user.decorator';

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

  @Post('test')
  @UseGuards(AuthGuard())
  test(@GetUser() user) {
    console.log(user);
  }
}
