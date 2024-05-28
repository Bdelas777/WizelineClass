import { auth } from "@/auth";
import { About } from "@/components/organims/About";
import { PageTemplate } from "@/components/organims/PageTemplate";

export default async function AboutPage() {
  const session = await auth();

  return (
    <PageTemplate
      titleLinks={
        session ? ["Personajes", "Favoritos"] : ["Personajes", "Iniciar sesión"]
      }
      urlLinks={session ? ["/", "/favorites"] : ["/", "/login"]}
    >
      <About />
    </PageTemplate>
  );
}
