import { Character } from "@/types/Character";
import DetailInfo from "./DetailInfo";
import Image from "next/image";

interface DetailCardProps {
  character: Character;
}

export default function DetailCard({ character }: DetailCardProps) {
  return (
    <div className="mt-10 w-full flex items-center justify-center gap-x-[100px]">
      <Image
        width={300}
        height={300}
        src={character.image}
        alt={character.name}
        className="w-1/3 max-w-[400px]"
      />
      <DetailInfo character={character} />
    </div>
  );
}
