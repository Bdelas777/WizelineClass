import { LoginForm } from "@/components/molecules/LoginForm";
import { PageTemplate } from "@/components/organims/PageTemplate";
import { Suspense } from "react";

export default function Login() {
  return (
    <PageTemplate
      titleLinks={["Personajes", "Acerca de"]}
      urlLinks={["/", "/About"]}
    >
      <Suspense>
        <LoginForm />
      </Suspense>
    </PageTemplate>
  );
}
