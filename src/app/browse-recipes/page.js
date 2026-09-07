"use client";

import { useEffect, useState, useCallback } from "react";
import api from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";

const CATEGORY_OPTIONS = ["Breakfast", "Main Course", "Dessert", "Snacks", "Vegan", "Soup"];

export default function BrowseRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/recipes", {
        params: {
          page,
          limit: 9,
          search: search || undefined,
          categories: categories.length ? categories.join(",") : undefined,
        },
      });
      setRecipes(data.recipes);
      setTotalPages(data.pagination.totalPages);
    } catch {
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }, [page, search, categories]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const toggleCategory = (cat) => {
    setPage(1);
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="eyebrow">All recipes</p>
      <h1 className="mt-2 font-display text-3xl font-bold">Browse recipes</h1>
      <p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">
        Filter by category or search by name.
      </p>

      <div className="mt-8 flex flex-col gap-6 md:flex-row">
        <aside className="w-full shrink-0 md:w-56">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            placeholder="Search recipes"
            className="w-full rounded-full border border-ink/15 bg-transparent px-4 py-2 text-sm dark:border-ink-dark/20"
          />

          <div className="mt-6 space-y-2">
            <p className="text-sm font-medium">Category</p>
            {CATEGORY_OPTIONS.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm text-ink/75 dark:text-ink-dark/75">
                <input
                  type="checkbox"
                  checked={categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="accent-spice-500"
                />
                {cat}
              </label>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          {loading ? (
            <Loader label="Fetching recipes" />
          ) : recipes.length === 0 ? (
            <p className="py-16 text-center text-sm text-ink/60 dark:text-ink-dark/60">
              No recipes match those filters yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </div>
    </div>
  );
}