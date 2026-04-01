"use client";

import { useCounter } from "@/context/global-counter";

export default function Page() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Context API
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6">
        O Context permite compartilhar estado entre componentes sem passar props manualmente em cada nível.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        Contador global:{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-50 text-lg">
          {count}
        </span>
      </p>
      <div className="space-x-2">
        <button
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          onClick={decrement}
        >
          -1
        </button>
        <button
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:pointer-events-none"
          onClick={increment}
        >
          +1
        </button>
      </div>
    </div>
  );
}
