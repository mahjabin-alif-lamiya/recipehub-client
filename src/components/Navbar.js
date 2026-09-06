"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/browse-recipes", label: "Browse Recipes" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const dashboardHome = user?.role === "admin" ? "/admin" : "/dashboard";

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-paper/90 backdrop-blur dark:border-ink-dark/10 dark:bg-paper-dark/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-spice-500 text-white">
            <FaUtensils size={17} />
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-tight">
              Recipe<span className="text-spice-500">Hub</span>
            </span>
            <span className="block text-xs text-spice-500 dark:text-spice-100">
              Share what&apos;s cooking
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                pathname === link.href
                  ? "bg-spice-50 text-spice-600 dark:bg-spice-700/30 dark:text-spice-100"
                  : "text-ink/70 hover:text-ink dark:text-ink-dark/70 dark:hover:text-ink-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {user ? (
            <>
              <Link
                href={dashboardHome}
                className="flex items-center gap-2 text-[15px] font-medium text-ink/80 dark:text-ink-dark/80"
              >
                <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-spice-100 text-xs font-medium text-spice-700 dark:bg-spice-700/40 dark:text-spice-100">
                  {user.image ? (
                    <Image src={user.image} alt={user.name} width={32} height={32} className="h-full w-full object-cover" />
                  ) : (
                    user.name?.[0]?.toUpperCase()
                  )}
                </span>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-full border border-ink/15 px-4 py-2 text-[15px] font-medium hover:bg-ink/5 dark:border-ink-dark/20 dark:hover:bg-white/5"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[15px] font-medium text-ink/80 dark:text-ink-dark/80">
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-spice-500 px-5 py-2 text-[15px] font-medium text-white hover:bg-spice-600"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="space-y-3 border-t border-ink/8 px-5 py-4 md:hidden dark:border-ink-dark/10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block text-[15px] font-medium" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <ThemeToggle />
            {user ? (
              <>
                <Link href={dashboardHome} className="text-[15px] font-medium" onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-[15px] font-medium text-brick-500">
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-[15px] font-medium" onClick={() => setOpen(false)}>
                  Log in
                </Link>
                <Link href="/register" className="text-[15px] font-medium text-spice-500" onClick={() => setOpen(false)}>
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}