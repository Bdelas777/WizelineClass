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
      setError("Credenciales inválidas");
    }
  }, [searchParams]);

  const login = async (formData: FormData) => {
    try {
      await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        callbackUrl: "/",
      });
    } catch (error) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        login(formData);
      }}
      name="login"
      className="mx-auto w-full max-w-md flex flex-col items-stretch border border-gray-300 rounded-lg p-6 shadow-lg bg-white"
    >
      <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
        Iniciar sesión
      </h2>

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

      <div className="mt-6 text-center">
        <p className="font-medium text-gray-600">¿No tienes una cuenta aún?</p>
        <Link
          href="/signup"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Regístrate
        </Link>
      </div>

      {error && <Message error={true} message={error} />}
    </form>
  );
}
