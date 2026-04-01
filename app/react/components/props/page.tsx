import { Profile } from "./_components/profile";

// Guide: https://react.dev/learn/passing-props-to-a-component

export default function PropsPage() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Props
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Props permitem passar dados de um componente pai para um filho,
        tornando-os reutilizáveis e configuráveis.
      </p>
      <Profile id="1" name="John Doe" email="john.doe@example.com" />
    </div>
  );
}
