"use client";

import CharacterCard from "@/components/molecules/CharacterCard";
import { CharacterList } from "@/components/organims/CharacterList";
import { PageTemplate } from "@/components/organims/PageTemplate";
import { useFavorites } from "@/hooks/useFavorite";
import { getAllCharacters } from "@/services/getAllCharacters";

import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { favorites, toggleFavorite } = useFavorites<Character>("characters");

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await getAllCharacters();
      setCharacters(res);
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <PageTemplate titleLink="Favoritos" urlLink="/favorites">
        <CharacterList>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favorites.some((fav) => fav.id === character.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </CharacterList>
      </PageTemplate>
    </>
  );
}
