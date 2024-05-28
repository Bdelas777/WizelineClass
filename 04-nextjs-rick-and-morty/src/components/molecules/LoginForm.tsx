"use client";

import { PasswordLine } from "./PasswordLine";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ButtonForm } from "../atoms/ButtonForm";
import { TextLine } from "./TextLine";
import { Message } from "../atoms/Message";

export function LoginForm() {
  const searchParams = useSearchParams();

  const [error, setError] = useState("");

  useEffect(() => {
    if (searchParams.get("error")) {
      setError("Credencales inválidas");
    }
  });

  const login = async (formData: FormData) => {
    try {
      await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        callbackUrl: "/characters",
      });
    } catch (error) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <form
      action={login}
      name="login"
      className="mx-auto flex w-fit flex-col items-baseline border border-gray-300 p-10 shadow-md *:mb-3 bg-white"
    >
      <span className="my-5 w-full text-center text-xl font-bold">
        Iniciar sesión
      </span>

      <TextLine
        title="Nombre de usuario"
        name="username"
        placeholder="Nombre"
      />
      <PasswordLine
        title="Contraseña"
        name="password"
        placeholder="Contraseña"
      />

      <ButtonForm text="Iniciar sesión" />

      <div className="w-full text-center">
        <p className="font-bold mt-3">¿No tienes una cuenta aún?</p>
        <Link
          href="/signup"
          className="mt-2 font-bold text-emerald-600 hover:text-emerald-800"
        >
          Regístrate
        </Link>
      </div>

      {error != "" && <Message error={true} message={error} />}
    </form>
  );
}
