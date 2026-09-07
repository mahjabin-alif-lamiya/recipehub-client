"use client";

import { useEffect, useState } from "react";
import { FiBook, FiHeart, FiThumbsUp, FiAward } from "react-icons/fi";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";

export default function DashboardOverviewPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/users/stats").then(({ data }) => setStats(data));
  }, []);

  if (!stats) return <Loader label="Loading your dashboard" />;

  const cards = [
    { label: "Total Recipes", value: stats.totalRecipes, icon: FiBook },
    { label: "Total Favorites", value: stats.totalFavorites, icon: FiHeart },
    { label: "Likes Received", value: stats.totalLikesReceived, icon: FiThumbsUp },
  ];

  return (
    <div>
      <p className="eyebrow">Dashboard</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">
        Welcome back, {user?.name?.split(" ")[0]}
      </h1>

      {user?.isPremium && (
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-mustard-500 px-3 py-1 text-xs font-medium text-ink">
          <FiAward size={13} /> Premium member
        </span>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
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

      {!user?.isPremium && (
        <div className="mt-8 rounded-card border border-dashed border-mustard-500 p-5">
          <p className="text-sm">
            Free accounts can add up to 2 recipes. Go premium for unlimited recipes and a badge on your profile.
          </p>
        </div>
      )}
    </div>
  );
}