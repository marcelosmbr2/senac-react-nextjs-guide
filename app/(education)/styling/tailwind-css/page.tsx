export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Tailwind CSS
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Tailwind é um framework CSS{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          utility-first
        </strong>
        : em vez de escrever CSS separado, você estiliza diretamente no HTML
        usando classes utilitárias como{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          flex
        </code>
        ,{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          p-4
        </code>{" "}
        e{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          text-sm
        </code>
        . É CSS sem sair do arquivo de componente.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Diferença para o Bootstrap
      </h2>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <li>
          · <strong className="text-zinc-700 dark:text-zinc-300">Bootstrap</strong>{" "}
          fornece componentes prontos com classes como{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
            btn
          </code>
          ,{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
            card
          </code>{" "}
          e{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
            navbar
          </code>
          . É opinionado. Usamos o visual dele, e sobrescrever estilos exige
          certo esforço.
        </li>
        <li>
          · <strong className="text-zinc-700 dark:text-zinc-300">Tailwind</strong>{" "}
          não tem componentes. Ele oferece primitivas de baixo nível para você
          montar qualquer visual sem carregar estilos que não pediu e sem lutar
          contra opiniões do framework.
        </li>
      </ul>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Bibliotecas de componentes
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        O Tailwind não vem com componentes, mas há um ecossistema rico de libs
        que os fornecem já estilizados com ele:
      </p>
      <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Shadcn UI ⭐
          </strong>{" "}
          É preciso realizar a instalação dela, porém os
          são{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            componentes são instalados sob demanda, 
          </strong>
          ficando totalmente sob seu controle. Construída sobre Radix UI/Base UI +
          Tailwind, com acessibilidade e customização.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">Flowbite</strong>{" "}
          — biblioteca de componentes prontos com suporte nativo ao Tailwind,
          incluindo variantes interativas em JavaScript.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">Preline</strong>{" "}
          — biblioteca de componentes prontos com suporte nativo ao Tailwind,
          incluindo variantes interativas em JavaScript.
        </li>
      </ul>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Existem incontáveis outras bibliotecas que podem ser utilizadas e
        customizadas conforme a necessidade do projeto.
      </p>
    </div>
  );
}
