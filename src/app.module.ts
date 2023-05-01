import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './config/typeorm.config';
import { UserModule } from './auth/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, UserModule],
})
export class AppModule {}
