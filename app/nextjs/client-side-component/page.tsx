"use client";

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Client Components
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Ao adicionar{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          &quot;use client&quot;
        </code>{" "}
        no topo do arquivo, o componente passa a rodar no navegador em tempo real e pode usar
        estado, eventos e APIs do browser.
      </p>

      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 mb-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          Este contador usa{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            useState
          </code>{" "}
          e só funciona porque este é um Client Component:
        </p>
        <p className="text-lg font-semibold font-mono text-zinc-900 dark:text-zinc-50 mb-3">
          {count}
        </p>
        <div className="space-x-2">
          <button
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <button
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
          <button
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            onClick={() => setCount(0)}
          >
            Resetar
          </button>
        </div>
      </div>
    </div>
  );
}
