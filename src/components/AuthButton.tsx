import type { ReactNode } from "react";

type AuthButtonProps = {
  children: ReactNode;
};

export default function AuthButton({ children }: AuthButtonProps) {
  return (
    <button
      type="submit"
      className="w-full inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
}
