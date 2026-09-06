"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import Loader from "@/components/Loader";

export default function PopularSection() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/recipes/popular")
      .then(({ data }) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-spice-50/60 py-14 dark:bg-spice-700/10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Community favorites</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Popular right now</h2>
            <p className="mt-1 text-sm text-ink/60 dark:text-ink-dark/60">
              Most liked recipes across the community.
            </p>
          </div>
          <Link href="/browse-recipes" className="text-sm font-medium text-spice-600 dark:text-spice-100">
            See all
          </Link>
        </div>

        {loading ? (
          <Loader label="Fetching popular recipes" />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}