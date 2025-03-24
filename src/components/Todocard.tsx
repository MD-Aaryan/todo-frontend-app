import { Todo } from "../pages/TodoApp";
import Card from "./card";

interface TodoCardsProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  setSelectedTodo: (todo: Todo | null) => void;
  selectedTodo: Todo | null;
}

export default function TodoCards(props: TodoCardsProps) {
  const handleDelete = (index: number) => {
    const updatedTodos = props.todos.filter((_, i) => i !== index); // DELETE: filter out the selected todo
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // update localStorage
    props.setTodos(updatedTodos); // update state
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
          handleDelete={() => handleDelete(index)}
          title={todo.title}
          description={todo.description}
          isSelected={props.selectedTodo?.index === index}
        />
      ))}
    </div>
  );
}
