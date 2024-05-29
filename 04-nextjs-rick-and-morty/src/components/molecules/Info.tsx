"use client";

import { FaRegStar, FaStar } from "react-icons/fa6";
import { Character } from "@/types/Character";
import Link from "next/link";
import { Text } from "../atoms/Text";
import { Title } from "../atoms/Title";
import { useRouter } from "next/navigation";
import { toggleFavorite } from "@/actions/toggleFavorite";

interface InfoProps {
  character: Character;
  type: "normal" | "favorite";
  isFavorite?: boolean;
}

export function Info({ character, type, isFavorite = false }: InfoProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-around items-center">
        <Link href={`/characters/${character.id}`}>
          <Title title={character.name} />
        </Link>
        {type === "favorite" && (
          <button
            className="cursor-pointer"
            onClick={async () => {
              await toggleFavorite(isFavorite, character.id);
              router.refresh();
            }}
          >
            {isFavorite && <FaStar data-testid="star-full" size={25} />}
            {!isFavorite && <FaRegStar data-testid="star-empty" size={25} />}
          </button>
        )}
      </div>
      <Text text={`${character.status} - ${character.species}`} />
      <Text text={`Location: ${character.location.name}`} />
    </>
  );
}
