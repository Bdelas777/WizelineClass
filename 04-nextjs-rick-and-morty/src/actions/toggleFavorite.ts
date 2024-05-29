"use server";

import { auth } from "@/auth";
import { createFavorite, deleteFavorite } from "@/data/favorite";

export const toggleFavorite = async (
  isFavorite: boolean,
  // eslint-disable-next-line prettier/prettier
  characterId: number
) => {
  const session = await auth();
  const userId = Number(session?.user?.id);

  if (isFavorite) {
    await deleteFavorite({ userId, characterId: characterId });
  } else {
    await createFavorite({ userId, characterId: characterId });
  }
};
