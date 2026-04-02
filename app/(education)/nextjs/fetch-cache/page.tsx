export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Fetch & Cache
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Como buscar dados em Server e Client Components.
      </p>

      {/* Server Component */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        Server Component
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        O componente pode ser{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          async
        </code>
        . Use{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          await fetch()
        </code>{" "}
        diretamente — sem cache por padrão.
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-3">
        {`export default async function Page() {
  const res = await fetch('/api/posts')
  const posts = await res.json()

  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}`}
      </pre>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">
        Para cachear, adicione{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          'use cache'
        </code>{" "}
        dentro da função que faz o fetch:
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-3">
        {`async function getPosts() {
  'use cache'
  const res = await fetch('/api/posts')
  return res.json()
}`}
      </pre>
      <div className="rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950 p-3 text-sm text-amber-800 dark:text-amber-300 mb-8">
        <span className="font-medium">Atenção:</span>{" "}
        <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded font-mono text-xs">
          'use cache'
        </code>{" "}
        exige{" "}
        <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded font-mono text-xs">
          cacheComponents: true
        </code>{" "}
        no{" "}
        <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded font-mono text-xs">
          next.config.ts
        </code>
        .
      </div>

      {/* Client Component */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        Client Component
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        Client Components <strong>não podem ser async</strong>. Use a biblioteca{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          SWR
        </code>{" "}
        — ela faz o fetch e guarda o resultado em cache automaticamente no
        navegador:
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-3">
        {`'use client'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function Posts() {
  const { data, isLoading } = useSWR('/api/posts', fetcher)

  if (isLoading) return <p>Carregando...</p>
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}`}
      </pre>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3 text-sm mb-8">
        <p className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">
          Instalação
        </p>
        <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1.5 rounded text-xs font-mono">
          npm install swr
        </pre>
      </div>

      {/* Resumo */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Resumo
      </h2>
      <div className="flex flex-col gap-2">
        {[
          {
            label: "Server — sem cache",
            code: "const res = await fetch('/api/data')",
          },
          {
            label: "Server — com cache",
            code: "'use cache'\nconst res = await fetch('/api/data')",
          },
          {
            label: "Client — com cache (SWR)",
            code: "const { data } = useSWR('/api/data', fetcher)",
          },
        ].map(({ label, code }) => (
          <div
            key={label}
            className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-3"
          >
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
              {label}
            </p>
            <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1.5 rounded text-xs font-mono whitespace-pre-wrap">
              {code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
