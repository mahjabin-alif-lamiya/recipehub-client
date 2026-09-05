export default function Loader({ label = "Loading" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24" role="status">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-herb-500 border-t-transparent" />
      <p className="text-sm text-ink/60 dark:text-ink-dark/60">{label}…</p>
    </div>
  );
}