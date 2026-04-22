"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/(auth)/login/actions";
import { isValidEmail, isValidPassword } from "@/lib/validation";
import AuthField from "./AuthField";

const initialState: LoginState = { status: "idle" };

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:hover:shadow-sm"
    >
      {pending ? "Входим..." : "Войти"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const emailError =
    touched.email && !isValidEmail(email) ? "Некорректный email" : undefined;
  const passwordError =
    touched.password && !isValidPassword(password)
      ? "Минимум 8 символов"
      : undefined;

  const isValid = isValidEmail(email) && isValidPassword(password);

  return (
    <form action={formAction} className="space-y-4">
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
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, password: true }))}
        error={passwordError}
      />
      <div className="flex justify-end -mt-2">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
          Забыл пароль?
        </a>
      </div>
      {state.status === "error" && state.message ? (
        <p className="text-sm text-red-600">{state.message}</p>
      ) : null}
      <SubmitButton disabled={!isValid} />
    </form>
  );
}
