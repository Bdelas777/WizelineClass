"use client";

import { useFormState } from "react-dom";
import { ButtonForm } from "../atoms/ButtonForm";
import { TextLine } from "./TextLine";
import { Message } from "../atoms/Message";
import { PasswordLine } from "./PasswordLine";
import Link from "next/link";
import signUp from "@/actions/signup";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
      className="mx-auto mt-20 flex w-fit flex-col items-baseline border border-gray-300 bg-white p-10 shadow-md *:mb-3"
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
        <p className="mt-3 font-bold">¿Ya tienes una cuenta?</p>
        <Link
          href="/login"
          className="mt-2 font-bold text-blue-800 hover:text-blue-600"
        >
          Iniciar sesión
        </Link>
      </div>

      <Message error={formState.error} message={formState.message} />
    </form>
  );
}
