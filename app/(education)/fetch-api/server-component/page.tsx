import axios from "@/lib/axios";

type Post = {
  id: number;
  title: string;
  slug: string;
  body: string;
};

export default async function FetchApiServerPage() {
  const { data: posts } = await axios.get<Post[]>("/blog");

  return (
    <div className="p-6 max-w-4xl flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Fetch em Server Component
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Em um <strong className="text-zinc-700 dark:text-zinc-300">Server Component</strong>, o
          fetch acontece no <strong className="text-zinc-700 dark:text-zinc-300">servidor</strong>,
          antes do HTML chegar ao navegador. Não é necessário{" "}
          <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">useEffect</code>{" "}
          nem{" "}
          <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">useState</code>{" "}
          — o componente é uma função <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">async</code> que
          aguarda os dados antes de renderizar.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Origem dos dados
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Os posts vêm da API pública{" "}
            <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">
              https://api.vercel.app/blog
            </code>
            , disponibilizada pela Vercel como exemplo para a documentação do Next.js.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Por que Axios?
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            O Axios funciona tanto no servidor quanto no navegador. Aqui ele roda em Node.js
            e converte a resposta para JSON automaticamente, assim como no Client Component.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Resultado
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-xl"
            >
              <img
                className="w-full h-auto rounded-t-xl"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                alt={post.title}
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 flex-1">
                  {post.body.slice(0, 80)}…
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-3 self-start py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                >
                  Ler post
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
