import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [TodoModule],
})
export class SeedModule {}
