import { LoginForm } from "@/components/molecules/LoginForm";
import { PageTemplate } from "@/components/organims/PageTemplate";

export default function Login() {
  return (
    <PageTemplate
      titleLinks={["Personajes", "Acerca de"]}
      urlLinks={["/", "/About"]}
    >
      <LoginForm />
    </PageTemplate>
  );
}
