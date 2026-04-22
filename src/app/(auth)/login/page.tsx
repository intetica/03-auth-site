import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import LoginForm from "@/components/LoginForm";

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
      <LoginForm />
    </AuthCard>
  );
}
