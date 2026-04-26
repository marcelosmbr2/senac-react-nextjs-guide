"use client";

import * as React from "react";
import axios from "@/lib/axios";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

export default function Page() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    axios
      .get<Post[]>("/posts")
      .then((res) => setPosts(res.data))
      .catch(() => setError("Erro ao carregar os posts."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 max-w-4xl flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Fetch em Client Component
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Em um <strong className="text-zinc-700 dark:text-zinc-300">Client Component</strong>, o
          fetch acontece no <strong className="text-zinc-700 dark:text-zinc-300">navegador</strong>,
          após o componente ser montado. Por isso usamos <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">useEffect</code> para
          disparar a requisição e <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">useState</code> para guardar o resultado.
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
              https://jsonplaceholder.typicode.com
            </code>
            , disponibilizada pelo site <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">JSON Placeholder</a>.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Por que Axios?
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            O Axios converte a resposta para JSON automaticamente e rejeita a Promise em
            erros HTTP (4xx/5xx), simplificando o tratamento de erros em comparação ao
            <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded ml-1">fetch</code> nativo.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Resultado
        </span>

          {loading && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500">Carregando posts…</p>
          )}

        {error && (
          <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950 px-4 py-3">
            <p className="text-sm font-mono text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

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
                <Button variant="outline">
                  Ler post
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
