/*
O arquivo `layout.tsx` é o layout compartilhado entre páginas
Persiste entre navegações
*/

export default function AppRouterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
