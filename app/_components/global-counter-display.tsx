"use client";

import { useCounter } from "@/context/global-counter";

export function GlobalCounterDisplay() {
  const { count } = useCounter();

  return (
    <p className="text-zinc-500 dark:text-zinc-400 mb-12">
      Contador global atual:{" "}
      <span className="font-semibold text-zinc-900 dark:text-zinc-50">
        {count}
      </span>
    </p>
  );
}
