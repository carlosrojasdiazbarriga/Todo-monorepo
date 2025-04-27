import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { v4 as uuid } from 'uuid';
import { NotFoundError, throwError } from 'rxjs';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.id = uuid();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.completed = false;
    todo.createdAt = new Date();
    this.todos.push(todo);
    return todo;
  }

  findAll() {
    return this.todos;
  }

  update(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new HttpException('Todo no encontrado', HttpStatus.NOT_FOUND);
    }
    todo.completed = !todo.completed;
    todo.updatedAt = new Date();
    return todo;
  }

  fillTodosWithSeedData(todos: Todo[]) {
    this.todos = todos;
  }
}
