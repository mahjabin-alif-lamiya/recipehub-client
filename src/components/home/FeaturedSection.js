"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import Loader from "@/components/Loader";

export default function FeaturedSection() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/recipes/featured")
      .then(({ data }) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && recipes.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="eyebrow">Hand-picked</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Featured recipes</h2>
          <p className="mt-1 text-sm text-ink/60 dark:text-ink-dark/60">
            Chosen by the RecipeHub team this week.
          </p>
        </div>
      </div>

      {loading ? (
        <Loader label="Fetching featured recipes" />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}