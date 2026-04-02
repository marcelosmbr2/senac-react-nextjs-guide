"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <div className="px-4 pt-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-x-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Voltar
        </button>
      </div>
      {children}
    </>
  );
}
