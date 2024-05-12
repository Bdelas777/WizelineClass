import axios from "axios";
import { Character } from "@/types/Character";
import { ResponseSchema } from "./schemas"; // Asegúrate de importar los esquemas adecuados desde el archivo donde los definiste

export async function getAllCharacters(): Promise<Character[]> {
  try {
    const response = await axios.get<Response>(
      "https://rickandmortyapi.com/api/character"
    );

    // Validar la respuesta usando el esquema de Response
    const responseData = ResponseSchema.parse(response.data);

    return responseData.results;
  } catch (error) {
    // Manejar errores de validación o de la solicitud axios aquí
    throw error;
  }
}
