import Link from "next/link";
import { FiFrown } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-5 py-24 text-center">
      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-spice-50 dark:bg-spice-600/20">
        <FiFrown className="text-spice-500" size={36} />
      </span>
      <h1 className="mt-6 font-display text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">
        This recipe seems to have gone missing from the shelf.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-spice-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-spice-600"
      >
        Back to home
      </Link>
    </div>
  );
}