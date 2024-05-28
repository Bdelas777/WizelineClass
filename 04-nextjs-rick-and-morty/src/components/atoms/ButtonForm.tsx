interface ButtonFormProps {
  text: string;
}

export function ButtonForm({ text }: ButtonFormProps) {
  return (
    <button
      className="mx-auto mt-3 w-2/3 rounded-xl bg-emerald-700 px-10 py-2 text-white"
      type="submit"
    >
      {text}
    </button>
  );
}
