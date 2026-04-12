export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        JSX
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        JSX é uma extensão de sintaxe do JavaScript que permite escrever algo
        parecido com HTML dentro do código. O React usa JSX para descrever como
        a interface deve ser exibida. O navegador não entende JSX diretamente,
        ele é compilado para JavaScript antes de chegar ao browser.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        JSX vs HTML
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        A aparência é similar, mas existem diferenças importantes:
      </p>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <li>
          ·{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            class
          </code>{" "}
          vira{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            className
          </code>{" "}
          — pois{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            class
          </code>{" "}
          é palavra reservada do JavaScript
        </li>
        <li>
          · Tags precisam ser sempre fechadas —{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            {"<img />"}
          </code>{" "}
          em vez de{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            {"<img>"}
          </code>
        </li>
        <li>· Um componente só pode retornar um único elemento raiz</li>
        <li>
          · Expressões JavaScript ficam dentro de{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
            {"{chaves}"}
          </code>
        </li>
      </ul>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Expressões dentro do JSX
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Qualquer expressão JavaScript válida pode ser usada dentro de{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          {"{ }"}
        </code>
        : variáveis, operações, chamadas de função e até outros componentes.
      </p>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300 mb-8 whitespace-pre">
{`const nome = "Maria";

function Saudacao() {
  return <p>Olá, {nome}!</p>;
}`}
      </div>
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3 mt-8">
        Listas com map
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Para renderizar uma lista de itens, use{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          .map()
        </code>{" "}
        para transformar cada elemento do array em JSX. Cada item precisa de uma{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded font-mono">
          key
        </code>{" "}
        única para o React identificar o que mudou.
      </p>
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300 mb-8 whitespace-pre">
{`const frutas = ["Maçã", "Banana", "Laranja"];

function Lista() {
  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta}>{fruta}</li>
      ))}
    </ul>
  );
}`}
      </div>

      <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre">
{`function Cabecalho() {
  return (
    <>
      <h1>Título</h1>
      <p>Subtítulo</p>
    </>
  );
}`}
      </div>
    </div>
  );
}
