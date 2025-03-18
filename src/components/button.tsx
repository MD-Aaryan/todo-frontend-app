interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "submit" | "reset" | "button";
}

export default function Button({
  label,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        width: 120,
        height: 40,
        padding: "4px 8px",
        cursor: "pointer",
        borderRadius: 8,
        fontSize: 16,
      }}
      className={className}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
