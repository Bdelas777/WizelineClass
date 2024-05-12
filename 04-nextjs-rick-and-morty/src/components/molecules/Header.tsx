import Link from "next/link";

interface HeaderProps {
  title: string;
  url: string;
}

export function Header({ title, url }: HeaderProps) {
  return (
    <header className="h-36 w-full flex flex-row justify-between items-center bg-blue-800">
      <h1 className="ml-6 text-4xl font-bold text-white">Rick and Morty API</h1>
      <Link className="mr-16 text-white font-bold text-2xl" href={url}>
        {title}
      </Link>
    </header>
  );
}
