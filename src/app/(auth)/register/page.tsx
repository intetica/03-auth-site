import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import AuthField from "@/components/AuthField";
import AuthButton from "@/components/AuthButton";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Регистрация"
      footer={
        <>
          Уже есть аккаунт?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Войти
          </Link>
        </>
      }
    >
      <form action="" className="space-y-4">
        <AuthField
          id="name"
          name="name"
          label="Имя"
          type="text"
          autoComplete="name"
          required
        />
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
          autoComplete="new-password"
          required
        />
        <AuthField
          id="confirmPassword"
          name="confirmPassword"
          label="Подтверждение пароля"
          type="password"
          autoComplete="new-password"
          required
        />
        <AuthButton>Зарегистрироваться</AuthButton>
      </form>
    </AuthCard>
  );
}
