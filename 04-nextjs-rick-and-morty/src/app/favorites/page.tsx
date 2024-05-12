"use client";

import CharacterCard from "@/components/molecules/CharacterCard";
import { CharacterList } from "@/components/organims/CharacterList";
import { PageTemplate } from "@/components/organims/PageTemplate";
import { useFavorites } from "@/hooks/useFavorite";

import { Character } from "@/types/Character";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites<Character>("characters");

  return (
    <>
      <PageTemplate titleLink="Todos los personajes" urlLink="/">
        <CharacterList>
          {favorites.map((favorite) => (
            <CharacterCard
              key={favorite.id}
              character={favorite}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </CharacterList>
      </PageTemplate>
    </>
  );
}
