import { useState } from "react";
import TodoCards from "./components/Todocard";
import TodoForm from "./components/Todoform";
export interface Todo {
  title: string;
  description: string;
}

function App() {
  //get todos from local stroage
  const todosFromLocalStorage = localStorage.getItem("todos");
  //if todosformlocalstorage is null initialtodos to an emty arry
  const initialTodos = todosFromLocalStorage
    ? JSON.parse(todosFromLocalStorage)
    : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const cardTitle = "Cards";
  return (
    <div className="flex flex-col w-screen h-screen items-center gap-8 p-4">
      <h1 className="text-2xl font-bold">TODO App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      {/* TODO: Pass todos as props to TodoCards */}
      <TodoCards cardTitle={cardTitle} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
