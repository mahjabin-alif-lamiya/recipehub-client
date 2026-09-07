"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "@/lib/api";
import RecipeForm from "@/components/RecipeForm";

export default function AddRecipePage() {
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      await api.post("/recipes", values);
      toast.success("Recipe added.");
      router.push("/dashboard/my-recipes");
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not add the recipe.");
    }
  };

  return (
    <div>
      <p className="eyebrow">New recipe</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Add a recipe</h1>
      <p className="mt-1 text-sm text-ink/60 dark:text-ink-dark/60">
        Free accounts can add up to 2 recipes. Go premium for unlimited.
      </p>
      <RecipeForm onSubmit={handleSubmit} submitLabel="Publish recipe" />
    </div>
  );
}