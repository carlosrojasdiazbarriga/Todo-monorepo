import { TodoList } from "@/components/TodoList";
import { todoApi } from "@/lib/api";

export default async function Home() {
  const todos = await todoApi.getAllTodos();

  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Lista de Tareas
            </h1>
            <p className="text-gray-600">
              Organiza tus tareas de manera eficiente
            </p>
          </header>

          <TodoList initialTodos={todos} />
        </div>
      </main>
    </div>
  );
}
