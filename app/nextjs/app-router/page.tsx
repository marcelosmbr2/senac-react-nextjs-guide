import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        App Router
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        O App Router organiza as rotas da aplicação pela estrutura de pastas
        dentro de{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          app/
        </code>
        . Cada pasta vira uma rota, e o arquivo{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          page.tsx
        </code>{" "}
        dentro dela define o que será exibido.
      </p>

      {/* Arquivos especiais */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Arquivos especiais
      </h2>
      <div className="flex flex-col gap-2 mb-8">
        {[
          {
            file: "page.tsx",
            desc: "UI da rota. Sem ele, a rota não existe.",
          },
          {
            file: "layout.tsx",
            desc: "Envolve as páginas filhas. Persiste entre navegações sem re-renderizar.",
          },
          {
            file: "loading.tsx",
            desc: "Exibido automaticamente enquanto a página carrega.",
          },
          {
            file: "error.tsx",
            desc: "Exibido quando a página lança um erro. Deve ser Client Component.",
          },
        ].map(({ file, desc }) => (
          <div
            key={file}
            className="flex items-start gap-3 rounded-lg border border-zinc-200 dark:border-zinc-700 p-3"
          >
            <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono shrink-0">
              {file}
            </code>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Rotas dinâmicas */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Rotas dinâmicas
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        Colchetes no nome da pasta criam um segmento dinâmico. O valor da URL
        fica disponível via{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          params
        </code>
        :
      </p>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3 mb-3 font-mono text-sm text-zinc-600 dark:text-zinc-400 space-y-0.5">
        <p>app/</p>
        <p className="pl-4">nextjs/</p>
        <p className="pl-8">app-router/</p>
        <p className="pl-12 text-zinc-900 dark:text-zinc-50 font-semibold">
          [slug]/
        </p>
        <p className="pl-16">page.tsx</p>
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">
        Veja um exemplo acessando as rotas abaixo:
      </p>
      <div className="flex gap-2 mb-8">
        {["javascript", "typescript", "react"].map((slug) => (
          <Link
            key={slug}
            href={`/nextjs/app-router/${slug}`}
            className="py-1.5 px-3 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            /{slug}
          </Link>
        ))}
      </div>

      {/* Componente Link */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Componente Link
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        O{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          {"<Link>"}
        </code>{" "}
        é um componente React que estende o elemento{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          {"<a>"}
        </code>{" "}
        adicionando prefetching e navegação client-side entre rotas. É a forma
        de navegar no Next.js.
      </p>
      <div className="flex flex-col gap-2 mb-4">
        {[
          {
            prop: "href",
            required: true,
            desc: 'Caminho ou URL de destino. Aceita string ou objeto com pathname e query.',
          },
          {
            prop: "replace",
            required: false,
            desc: "Substitui o estado atual do histórico em vez de adicionar uma nova entrada.",
          },
          {
            prop: "scroll",
            required: false,
            desc: "Controla se a página deve rolar ao topo após a navegação. Padrão: true.",
          },
          {
            prop: "prefetch",
            required: false,
            desc: "Controla o prefetch da rota. Padrão: null (prefetch automático em viewport).",
          },
        ].map(({ prop, required, desc }) => (
          <div
            key={prop}
            className="flex items-start gap-3 rounded-lg border border-zinc-200 dark:border-zinc-700 p-3"
          >
            <div className="flex items-center gap-1.5 shrink-0">
              <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
                {prop}
              </code>
              {required && (
                <span className="text-xs font-medium text-red-500">
                  obrigatório
                </span>
              )}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
