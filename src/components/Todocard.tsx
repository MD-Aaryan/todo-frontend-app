import { Todo } from "../pages/TodoApp";
import Card from "./card";
import axios from "axios";

interface TodoCardsProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  setSelectedTodo: (todo: Todo | null) => void;
  selectedTodo: Todo | null;
}

export default function TodoCards(props: TodoCardsProps) {
  //   //used to delete a todo
  //   const handleDelete = (index: number) => {
  //     localStorage.setItem("todos", JSON.stringify(updatedTodos)); // update localStorage
  //     const updatedTodos = props.todos.filter((_, i) => i !== index); // DELETE: filter out the selected todo
  //     props.setTodos(updatedTodos); // update state
  //   };
  const handleDelete = async (id: number) => {
    try {
      await axios(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // window.location.reload();
      const updatedTodos = props.todos.filter((todo) => todo.id !== id);
      props.setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (todo: Todo, index: number) => {
    props.setSelectedTodo({ ...todo, index });
  };

  return (
    <div
      className="w-full h-full overflow-y-auto pb-16"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        justifyItems: "center",
        rowGap: "1rem",
      }}
    >
      {props.todos.map((todo, index) => (
        <Card
          key={index}
          handleEdit={() => handleEdit(todo, index)}
          handleDelete={() => handleDelete(todo.id)}
          title={todo.title}
          description={todo.description}
          isSelected={props.selectedTodo?.index === index}
        />
      ))}
    </div>
  );
}
