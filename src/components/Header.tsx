"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const activeClass =
    "inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors";
  const idleClass =
    "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors";

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-blue-600 font-semibold text-lg">
          Auth Site
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="/login"
            className={pathname === "/login" ? activeClass : idleClass}
          >
            Войти
          </Link>
          <Link
            href="/register"
            className={pathname === "/register" ? activeClass : idleClass}
          >
            Регистрация
          </Link>
        </nav>
      </div>
    </header>
  );
}
