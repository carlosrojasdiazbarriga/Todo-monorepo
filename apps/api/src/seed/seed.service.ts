import { Injectable } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import { TODOS_SEED } from './data/todo.seed';

@Injectable()
export class SeedService {
  constructor(private readonly todoService: TodoService) {}
  populateDatabase() {
    this.todoService.fillTodosWithSeedData(TODOS_SEED);
    return 'Database seeded with todos';
  }
}
