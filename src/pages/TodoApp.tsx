import { useEffect, useState } from "react";
import TodoCards from "../components/Todocard";
import TodoForm from "../components/Todoform";
import axios from "axios";

export interface Todo {
  title: string;
  description: string;
  id: number;
  status: boolean;
  index?: number;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await axios("http://localhost:3000/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-center gap-8 p-4">
      <h1 className="text-2xl font-bold">TODO App</h1>
      <div className="flex gap-8 h-full w-full p-4">
        <TodoForm
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoCards
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className="flex gap-8"></div>
    </div>
  );
}

export default TodoApp;

// JSX in components
// - return a single root element
// spacing- <br />, margin, gap, space-x-*, space-y-*

// React Features
/**
 * 1. JSX - JavaScript XML (HTML in JS)
 * 2. Declarative(React) vs Imeperative(Vanilla JS)
 *  - document.getElementById('root').innerHTML = '<h1>Heading</h1>' // imperative - explicit DOM manipulation
 *  - <h1>Heading</h1> // declarative - how the UI should look like
 * 3. Components - reusable building blocks
 */

// Button Props - title, backgroundColor, color
