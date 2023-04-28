import { Repository, EntityRepository } from 'typeorm';
import { Board } from './entities';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boards-status.enum';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(dto: CreateBoardDto) {
    const board = this.create({
      ...dto,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);

    return board;
  }
}
