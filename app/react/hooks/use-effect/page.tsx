"use client";

import * as React from "react";

export default function UseEffectPage() {
  const [counter, setCounter] = React.useState(0);

  // useEffect roda DEPOIS que o React atualiza a tela
  // O array [counter] diz: "execute isso toda vez que 'counter' mudar".
  React.useEffect(() => {
    document.title = `Você clicou ${counter} vezes`;
  }, [counter]);

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        useEffect
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        O <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">useEffect</code> roda <em>depois</em> que o React atualiza a tela.
        Observe o título da aba do navegador mudar a cada clique.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300 mb-6">
        Você clicou{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-50">
          {counter}
        </span>{" "}
        vezes.
      </p>
      <button
        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
        onClick={() => setCounter(counter + 1)}
      >
        Clique aqui
      </button>
    </div>
  );
}
