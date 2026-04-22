import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import AuthField from "@/components/AuthField";
import AuthButton from "@/components/AuthButton";

export default function LoginPage() {
  return (
    <AuthCard
      title="Вход"
      footer={
        <>
          Нет аккаунта?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Зарегистрируйтесь
          </Link>
        </>
      }
    >
      <form action="" className="space-y-4">
        <AuthField
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <AuthField
          id="password"
          name="password"
          label="Пароль"
          type="password"
          autoComplete="current-password"
          required
        />
        <div className="flex justify-end -mt-2">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
            Забыл пароль?
          </a>
        </div>
        <AuthButton>Войти</AuthButton>
      </form>
    </AuthCard>
  );
}
