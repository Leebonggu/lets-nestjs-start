import { Repository, EntityRepository } from 'typeorm';
import { Board } from './entities';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boards-status.enum';
import { User } from 'src/auth/entities/user.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(dto: CreateBoardDto, user: User) {
    const board = this.create({
      ...dto,
      status: BoardStatus.PUBLIC,
      user,
    });

    await this.save(board);

    return board;
  }
}
