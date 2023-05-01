import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { UserModule } from 'src/auth/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository]), UserModule],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
