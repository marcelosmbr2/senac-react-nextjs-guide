export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Aprendendo React & Next.js
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-lg leading-relaxed">
          Este é um guia prático de estudos para aprender os conceitos fundamentais
          do React e do Next.js por meio de exemplos interativos e explicações
          objetivas.
        </p>
        <div className="flex flex-col gap-4 text-zinc-500 dark:text-zinc-400">
          <p>
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Como usar:</span>{" "}
            Navegue pelos tópicos no menu lateral. Cada página apresenta um conceito
            com exemplos de código que você pode explorar e experimentar.
          </p>
          <p>
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Organização:</span>{" "}
            O conteúdo está dividido em fundamentos do React, fundamentos do Next.js,
            exemplos práticos, estilização com Tailwind CSS e uso da Fetch API.
          </p>
        </div>
      </div>
    </main>
  );
}
