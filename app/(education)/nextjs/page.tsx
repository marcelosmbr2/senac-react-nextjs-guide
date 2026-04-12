export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Next.js
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Next.js é um framework React criado pela{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">Vercel</strong> que
        adiciona funcionalidades de servidor ao React. Onde o React cuida da UI,
        o Next.js resolve roteamento, renderização no servidor, busca de dados e
        otimizações de performance — tudo com a mesma linguagem e sem
        configuração extra.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Para que serve
      </h2>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <li>
          · Renderizar páginas no servidor para melhorar SEO e o tempo de
          carregamento inicial
        </li>
        <li>
          · Definir rotas pela estrutura de pastas, sem configurar um roteador
          separado
        </li>
        <li>
          · Buscar dados no servidor antes de entregar a página ao navegador
        </li>
        <li>
          · Criar APIs com Route Handlers dentro do mesmo projeto React
        </li>
        <li>· Otimizar imagens, fontes e scripts automaticamente</li>
      </ul>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Como funciona
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        O Next.js usa o{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">App Router</strong>
        : a estrutura de pastas dentro de{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          app/
        </code>{" "}
        define as rotas da aplicação. Cada{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          page.tsx
        </code>{" "}
        vira uma página acessível por URL. Arquivos como{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          layout.tsx
        </code>
        ,{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          loading.tsx
        </code>{" "}
        e{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          error.tsx
        </code>{" "}
        tratam layout compartilhado, estados de carregamento e erros — sem
        precisar de nenhuma configuração adicional.
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Ao acessar uma rota, o Next.js executa o código no servidor, busca os
        dados necessários e envia HTML pronto para o navegador. O resultado é
        uma página visível e indexável imediatamente, mesmo antes de qualquer
        JavaScript ser executado no cliente.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        React no servidor
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Por padrão, todos os componentes no App Router são{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          Server Components
        </strong>{" "}
        — eles rodam no servidor e enviam HTML pronto para o navegador, sem
        adicionar JavaScript ao bundle do cliente.
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Componentes que precisam de interatividade — eventos, estado,{" "}
        hooks — são marcados com{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          "use client"
        </code>{" "}
        no topo do arquivo. Eles se tornam{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          Client Components
        </strong>{" "}
        e rodam no navegador, mantendo o JavaScript do cliente no mínimo
        necessário.
      </p>
    </div>
  );
}
