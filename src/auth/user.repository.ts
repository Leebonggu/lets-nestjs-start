import { Repository, EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
    });

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('존재하는 유저이름');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
