export function Card({ children }: { children: React.ReactNode } ) {
  return (
    <div className="border-2 border-indigo-500 rounded-lg p-4 mb-4">
      {children}
    </div>
  );
}
