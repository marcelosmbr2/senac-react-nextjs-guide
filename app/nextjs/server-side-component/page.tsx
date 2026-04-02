// Sem "use client" — este é um Server Component por padrão

export default async function Page() {
  const renderedAt = new Date().toLocaleTimeString("pt-BR");

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Server Components
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Por padrão, todos os componentes no App Router são Server Components.
        Eles rodam no servidor e enviam HTML para o cliente.
      </p>

      <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">
        A principal vantagem é que o código é entregue mais leve para o cliente,
        já que não inclui código de interatividade ou dependências de terceiros.
      </p>

      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 mb-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
          Este texto foi gerado no servidor às:
        </p>
        <p className="text-lg font-semibold font-mono text-zinc-900 dark:text-zinc-50">
          {renderedAt}
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
          Recarregue a página para ver o horário atualizar — isso prova que o
          componente roda no servidor a cada requisição.
        </p>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm">
        Por rodar apenas no servidor, ele não suporta interatividade — não é
        possível usar{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          useState
        </code>
        ,{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          useEffect
        </code>
        , event handlers ou APIs do navegador como{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          localStorage
        </code>
        .
      </p>
    </div>
  );
}
