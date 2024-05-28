"use client";

import DetailCard from "@/components/molecules/DetailCard";
import { PageTemplate } from "@/components/organims/PageTemplate";
import { getCharacterId } from "@/services/getCharacterId";

export default async function CharacterDetail({
  params,
}: {
  params: { id: string };
}) {
  const character = await getCharacterId(Number(params.id));

  return (
    <>
      <PageTemplate
        titleLinks={["Todos los personajes", "Acerca de"]}
        urlLinks={["/", "/About"]}
      >
        {character && (
          <>
            <DetailCard character={character} />
          </>
        )}
      </PageTemplate>
    </>
  );
}
