'use client'

import { useRef } from 'react'

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null)

  function focarInput() {
    inputRef.current?.focus()
  }

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        useRef
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        O <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">useRef</code> permite acessar elementos do DOM diretamente sem causar re-renderizações.
      </p>
      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Clique no botão para focar aqui"
          className="flex-1 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
        />
        <button
          onClick={focarInput}
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
        >
          Focar input
        </button>
      </div>
    </div>
  )
}
