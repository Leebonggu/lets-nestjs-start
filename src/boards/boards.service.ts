import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable() // nest 프로젝트 어디에서든 사용가능
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards() {
    return this.boards;
  }

  createBoard(dto: CreateBoardDto) {
    const board: Board = {
      id: v1(),
      status: BoardStatus.PUBLIC,
      ...dto,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string) {
    const board = this.boards.find((board) => board.id === id);

    if (!board) {
      throw new NotFoundException();
    }

    return board;
  }

  deleteBoard(id: string) {
    const existBoard = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== existBoard.id);
  }

  updateBoardStatus(id: string, status: BoardStatus) {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
