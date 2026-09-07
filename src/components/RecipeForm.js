"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CATEGORIES = ["Breakfast", "Main Course", "Dessert", "Snacks", "Vegan", "Soup"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

export default function RecipeForm({ initialValues, onSubmit, submitLabel }) {
  const [form, setForm] = useState(
    initialValues || {
      recipeName: "",
      recipeImage: "",
      category: CATEGORIES[0],
      cuisineType: "",
      difficultyLevel: "Easy",
      preparationTime: "",
      ingredients: "",
      instructions: "",
    }
  );
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const body = new FormData();
      body.append("image", file);
      const { data } = await axios.post(
        `${IMGBB_UPLOAD_URL}?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        body
      );
      setForm((prev) => ({ ...prev, recipeImage: data.data.url }));
      toast.success("Image uploaded.");
    } catch {
      toast.error("Image upload failed. Check your imgbb API key.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(form);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-5">
      <div>
        <label className="text-sm">Recipe name</label>
        <input
          required
          value={form.recipeName}
          onChange={(e) => setForm({ ...form, recipeName: e.target.value })}
          className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
        />
      </div>

      <div>
        <label className="text-sm">Recipe image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-1 text-sm" />
        {uploading && <p className="mt-1 text-xs text-ink/50">Uploading…</p>}
        {form.recipeImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={form.recipeImage} alt="Preview" className="mt-2 h-24 w-24 rounded-lg object-cover" />
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm">Difficulty</label>
          <select
            value={form.difficultyLevel}
            onChange={(e) => setForm({ ...form, difficultyLevel: e.target.value })}
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Cuisine type</label>
          <input
            required
            value={form.cuisineType}
            onChange={(e) => setForm({ ...form, cuisineType: e.target.value })}
            placeholder="e.g. Bengali, Italian"
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
        <div>
          <label className="text-sm">Preparation time</label>
          <input
            value={form.preparationTime}
            onChange={(e) => setForm({ ...form, preparationTime: e.target.value })}
            placeholder="e.g. 30 mins"
            className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
          />
        </div>
      </div>

      <div>
        <label className="text-sm">Ingredients</label>
        <textarea
          required
          rows={4}
          value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          placeholder="One ingredient per line"
          className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
        />
      </div>

      <div>
        <label className="text-sm">Instructions</label>
        <textarea
          required
          rows={6}
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          placeholder="Step by step"
          className="mt-1 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-ink-dark/20"
        />
      </div>

      <button
        type="submit"
        disabled={submitting || uploading}
        className="rounded-full bg-spice-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-spice-600 disabled:opacity-60"
      >
        {submitting ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}