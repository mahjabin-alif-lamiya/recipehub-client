"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FiHeart, FiFlag, FiBookmark, FiClock, FiBarChart2 } from "react-icons/fi";
import toast from "react-hot-toast";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";
import ReportModal from "@/components/ReportModal";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useAuth();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReport, setShowReport] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api
      .get(`/recipes/${id}`)
      .then(({ data }) => setRecipe(data.recipe))
      .catch(() => setRecipe(null))
      .finally(() => setLoading(false));
  }, [id]);

  const requireLogin = () => {
    if (!user) {
      toast("Log in first.");
      router.push("/login");
      return true;
    }
    return false;
  };

  const handleLike = async () => {
    if (requireLogin()) return;
    try {
      const { data } = await api.patch(`/recipes/${id}/like`);
      setRecipe((prev) => ({ ...prev, likesCount: data.likesCount }));
    } catch {
      toast.error("Could not like this recipe.");
    }
  };

  const handleFavorite = async () => {
    if (requireLogin()) return;
    try {
      await api.post("/favorites", { recipeId: id });
      toast.success("Added to favorites.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not add to favorites.");
    }
  };

  const handlePurchase = async () => {
    if (requireLogin()) return;
    setBusy(true);
    try {
      const { data } = await api.post("/payments/create-checkout-session", {
        type: "recipe",
        recipeId: id,
      });
      window.location.href = data.url;
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not start checkout.");
      setBusy(false);
    }
  };

  if (loading) return <Loader label="Fetching recipe" />;
  if (!recipe) return <p className="py-24 text-center">Recipe not found.</p>;

  const isOwner = user && recipe.authorId === user.id;
  const price = typeof recipe.price === "number" ? recipe.price : 1.99;

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <div className="relative aspect-[16/9] overflow-hidden rounded-card">
        <Image
          src={recipe.recipeImage || "/placeholder-recipe.svg"}
          alt={recipe.recipeName}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">{recipe.recipeName}</h1>
          <p className="mt-1 text-sm text-ink/60 dark:text-ink-dark/60">
            By {recipe.authorName} · {recipe.cuisineType} · {recipe.category}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm dark:border-ink-dark/20"
          >
            <FiHeart /> {recipe.likesCount || 0}
          </button>
          {!isOwner && (
            <button
              onClick={handleFavorite}
              className="flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm dark:border-ink-dark/20"
            >
              <FiBookmark /> Save
            </button>
          )}
          {!isOwner && (
            <button
              onClick={() => (requireLogin() ? null : setShowReport(true))}
              className="flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm text-brick-500 dark:border-ink-dark/20"
            >
              <FiFlag /> Report
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-ink/70 dark:text-ink-dark/70">
        <span className="flex items-center gap-1.5"><FiClock /> {recipe.preparationTime || "—"}</span>
        <span className="flex items-center gap-1.5"><FiBarChart2 /> {recipe.difficultyLevel}</span>
      </div>

      {!isOwner && (
        <button
          onClick={handlePurchase}
          disabled={busy}
          className="mt-6 rounded-full bg-mustard-500 px-6 py-2.5 text-sm font-medium text-ink hover:bg-mustard-600 disabled:opacity-60"
        >
          {busy ? "Redirecting…" : `Unlock full recipe — $${price.toFixed(2)}`}
        </button>
      )}

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="font-display text-xl font-semibold">Ingredients</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/80 dark:text-ink-dark/80">
            {recipe.ingredients}
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold">Instructions</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink/80 dark:text-ink-dark/80">
            {recipe.instructions}
          </p>
        </section>
      </div>

      {showReport && <ReportModal recipeId={id} onClose={() => setShowReport(false)} />}
    </div>
  );
}