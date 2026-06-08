export function ComingSoonPill({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "on-dark" | "on-ember";
}) {
  const styles =
    tone === "on-dark"
      ? "bg-paper/15 text-sunrise ring-paper/25"
      : tone === "on-ember"
        ? "bg-ink/10 text-ink ring-ink/15"
        : "bg-ember/10 text-ember-deep ring-ember/25";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ring-1 ${styles} ${className}`}
    >
      Coming soon
    </span>
  );
}
