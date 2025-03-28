import { useState, useEffect } from "react";
import Button from "./Button";
import { Todo } from "../pages/TodoApp";
import axios from "axios";

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
}

export default function TodoForm({
  todos,
  setTodos,
  selectedTodo,
  setSelectedTodo,
}: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Add button clicked");
  //   const newTodo = {
  //     title,
  //     description,
  //   };
  //   const updatedTodos = [...todos, newTodo];
  //   // save to localStorage
  //   localStorage.setItem("todos", JSON.stringify(updatedTodos)); // JSON.stringify converts JS object to string
  //   setTodos(updatedTodos);
  //   handleClear();
  // };

  const handleCreateTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Create todo button clicked");
    try {
      const response = await axios("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          title,
          description,
        },
      });
      console.log(response.data);
      setTodos([...todos, response.data]);
      localStorage.setItem("todos", JSON.stringify([...todos, response.data]));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedTodo) return;

    try {
      await axios(`http://localhost:3000/todos/${selectedTodo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          title,
          description,
        },
      });

      const updatedTodos = todos.map((todo) => {
        if (todo.id === selectedTodo.id) {
          return {
            ...todo,
            title,
            description,
          };
        }
        return todo;
      });
      setTodos(updatedTodos);
      handleClear();
    } catch (error) {
      console.error(error);
    }
  };

  // TODO: handle update

  const handleClear = () => {
    setTitle("");
    setDescription("");
    console.log("Clear button clicked");
    // set selectedTodo to null
    setSelectedTodo(null);
  };

  // we usually use useEffect to perform API calls, subscriptions, or DOM manipulations
  useEffect(() => {
    console.log("useEffect called");
  }, []); // runs only once when the component is mounted

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]); // runs when selectedTodo changes

  return (
    <form
      onSubmit={(event) =>
        selectedTodo ? handleUpdateTodo(event) : handleCreateTodo(event)
      }
      className="w-[800px] items-center"
    >
      <div className="flex flex-col border gap-4 p-4">
        <input
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="border px-2 py-1 rounded"
        />
        <textarea
          required
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          className="border px-2 py-1 rounded"
        />

        <div className="flex items-center justify-center gap-8">
          <Button type="submit" label={selectedTodo ? "Update" : "Add"} />
          <Button
            className="!bg-white !text-black !border"
            onClick={handleClear}
            label="Clear"
          />
        </div>
      </div>
    </form>
  );
}
//...rest , spread operator
