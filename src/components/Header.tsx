import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-blue-600 font-semibold text-lg">
          Auth Site
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/login"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Регистрация
          </Link>
        </nav>
      </div>
    </header>
  );
}
