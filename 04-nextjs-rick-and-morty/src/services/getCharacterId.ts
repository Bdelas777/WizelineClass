import { Character } from "@/types/Character";
import axios from "axios";

export async function getCharacterId(id: number): Promise<Character> {
  const response = await axios.get<Character>(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  return response.data;
}
