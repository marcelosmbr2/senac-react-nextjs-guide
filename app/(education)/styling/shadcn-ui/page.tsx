import { Separator } from "@/components/ui/separator"

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-zinc-950 dark:bg-zinc-900 text-zinc-100 rounded-lg p-4 text-xs font-mono overflow-x-auto mb-4 border border-zinc-800">
      {children}
    </pre>
  )
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  )
}

export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Shadcn UI
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Uma coleção de componentes acessíveis e customizáveis que você{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          copia para o seu projeto
        </strong>{" "}
        — não é uma dependência npm convencional.
      </p>

      {/* O que é */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        O que é
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        A maioria das bibliotecas de componentes é instalada como pacote e você
        a consome de fora. O Shadcn UI funciona diferente: você roda um comando
        e o componente é{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          copiado para dentro do seu repositório
        </strong>
        , geralmente em{" "}
        <InlineCode>components/ui/</InlineCode>.
      </p>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Controle total:
          </strong>{" "}
          o código é seu — você edita, adapta ou descarta o que quiser.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Base UI / Radix UI:
          </strong>{" "}
          os primitivos sem estilo que garantem acessibilidade (ARIA, teclado,
          foco).
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Tailwind CSS:
          </strong>{" "}
          camada de estilo utilitária aplicada sobre os primitivos.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Sem lock-in:
          </strong>{" "}
          não há versão de componente para atualizar — o código já está local.
        </li>
      </ul>

      {/* Como funciona */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Como funciona
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        1. Inicialize o Shadcn UI no projeto (configura paths, CSS vars e{" "}
        <InlineCode>components.json</InlineCode>):
      </p>
      <CodeBlock>npx shadcn@latest init</CodeBlock>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        2. Adicione componentes individualmente conforme precisar:
      </p>
      <CodeBlock>{`npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input`}</CodeBlock>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Cada comando cria o arquivo em{" "}
        <InlineCode>components/ui/button.tsx</InlineCode> (ou o caminho
        configurado). Depois é só importar normalmente:
      </p>
      <CodeBlock>{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button variant="outline">Clique aqui</Button>
}`}</CodeBlock>

      <Separator className="my-8" />

      {/* Blocks */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Blocks
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Além de componentes individuais, o Shadcn UI oferece{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">blocks</strong>:
        seções de página inteiras pré-montadas — formulários de login, layouts
        de dashboard, tabelas de dados, sidebars etc.
      </p>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          · Disponíveis em{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            shadcn.com/blocks
          </strong>
        </li>
        <li>· Instalados via CLI, igual aos componentes:</li>
      </ul>
      <CodeBlock>{`npx shadcn@latest add login-01
npx shadcn@latest add sidebar-01`}</CodeBlock>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        O block é copiado com todos os sub-componentes necessários. É um ponto
        de partida — você customiza livremente depois.
      </p>

      {/* Temas */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Temas
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        O sistema de temas é baseado em{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">
          CSS custom properties
        </strong>{" "}
        definidas no <InlineCode>globals.css</InlineCode>. Cada token mapeia
        uma cor semântica:
      </p>
      <CodeBlock>{`/* globals.css */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  /* ... */
}`}</CodeBlock>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Dark mode:
          </strong>{" "}
          basta adicionar a classe <InlineCode>dark</InlineCode> no elemento{" "}
          <InlineCode>{"<html>"}</InlineCode> — os tokens mudam automaticamente.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            Paleta customizada:
          </strong>{" "}
          troque os valores dos tokens sem tocar nos componentes.
        </li>
        <li>
          ·{" "}
          <strong className="text-zinc-700 dark:text-zinc-300">
            shadcn.com/themes:
          </strong>{" "}
          editor visual de temas que gera o CSS pronto para copiar.
        </li>
      </ul>

      <Separator className="my-8" />

      <p className="text-xs text-zinc-400 dark:text-zinc-500">
        Documentação oficial:{" "}
        <strong className="text-zinc-500 dark:text-zinc-400">
          ui.shadcn.com
        </strong>
      </p>
    </div>
  )
}
