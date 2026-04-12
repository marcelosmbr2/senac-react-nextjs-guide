"use client";

import * as React from "react";
import { isAxiosError } from "axios";
import api from "@/lib/axios";

export default function FetchApiPage() {
  const [response, setResponse] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/");
      setResponse(String(res.data));
    } catch (e: unknown) {
      setError(isAxiosError(e) ? e.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
          Axios
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Biblioteca para fazer requisições HTTP. Converte a resposta para JSON
          automaticamente e rejeita a Promise em erros 4xx/5xx.
        </p>
      </div>

      <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg px-4 py-3 text-sm font-mono text-zinc-800 dark:text-zinc-200 overflow-x-auto whitespace-pre">
{`import axios from "axios";

const res = await axios.get("/");
console.log(res.data);`}
      </pre>

      <div className="flex flex-col gap-3">
        <button
          onClick={fetchData}
          disabled={loading}
          className="self-start py-2 px-4 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Buscando…" : "GET /"}
        </button>

        {response !== null && (
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3">
            <p className="text-xs text-zinc-400 mb-1">res.data</p>
            <p className="text-sm font-mono text-zinc-800 dark:text-zinc-100">{response}</p>
          </div>
        )}

        {error !== null && (
          <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950 px-4 py-3">
            <p className="text-xs text-red-400 mb-1">erro</p>
            <p className="text-sm font-mono text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
