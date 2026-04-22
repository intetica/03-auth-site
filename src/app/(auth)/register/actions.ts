"use server";

import { createClient } from "@/lib/supabase/server";
import { isValidEmail, isValidPassword } from "@/lib/validation";

export type RegisterState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export async function registerAction(
  _prev: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (!name || !email || !password) {
    return { status: "error", message: "Заполните все поля" };
  }
  if (!isValidEmail(email)) {
    return { status: "error", message: "Некорректный email" };
  }
  if (!isValidPassword(password)) {
    return { status: "error", message: "Пароль должен быть не короче 8 символов" };
  }
  if (password !== confirmPassword) {
    return { status: "error", message: "Пароли не совпадают" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    throw new Error("NEXT_PUBLIC_SITE_URL не задан");
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: `${siteUrl}/login`,
    },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (
      msg.includes("already registered") ||
      msg.includes("already exists") ||
      error.code === "user_already_exists"
    ) {
      return { status: "error", message: "__already_registered__" };
    }
    return { status: "error", message: error.message };
  }

  if (data.user && (data.user.identities?.length ?? 0) === 0) {
    return { status: "error", message: "__already_registered__" };
  }

  return {
    status: "success",
    message: "Мы отправили письмо на ваш email, подтвердите регистрацию",
  };
}
