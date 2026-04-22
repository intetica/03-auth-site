import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  children: ReactNode;
  footer: ReactNode;
};

export default function AuthCard({ title, children, footer }: AuthCardProps) {
  return (
    <section className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h1>
      {children}
      <div className="mt-6 text-sm text-gray-600 text-center">{footer}</div>
    </section>
  );
}
