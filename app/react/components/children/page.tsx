import { Card } from "./_components/card";

// Guide: https://react.dev/reference/react/Children

export default function ChildrenPage() {
  return (
    <main className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        A prop{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono text-xl">
          children
        </code>
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        A prop{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          children
        </code>{" "}
        representa o conteúdo passado <em>entre</em> as tags de um componente.
      </p>
      <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
        Card simples
      </h2>
      <Card>
        <h3 className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">
          Título do card
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Qualquer conteúdo pode ser passado como children.
        </p>
      </Card>
      <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-3 mt-8">
        Múltiplos cards com o mesmo componente
      </h2>
      <div className="flex flex-col gap-3">
        <Card>Primeiro card</Card>
        <Card>Segundo card</Card>
        <Card>Terceiro card</Card>
      </div>
    </main>
  );
}
