import { Identifiable } from "@/types/Character";
import { useLocalStorage } from "./useLocalStorage";

export const useFavorites = <T extends Identifiable>(key: string) => {
  const { state: favorites, setValue: setFavorites } = useLocalStorage<T[]>(
    key,
    [],
  );

  const toggleFavorite = (element: T, favorite: boolean) => {
    if (favorite) {
      setFavorites(favorites.filter((fav) => fav.id !== element.id));
    } else {
      setFavorites([...favorites, element]);
    }
  };

  return {
    favorites,
    toggleFavorite,
  };
};
