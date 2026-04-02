export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="p-6 max-w-2xl">
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">
        Você acessou a rota dinâmica:
      </p>
      <p className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-50">
        /nextjs/app-router/
        <span className="text-zinc-400 dark:text-zinc-500">{slug}</span>
      </p>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-4">
        O valor{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          {slug}
        </code>{" "}
        foi lido de{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          params.slug
        </code>{" "}
        e pode ser usado para renderizar conteúdo dinâmico.
      </p>
    </div>
  );
}
