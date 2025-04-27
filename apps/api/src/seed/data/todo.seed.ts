import { Todo } from 'src/todo/entities/todo.entity';
import { v4 as uuid } from 'uuid';

export const TODOS_SEED: Todo[] = [
  {
    id: uuid(),
    title: 'Todo 1',
    description: 'Description 1',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: uuid(),
    title: 'Todo 2',
    description: 'Description 2',
    completed: false,
    createdAt: new Date(),
  },
  {
    id: uuid(),
    title: 'Todo 3',
    description: 'Description 3',
    completed: false,
    createdAt: new Date(),
  },
];
