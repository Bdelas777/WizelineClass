interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <h3 className="text-lg font-bold hover:text-gray-300">{title}</h3>;
}
