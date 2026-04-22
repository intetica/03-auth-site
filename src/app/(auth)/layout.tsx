import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {children}
      </main>
    </div>
  );
}
