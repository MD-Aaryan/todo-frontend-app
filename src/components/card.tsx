export default function Card({
  title,
  description,
  status,
  handleDelete,
}: {
  title: string;
  description: string;
  color?: string;
  status?: boolean;
  handleDelete: () => void;
}) {
  return (
    <div className={`card ${status ? "line-through " : ""}`}>
      <div className="card-title flex justify-between items-center">
        <h3>{title}</h3>
        <button className="cursor-pointer" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <p className="card-desc">{description}</p>
    </div>
  );
}
