import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [TodoModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
