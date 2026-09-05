"use client";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 pt-10" aria-label="Pagination">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="rounded-full border border-ink/15 px-3 py-1.5 text-sm disabled:opacity-30 dark:border-ink-dark/20"
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={p === page ? "page" : undefined}
          className={`h-8 w-8 rounded-full text-sm ${
            p === page
              ? "bg-herb-500 text-white"
              : "border border-ink/15 hover:bg-herb-50 dark:border-ink-dark/20 dark:hover:bg-herb-700/30"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="rounded-full border border-ink/15 px-3 py-1.5 text-sm disabled:opacity-30 dark:border-ink-dark/20"
      >
        Next
      </button>
    </nav>
  );
}