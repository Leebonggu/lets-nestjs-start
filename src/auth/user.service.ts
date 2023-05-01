import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signup(dto: AuthCredentialsDto) {
    return this.userRepository.createUser(dto);
  }

  async login(dto: AuthCredentialsDto) {
    const { username, password } = dto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);

      return { username, accessToken };
    }
    return {};
  }
}
