import axios from "axios";
import { Character } from "@/types/Character";
import { ResponseSchema } from "./schemas"; 

export async function getAllCharacters(): Promise<Character[]> {
  try {
    const response = await axios.get<Response>(
      "https://rickandmortyapi.com/api/character"
    );

 
    const responseData = ResponseSchema.parse(response.data);

    return responseData.results;
  } catch (error) {

    throw error;
  }
}
