export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        React
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        React é uma biblioteca JavaScript criada pelo Facebook para construir
        interfaces de usuário. A ideia central é simples: a tela é dividida em{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">componentes</strong>{" "}
        — pedaços independentes e reutilizáveis de UI — e o React cuida de
        atualizar a tela automaticamente sempre que os dados mudam.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Para que serve
      </h2>
      <ul className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <li>· Construir interfaces interativas sem manipular o DOM manualmente</li>
        <li>· Dividir a UI em componentes reutilizáveis e fáceis de manter</li>
        <li>· Sincronizar a tela com o estado da aplicação de forma previsível</li>
        <li>· Compartilhar lógica entre partes diferentes da aplicação com hooks</li>
      </ul>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Como funciona
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Você descreve como a tela deve parecer para cada estado da aplicação. O
        React compara o estado anterior com o novo e atualiza apenas o que
        mudou — sem recarregar a página toda.
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        Os componentes são escritos em{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">JSX</strong> — uma
        sintaxe que mistura JavaScript com HTML, tornando o código mais legível
        e próximo do que será exibido na tela.
      </p>

      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        React e SPAs
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        Por padrão, aplicações React são{" "}
        <strong className="text-zinc-700 dark:text-zinc-300">SPAs</strong>{" "}
        (Single Page Applications): o navegador carrega uma única página HTML e
        o React assume o controle, trocando o conteúdo da tela sem nunca
        recarregar o documento inteiro.
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Isso torna a navegação instantânea após o carregamento inicial, mas traz
        desafios como o tamanho do bundle JavaScript e a indexação por
        mecanismos de busca. Frameworks como o Next.js foram criados justamente
        para resolver esses problemas.
      </p>
    </div>
  );
}
