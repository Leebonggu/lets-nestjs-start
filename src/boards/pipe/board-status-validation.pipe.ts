import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly statusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  transform(value: any) {
    value = String(value).toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    return this.statusOptions.includes(status);
  }
}
