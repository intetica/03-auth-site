import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-8">
      {children}
    </main>
  );
}
