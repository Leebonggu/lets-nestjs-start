import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable() // nest 프로젝트 어디에서든 사용가능
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  getAllBoards() {
    return this.boardRepository.find({});
  }

  async getMyBoards(user: User) {
    const boardBuilder = this.boardRepository.createQueryBuilder('board');

    boardBuilder.where('board.userId = :userId', { userId: user.id });
    const boards = await boardBuilder.getMany();

    return boards;
    // === SameThing return this.boardRepository.find({ user: { id: user.id } });
  }

  async createBoard(dto: CreateBoardDto, user: User) {
    return await this.boardRepository.createBoard(dto, user);
  }

  async getBoardById(id: number) {
    const board = await this.boardRepository.findOne(id);

    if (!board) {
      throw new NotFoundException();
    }

    return board;
  }

  async deleteBoard(id: number, user: User) {
    const result = await this.boardRepository.delete({
      id,
      user: { id: user.id },
    });

    if (result.affected === 0) {
      throw new NotFoundException('Cant find board item');
    }

    return result.affected > 0;
  }

  async updateBoardStatus(id: number, status: BoardStatus) {
    const board = await this.getBoardById(id);

    if (!board) {
      throw new NotFoundException();
    }

    board.status = status;
    await board.save();

    return board;
  }
}
