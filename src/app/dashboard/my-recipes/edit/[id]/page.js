"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "@/lib/api";
import RecipeForm from "@/components/RecipeForm";
import Loader from "@/components/Loader";

export default function EditRecipePage() {
  const { id } = useParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    api.get(`/recipes/${id}`).then(({ data }) => setRecipe(data.recipe));
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await api.put(`/recipes/${id}`, values);
      toast.success("Recipe updated.");
      router.push("/dashboard/my-recipes");
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not update the recipe.");
    }
  };

  if (!recipe) return <Loader label="Loading recipe" />;

  return (
    <div>
      <p className="eyebrow">Edit</p>
      <h1 className="mt-2 font-display text-2xl font-semibold">Edit recipe</h1>
      <RecipeForm initialValues={recipe} onSubmit={handleSubmit} submitLabel="Save changes" />
    </div>
  );
}