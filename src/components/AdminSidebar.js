"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiUsers, FiBook, FiFlag } from "react-icons/fi";

const links = [
  { href: "/admin", label: "Overview", icon: FiGrid },
  { href: "/admin/users", label: "Manage Users", icon: FiUsers },
  { href: "/admin/recipes", label: "Manage Recipes", icon: FiBook },
  { href: "/admin/reports", label: "Reports", icon: FiFlag },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-b border-ink/8 pb-4 md:w-56 md:border-b-0 md:border-r md:pb-0 md:pr-4 dark:border-ink-dark/10">
      <nav className="flex gap-1 overflow-x-auto md:flex-col md:overflow-visible">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm ${
                active
                  ? "bg-spice-500 text-white"
                  : "text-ink/70 hover:bg-ink/5 dark:text-ink-dark/70 dark:hover:bg-white/5"
              }`}
            >
              <Icon size={16} /> {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}