import { About } from "@/components/organims/About";
import { PageTemplate } from "@/components/organims/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate titleLink="Todos los personajes" urlLink="/">
      <div className="flex h-screen items-center">
        <About />
      </div>
    </PageTemplate>
  );
}
