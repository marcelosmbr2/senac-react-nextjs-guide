import Link from "next/link";
import { GlobalCounterDisplay } from "./_components/global-counter-display";

const sections = [
  {
    title: "Fundamentos do React",
    items: [
      { label: "Componentes", href: "/react/components" },
      { label: "Props", href: "/react/components/props" },
      { label: "Children", href: "/react/components/children" },
    ],
  },
  {
    title: "Fundamentos do Next.js",
    items: [
      { label: "Roteamento", href: "/nextjs/routing" },
      { label: "Layouts", href: "/nextjs/layouts" },
      { label: "Server Components", href: "/nextjs/server-components" },
      { label: "Client Components", href: "/nextjs/client-components" },
      { label: "Server Actions", href: "/nextjs/server-actions" },
      { label: "Metadata", href: "/nextjs/metadata" },
    ],
  },
  {
    title: "Hooks",
    items: [
      { label: "useState", href: "/react/hooks/use-state" },
      { label: "useEffect", href: "/react/hooks/use-effect" },
      { label: "useRef", href: "/react/hooks/use-ref" }
    ],
  },
  {
    title: "Context",
    items: [
      { label: "Context API", href: "/react/context" },
    ],
  },
  {
    title: "Exemplos",
    items: [
      { label: "Formulário", href: "/react/examples/form" },
      { label: "Lista de tarefas", href: "/react/examples/todo-list" },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Aprendendo React & Next.js
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          Exemplos práticos para aprender os conceitos fundamentais.
        </p>
        <GlobalCounterDisplay />

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-800 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="text-zinc-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
