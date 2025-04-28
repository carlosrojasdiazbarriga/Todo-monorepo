"use client";
import { Todo, TodoCreate } from "@/interfaces/todo.interface";
import { todoApi } from "@/lib/api";
import React, { useState } from "react";

interface CreateTodoFormProps {
  onNewTodo?: (newTodo: Todo) => void;
}

export const CreateTodoForm = ({ onNewTodo }: CreateTodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const MAX_TITLE_LENGTH = 30;
  const MAX_DESCRIPTION_LENGTH = 30;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const newTodo: TodoCreate = {
      title: title.trim(),
      description: description.trim() ?? undefined,
    };

    try {
      const createdTodo = await todoApi.createTodo(newTodo);
      onNewTodo?.(createdTodo);
      setTitle("");
      setDescription("");
    } catch (error:any) {
      console.error("Error creating todo:", error);
      alert(`Error al crear la tarea. Por favor, inténtalo de nuevo.`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4 md:w-1/2 w-full">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Título
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Añadir nueva tarea"
          maxLength={MAX_TITLE_LENGTH}
          minLength={1}
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descripción (opcional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Añadir descripción"
          maxLength={MAX_DESCRIPTION_LENGTH}
          minLength={1}
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Añadir Tarea
      </button>
    </form>
  );
};
