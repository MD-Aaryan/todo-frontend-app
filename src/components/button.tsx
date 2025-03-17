import React from "react";

export default function Button({
  label,
  onClick,
  className,
}: {
  label: string;
  color?: string;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
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
      onClick={onClick}
    >
      {label}
    </button>
  );
}
