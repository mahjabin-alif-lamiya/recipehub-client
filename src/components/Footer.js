import Link from "next/link";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 dark:border-ink-dark/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg">
            Recipe<span className="text-herb-500">Hub</span>
          </p>
          <p className="mt-3 max-w-[26ch] text-sm text-ink/60 dark:text-ink-dark/60">
            A shared kitchen notebook — cook something, write it down, pass it on.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/60 dark:text-ink-dark/60">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/browse-recipes">Browse Recipes</Link></li>
            <li><Link href="/register">Join RecipeHub</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">Follow along</p>
          <div className="mt-3 flex gap-3 text-ink/60 dark:text-ink-dark/60">
            <FiInstagram size={18} />
            <FiFacebook size={18} />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/60 dark:text-ink-dark/60">
            <li className="flex items-center gap-1.5"><FiMail size={14} /> hello@recipehub.app</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/8 px-5 py-4 text-center text-xs text-ink/50 dark:border-ink-dark/10 dark:text-ink-dark/50">
        © {new Date().getFullYear()} RecipeHub. All rights reserved.
      </div>
    </footer>
  );
}