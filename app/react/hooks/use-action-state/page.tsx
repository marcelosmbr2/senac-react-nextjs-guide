"use client";

import { useActionState } from "react";

type Estado = { ok: boolean; mensagem: string } | null;

async function enviarVoto(_prev: Estado, formData: FormData): Promise<Estado> {
  const opcao = formData.get("opcao");
  return { ok: true, mensagem: `Voto registrado: "${opcao}"` };
}

export default function UseActionStatePage() {
  const [resultado, action, isPending] = useActionState(enviarVoto, null);

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        useActionState
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        O{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          useActionState
        </code>{" "}
        gerencia o estado e o loading de uma função assíncrona acionada por
        formulário, sem precisar de{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          useState
        </code>{" "}
        ou{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          useEffect
        </code>{" "}
        extras. Ele só executa quando acionado por um mecanismo, como o envio
        de um formulário, e não roda automaticamente no primeiro render.
      </p>

      <form action={action} className="flex flex-col gap-3">
        {["React", "Vue", "Angular"].map((opcao) => (
          <label
            key={opcao}
            className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer"
          >
            <input type="radio" name="opcao" value={opcao} className="accent-zinc-900 dark:accent-zinc-100" />
            {opcao}
          </label>
        ))}
        <button
          type="submit"
          disabled={isPending}
          className="self-start mt-2 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {isPending ? "Votando..." : "Votar"}
        </button>
        {resultado && (
          <p className={`text-sm ${resultado.ok ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
            {resultado.mensagem}
          </p>
        )}
      </form>
    </div>
  );
}
