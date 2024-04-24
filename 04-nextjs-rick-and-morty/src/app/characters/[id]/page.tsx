"use client";

import DetailCard from "@/components/molecules/DetailCard";
import { PageTemplate } from "@/components/organims/PageTemplate";
import { getCharacterId } from "@/services/getCharacterId";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

export default function CharacterDetail({ params }: { params: { id: string } }) {

    const [character, setCharacter] = useState<Character>();
  
    useEffect(() => {

      const fetchCharacters = async () => {
          const res = await getCharacterId(Number(params.id));
          setCharacter(res);
      }
      fetchCharacters();
  
    }, [])
  
    return (
      <>
        <PageTemplate
          titleLink="Todos los personajes"
          urlLink="/"
        >
        {character && (
            <>
                <DetailCard character={character}/>
            </>
        )}
        </PageTemplate>
      </>   
    );
  }
  