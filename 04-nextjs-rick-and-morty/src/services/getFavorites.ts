import { getUserFavorites } from "@/data/favorite";
import { getCharactersByIds } from "./getCharacterByIds";

export const getFavorites = async (userId: number) => {
  const favorites = await getUserFavorites({ userId });
  const favoriteCharacters = await getCharactersByIds(favorites);
  return favoriteCharacters;
};
