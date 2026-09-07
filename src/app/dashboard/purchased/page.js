"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import Loader from "@/components/Loader";

export default function PurchasedRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/payments/my")
      .then(({ data }) => setRecipes(data.recipes))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader label="Loading purchases" />;

  return (
    <div>
      <p className="eyebrow">Unlocked</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Purchased Recipes</h1>

      {recipes.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60 dark:text-ink-dark/60">
          You haven&apos;t unlocked any paid recipes yet.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}