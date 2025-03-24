import { Pencil, Trash2 } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  status?: boolean;
  handleDelete: () => void;
  handleEdit: () => void;
  isSelected?: boolean;
}

export default function Card({
  title,
  description,
  status = false,
  handleDelete,
  handleEdit,
  isSelected,
}: CardProps) {
  return (
    <div
      className={`card ${status ? "line-through " : ""}${
        isSelected ? "border-2 border-yellow-500" : ""
      }`}
    >
      <div className="card-title flex justify-between items-center">
        <h3>{title}</h3>
        <div className="flex gap-2">
          <Pencil strokeWidth={1} onClick={handleEdit} />
          <Trash2 strokeWidth={0.75} onClick={handleDelete} className="mx-2" />
        </div>
      </div>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
