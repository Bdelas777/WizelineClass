import { Character } from "@/types/Character";
import EpisodeList from "./EpisodeList";

interface DetailInfoProps {
  character: Character;
}

export default function DetailInfo({ character }: DetailInfoProps) {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-3xl font-bold text-blue-900">{character.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Status:</h3>
          <p className="text-gray-600 bg-white rounded-md p-2">
            {character.status}
          </p>
          <h3 className="text-lg font-bold text-gray-700">Species:</h3>
          <p className="text-gray-600 bg-white rounded-md p-2">
            {character.species}
          </p>
          <h3 className="text-lg font-bold text-gray-700">Origin:</h3>
          <p className="text-gray-600 bg-white rounded-md p-2">
            {character.origin.name}
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Gender:</h3>
          <p className="text-gray-600 bg-white rounded-md p-2">
            {character.gender}
          </p>
          <h3 className="text-lg font-bold text-gray-700">Location:</h3>
          <p className="text-gray-600 bg-white rounded-md p-2">
            {character.location.name}
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-bold text-gray-700">Episodes:</h3>
        <EpisodeList episodes={character.episode} />
      </div>
    </div>
  );
}
