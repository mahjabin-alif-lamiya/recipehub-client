"use client";

import { useEffect, useState } from "react";
import { FiUsers, FiBook, FiAward, FiFlag } from "react-icons/fi";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function AdminOverviewPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats").then(({ data }) => setStats(data));
  }, []);

  if (!stats) return <Loader label="Loading admin dashboard" />;

  const cards = [
    { label: "Total Users", value: stats.totalUsers, icon: FiUsers },
    { label: "Total Recipes", value: stats.totalRecipes, icon: FiBook },
    { label: "Premium Members", value: stats.totalPremium, icon: FiAward },
    { label: "Pending Reports", value: stats.totalReports, icon: FiFlag },
  ];

  return (
    <div>
      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Overview</h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-card bg-surface p-5 ring-1 ring-ink/8 dark:bg-surface-dark dark:ring-ink-dark/10"
          >
            <Icon className="text-spice-500" size={20} />
            <p className="mt-3 font-display text-3xl font-semibold">{value}</p>
            <p className="text-sm text-ink/60 dark:text-ink-dark/60">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}