import axios from "axios";
import { CharacterSchema } from "./schemas";
import { Character } from "@/types/Character";
export async function getCharacterId(id: number): Promise<Character> {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const characterData = response.data;
    const validatedCharacter = CharacterSchema.parse(characterData);

    return validatedCharacter;
  } catch (error) {
    throw error;
  }
}
