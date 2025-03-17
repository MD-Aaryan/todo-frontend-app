import { useState } from "react";
import Button from "./button";
import { Todo } from "../App";
// import CustomInput from "./costominput";

export interface TodoFormProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
}

export default function TodoForm({ todos, setTodos }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Add button clicked");
    const newTodo = {
      title,
      description,
    };
    const updatedTodos = [...todos, newTodo];
    //save local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const handleClear = () => {
    // TODO - impelement state clear
    console.log("Clear button clicked");
  };

  return (
    <form className="w-[600px] items-center">
      <div className="flex flex-col border gap-2 p-4">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="border px-2 py-1 rounded"
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="Description"
        />

        {/* <CustomInput label="Title" />
        <CustomInput label="Description" /> */}
        <div className="flex items-center justify-center gap-8">
          <Button onClick={handleAdd} label="Add" />
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
