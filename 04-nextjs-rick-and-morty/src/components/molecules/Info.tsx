import { FaRegStar, FaStar } from "react-icons/fa6";

import { Character } from "@/types/Character";
import Link from "next/link";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";
interface InfoProps {
  character: Character;
  isFavorite: boolean;
  toggleFavorite: (element: Character, favorite: boolean) => void;
}
export function Info({ character, isFavorite, toggleFavorite }: InfoProps) {
  return (
    <>
      <div className="flex justify-around items-center">
        <Link href={`/characters/${character.id}`}>
          <Title title={character.name} />
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            toggleFavorite(character, isFavorite);
          }}
        >
          {isFavorite && <FaStar size={25} />}
          {!isFavorite && <FaRegStar size={25} />}
        </div>
      </div>
      <Text text={`${character.status} - ${character.species}`} />
      <Text text={`Location: ${character.location.name}`} />
    </>
  );
}
