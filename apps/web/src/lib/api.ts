import { TodoCreate } from "@/interfaces/todo.interface";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const todoApi = {
  getAllTodos: async () => {
    const response = await fetch(`${API_URL}/todo`);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  },

  createTodo: async (todo: TodoCreate) => {
    const response = await fetch(`${API_URL}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error("Failed to create todo");
    }
    return response.json();
  },

  toggleTodo: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/todo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      return res.json();
    } catch (error) {
      console.error("Toggle todo error:", error);
      throw error;
    }
  },
};
