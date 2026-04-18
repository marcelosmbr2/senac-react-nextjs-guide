import Link from "next/link";
import { GlobalCounterDisplay } from "./_components/global-counter-display";
import { ExpandableNavItem } from "./_components/expandable-nav-item";

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: "Fundamentos do React",
    items: [
      { label: "O que é React?", href: "/react" },
      { label: "JSX", href: "/react/jsx" },
      { label: "Componentes", href: "/react/components" },
      { label: "Props", href: "/react/components/props" },
      { label: "Children", href: "/react/components/children" },
      {
        label: "Hooks",
        children: [
          { label: "useState", href: "/react/hooks/use-state" },
          { label: "useEffect", href: "/react/hooks/use-effect" },
          { label: "useRef", href: "/react/hooks/use-ref" },
        ],
      },
      { label: "Context API", href: "/react/context" },
    ],
  },
  {
    title: "Fundamentos do Next.js",
    items: [
      { label: "O que é Next.js?", href: "/nextjs" },
      { label: "App Router", href: "/nextjs/app-router" },
      { label: "Server Components", href: "/nextjs/server-side" },
      { label: "Client Components", href: "/nextjs/client-side" },
      { label: "Fetch & Cache", href: "/nextjs/fetch-cache" },
      { label: "Otimizações", href: "/nextjs/optimizations" },
    ],
  },
  {
    title: "Exemplos",
    items: [
      { label: "Formulário", href: "/react/examples/form" },
      { label: "Lista de tarefas", href: "/react/examples/todo-list" },
    ],
  },
  {
    title: "Estilização",
    items: [{ label: "Tailwind CSS", href: "/tailwind-css" }],
  },
  {
    title: "Fetch Api",
    items: [
      {
        label: "Fetch Api",
        children: [
          { label: "Server Component", href: "/fetch-api/server-component" },
          { label: "Client Component", href: "/fetch-api/client-component" },
        ],
      },
    ],
  },
];

export default function Home() {

  console.log(process.env.API_URL)
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
                  <li key={item.children ? item.label : item.href}>
                    {item.children ? (
                      <ExpandableNavItem label={item.label} children={item.children} />
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-800 dark:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <span className="text-zinc-400">→</span>
                      </Link>
                    )}
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
