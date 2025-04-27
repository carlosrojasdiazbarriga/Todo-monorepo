"use client";

import { Todo } from "@/interfaces/todo.interface";
import { todoApi } from "@/lib/api";
import { useState } from "react";
import { CreateTodoForm } from "./CreateTodoForm";

interface TodoListProps {
  initialTodos: Todo[];
}

export const TodoList = ({ initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleToggle = async (id: string) => {
    await todoApi.toggleTodo(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-8 h-fit">
      <CreateTodoForm onNewTodo={addTodo} />
      <ul className="space-y-4 md:w-1/2 w-full overflow-y-auto max-h-[80vh]">
        <div className="text-2xl font-bold sticky top-0 bg-white mb-4 p-4 ">
          Tareas ({todos.length})
        </div>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              className="w-5 h-5 accent-violet-600 cursor-pointer"
            />
            <div className="flex-1 min-w-0">
              <h3
                className={`font-medium ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.title}
              </h3>
              {todo.description && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {todo.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
