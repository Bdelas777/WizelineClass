import { Character } from "@/types/Character";
import { Response } from "@/types/Response";
import axios from "axios";

export async function getAllCharacters(): Promise<Character[]>{
    const response = await axios.get<Response>("https://rickandmortyapi.com/api/character")
    return response.data.results;
}