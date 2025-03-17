interface CustomInputProps {
  label: string;
  type?: string;
}

export default function CustomInput({
  label,
  type = "text",
}: CustomInputProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="input">{label}</label>
      <input
        placeholder={label}
        className="px-2 py-1 outline rounded"
        style={{}}
        name="input"
        type={type}
      />
    </div>
  );
}

// a component is a reusable block of code
// Export types: default export and named export
// Component name should always be in PascalCase
// A component returns JSX element
// props
