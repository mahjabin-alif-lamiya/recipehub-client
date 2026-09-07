"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "@/lib/api";
import Loader from "@/components/Loader";

export default function ManageRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = () => {
    api.get("/admin/recipes").then(({ data }) => setRecipes(data.recipes)).finally(() => setLoading(false));
  };

  useEffect(fetchRecipes, []);

  const toggleFeature = async (recipe) => {
    try {
      await api.patch(`/admin/recipes/${recipe._id}/feature`, { isFeatured: !recipe.isFeatured });
      setRecipes((prev) =>
        prev.map((r) => (r._id === recipe._id ? { ...r, isFeatured: !r.isFeatured } : r))
      );
      toast.success(recipe.isFeatured ? "Recipe unfeatured." : "Recipe featured.");
    } catch {
      toast.error("Could not update recipe.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this recipe permanently?")) return;
    try {
      await api.delete(`/admin/recipes/${id}`);
      setRecipes((prev) => prev.filter((r) => r._id !== id));
      toast.success("Recipe deleted.");
    } catch {
      toast.error("Could not delete recipe.");
    }
  };

  if (loading) return <Loader label="Loading recipes" />;

  return (
    <div>
      <p className="eyebrow">Admin</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Manage Recipes</h1>

      <div className="mt-6 overflow-x-auto rounded-card ring-1 ring-ink/8 dark:ring-ink-dark/10">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="bg-ink/5 dark:bg-white/5">
            <tr>
              <th className="px-4 py-3 font-medium">Recipe</th>
              <th className="px-4 py-3 font-medium">Author</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/8 dark:divide-ink-dark/10">
            {recipes.map((recipe) => (
              <tr key={recipe._id}>
                <td className="px-4 py-3">{recipe.recipeName}</td>
                <td className="px-4 py-3 text-ink/60 dark:text-ink-dark/60">{recipe.authorName}</td>
                <td className="px-4 py-3">{recipe.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs ${
                      recipe.status === "removed"
                        ? "bg-brick-400/10 text-brick-500"
                        : "bg-herb-50 text-herb-600 dark:bg-herb-600/20 dark:text-herb-400"
                    }`}
                  >
                    {recipe.status === "removed" ? "Removed" : "Active"}
                  </span>
                </td>
                <td className="flex flex-wrap gap-2 px-4 py-3">
                  <button
                    onClick={() => toggleFeature(recipe)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      recipe.isFeatured
                        ? "bg-mustard-500 text-ink"
                        : "border border-ink/15 dark:border-ink-dark/20"
                    }`}
                  >
                    {recipe.isFeatured ? "Featured" : "Feature"}
                  </button>
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="rounded-full bg-brick-500 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}