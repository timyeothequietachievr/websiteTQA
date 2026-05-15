export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-zinc-950">
      <main className="max-w-lg text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Coming soon
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          websiteTQA
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          This will become my main site. For now, it&apos;s a clean starting
          point—edit{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            src/app/page.tsx
          </code>{" "}
          and deploy when you&apos;re ready.
        </p>
      </main>
    </div>
  );
}
