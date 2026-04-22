import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-gray-900"
        >
          <ShieldCheck className="h-5 w-5 text-blue-600" />
          <span>03 Auth</span>
        </Link>
      </div>
    </header>
  );
}
