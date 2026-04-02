export default function Page() {
  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        Otimizações
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Next.js otimiza imagens e fontes automaticamente.
      </p>

      {/* IMAGE */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Image
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        Substitui o{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          {"<img>"}
        </code>{" "}
        nativo. Serve WebP, previne layout shift e aplica lazy loading
        automaticamente.
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-3">
        {`import Image from 'next/image'

// Local — width/height inferidos automaticamente
import foto from './foto.png'
<Image src={foto} alt="..." />

// Remota — width/height obrigatórios
<Image src="https://cdn.ex.com/foto.jpg" alt="..." width={800} height={600} />`}
      </pre>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-2">
        Imagens remotas precisam ser autorizadas no{" "}
        <code className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded text-sm font-mono">
          next.config.ts
        </code>
        :
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-8">
        {`images: {
  remotePatterns: [{ protocol: 'https', hostname: 'cdn.ex.com' }],
}`}
      </pre>

      {/* FONT */}
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        Font
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
        Faz self-hosting da fonte no build.
      </p>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre mb-3">
        {`// Google Font
import { Geist } from 'next/font/google'
const geist = Geist({ subsets: ['latin'] })

// Fonte local
import localFont from 'next/font/local'
const minha = localFont({ src: './minha.woff2' })`}
      </pre>
      <pre className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2.5 rounded-lg text-xs font-mono whitespace-pre">
        {`// app/layout.tsx — aplica para toda a aplicação
<html className={geist.className}>
  <body>{children}</body>
</html>`}
      </pre>
    </div>
  );
}
