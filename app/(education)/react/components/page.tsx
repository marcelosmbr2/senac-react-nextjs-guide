import { ComponentA } from "./_components/component-a";
import { ComponentB } from "./_components/component-b";
import { ComponentC } from "./_components/component-c";

// Guide: https://pt-br.react.dev/learn/your-first-component

export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Componentes
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Componentes são blocos reutilizáveis de UI. Cada um encapsula sua
        própria estrutura, estilo e comportamento.
      </p>
      <div className="flex flex-col gap-4">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </div>
  );
}
