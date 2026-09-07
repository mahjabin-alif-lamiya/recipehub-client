"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import Loader from "@/components/Loader";
import { FiX } from "react-icons/fi";

export default function FavoritesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = () => {
    api
      .get("/favorites/my")
      .then(({ data }) => setRecipes(data.recipes))
      .finally(() => setLoading(false));
  };

  useEffect(fetchFavorites, []);

  const handleRemove = async (recipeId) => {
    try {
      await api.delete(`/favorites/${recipeId}`);
      setRecipes((prev) => prev.filter((r) => r._id !== recipeId));
      toast.success("Removed from favorites.");
    } catch {
      toast.error("Could not remove favorite.");
    }
  };

  if (loading) return <Loader label="Loading favorites" />;

  return (
    <div>
      <p className="eyebrow">Saved</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">My Favorites</h1>

      {recipes.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60 dark:text-ink-dark/60">No favorites saved yet.</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="relative">
              <RecipeCard recipe={recipe} />
              <button
                onClick={() => handleRemove(recipe._id)}
                aria-label="Remove from favorites"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-paper/90 text-brick-500 dark:bg-paper-dark/90"
              >
                <FiX size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}