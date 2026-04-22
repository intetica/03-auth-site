import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import RegisterForm from "@/components/RegisterForm";

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
      <RegisterForm />
    </AuthCard>
  );
}
