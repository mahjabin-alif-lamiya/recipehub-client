"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function MyRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = () => {
    api
      .get("/recipes/my")
      .then(({ data }) => setRecipes(data.recipes))
      .finally(() => setLoading(false));
  };

  useEffect(fetchRecipes, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this recipe? This can't be undone.")) return;
    try {
      await api.delete(`/recipes/${id}`);
      setRecipes((prev) => prev.filter((r) => r._id !== id));
      toast.success("Recipe deleted.");
    } catch {
      toast.error("Could not delete the recipe.");
    }
  };

  if (loading) return <Loader label="Loading your recipes" />;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="eyebrow">Your shelf</p>
          <h1 className="mt-2 font-display text-2xl font-semibold">My Recipes</h1>
        </div>
        <Link
          href="/dashboard/add-recipe"
          className="rounded-full bg-spice-500 px-4 py-2 text-sm font-medium text-white hover:bg-spice-600"
        >
          Add Recipe
        </Link>
      </div>

      {recipes.length === 0 ? (
        <p className="mt-10 text-sm text-ink/60 dark:text-ink-dark/60">
          You haven&apos;t added any recipes yet.
        </p>
      ) : (
        <div className="mt-6 divide-y divide-ink/8 dark:divide-ink-dark/10">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="flex items-center gap-4 py-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={recipe.recipeImage || "/placeholder-recipe.svg"}
                  alt={recipe.recipeName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium">{recipe.recipeName}</p>
                <p className="text-sm text-ink/55 dark:text-ink-dark/55">{recipe.category}</p>
              </div>
              <Link
                href={`/dashboard/my-recipes/edit/${recipe._id}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 dark:border-ink-dark/20"
                aria-label="Edit recipe"
              >
                <FiEdit2 size={15} />
              </Link>
              <button
                onClick={() => handleDelete(recipe._id)}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-brick-500 dark:border-ink-dark/20"
                aria-label="Delete recipe"
              >
                <FiTrash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}