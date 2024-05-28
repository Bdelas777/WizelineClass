"use client";

import { useFormState } from "react-dom";
import { PasswordLine } from "./PasswordLine";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { TextLine } from "./TextLine";
import { Message } from "../atoms/Message";
import { ButtonForm } from "../atoms/ButtonForm";
import signUp from "@/actions/signup";

export function SignupForm() {
  const router = useRouter();

  const [formState, action] = useFormState(signUp, {
    message: "",
    error: false,
  });

  useEffect(() => {
    if (formState.message === "OK") {
      Swal.fire({
        title: "Éxito",
        icon: "success",
        text: "Has creado una cuenta con éxito, ahora puedes iniciar sesión",
      }).then((res) => {
        if (res.isConfirmed) {
          router.push("/");
        }
      });
    }
  });

  return (
    <form
      action={action}
      name="signup"
      className="mx-auto flex w-fit flex-col items-baseline border border-gray-300 p-10 shadow-md *:mb-3 bg-white"
    >
      <span className="my-5 w-full text-center text-xl font-bold">
        Regístrate
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

      <ButtonForm text="Regístrate" />

      <div className="w-full text-center">
        <p className="font-bold mt-3">¿Ya tienes una cuenta?</p>
        <Link
          href="/"
          className="mt-2 font-bold text-emerald-600 hover:text-emerald-800"
        >
          Iniciar sesión
        </Link>
      </div>

      <Message error={formState.error} message={formState.message} />
    </form>
  );
}
