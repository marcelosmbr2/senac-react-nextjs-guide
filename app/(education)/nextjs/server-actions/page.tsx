"use client";

import { useActionState } from "react";
import { salvarTarefa } from "./actions";

export default function ServerActionsPage() {
  const [resultado, formAction, isPending] = useActionState(salvarTarefa, null);

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Server Actions
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Uma Server Action é uma função que roda no servidor, mas pode ser
        chamada diretamente de um formulário ou botão em um Client Component —
        sem precisar criar um endpoint manualmente. É ideal para operações de
        criação, edição e exclusão de dados.
      </p>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Como funciona?
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Você cria uma função marcada com{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-zinc-700 dark:text-zinc-300">
            "use server"
          </code>{" "}
          num arquivo separado e a passa para o atributo{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-zinc-700 dark:text-zinc-300">
            action
          </code>{" "}
          do formulário. O Next.js transforma essa função num endpoint
          automaticamente — ao enviar o formulário, ele faz um{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-zinc-700 dark:text-zinc-300">
            POST
          </code>{" "}
          para o servidor nos bastidores.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          E se a API for externa?
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          A Server Action funciona como um intermediário seguro. O cliente chama
          a action, e a action chama a API externa usando credenciais que ficam
          em variáveis de ambiente no servidor — nunca expostas ao navegador.
        </p>
      </section>

      <section>
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          Exemplo
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
          Abra o DevTools → Network e veja o POST sendo feito automaticamente ao
          enviar o formulário.
        </p>
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4">
          <form action={formAction} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="text"
                name="titulo"
                placeholder="Nome da tarefa..."
                className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              />
              <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:opacity-50 transition-colors"
              >
                {isPending ? "Salvando..." : "Salvar"}
              </button>
            </div>
            {resultado && (
              <p
                className={`text-sm ${
                  resultado.ok
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {resultado.mensagem}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
