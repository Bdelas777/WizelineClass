import { Input } from "../atoms/Input";

interface TextLineProps {
  title: string;
  name: string;
  placeholder: string;
}

export function TextLine({ title, name, placeholder }: TextLineProps) {
  return (
    <div className="mt-3 flex w-full justify-between gap-x-5">
      <label htmlFor={title}>{title}</label>
      <Input name={name} placeholder={placeholder} />
    </div>
  );
}
