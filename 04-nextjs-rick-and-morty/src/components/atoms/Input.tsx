interface InputProps {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder }: InputProps) {
  return (
    <input
      id={name}
      className="border border-gray-300 px-2"
      name={name}
      type="text"
      required
      placeholder={placeholder}
    />
  );
}
