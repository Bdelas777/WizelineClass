import { PasswordInput } from "../atoms/PasswordInput";

interface PasswordLineProps {
  title: string;
  name: string;
  placeholder: string;
}

export function PasswordLine({ title, name, placeholder }: PasswordLineProps) {
  return (
    <div className="mt-3 flex flex-col w-full justify-between gap-x-">
      <label htmlFor={title}>{title}</label>
      <PasswordInput name={name} placeholder={placeholder} />
    </div>
  );
}
