import Link from "next/link";

interface HeaderProps {
  titles: string[];
  urls: string[];
}

export function Header({ titles = [], urls = [] }: HeaderProps) {
  return (
    <header className="h-36 w-full flex flex-row justify-between items-center bg-blue-800">
      <h1 className="ml-6 text-4xl font-bold text-white">Rick and Morty API</h1>
      {titles.map((title, index) => (
        <Link
          key={title}
          className="mr-16 font-bold text-white"
          href={urls[index]}
        >
          {title}
        </Link>
      ))}
    </header>
  );
}
