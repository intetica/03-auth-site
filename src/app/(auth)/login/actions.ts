"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = {
  status: "idle" | "error";
  message?: string;
};

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { status: "error", message: "Заполните все поля" };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const code = (error as { code?: string }).code;
    const msg = error.message?.toLowerCase() ?? "";
    if (code === "email_not_confirmed" || msg.includes("email not confirmed")) {
      return {
        status: "error",
        message: "Подтвердите email — мы отправили ссылку",
      };
    }
    return { status: "error", message: "Неверный email или пароль" };
  }

  redirect("/dashboard");
}
