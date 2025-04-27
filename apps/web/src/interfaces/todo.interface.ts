export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface TodoCreate {
  title: string;
  description?: string;
  completed?: boolean;
}
