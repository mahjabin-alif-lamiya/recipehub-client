"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";

export default function PaymentSuccessPage() {
  const { refreshUser } = useAuth();

  useEffect(() => {
    const t = setTimeout(refreshUser, 1500);
    return () => clearTimeout(t);
  }, [refreshUser]);

  return (
    <div className="mx-auto max-w-md px-5 py-24 text-center">
      <FiCheckCircle className="mx-auto text-spice-500" size={48} />
      <h1 className="mt-4 font-display text-2xl font-semibold">Payment successful</h1>
      <p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">
        Your transaction has been recorded. It may take a moment to reflect
        in your dashboard.
      </p>
      <Link
        href="/dashboard"
        className="mt-6 inline-block rounded-full bg-spice-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-spice-600"
      >
        Go to dashboard
      </Link>
    </div>
  );
}