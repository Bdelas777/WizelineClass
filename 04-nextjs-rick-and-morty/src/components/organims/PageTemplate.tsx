import { PropsWithChildren } from "react";
import { Header } from "../molecules/Header";
import Footer from "../molecules/Footer";

interface PageTemplateProps {
  titleLinks: string[];
  urlLinks: string[];
}

export function PageTemplate({
  titleLinks,
  urlLinks,
  children,
}: PropsWithChildren<PageTemplateProps>) {
  return (
    <main className="my-0 min-h-screen w-full bg-white">
      <Header titles={titleLinks} urls={urlLinks} />
      {children}
      <Footer />
    </main>
  );
}
