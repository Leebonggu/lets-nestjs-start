import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 } from 'uuid';

@Injectable() // nest 프로젝트 어디에서든 사용가능
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards() {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: v1(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
