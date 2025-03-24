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
          <button className="cursor-pointer" onClick={handleEdit}>
            Edit
          </button>
          <button className="cursor-pointer" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
