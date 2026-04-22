"use client";

import Link from "next/link";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  registerAction,
  type RegisterState,
} from "@/app/(auth)/register/actions";
import { isValidEmail, isValidPassword } from "@/lib/validation";
import AuthField from "./AuthField";

const initialState: RegisterState = { status: "idle" };

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:hover:shadow-sm"
    >
      {pending ? "Регистрируем..." : "Зарегистрироваться"}
    </button>
  );
}

export default function RegisterForm() {
  const [state, formAction] = useFormState(registerAction, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  if (state.status === "success" && state.message) {
    return (
      <p className="text-sm text-green-700 text-center">{state.message}</p>
    );
  }

  const nameError =
    touched.name && name.trim().length === 0 ? "Введите имя" : undefined;
  const emailError =
    touched.email && !isValidEmail(email) ? "Некорректный email" : undefined;
  const passwordError =
    touched.password && !isValidPassword(password)
      ? "Минимум 8 символов"
      : undefined;
  const confirmError =
    touched.confirmPassword && password !== confirmPassword
      ? "Пароли не совпадают"
      : undefined;

  const isValid =
    name.trim().length > 0 &&
    isValidEmail(email) &&
    isValidPassword(password) &&
    password === confirmPassword;

  const alreadyRegistered =
    state.status === "error" && state.message === "__already_registered__";
  const genericError =
    state.status === "error" && state.message && !alreadyRegistered
      ? state.message
      : undefined;

  return (
    <form action={formAction} className="space-y-4">
      <AuthField
        id="name"
        name="name"
        label="Имя"
        type="text"
        autoComplete="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
        error={nameError}
      />
      <AuthField
        id="email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
        error={emailError}
      />
      <AuthField
        id="password"
        name="password"
        label="Пароль"
        type="password"
        autoComplete="new-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, password: true }))}
        error={passwordError}
      />
      <AuthField
        id="confirmPassword"
        name="confirmPassword"
        label="Подтверждение пароля"
        type="password"
        autoComplete="new-password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, confirmPassword: true }))}
        error={confirmError}
      />
      {alreadyRegistered ? (
        <p className="text-sm text-red-600">
          Этот email уже зарегистрирован.{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Войти?
          </Link>
        </p>
      ) : null}
      {genericError ? (
        <p className="text-sm text-red-600">{genericError}</p>
      ) : null}
      <SubmitButton disabled={!isValid} />
    </form>
  );
}
