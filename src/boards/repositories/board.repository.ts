import { Repository } from 'typeorm';
import { Board } from '../entities';
import { CustomRepository } from 'src/common/decorators';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
